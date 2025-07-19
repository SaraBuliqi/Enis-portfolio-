import React, { useEffect } from 'react';
import { ASSETS } from '@/assets';

const CV = () => {
  useEffect(() => {
    // Set page title
    document.title = "Enis Buliqi - CV";
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
            <span className="text-xl font-bold">
              <span className="text-white">Enis</span>
              <span className="text-purple-400">Buliqi</span>
            </span>
          </a>
          <nav className="flex gap-6">
            <a href="/" className="text-white hover:text-purple-400 transition-colors">
              Portfolio
            </a>
            <a href="/#contact" className="text-white hover:text-purple-400 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Title section */}
        <section className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4">
            <span className="text-white">Enis</span>
            <span className="text-purple-400">Buliqi</span>
          </h1>
          <p className="text-2xl text-gray-300 mb-6">Graphic Designer</p>
          <a
            href={ASSETS.cv}
            download
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
        </section>

        {/* CV Content */}
        <section className="bg-white/5 rounded-lg overflow-hidden border border-white/10 p-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Professional Summary</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate 19-year-old graphic designer with expertise in creating visual solutions 
              that make brands stand out and connect with their audiences. My design philosophy centers 
              around the belief that great design should not only look beautiful but also solve problems 
              and tell compelling stories.
            </p>
            
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Experience</h3>
            <div className="mb-6">
              <div className="bg-white/5 p-4 rounded-lg mb-4">
                <h4 className="text-xl font-semibold text-white">Sharp Group L.L.C.</h4>
                <p className="text-gray-400">Graphic Designer</p>
                <p className="text-gray-500 text-sm">Previous role</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="text-xl font-semibold text-white">Freelance Designer</h4>
                <p className="text-gray-400">Current position</p>
                <p className="text-gray-500 text-sm">Working with various clients</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-purple-400 mb-4">Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/5 p-3 rounded-lg text-center">
                <span className="text-white font-medium">Adobe Photoshop</span>
              </div>
              <div className="bg-white/5 p-3 rounded-lg text-center">
                <span className="text-white font-medium">Adobe Illustrator</span>
              </div>
              <div className="bg-white/5 p-3 rounded-lg text-center">
                <span className="text-white font-medium">Brand Identity</span>
              </div>
              <div className="bg-white/5 p-3 rounded-lg text-center">
                <span className="text-white font-medium">Social Media Design</span>
              </div>
              <div className="bg-white/5 p-3 rounded-lg text-center">
                <span className="text-white font-medium">Print Design</span>
              </div>
              <div className="bg-white/5 p-3 rounded-lg text-center">
                <span className="text-white font-medium">Campaign Design</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-purple-400 mb-4">Achievements</h3>
            <ul className="text-gray-300 space-y-2 mb-6">
              <li>• Completed 300+ projects for various clients</li>
              <li>• Worked with 25+ satisfied clients</li>
              <li>• Specialized in brand identity and social media design</li>
              <li>• Experience in album covers, banners, and marketing campaigns</li>
            </ul>

            <div className="text-center">
              <a
                href={ASSETS.cv}
                download
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg transition-colors text-lg font-medium"
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
            >
              Facebook
            </a>
            <a
              href="https://www.behance.net/enisbuliqi1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Behance
            </a>
            <a
              href="https://www.instagram.com/enisbuliqi24/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/enis-buliqi-044179372/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-gray-500">
            © 2024 Enis Buliqi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CV; 