
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { User, Coffee, Camera, MapPin } from "lucide-react";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.3
      } 
    },
  };

  return (
    <section id="about" className="section-container w-full">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <div className="flex items-center gap-3">
          <motion.div
            variants={iconVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-primary/10 p-3 rounded-full"
          >
            <User className="h-6 w-6 text-primary" />
          </motion.div>
          <span className="text-sm uppercase tracking-wider text-primary">Hello, I'm</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-2 mb-6">
          K Hemanth
        </h2>
        
        <div className="space-y-4 text-muted-foreground">
  <p className="lead text-lg">
    I’m an AI Developer and AI Engineer passionate about building intelligent systems using machine learning, deep learning, and generative models.
  </p>

  <p>
    With a strong foundation in computer science, I specialize in developing scalable and efficient AI solutions. I also work with full-stack technologies when needed to integrate and deploy intelligent applications seamlessly.
  </p>

  <p>
    Currently, my focus is on advancing skills in generative AI, computer vision, and natural language processing to create impactful, real-world solutions.
  </p>
</div>

        
        <div className="mt-8 flex flex-wrap gap-4 w-full">
          <motion.div 
            className="glass p-4 rounded-lg flex-1 min-w-[140px] relative overflow-hidden group"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="absolute -right-3 -top-3 opacity-20 group-hover:opacity-60 transition-opacity"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Coffee className="h-12 w-12 text-primary" />
            </motion.div>
            <p className="text-2xl font-semibold text-primary">8.39</p>
            <p className="text-sm text-muted-foreground">GPA</p>
          </motion.div>
          
  
          
          {/* <motion.div 
            className="glass p-4 rounded-lg flex-1 min-w-[140px] relative overflow-hidden group"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
          >
            <motion.div 
              className="absolute -right-3 -top-3 opacity-20 group-hover:opacity-60 transition-opacity"
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            >
              <MapPin className="h-12 w-12 text-primary" />
            </motion.div>
            <p className="text-2xl font-semibold text-primary">5+</p>
            <p className="text-sm text-muted-foreground">Satisfied Clients</p>
          </motion.div> */}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
