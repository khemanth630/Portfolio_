
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experienceData = [
  {
    position: "Web Development Intern",
    company: "Eduskills (AICTE Certified)",
    location: "Virtual",
    period: "2024",
    description: "Completed a web development internship focused on educational technology, project-based learning, and e-learning solutions.",
    achievements: [
      "Applied HTML, CSS, JavaScript, and problem-solving techniques to real-world projects"
    ]
  },
  {
    position: "Technova & Web Development Lead",
    company: "CETA Association, MBU",
    location: "India",
    period: "2024 - Present",
    description: "Led the Web Development and Technova Club under CETA, organizing technical events and workshops.",
    achievements: [
      "Designed and developed the official club website",
      "Fostered a collaborative tech learning environment"
    ]
  },
  {
    position: "Web Development Intern",
    company: "Bharath Intern",
    location: "Remote",
    period: "2023",
    description: "Built an online portfolio and recreated the Netflix homepage to highlight UI/UX design skills.",
    achievements: [
      "Demonstrated responsive design and front-end development using HTML, CSS, and JavaScript"
    ]
  },
  {
    position: "CETA Coordinator",
    company: "MBU",
    location: "Tirupati",
    period: "2023 - Present",
    description: "Organized and led weekly technical and non-technical activities promoting continuous learning and innovation.",
    achievements: [
      "Encouraged student participation and teamwork"
    ]
  },
  {
    position: "Class Representative",
    company: "MBU",
    location: "Tirupati",
    period: "2022 - Present",
    description: "Served as Class Representative since 1st semester, facilitating communication between faculty and students.",
    achievements: [
      "Acted as liaison to address academic and administrative issues"
    ]
  },
];


const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Experience</h2>
      
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="mt-8 relative"
      >
        {/* Timeline line */}
        <div className="absolute left-3 top-5 bottom-5 w-0.5 bg-sidebar-primary/20 z-0"></div>
        
        {experienceData.map((experience, index) => (
          <motion.div 
            key={index}
            variants={item}
            className="relative pl-12 pb-12 last:pb-0"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-sidebar bg-sidebar-primary/10 border-2 border-sidebar-primary flex items-center justify-center z-10">
              <div className="w-2 h-2 rounded-full bg-sidebar-primary"></div>
            </div>
            
            <div className="glass rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                <h3 className="font-semibold text-lg">{experience.position}</h3>
                <span className="text-sm px-3 py-1 rounded-full bg-sidebar-primary/10 text-sidebar-primary">
                  {experience.period}
                </span>
              </div>
              
              <div className="text-muted-foreground mb-3">
                <p>{experience.company}, {experience.location}</p>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                {experience.description}
              </p>
              
              <h4 className="text-sm font-medium mb-2">Key Achievements:</h4>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                {experience.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
