
import { useEffect, useRef } from "react";

const BackgroundEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas to full window size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Particle settings
    const particlesArray: Particle[] = [];
    const numberOfParticles = 100;
    const isDarkMode = document.documentElement.classList.contains("dark");
    
    // Colors for particles and connections - updated to new theme colors
    const colors = isDarkMode 
      ? [
          { r: 223, g: 177, b: 99, a: 0.8 },    // #DFB163 (Primary Gold)
          { r: 180, g: 150, b: 80, a: 0.7 },    // Darker Gold
          { r: 37, g: 37, b: 49, a: 0.6 }       // #252531 (Dark Background)
        ]
      : [
          { r: 0, g: 171, b: 228, a: 0.7 },     // Bright blue #00ABE4
          { r: 233, g: 241, b: 250, a: 0.5 },   // Light blue #E9F1FA
          { r: 255, g: 255, b: 255, a: 0.6 }    // White #FFFFFF
        ];

    // Create particles
    for (let i = 0; i < numberOfParticles; i++) {
      const colorIndex = Math.floor(Math.random() * colors.length);
      particlesArray.push(
        new Particle(
          canvas.width, 
          canvas.height, 
          ctx, 
          colors[colorIndex]
        )
      );
    }

    // Mouse interaction
    let mouse = {
      x: 0,
      y: 0,
      radius: 150,
    };

    window.addEventListener("mousemove", (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    // Animation
    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(mouse);
        particlesArray[i].draw();
      }
      
      // Connect particles
      connectParticles();
      
      animationFrameId = requestAnimationFrame(animate);
    };

    // Connect particles with lines if they're close enough
    const connectParticles = () => {
      for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const opacity = 1 - (distance / 150);
            // Blend the colors of the two particles for the connection
            const color1 = particlesArray[i].color;
            const color2 = particlesArray[j].color;
            
            const r = Math.floor((color1.r + color2.r) / 2);
            const g = Math.floor((color1.g + color2.g) / 2);
            const b = Math.floor((color1.b + color2.b) / 2);
            const a = Math.min(color1.a, color2.a) * opacity * 0.5;
            
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
            ctx.lineWidth = 0.5;
            
            // Add glow effect in dark mode with new gold color
            if (isDarkMode) {
              ctx.shadowColor = `rgba(223, 177, 99, 0.7)`; // Gold glow
              ctx.shadowBlur = 5;
            }
            
            ctx.beginPath();
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
            
            // Reset shadow to prevent performance issues
            if (isDarkMode) {
              ctx.shadowBlur = 0;
            }
          }
        }
      }
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
      });
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-60 dark:opacity-80"
    />
  );
};

// Particle class
class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  color: { r: number; g: number; b: number; a: number };
  baseSize: number;
  angle: number;
  angleSpeed: number;

  constructor(
    width: number, 
    height: number, 
    ctx: CanvasRenderingContext2D,
    color: { r: number; g: number; b: number; a: number }
  ) {
    this.width = width;
    this.height = height;
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.baseSize = Math.random() * 2 + 0.8;
    this.size = this.baseSize;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.ctx = ctx;
    this.color = color;
    this.angle = Math.random() * 360;
    this.angleSpeed = Math.random() * 0.5 + 0.1;
  }

  update(mouse: { x: number; y: number; radius: number }) {
    // Boundary check and position update
    if (this.x > this.width || this.x < 0) {
      this.speedX = -this.speedX;
    }
    if (this.y > this.height || this.y < 0) {
      this.speedY = -this.speedY;
    }

    this.x += this.speedX;
    this.y += this.speedY;
    
    // Subtle size oscillation for more dynamic effect
    this.angle += this.angleSpeed;
    this.size = this.baseSize + Math.sin(this.angle * (Math.PI/180)) * 0.5;

    // Mouse repulsion
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < mouse.radius) {
      const forceDirectionX = dx / distance;
      const forceDirectionY = dy / distance;
      const force = (mouse.radius - distance) / mouse.radius;
      
      const directionX = forceDirectionX * force * 2;
      const directionY = forceDirectionY * force * 2;
      
      this.x += directionX;
      this.y += directionY;
    }
  }

  draw() {
    const isDarkMode = document.documentElement.classList.contains("dark");
    
    // Add glow effect in dark mode with new gold color
    if (isDarkMode) {
      this.ctx.shadowColor = `rgba(223, 177, 99, 0.8)`; // Gold glow
      this.ctx.shadowBlur = 10;
    }
    
    this.ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.color.a})`;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();
    
    // Reset shadow to prevent performance issues
    if (isDarkMode) {
      this.ctx.shadowBlur = 0;
    }
  }
}

export default BackgroundEffect;
