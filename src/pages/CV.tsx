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

        {/* PDF viewer */}
        <section className="bg-white/5 rounded-lg overflow-hidden border border-white/10">
          <div className="h-[800px] w-full">
            <iframe
              src={ASSETS.cv}
              className="w-full h-full"
              title="Enis Buliqi CV"
            />
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