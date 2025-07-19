import React, { useEffect, useState } from 'react';
import { Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ASSETS, getProductionAssetUrl } from '@/assets';

// Force deployment update - CV page component
// Debug: Ensure CV component loads properly
const BehanceIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.561-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H13.96c.13 3.211 3.483 3.312 4.588 2.029h3.178zm-7.686-4h4.965c-.105-1.547-1.36-1.875-2.477-1.875-1.586 0-2.445.771-2.488 1.875zm-9.574 6.988H0V5.021h4.976c2.318 0 4.24 1.084 4.24 3.215 0 2.131-1.922 3.752-4.24 3.752zM2.977 9.609h1.897c1.134 0 1.855-.53 1.855-1.466 0-.934-.721-1.466-1.855-1.466H2.977v2.932z" />
  </svg>
);

// Add gradient animation keyframes
const gradientAnimation = `
  @keyframes gradient-move {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  /* Logo rotation animation - Earth-like */
  @keyframes logoRotate {
    0% {
      transform: rotateY(0deg);
    }
    25% {
      transform: rotateY(90deg);
    }
    50% {
      transform: rotateY(180deg);
    }
    75% {
      transform: rotateY(270deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }

  /* Logo animation with pause */
  @keyframes logoEarthRotate {
    0% {
      transform: rotateY(0deg);
    }
    12.5% {
      transform: rotateY(-360deg);
    }
    25% {
      transform: rotateY(-360deg);
    }
    37.5% {
      transform: rotateY(-720deg);
    }
    50% {
      transform: rotateY(-720deg);
    }
    62.5% {
      transform: rotateY(-1080deg);
    }
    75% {
      transform: rotateY(-1080deg);
    }
    87.5% {
      transform: rotateY(-1440deg);
    }
    100% {
      transform: rotateY(-1440deg);
    }
  }

  .logo-rotate {
    animation: logoEarthRotate 8s ease-in-out infinite;
    transform-style: preserve-3d;
    perspective: 1000px;
    cursor: pointer;
  }

  .logo-rotate:hover {
    animation-play-state: paused;
  }

  .logo-rotate.clicked {
    animation: logoRotate 1.5s ease-in-out;
  }
`;

