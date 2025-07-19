import React, { useEffect } from 'react';
import { ASSETS } from '@/assets';

// Add gradient animation keyframes
const gradientAnimation = `
  @keyframes gradient-move {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`;

const CV = () => {
  useEffect(() => {
    // Set page title
    document.title = "Enis Buliqi - CV";
    
    // Inject the animation styles
    if (!document.getElementById("cv-gradient-animation")) {
      const style = document.createElement("style");
      style.id = "cv-gradient-animation";
      style.innerHTML = gradientAnimation;
      document.head.appendChild(style);
    }
  }, []);

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
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 text-white hover:text-purple-400 transition-colors">
            <img
              src={ASSETS.logo}
              alt="Logo"
              className="w-16 h-16 object-contain"
            />
            <span className="text-xl font-bold" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>
              <span className="text-white">Enis</span>
              <span className="text-purple-400">Buliqi</span>
            </span>
          </a>
          <nav className="flex gap-6">
            <a href="/" className="text-white hover:text-purple-400 transition-colors" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>
              Portfolio
            </a>
            <a href="/#contact" className="text-white hover:text-purple-400 transition-colors" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
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

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>Professional Summary</h3>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>
              I'm a passionate 19-year-old graphic designer with expertise in creating visual solutions 
              that make brands stand out and connect with their audiences. My design philosophy centers 
              around the belief that great design should not only look beautiful but also solve problems 
              and tell compelling stories.
            </p>
            
            <h3 className="text-2xl font-bold text-purple-400 mb-4" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>Experience</h3>
            <div className="mb-8">
              <div className="bg-white/5 p-6 rounded-lg mb-4">
                <h4 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>Sharp Group L.L.C.</h4>
                <p className="text-gray-400 mb-1" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>Graphic Designer</p>
                <p className="text-gray-500 text-sm" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>Previous role</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>Freelance Designer</h4>
                <p className="text-gray-400 mb-1" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>Current position</p>
                <p className="text-gray-500 text-sm" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>Working with various clients</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-purple-400 mb-4" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/5 p-4 rounded-lg text-center">
                <span className="text-white font-medium" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>Adobe Photoshop</span>
              </div>
              <div className="bg-white/5 p-4 rounded-lg text-center">
                <span className="text-white font-medium" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>Adobe Illustrator</span>
              </div>
              <div className="bg-white/5 p-4 rounded-lg text-center">
                <span className="text-white font-medium" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>Brand Identity</span>
              </div>
              <div className="bg-white/5 p-4 rounded-lg text-center">
                <span className="text-white font-medium" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>Social Media Design</span>
              </div>
              <div className="bg-white/5 p-4 rounded-lg text-center">
                <span className="text-white font-medium" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>Print Design</span>
              </div>
              <div className="bg-white/5 p-4 rounded-lg text-center">
                <span className="text-white font-medium" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>Campaign Design</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-purple-400 mb-4" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>Achievements</h3>
            <ul className="text-gray-300 space-y-3 mb-8" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>
              <li className="text-lg">• Completed 300+ projects for various clients</li>
              <li className="text-lg">• Worked with 25+ satisfied clients</li>
              <li className="text-lg">• Specialized in brand identity and social media design</li>
              <li className="text-lg">• Experience in album covers, banners, and marketing campaigns</li>
            </ul>

            <div className="text-center">
              <a
                href={ASSETS.cv}
                download
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-800 to-blue-950 hover:from-purple-900 hover:to-slate-950 text-white px-8 py-4 rounded-lg transition-colors text-lg font-semibold"
                style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Full CV (PDF)
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/40 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <img
            src={ASSETS.logo}
            alt="Logo"
            className="mx-auto mb-4 w-32 h-32 object-contain"
          />
          <div className="flex justify-center gap-4 mb-4">
            <a
              href="https://www.facebook.com/people/Enis-Buliqi/pfbid0qjWTie1LkgX4NCB5JcfWwehdCdRd5Ze3Juc85ckGoyUUyBaKh6DrnhHU8HFRHiNzl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}
            >
              Facebook
            </a>
            <a
              href="https://www.behance.net/enisbuliqi1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}
            >
              Behance
            </a>
            <a
              href="https://www.instagram.com/enisbuliqi24/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/enis-buliqi-044179372/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}
            >
              LinkedIn
            </a>
          </div>
          <p className="text-gray-500" style={{ fontFamily: "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif" }}>
            © 2024 Enis Buliqi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CV; 