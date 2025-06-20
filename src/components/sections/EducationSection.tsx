
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "PES University",
    year: "2022 - 2026",
    description: "Graduated with honors, specialized in Full Stack Web development and data structures. Participated in several research projects and coding competitions.",
    percentage: 84
  },
  {
    degree: "Higher Secondary Education",
    institution: "Narayana Junior College",
    year: "2020 - 2022",
    description: "Science stream with Maths , Physics , Chemistry as a primary subjects. Prepared for IIT with dedication and Intrest.",
    percentage: 93
  },
  {
    degree: "Secondary Education",
    institution: "Montessori High School",
    year: "2019 - 2020",
    description: "Consistently ranked among the top 5 students in class. Active member of the School Cultural Activities.",
    percentage: 99
  }
];

const EducationSection = () => {
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
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="education" className="section-container">
      <h2 className="section-title">Education</h2>
      
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="mt-8 space-y-8"
      >
        {educationData.map((education, index) => (
          <motion.div 
            key={index}
            variants={item}
            className="glass p-6 rounded-lg relative overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row items-start justify-between gap-4">
              <div className="flex-grow">
                <div className="flex items-center space-x-3">
                  <h3 className="text-xl font-bold">{education.degree}</h3>
                  <div className="bg-primary/20 text-primary rounded-full px-3 py-1 text-sm font-medium">
                    {education.percentage}%
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground mt-2">
                  <span>{education.institution}</span>
                  <span className="hidden sm:block">•</span>
                  <span>{education.year}</span>
                </div>
                
                <p className="mt-3 text-muted-foreground">
                  {education.description}
                </p>
              </div>
              
              <div className="flex-shrink-0 w-full md:w-24 h-24 flex items-center justify-center">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 rounded-full border-4 border-muted/30"></div>
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray={`${education.percentage}, 100`}
                      className="text-primary"
                      transform="rotate(-90, 18, 18)"
                    />
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="text-lg font-semibold fill-current">
                      {education.percentage}%
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default EducationSection;