const CV = () => {
  console.log("🚀 CV component is loading...");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log("🎯 CV component mounted successfully");
    // Set page title
    document.title = "Enis Buliqi - CV";
    
    // Inject the animation styles
    if (!document.getElementById("cv-gradient-animation")) {
      const style = document.createElement("style");
      style.id = "cv-gradient-animation";
      style.innerHTML = gradientAnimation;
      document.head.appendChild(style);
    }

    // Handle scroll event
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavbarLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const logo = e.currentTarget as HTMLElement;
    logo.classList.add("clicked");

    // Remove the clicked class after animation completes
    setTimeout(() => {
      logo.classList.remove("clicked");
    }, 2000);

    // Navigate to portfolio page
    window.location.href = "/";
  };

  const handleFooterLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const logo = e.currentTarget as HTMLElement;
    logo.classList.add("clicked");

    // Remove the clicked class after animation completes
    setTimeout(() => {
      logo.classList.remove("clicked");
    }, 2000);

    // Navigate to portfolio page
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-0">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center gap-3 text-base font-bold text-white">
              <img
                src={getProductionAssetUrl(ASSETS.logo)}
                alt="Logo"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain logo-rotate cursor-pointer"
                onClick={handleNavbarLogoClick}
              />
            </div>
            <nav className="flex flex-wrap space-x-4 sm:space-x-8">
              <a href="/" className="text-white hover:text-purple-400 transition-colors text-sm sm:text-base" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>
                Portfolio
              </a>
              <a 
                href="/#contact" 
                className="text-white hover:text-purple-400 transition-colors text-sm sm:text-base" 
                style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}
                onClick={(e) => {
                  e.preventDefault();
                  localStorage.setItem("scrollToContact", "true");
                  window.location.href = "/";
                }}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Quick Download Section */}
        <div className="bg-gradient-to-r from-slate-800/50 to-gray-800/50 rounded-xl p-4 sm:p-6 mb-8 border border-white/10 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-white" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>
                  Professional CV
                </h2>
                <p className="text-gray-400 text-xs sm:text-sm" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>
                  Download the complete PDF version
                </p>
              </div>
            </div>
            <a
              href={ASSETS.cv}
              download
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
              style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </div>
        </div>

        {/* CV Content */}
        <section className="bg-white/5 rounded-lg overflow-hidden border border-white/10 p-8">
          <div className="max-w-4xl mx-auto">
            {/* Name and Title - matching portfolio style exactly */}
            <div className="text-center mb-16">
              <h1 
                className="flex flex-col items-center text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-8 leading-[1.1] w-full break-words overflow-visible justify-center"
              >
                <span
                  className="break-words w-full mb-8 flex items-center justify-center gap-12 text-center"
                >
                  <span
                    className="flex items-center gap-4"
                    style={{
                      filter: "drop-shadow(0 0 3px #fff)",
                      textShadow: "0 0 1px #fff",
                    }}
                  >
                    <span
                      className="inline-block font-normal text-white"
                      style={{
                        letterSpacing: "0.18em",
                        fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif",
                      }}
                    >
                      Enis
                    </span>{" "}
                    <span
                      className="inline-block font-normal text-white"
                      style={{
                        letterSpacing: "0.18em",
                        fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif",
                      }}
                    >
                      Buliqi
                    </span>
                  </span>
                </span>
                <span
                  className="w-full flex items-center justify-center bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent text-center leading-[1.15] min-h-[1.2em] pb-2 relative text-3xl md:text-5xl lg:text-7xl font-extrabold drop-shadow-[0_0_16px_white]"
                  style={{
                    backgroundSize: "200% 200%",
                    animation: "gradient-move 4s ease-in-out infinite",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    textShadow: "0 0 1.5px #fff, 0 0 3px #fff",
                    letterSpacing: "0.12em",
                    fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif",
                  }}
                >
                  <span className="inline-block font-normal">Graphic Designer</span>
                </span>
              </h1>
            </div>

            {/* Professional Summary Section */}
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl p-8 mb-12 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>
                  Professional Summary
                </h3>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>
                  I'm a passionate <span className="text-purple-400 font-semibold">19-year-old graphic designer</span> with expertise in creating visual solutions 
                  that make brands stand out and connect with their audiences.
                </p>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>
                  My design philosophy centers around the belief that great design should not only look beautiful 
                  but also <span className="text-blue-400 font-semibold">solve problems</span> and <span className="text-purple-400 font-semibold">tell compelling stories</span>.
                </p>
              </div>
              
              {/* Key Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                  <div className="text-2xl font-bold text-purple-400 mb-2">300+</div>
                  <div className="text-gray-300 text-sm" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>Projects Completed</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                  <div className="text-2xl font-bold text-blue-400 mb-2">25+</div>
                  <div className="text-gray-300 text-sm" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>Satisfied Clients</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                  <div className="text-2xl font-bold text-purple-400 mb-2">1+</div>
                  <div className="text-gray-300 text-sm" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>Years Experience</div>
                </div>
              </div>
            </div>
            
            {/* Experience Section */}
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-8 mb-12 border border-blue-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>
                  Professional Experience
                </h3>
              </div>
              
              <div className="space-y-6">
                {/* Current Position */}
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg p-6 border border-green-500/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
                    CURRENT
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>
                        Freelance Designer
                      </h4>
                      <p className="text-green-400 font-semibold mb-2" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>
                        Graphic Designer
                      </p>
                      <p className="text-gray-300" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>
                        Working with various clients across different industries, delivering high-quality design solutions
                      </p>
                    </div>
                  </div>
                </div>

                {/* Previous Position */}
                <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-lg p-6 border border-blue-500/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
                    PREVIOUS
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>
                        Sharp Group L.L.C.
                      </h4>
                      <p className="text-blue-400 font-semibold mb-2" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>
                        Graphic Designer
                      </p>
                      <p className="text-gray-300" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>
                        Contributed to brand development and marketing campaigns for corporate clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-8 mb-12 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>
                  Core Skills & Expertise
                </h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-4 rounded-lg text-center border border-purple-500/30 hover:border-purple-400/50 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>Adobe Photoshop</span>
                </div>
                <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-4 rounded-lg text-center border border-purple-500/30 hover:border-purple-400/50 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>Adobe Illustrator</span>
                </div>
                <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-4 rounded-lg text-center border border-purple-500/30 hover:border-purple-400/50 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>Brand Identity</span>
                </div>
                <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-4 rounded-lg text-center border border-purple-500/30 hover:border-purple-400/50 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>Social Media Design</span>
                </div>
                <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-4 rounded-lg text-center border border-purple-500/30 hover:border-purple-400/50 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>Print Design</span>
                </div>
                <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-4 rounded-lg text-center border border-purple-500/30 hover:border-purple-400/50 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V7a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>Campaign Design</span>
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/20 rounded-xl p-8 mb-12 border border-emerald-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>
                  Key Achievements
                </h3>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <ul className="space-y-4" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-200">Completed <span className="text-emerald-400 font-semibold">300+ projects</span> for various clients across different industries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-200">Worked with <span className="text-emerald-400 font-semibold">25+ satisfied clients</span> delivering exceptional results</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-200">Specialized in <span className="text-emerald-400 font-semibold">brand identity</span> and <span className="text-emerald-400 font-semibold">social media design</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-200">Extensive experience in <span className="text-emerald-400 font-semibold">album covers</span>, <span className="text-emerald-400 font-semibold">banners</span>, and <span className="text-emerald-400 font-semibold">marketing campaigns</span></span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Download Section */}
            <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-xl p-8 border border-orange-500/20">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>
                    Download Full CV
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>
                  Get the complete version of my CV with detailed information about my experience, skills, and achievements.
                </p>
                
                <a
                  href={ASSETS.cv}
                  download
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-10 py-5 rounded-xl transition-all duration-300 text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                  style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Full CV (PDF)
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Back to Top Button */}
      <div
        className={`fixed bottom-8 right-8 z-50 transition-opacity duration-300 ${scrollY > 300 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
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
      <footer className="bg-black/40 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <img
            src={getProductionAssetUrl(ASSETS.logo)}
            alt="Logo"
            className="mx-auto mb-4 w-24 h-24 sm:w-40 sm:h-40 object-contain logo-rotate cursor-pointer"
            onClick={handleFooterLogoClick}
          />
          <div className="text-lg sm:text-2xl font-bold text-white mb-4">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a
                href="https://www.facebook.com/people/Enis-Buliqi/pfbid0qjWTie1LkgX4NCB5JcfWwehdCdRd5Ze3Juc85ckGoyUUyBaKh6DrnhHU8HFRHiNzl/?rdid=4APHU9subwy8TaV1&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1WgubdVPK4%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-gray-400 hover:text-purple-400 hover:bg-purple-600/20 hover:scale-110 hover:shadow-lg transition-all duration-200"
                title="Facebook"
              >
                <Facebook size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.behance.net/enisbuliqi1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-gray-400 hover:text-purple-400 hover:bg-purple-600/20 hover:scale-110 hover:shadow-lg transition-all duration-200"
                title="Behance"
              >
                <BehanceIcon />
              </a>
              <a
                href="https://www.instagram.com/enisbuliqi24/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-gray-400 hover:text-purple-400 hover:bg-purple-600/20 hover:scale-110 hover:shadow-lg transition-all duration-200"
                title="Instagram"
              >
                <Instagram size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/enis-buliqi-044179372/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-gray-400 hover:text-purple-400 hover:bg-purple-600/20 hover:scale-110 hover:shadow-lg transition-all duration-200"
                title="LinkedIn"
              >
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800 text-gray-500 text-xs sm:text-base">
            © 2024 Enis Buliqi. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CV; 