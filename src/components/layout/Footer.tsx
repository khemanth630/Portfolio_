import { motion } from "framer-motion";
import { Heart, Code, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-foreground">K Hemanth</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              A passionate Software Development engineer and Computer Science enthusiast with skills in  development 
              and creating intuitive digital experiences.
            </p>
          <div className="flex space-x-4">
  <a href="https://github.com/khemanth630" target="_blank" rel="noopener noreferrer">
    <Button variant="outline" size="icon" className="rounded-full">
      <Github size={18} />
    </Button>
  </a>
  <a href="linkedin.com/in/hemanth-kankanaboina-4b8128303/" target="_blank" rel="noopener noreferrer">
    <Button variant="outline" size="icon" className="rounded-full">
      <Linkedin size={18} />
    </Button>
  </a>
  <a href="mailto:hemanth630209@gmail.com" target="_blank" rel="noopener noreferrer">
    <Button variant="outline" size="icon" className="rounded-full">
      <Mail size={18} />
    </Button>
  </a>
  <a href="https://leetcode.com/u/Hemanth0620/" target="_blank" rel="noopener noreferrer">
    <Button variant="outline" size="icon" className="rounded-full">
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/leetcode-3521542-2944960.png"
        alt="LeetCode"
        className="w-[18px] h-[18px]"
      />
    </Button>
  </a>
</div>

          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                <span className="block">Bengaluru,Karnataka</span>
                <span className="block">India</span>
              </li>
              <li className="text-muted-foreground">+91 9490509324</li>
              <li className="text-muted-foreground">hemanth630209@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} K Hemanth. All rights reserved.
          </p>
          {/* <motion.div 
            className="flex items-center text-sm text-muted-foreground"
            whileHover={{ scale: 1.05 }}
          >
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>and</span>
            <Code className="h-4 w-4 mx-1 text-primary" />
          </motion.div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
