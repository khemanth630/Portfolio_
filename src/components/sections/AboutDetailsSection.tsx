import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { User, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AboutDetailsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about-details" className="section-container">
      <h2 className="section-title">About Me</h2>
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="container mt-8"
      >
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* Image Column */}
          <div className="md:w-2/3">
            <div className="relative group overflow-hidden rounded-lg shadow-xl h-full">
              <img 
  src="/KANKANABOINA_HEMANTH.jpg" 
  alt="Kankanaboina Hemanth" 
  className="w-full h-full object-cover object-center min-h-[400px]"
/>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">K Hemanth</h3>
                  <p className="text-sm">AI developer ,AI engineer</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Column with Cards */}
          <div className="md:w-2/3">
            <div className="space-y-6">
              {/* Personal Information Card */}
              <Card className="shadow-md border-primary/10 hover:border-primary/30 transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <User className="text-primary h-5 w-5" />
                    <CardTitle>Personal Information</CardTitle>
                  </div>
                  <CardDescription>My personal details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Birthday</p>
                      <p className="text-sm text-muted-foreground">20 june 2005</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">+91 9490509324</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">hemanth630209@gmail.com</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">City</p>
                      <p className="text-sm text-muted-foreground">bengaluru,karnataka, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Professional Information Card */}
              <Card className="shadow-md border-primary/10 hover:border-primary/30 transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Briefcase className="text-primary h-5 w-5" />
                    <CardTitle>Professional Information</CardTitle>
                  </div>
                  <CardDescription>My professional details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Degree</p>
                      <p className="text-sm text-muted-foreground">Bachelor of Technology in Computer Science</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">University</p>
                      <p className="text-sm text-muted-foreground">Pes University ,Banglore</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">GPA</p>
                      <p className="text-sm text-muted-foreground">8.39/10</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Freelance</p>
                      <p className="text-sm text-muted-foreground">Available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutDetailsSection;
