import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

const certificates = [
  {
    title: "Data Structures",
    issuer: "Coursera",
    date: "2024",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1000/1*9tUGCI3h7ZllFLteUqzv7A.png",
    verificationUrl: "https://www.coursera.org/account/accomplishments/verify/4B42QDN4WAKD"
  },
  {
    title: "HTML , CSS , JavaScript for Web Development",
    issuer: "Coursera",
    date: "2023",
    imageUrl: "https://miro.medium.com/v2/resize:fit:860/1*M-7PkS5EnTOQIuAmfRKH6Q.png",
    verificationUrl: "https://www.coursera.org/account/accomplishments/records/NQU6NAB6ZLCW"
  },
  {
    title: "Java Certification",
    issuer: "Infosys",
    date: "2024",
    imageUrl: "https://banner2.cleanpng.com/20180417/zzw/kisspng-java-platform-standard-edition-java-development-k-java-plum-5ad592d6a07116.3640567315239461986572.jpg",
    verificationUrl: "https://ik.imagekit.io/maki7bcqo/Lokesh%20certificate%20images/infosis%203_page-0001.jpg?updatedAt=1748260524236"
  },
  {
    title: "DSA Using Java Certification",
    issuer: "NPTEL",
    date: "2024",
    imageUrl: "https://i0.wp.com/codeofcode.org/wp-content/uploads/2023/01/Learn-DSA-with-Java-Image.jpeg?fit=1108%2C832&ssl=1",
    verificationUrl: "https://ik.imagekit.io/maki7bcqo/Lokesh%20certificate%20images/Data%20Structure%20and%20Algorithms%20using%20Java%20(2)_page-0001.jpg?updatedAt=1748260531375"
  },
  {
    title: "ServiceNow Micro Certification",
    issuer: "ServiceNow",
    date: "2025",
    imageUrl: "https://cdn.shopaccino.com/igmguru/products/servicenow2-xl-7943179293332_m.jpg?v=531",
    verificationUrl: "https://ik.imagekit.io/maki7bcqo/Lokesh%20certificate%20images/service%20now%20(micro%20certification)_page-0001.jpg?updatedAt=1748260521859"
  },
  {
    title: "Python",
    issuer: "Google",
    date: "2023",
    imageUrl: "https://contentstatic.techgig.com/photo/82277927.cms",
    verificationUrl: "https://www.coursera.org/account/accomplishments/records/7UUT42D8DJS7"
  },
  {
    title: "Prompt Engineering",
    issuer: "Vanderbilt University",
    date: "2021",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1000/1*Eu9PolLyyi_hRde-1JaQ-A.jpeg",
    verificationUrl: "https://www.coursera.org/account/accomplishments/records/CGSVWN66QS45"
  },
  {
    title: "Introduction to AI",
    issuer: "IBM",
    date: "2023",
    imageUrl: "https://t4.ftcdn.net/jpg/07/27/27/29/360_F_727272961_CK1r3YSfOwxIHctzKOi10C2TuKtZaVNF.jpg",
    verificationUrl: "https://www.coursera.org/account/accomplishments/records/48GBXB8AAEP3"
  },
  {
    title: "Introduction to CyberSecurity",
    issuer: "Cisco",
    date: "2025",
    imageUrl: "https://wallpapers.com/images/hd/cyber-security-background-meuqfzxcg4gdd26s.jpg",
    verificationUrl: "https://ik.imagekit.io/maki7bcqo/Lokesh%20certificate%20images/cisco%20-%20intro%20cs_page-0001.jpg?updatedAt=1748260524231"
  },
];

const ITEMS_PER_PAGE = 4;

const CertificatesSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const totalPages = Math.ceil(certificates.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentCertificates = certificates.slice(indexOfFirstItem, indexOfLastItem);

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

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to the top of the section
    document.getElementById("certificates")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="certificates" className="section-container">
      <h2 className="section-title">Certificates</h2>
      
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
      >
        {currentCertificates.map((certificate, index) => (
          <motion.div 
            key={indexOfFirstItem + index} 
            variants={item}
            className="glass rounded-lg overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="h-40 overflow-hidden">
              <img 
                src={certificate.imageUrl} 
                alt={certificate.title} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-lg">{certificate.title}</h3>
              <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
                <span>{certificate.issuer}</span>
                <span>{certificate.date}</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-4 w-full hover:bg-sidebar-primary hover:text-sidebar-primary-foreground"
                asChild
              >
                <a href={certificate.verificationUrl} target="_blank" rel="noopener noreferrer">
                  Verify Certificate
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
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

export default CertificatesSection;
