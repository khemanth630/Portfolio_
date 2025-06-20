import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Define skills by category
const skillsData = {
  programming: ["Java", "DSA", "Python", "JavaScript","C","C++"],
  technologies: ["HTML", "CSS","React.js"  ,"MongoDB", "Node.js" , "Express.js"],
  tools: ["VS Code", "Canva", "Git & GitHub", "Prompt Engineering"]
};

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Skills</h2>
      
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
      >
        {/* Programming Skills Cards */}
        <motion.div 
          variants={item}
          className="glass rounded-lg p-6 transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg border border-primary/20 hover:border-primary/40"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="font-bold text-lg mb-4 text-sidebar-primary">Programming</h3>
          <div className="grid grid-cols-2 gap-3">
            {skillsData.programming.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary/10 rounded-lg p-3 text-center hover:bg-primary/20 transition-colors duration-300"
              >
                <span className="font-medium break-words hyphens-auto text-sm md:text-base">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies Skills Cards */}
        <motion.div 
          variants={item}
          className="glass rounded-lg p-6 transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg border border-primary/20 hover:border-primary/40"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="font-bold text-lg mb-4 text-sidebar-primary">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {skillsData.technologies.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary/10 rounded-full px-3 py-1 text-center hover:bg-primary/20 transition-colors duration-300"
              >
                <span className="font-medium text-sm break-words hyphens-auto">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Others Skills Cards */}
        <motion.div 
          variants={item}
          className="glass rounded-lg p-6 transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg border border-primary/20 hover:border-primary/40"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="font-bold text-lg mb-4 text-sidebar-primary">Tools & Others</h3>
          <div className="space-y-2">
            {skillsData.tools.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring", 
                  stiffness: 100 
                }}
                className="flex items-center justify-between bg-primary/5 rounded-lg p-3 hover:bg-primary/15 transition-colors duration-300"
              >
                <span className="font-medium break-words hyphens-auto pr-2">{skill}</span>
                <div className="h-2 w-16 bg-primary/20 rounded-full flex-shrink-0">
                  <div 
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${85 + index * 5}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
