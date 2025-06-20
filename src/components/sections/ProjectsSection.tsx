import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

const projects = [
  {
    title: "1-day stock prediction",
    description: "Built a transformer-based stock prediction model with trend classification, confidence-scored recommendations (Buy/Sell/Hold), and volatility tracking. Developed a complete ML pipeline with REST API and Python UI integration.",
    image: "stock.jpeg",
    tags: ["python","alpaca","expressjs"],
    githubUrl: "https://github.com/khemanth630/1-day_stock_prediction.git",
  },
  {
    title: " Emo streams",
    description: "Developed a high-performance emoji streaming platform using Apache Spark and Kafka, achieving 95% accuracy and supporting 85% of connected devices for seamless multi-device interaction",
    image: "image.jpeg",
    tags: ["spark", "Python", "Kafka"],
    githubUrl: "https://github.com/Cloud-Computing-Big-Data/EC-Team-25-emostream-concurrent-emoji-broadcast-over-event-driven-architecture.git",
  },
  {
    title: "Sleep apnea detection(working)",
    description: "Built a neural network-based system for real-time sleep apnea detection using ECG and snoring data, achieving 90% accuracy and outperforming traditional polysomnography methods.",
    image: "sleep_apnea.webp",
    tags: ["python(Neural network)"],
    githubUrl: "",
  },
,{
  title: "Weather App",
  description: "A simple and responsive weather application that fetches and displays the current weather conditions for any city using real-time weather APIs.",
  image: "https://9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?quality=82&strip=all&w=1024", // Replace with your own image if needed
  tags: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
  githubUrl: "https://github.com/khemanth630/Weather_app.git", // Replace with actual repo URL
}
,
  {
    title: "Online quiz application ",
    description: "Developed a secure, real-time online quiz app using Python, socket programming, and SSL, with multi-device support and efficient feedback handling.",
    image: "quiz.jpg",
    tags: ["python ", "SSL", "Socket programming"],
    githubUrl: "",
  },
    {
    title: "Air line management",
    description: "Built a MySQL-based airline management system enabling efficient flight search, secure ticket booking, cancellations, and real-time access to flight and passenger data.",
    image: "flight.jpeg",
    tags: ["Apache netbeans ", "SQL", "java"],
    githubUrl: "",
  }
];


const ITEMS_PER_PAGE = 3;

const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);

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
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to the top of the section
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Projects</h2>
      
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
      >
        {currentProjects.map((project, index) => (
          <motion.div
            key={indexOfFirstItem + index}
            variants={item}
            className="glass-card overflow-hidden group"
            whileHover={{ y: -10 }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between gap-4 mt-4">
                <Button 
                  variant="outline"
                  className="flex-1 gap-2 border-primary/30 hover:bg-primary/10"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                </Button>
                
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
              </PaginationItem>
            )}
            
            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink 
                  isActive={currentPage === index + 1}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </section>
  );
};

export default ProjectsSection;
