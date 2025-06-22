import { useState } from "react";
import { Download, Menu, Twitter, Facebook, Github, Instagram, Linkedin, LucidePanelTopDashed, Mail} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
interface SidebarProps {
  onLinkClick: () => void;
}

const Sidebar = ({ onLinkClick }: SidebarProps) => {
  const [activeSection, setActiveSection] = useState("about");
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      onLinkClick();
    }
  };

  // For portfolios dropdown
  const togglePortfolio = () => {
    setIsPortfolioOpen(!isPortfolioOpen);
  };

  return (
    <aside className="h-full bg-sidebar flex flex-col overflow-hidden">
      <ScrollArea className="h-screen">
    {/* <aside className="h-full bg-sidebar flex flex-col overflow-y-auto"> */}
      <div className="sidebar-content flex flex-col h-full glass dark:bg-black/30 backdrop-blur-lg p-6">
        {/* Profile Section */}
        <div className="profile-section flex flex-col items-center text-center mb-6 pt-6 animate-fade-in">
          <Avatar className="w-28 h-30 mb-4 ring-2 ring-sidebar-primary/20 transition-all duration-500 hover:ring-sidebar-primary">
            <AvatarImage src="/KANKANABOINA_HEMANTH.jpg" alt="Hemanth" />
            <AvatarFallback className="text-2xl font-display">Hemanth</AvatarFallback>
          </Avatar>
          <h1 className="font-playfair text-2xl font-semibold text-sidebar-foreground mt-3">K Hemanth</h1>
          <p className="text-sidebar-foreground/70 mt-1 font-poppins">AI developer</p>
          
          {/* Social Media Icons */}
        <div className="flex space-x-3 mt-4">
  <a href="mailto:hemanth630209@gmail.com" target="_blank" rel="noopener noreferrer" className="text-sidebar-foreground/70 hover:text-sidebar-primary transform transition-all duration-300 hover:-translate-y-1">
    <Mail size={22} className="hover:animate-pulse" />
  </a>
  <a href="https://github.com/khemanth630" target="_blank" rel="noopener noreferrer" className="text-sidebar-foreground/70 hover:text-sidebar-primary transform transition-all duration-300 hover:-translate-y-1">
    <Github size={22} className="hover:animate-pulse" />
  </a>
  <a href="https://www.linkedin.com/in/hemanth-kankanaboina-4b8128303/" target="_blank" rel="noopener noreferrer" className="text-sidebar-foreground/70 hover:text-sidebar-primary transform transition-all duration-300 hover:-translate-y-1">
    <Linkedin size={22} className="hover:animate-pulse" />
  </a>
  <a href="https://leetcode.com/u/Hemanth0620/" target="_blank" rel="noopener noreferrer" className="text-sidebar-foreground/70 hover:text-sidebar-primary transform transition-all duration-300 hover:-translate-y-1">
    <img src="https://cdn.iconscout.com/icon/free/png-256/leetcode-3521542-2944960.png" alt="LeetCode" className="w-[22px] h-[22px] hover:animate-pulse" />
  </a>
</div>

  

        </div>

        {/* Navigation */}
        <nav className="flex-1 mt-2">
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className={`nav-link w-full text-left flex items-center gap-3 ${
                  activeSection === "about" ? "active" : ""
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                </svg>
                <span className="font-poppins">Home</span>
              </button>
            </li>
            
            <li>
              <button
                onClick={() => scrollToSection("about-details")}
                className={`nav-link w-full text-left flex items-center gap-3 ${
                  activeSection === "about-details" ? "active" : ""
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                </svg>
                <span className="font-poppins">About</span>
              </button>
            </li>
            
            {/* Portfolio Dropdown */}
            <li className="relative">
              <button
                onClick={togglePortfolio}
                className={`nav-link w-full text-left flex items-center justify-between ${
                  isPortfolioOpen ? "active" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-menu-button" viewBox="0 0 16 16">
                    <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h8A1.5 1.5 0 0 1 11 1.5v2A1.5 1.5 0 0 1 9.5 5h-8A1.5 1.5 0 0 1 0 3.5zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"/>
                    <path d="m7.823 2.823-.396-.396A.25.25 0 0 1 7.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0M0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
                  </svg>
                  <span className="font-poppins">Portfolio</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-chevron-down transition-transform duration-300 ${isPortfolioOpen ? 'rotate-180' : ''}`} viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg>
              </button>
              
              {isPortfolioOpen && (
                <ul className="pl-9 space-y-1 mt-1 animate-fade-in">
                  <li>
                    <button
                      onClick={() => scrollToSection("skills")}
                      className={`nav-link w-full text-left flex items-center gap-3 ${
                        activeSection === "skills" ? "active" : ""
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-ui-checks" viewBox="0 0 16 16">
                        <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                      </svg>
                      <span>Skills</span>
                    </button>
                  </li>
                
                  <li>
                    <button
                      onClick={() => scrollToSection("education")}
                      className={`nav-link w-full text-left flex items-center gap-3 ${
                        activeSection === "education" ? "active" : ""
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-book-half" viewBox="0 0 16 16">
                        <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                      </svg>
                      <span>Education</span>
                    </button>
                  </li>
      
                  {/* <li>
                    <button
                      onClick={() => scrollToSection("positions")}
                      className={`nav-link w-full text-left flex items-center gap-3 ${
                        activeSection === "positions" ? "active" : ""
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-rocket-takeoff-fill" viewBox="0 0 16 16">
                        <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 3.6 3.6 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm-4.69 6.059a.5.5 0 0 0-.781.621l2.879 2.885-.79.789-2.877-2.883a.5.5 0 0 0-.618.783l2.276 2.282a.5.5 0 0 0 .707 0l2.13-2.132a.5.5 0 0 0 0-.707z"/>
                      </svg>
                      <span>Positions</span>
                    </button>
                  </li> */}
                  <li>
                    <button
                      onClick={() => scrollToSection("projects")}
                      className={`nav-link w-full text-left flex items-center gap-3 ${
                        activeSection === "projects" ? "active" : ""
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
                        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                      </svg>
                      <span>Projects</span>
                    </button>
                  </li>
                </ul>
              )}
            </li>
            
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className={`nav-link w-full text-left flex items-center gap-3 ${activeSection === "contact" ? "active" : ""}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                </svg>
                <span className="font-poppins">Contact</span>
              </button>
            </li>
          </ul>
        </nav>

        {/* Resume Download Button */}
        <div className="resume-download mt-auto mb-8">
  <a 
    href="KANKANABOINA_HEMANTH_RESUME.pdf" 
    download 
    className="w-full"
  >
    <Button 
      className="w-full bg-sidebar-primary hover:bg-sidebar-primary/90 text-sidebar-primary-foreground group font-poppins"
    >
      <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
      Download Resume
    </Button>
  </a>
</div>

      </div>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
