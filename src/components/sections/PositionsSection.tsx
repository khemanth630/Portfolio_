
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const positions = [
  {
    title: "Board Member",
    organization: "Interaction Design Association",
    period: "2021 - Present",
    description: "Serve on the board of directors for a professional design organization with over 5,000 members. Help shape strategic direction, organize events, and foster community engagement."
  },
  {
    title: "Design Mentor",
    organization: "Design Lab",
    period: "2019 - Present",
    description: "Mentor emerging designers through structured programs. Provide feedback on portfolios, career guidance, and project critiques to help new designers advance in their careers."
  },
  {
    title: "Conference Speaker",
    organization: "Various UX Conferences",
    period: "2018 - Present",
    description: "Regular speaker at industry conferences including UXPA, Interaction, and local design meetups. Present on topics including inclusive design, design systems, and research methodologies."
  },
  {
    title: "Volunteer UX Designer",
    organization: "Tech For Good",
    period: "2017 - 2020",
    description: "Provided pro bono UX design services to non-profit organizations. Helped improve digital experiences for social impact organizations with limited resources."
  }
];

const PositionsSection = () => {
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
    <section id="positions" className="section-container">
      <h2 className="section-title">Positions</h2>
      
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
      >
        {positions.map((position, index) => (
          <motion.div 
            key={index} 
            variants={item}
            className="glass rounded-lg p-6"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium">{position.title}</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-sidebar-primary/10 text-sidebar-primary whitespace-nowrap ml-2">
                {position.period}
              </span>
            </div>
            <p className="text-sm font-medium text-muted-foreground mb-2">{position.organization}</p>
            <p className="text-sm text-muted-foreground">{position.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PositionsSection;
