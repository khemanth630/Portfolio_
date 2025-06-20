
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode class to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Close mobile menu when screen is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-background/80 backdrop-blur-sm"
        >
          <div className="flex flex-col space-y-1">
            <span className={`block w-5 h-0.5 bg-foreground transition-transform ${isMobileMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-foreground transition-opacity ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-5 h-0.5 bg-foreground transition-transform ${isMobileMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`}></span>
          </div>
        </Button>
      </div>

      {/* Dark Mode Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={toggleDarkMode}
          className="bg-background/80 backdrop-blur-sm border border-primary/20"
        >
          {isDarkMode ? 
            <Sun size={18} className="text-foreground" /> : 
            <Moon size={18} className="text-primary" />
          }
        </Button>
      </div>

      {/* Sidebar - Fixed on left 30% of screen */}
      <div 
        className={`fixed h-screen lg:sticky lg:top-0 w-[85%] sm:w-[320px] lg:w-[30%] z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <Sidebar onLinkClick={() => setIsMobileMenuOpen(false)} />
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Main Content - Fixed on right 70% of screen with independent scrolling */}
      <main className="lg:fixed lg:right-0 lg:top-0 lg:w-[70%] lg:h-screen lg:overflow-y-auto flex-1 min-h-screen pb-20">
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
