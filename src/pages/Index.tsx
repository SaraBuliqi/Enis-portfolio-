import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { useIsMobile } from "@/hooks/use-mobile";

const BehanceIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.561-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H13.96c.13 3.211 3.483 3.312 4.588 2.029h3.178zm-7.686-4h4.965c-.105-1.547-1.36-1.875-2.477-1.875-1.586 0-2.445.771-2.488 1.875zm-9.574 6.988H0V5.021h4.976c2.318 0 4.24 1.084 4.24 3.215 0 2.131-1.922 3.752-4.24 3.752zM2.977 9.609h1.897c1.134 0 1.855-.53 1.855-1.466 0-.934-.721-1.466-1.855-1.466H2.977v2.932z" />
  </svg>
);

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useIsMobile();
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Section offsets
      const sections = [
        { id: "home", offset: 0 },
        { id: "work", offset: 0 },
        { id: "about", offset: 0 },
        { id: "contact", offset: 0 },
      ];
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          section.offset = el.getBoundingClientRect().top + window.scrollY;
        }
      });
      const scrollPos = window.scrollY + 120; // Offset for navbar height
      let current = "home";
      for (let i = 0; i < sections.length; i++) {
        if (scrollPos >= sections[i].offset) {
          current = sections[i].id;
        }
      }
      setActiveNav(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Add smooth scrolling behavior
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash && target.hostname === window.location.hostname) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Add event listeners to all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  useEffect(() => {
    // Check if we should scroll to contact section (from CV page)
    const shouldScrollToContact = localStorage.getItem("scrollToContact");
    if (shouldScrollToContact === "true") {
      // Clear the flag
      localStorage.removeItem("scrollToContact");

      // Wait a bit for the page to load, then scroll to contact
      setTimeout(() => {
        const contactSection = document.querySelector("#contact");
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      }, 1000); // Increased timeout for better reliability

      // Fallback: try again after a longer delay
      setTimeout(() => {
        const contactSection = document.querySelector("#contact");
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      }, 2000);
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    window.location.hash = "";
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const logo = e.currentTarget as HTMLElement;
    logo.classList.add("clicked");

    // Remove the clicked class after animation completes
    setTimeout(() => {
      logo.classList.remove("clicked");
    }, 2000);
  };

  const handleNavbarLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const logo = e.currentTarget as HTMLElement;
    logo.classList.add("clicked");

    // Remove the clicked class after animation completes
    setTimeout(() => {
      logo.classList.remove("clicked");
    }, 2000);

    // Scroll to About Me section
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFooterLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const logo = e.currentTarget as HTMLElement;
    logo.classList.add("clicked");

    // Remove the clicked class after animation completes
    setTimeout(() => {
      logo.classList.remove("clicked");
    }, 2000);

    // Scroll to Home section
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 text-base font-bold text-white">
              <img
                src="/enis-buliqi-logo-silver.png"
                alt="Logo"
                className="w-20 h-20 object-contain logo-rotate cursor-pointer"
                onClick={handleNavbarLogoClick}
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className={`${activeNav === "home" ? "text-purple-400" : "text-white"} hover:text-purple-400 transition-colors`}
              >
                Home
              </a>
              <a
                href="#work"
                className={`${activeNav === "work" ? "text-purple-400" : "text-white"} hover:text-purple-400 transition-colors`}
              >
                Work
              </a>
              <a
                href="#about"
                className={`${activeNav === "about" ? "text-purple-400" : "text-white"} hover:text-purple-400 transition-colors`}
              >
                About
              </a>
              <a
                href="#contact"
                className={`${activeNav === "contact" ? "text-purple-400" : "text-white"} hover:text-purple-400 transition-colors`}
              >
                Contact
              </a>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
            >
              <a href="/cv.html" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Back to Top Button */}
      <div
        className={`fixed bottom-8 right-8 z-50 transition-opacity duration-300 ${scrollY > 300 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{}}
      >
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full shadow-xl bg-[#a78bfa] hover:bg-[#7c3aed] text-white focus-visible:ring-2 focus-visible:ring-purple-400 border-none"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
        <span className="absolute left-1/2 -translate-x-1/2 mt-2 text-xs text-purple-200 bg-black/80 px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none select-none whitespace-nowrap">
          Back to Top
        </span>
      </div>

      {/* Footer */}
      <footer className="bg-black/40 py-12">
        <div className="container mx-auto px-6 text-center">
          <img
            src="/enis-buliqi-logo-silver.png"
            alt="Logo"
            className="mx-auto mb-4 w-40 h-40 object-contain logo-rotate cursor-pointer"
            onClick={handleFooterLogoClick}
          />
          <div className="text-2xl font-bold text-white mb-4">
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.facebook.com/people/Enis-Buliqi/pfbid0qjWTie1LkgX4NCB5JcfWwehdCdRd5Ze3Juc85ckGoyUUyBaKh6DrnhHU8HFRHiNzl/?rdid=4APHU9subwy8TaV1&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1WgubdVPK4%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full text-gray-400 hover:text-purple-400 hover:bg-purple-600/20 hover:scale-110 hover:shadow-lg transition-all duration-200"
                title="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.behance.net/enisbuliqi1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full text-gray-400 hover:text-purple-400 hover:bg-purple-600/20 hover:scale-110 hover:shadow-lg transition-all duration-200"
                title="Behance"
              >
                <BehanceIcon />
              </a>
              <a
                href="https://www.instagram.com/enisbuliqi24/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full text-gray-400 hover:text-purple-400 hover:bg-purple-600/20 hover:scale-110 hover:shadow-lg transition-all duration-200"
                title="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/enis-buliqi-044179372/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full text-gray-400 hover:text-purple-400 hover:bg-purple-600/20 hover:scale-110 hover:shadow-lg transition-all duration-200"
                title="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500">
            © 2024 Enis Buliqi. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
