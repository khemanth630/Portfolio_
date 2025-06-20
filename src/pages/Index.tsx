import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
// import PositionsSection from "@/components/sections/PositionsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import BackgroundEffect from "@/components/BackgroundEffect";
import AboutDetailsSection from "@/components/sections/AboutDetailsSection";

import Footer from "@/components/layout/Footer";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    // Add a small delay to ensure smooth loading animation
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    // Intersection Observer for section detection
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe all sections
    document.querySelectorAll("section[id]").forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => {
      clearTimeout(timer);
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <PageLayout>
      <BackgroundEffect />
      
      <AnimatePresence>
        {loaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AboutSection />
            <AboutDetailsSection />
            <SkillsSection />
            <EducationSection />
            {/* <PositionsSection /> */}
            <ProjectsSection />
            <ContactSection />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
};

export default Index;
