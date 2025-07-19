import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Sparkles,
  PenTool,
  Monitor,
  Palette,
  Star,
  Heart,
  Code,
  MousePointer,
  Github,
  Instagram,
  Dribbble,
  Figma,
  Wand2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Add custom keyframes for gradient and blob animation
const extraAnimations = `
  @keyframes gradient-move {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  @keyframes blob1 {
    0%, 100% { transform: scale(1) translate(0, 0); }
    33% { transform: scale(1.1) translate(20px, -10px); }
    66% { transform: scale(0.9) translate(-10px, 20px); }
  }
  @keyframes blob2 {
    0%, 100% { transform: scale(1) translate(0, 0); }
    33% { transform: scale(1.05) translate(-20px, 10px); }
    66% { transform: scale(0.95) translate(10px, -20px); }
  }
  @keyframes blob3 {
    0%, 100% { transform: scale(1) translate(0, 0); }
    33% { transform: scale(1.08) translate(10px, 10px); }
    66% { transform: scale(0.92) translate(-10px, -10px); }
  }
  @keyframes letter-reveal {
    0% { opacity: 0; transform: translateY(30px) scale(0.8); }
    100% { opacity: 1; transform: none; }
  }
  @keyframes wand-glow {
    0% { opacity: 0.9; transform: scale(1); box-shadow: 0 0 0 0 #fffbe688; }
    60% { opacity: 1; transform: scale(2.2); box-shadow: 0 0 120px 80px #fffbe6cc, 0 0 200px 120px #fde68aff; }
    100% { opacity: 0; transform: scale(3); box-shadow: 0 0 0 0 #fde68a00; }
  }
  html {
    scroll-behavior: smooth;
  }
`;

if (
  typeof document !== "undefined" &&
  !document.getElementById("extra-hero-animations")
) {
  const style = document.createElement("style");
  style.id = "extra-hero-animations";
  style.innerHTML = extraAnimations;
  document.head.appendChild(style);
}

const name = ["E", "n", "i", "s", " ", "B", "u", "l", "i", "q", "i"];

const drawPathKeyframes = `
  @keyframes drawPath {
    to { stroke-dashoffset: 0; }
  }
`;
if (
  typeof document !== "undefined" &&
  !document.getElementById("draw-path-keyframes")
) {
  const style = document.createElement("style");
  style.id = "draw-path-keyframes";
  style.innerHTML = drawPathKeyframes;
  document.head.appendChild(style);
}

const Hero = () => {
  // For accessibility, join the name for screen readers
  const nameString = name.join("");

  // Parallax state
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Tooltip state
  const [tooltip, setTooltip] = useState("");
  const { toast } = useToast();

  // Wand glow state
  const [wandGlow, setWandGlow] = useState(false);
  const [hasAutoClicked, setHasAutoClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
      setParallax({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Floating icon animation keyframes
  useEffect(() => {
    if (
      typeof document !== "undefined" &&
      !document.getElementById("floating-icons-keyframes")
    ) {
      const style = document.createElement("style");
      style.id = "floating-icons-keyframes";
      style.innerHTML = `
        @keyframes float1 { 0%,100%{transform:translateY(0) rotate(0deg);} 50%{transform:translateY(-20px) rotate(10deg);} }
        @keyframes float2 { 0%,100%{transform:translateY(0) rotate(0deg);} 50%{transform:translateY(15px) rotate(-8deg);} }
        @keyframes float3 { 0%,100%{transform:translateY(0) rotate(0deg);} 50%{transform:translateY(-10px) rotate(6deg);} }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // Tooltip timeout
  useEffect(() => {
    if (tooltip) {
      const t = setTimeout(() => setTooltip(""), 1200);
      return () => clearTimeout(t);
    }
  }, [tooltip]);

  // Sound effect
  const playSound = () => {
    if (typeof window !== "undefined") {
      const audio = new Audio(
        "https://cdn.pixabay.com/audio/2022/07/26/audio_124bfae5b2.mp3",
      ); // fun pop sound
      audio.volume = 0.3;
      audio.play();
    }
  };

  // Icon click handler
  const handleIconClick = (msg) => {
    setTooltip(msg);
    toast({ title: msg });
    playSound();
  };

  // Wand glow handler
  const handleWandClick = (e) => {
    setWandGlow(true);
    // Play magic sound
    if (typeof window !== "undefined") {
      const audio = new Audio(
        "https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b7b7.mp3",
      );
      audio.volume = 0.4;
      audio.play();
    }
    setTimeout(() => setWandGlow(false), 1600); // longer duration
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navigation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Auto-click wand after 2 seconds (only once when entering)
  useEffect(() => {
    if (!hasAutoClicked) {
      const timeoutId = setTimeout(() => {
        handleWandClick(null);
        setHasAutoClicked(true);
      }, 2000); // 2000ms = 2 seconds

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [handleWandClick, hasAutoClicked]);

  if (
    typeof document !== "undefined" &&
    !document.getElementById("star-twinkle-keyframes")
  ) {
    const style = document.createElement("style");
    style.id = "star-twinkle-keyframes";
    style.innerHTML = `@keyframes starTwinkle { 0%{opacity:1; r:6;} 100%{opacity:0.5; r:9;} }`;
    document.head.appendChild(style);
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements with parallax and floating icons */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div
          className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-blob1"
          style={{
            animation: "blob1 12s ease-in-out infinite",
            transform: `scale(1) translate(${parallax.x * 20}px, ${parallax.y * -10}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob2"
          style={{
            animation: "blob2 14s ease-in-out infinite",
            transform: `scale(1) translate(${parallax.x * -20}px, ${parallax.y * 10}px)`,
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-blob3"
          style={{
            animation: "blob3 16s ease-in-out infinite",
            transform: `scale(1) translate(${parallax.x * 10}px, ${parallax.y * 10}px)`,
          }}
        ></div>
        {/* Floating interactive icons (now clickable and animated on hover) */}
        <div className="absolute left-32 top-1/3 z-10">
          <PenTool
            tabIndex={0}
            className="w-12 h-12 text-pink-400 opacity-70 transition-transform duration-300 hover:scale-125 hover:drop-shadow-lg focus:scale-125 cursor-pointer pointer-events-auto"
            style={{
              animation: "float1 6s ease-in-out infinite",
              filter: "drop-shadow(0 4px 16px #ec4899aa)",
              transform: `translate(${parallax.x * 10}px, ${parallax.y * 8}px)`,
            }}
            onClick={() => handleIconClick("Design Power!")}
            onMouseEnter={() => setTooltip("Design Tool")}
            onMouseLeave={() => setTooltip("")}
          />
        </div>
        <div className="absolute right-40 top-1/4 z-10">
          <Monitor
            tabIndex={0}
            className="w-14 h-14 text-blue-400 opacity-60 transition-transform duration-300 hover:scale-125 hover:drop-shadow-lg focus:scale-125 cursor-pointer pointer-events-auto"
            style={{
              animation: "float2 7s ease-in-out infinite",
              filter: "drop-shadow(0 4px 16px #60a5faaa)",
              transform: `translate(${parallax.x * -8}px, ${parallax.y * 12}px)`,
            }}
            onClick={() => handleIconClick("Web Magic!")}
            onMouseEnter={() => setTooltip("Web Design")}
            onMouseLeave={() => setTooltip("")}
          />
        </div>
        <div className="absolute left-1/2 bottom-32 z-10">
          <Palette
            tabIndex={0}
            className="w-10 h-10 text-purple-400 opacity-60 transition-transform duration-300 hover:scale-125 hover:drop-shadow-lg focus:scale-125 cursor-pointer pointer-events-auto"
            style={{
              animation: "float3 8s ease-in-out infinite",
              filter: "drop-shadow(0 4px 16px #a78bfa99)",
              transform: `translate(${parallax.x * 6}px, ${parallax.y * -10}px)`,
            }}
            onClick={() => handleIconClick("Creative Color!")}
            onMouseEnter={() => setTooltip("Palette")}
            onMouseLeave={() => setTooltip("")}
          />
        </div>
        {/* Move Star icon parallel with Heart (same bottom-1/4, left-1/4) */}
        <div className="absolute left-1/4 bottom-1/4 z-10">
          <Star
            tabIndex={0}
            className="w-10 h-10 text-yellow-400 opacity-70 transition-transform duration-300 hover:scale-125 hover:drop-shadow-lg focus:scale-125 cursor-pointer pointer-events-auto"
            style={{
              animation: "float2 9s ease-in-out infinite",
              filter: "drop-shadow(0 4px 16px #fde68a99)",
              transform: `translate(${parallax.x * 12}px, ${parallax.y * 6}px)`,
            }}
            onClick={() => handleIconClick("Shining Star!")}
            onMouseEnter={() => setTooltip("Star Quality")}
            onMouseLeave={() => setTooltip("")}
          />
        </div>
        {/* Heart icon remains at right-1/4 bottom-1/4 */}
        <div className="absolute right-1/4 bottom-1/4 z-10">
          <Heart
            tabIndex={0}
            className="w-10 h-10 text-red-400 opacity-70 transition-transform duration-300 hover:scale-125 hover:drop-shadow-lg focus:scale-125 cursor-pointer pointer-events-auto"
            style={{
              animation: "float1 10s ease-in-out infinite",
              filter: "drop-shadow(0 4px 16px #f8717199)",
              transform: `translate(${parallax.x * -12}px, ${parallax.y * -6}px)`,
            }}
            onClick={() => handleIconClick("Passion!")}
            onMouseEnter={() => setTooltip("Passion")}
            onMouseLeave={() => setTooltip("")}
          />
        </div>
        <div className="absolute left-1/3 bottom-1/5 z-10">
          <Code
            tabIndex={0}
            className="w-10 h-10 text-green-400 opacity-70 transition-transform duration-300 hover:scale-125 hover:drop-shadow-lg focus:scale-125 cursor-pointer pointer-events-auto"
            style={{
              animation: "float3 11s ease-in-out infinite",
              filter: "drop-shadow(0 4px 16px #6ee7b799)",
              transform: `translate(${parallax.x * 7}px, ${parallax.y * 14}px)`,
            }}
            onClick={() => handleIconClick("Code Art!")}
            onMouseEnter={() => setTooltip("Code")}
            onMouseLeave={() => setTooltip("")}
          />
        </div>
        <div className="absolute right-1/3 top-1/5 z-10">
          <MousePointer
            tabIndex={0}
            className="w-10 h-10 text-cyan-400 opacity-70 transition-transform duration-300 hover:scale-125 hover:drop-shadow-lg focus:scale-125 cursor-pointer pointer-events-auto"
            style={{
              animation: "float2 12s ease-in-out infinite",
              filter: "drop-shadow(0 4px 16px #22d3ee99)",
              transform: `translate(${parallax.x * -7}px, ${parallax.y * -14}px)`,
            }}
            onClick={() => handleIconClick("Pointer Power!")}
            onMouseEnter={() => setTooltip("Pointer")}
            onMouseLeave={() => setTooltip("")}
          />
        </div>
        <div className="absolute left-1/5 top-1/2 z-10">
          <Github
            tabIndex={0}
            className="w-10 h-10 text-gray-800 dark:text-white opacity-80 transition-transform duration-300 hover:scale-125 hover:drop-shadow-lg focus:scale-125 cursor-pointer pointer-events-auto"
            style={{
              animation: "float1 13s ease-in-out infinite",
              filter: "drop-shadow(0 4px 16px #3338)",
              transform: `translate(${parallax.x * 14}px, ${parallax.y * 10}px)`,
            }}
            onClick={() => handleIconClick("Code on Github!")}
            onMouseEnter={() => setTooltip("Github")}
            onMouseLeave={() => setTooltip("")}
          />
        </div>
        <div className="absolute left-1/4 bottom-1/6 z-10">
          <Dribbble
            tabIndex={0}
            className="w-10 h-10 text-pink-400 opacity-80 transition-transform duration-300 hover:scale-125 hover:drop-shadow-lg focus:scale-125 cursor-pointer pointer-events-auto"
            style={{
              animation: "float3 15s ease-in-out infinite",
              filter: "drop-shadow(0 4px 16px #f472b688)",
              transform: `translate(${parallax.x * 8}px, ${parallax.y * 16}px)`,
            }}
            onClick={() => handleIconClick("Dribbble Shots!")}
            onMouseEnter={() => setTooltip("Dribbble")}
            onMouseLeave={() => setTooltip("")}
          />
        </div>
        <div className="absolute right-1/4 top-1/6 z-10">
          <Figma
            tabIndex={0}
            className="w-10 h-10 text-green-500 opacity-80 transition-transform duration-300 hover:scale-125 hover:drop-shadow-lg focus:scale-125 cursor-pointer pointer-events-auto"
            style={{
              animation: "float1 16s ease-in-out infinite",
              filter: "drop-shadow(0 4px 16px #34d39988)",
              transform: `translate(${parallax.x * -8}px, ${parallax.y * -16}px)`,
            }}
            onClick={() => handleIconClick("Figma Flow!")}
            onMouseEnter={() => setTooltip("Figma")}
            onMouseLeave={() => setTooltip("")}
          />
        </div>
        {/* Custom animated SVG illustration: pen drawing a squiggle and a twinkling star */}
        <svg
          width="180"
          height="100"
          className="absolute left-[52%] top-[63%] -translate-x-1/2 z-0 pointer-events-none"
        >
          <path
            d="M20,80 Q60,20 120,80"
            stroke="#a78bfa"
            strokeWidth="4"
            fill="none"
            strokeDasharray="140"
            strokeDashoffset="140"
            style={{
              animation: "drawPath 2.5s 0.5s ease-in-out forwards",
            }}
          />
          <circle
            cx="120"
            cy="80"
            r="6"
            fill="#fbbf24"
            style={{
              filter: "drop-shadow(0 0 16px #fbbf24cc)",
              animation: "starTwinkle 1.2s infinite alternate",
            }}
          />
        </svg>
        {/* Tooltip display */}
        {tooltip && (
          <div className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-20 bg-white/90 text-purple-700 px-4 py-2 rounded-full shadow-lg text-lg font-semibold pointer-events-none animate-fade-in">
            {tooltip}
          </div>
        )}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 overflow-visible pt-24 pb-40">
        <div className="max-w-4xl mx-auto overflow-visible break-words">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full animate-fade-in animate-slide-down">
            <Sparkles className="w-4 h-4 text-purple-400 mr-2 animate-sparkle" />
            <span className="text-purple-300 text-sm">
              Available for freelance projects
            </span>
          </div>

          {/* Main heading with staggered letter reveal */}
          <h1
            className="flex flex-col items-center text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mt-8 mb-6 pb-2 leading-[1.1] w-full break-words overflow-visible animate-hero-heading justify-center"
            aria-label={nameString}
          >
            <span
              className="break-words w-full mb-8 flex items-center justify-center gap-12 text-center"
              aria-hidden="true"
            >
              <span
                className="flex items-center gap-4 ml-16"
                style={{
                  filter: "drop-shadow(0 0 3px #fff)",
                  textShadow: "0 0 1px #fff",
                  marginLeft: "7rem",
                }}
              >
                <span
                  className="inline-block font-normal text-white animate-hero-heading-glow"
                  style={{
                    animation:
                      "letter-reveal 0.5s cubic-bezier(0.23, 1, 0.32, 1) both",
                    animationDelay: "0.30s",
                    letterSpacing: "0.18em",
                    fontFamily:
                      "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif",
                  }}
                >
                  Enis
                </span>{" "}
                <span
                  className="inline-block font-normal text-white animate-hero-heading-glow"
                  style={{
                    animation:
                      "letter-reveal 0.5s cubic-bezier(0.23, 1, 0.32, 1) both",
                    animationDelay: "0.30s",
                    letterSpacing: "0.18em",
                    fontFamily:
                      "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif",
                  }}
                >
                  Buliqi
                </span>
              </span>
              {/* Wand icon next to name */}
              <span
                className="inline-block align-middle relative ml-0"
                style={{ textAlign: "left" }}
              >
                <span className="relative inline-flex items-center group">
                  {/* Always-on glow (responsive) */}
                  <span
                    className="w-14 h-14 md:w-20 md:h-20 lg:w-28 lg:h-28"
                    style={{
                      pointerEvents: "none",
                      zIndex: 0,
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle, #fde68a88 0%, #fde68a33 60%, transparent 100%)",
                      filter: "blur(3px) drop-shadow(0 0 8px #fde68a44)",
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  {/* Burst on click (responsive) */}
                  <span
                    className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
                    style={{
                      pointerEvents: "none",
                      zIndex: 0,
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {wandGlow && (
                      <span
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                          background:
                            "radial-gradient(circle, #fffbe6cc 0%, #fde68a88 60%, transparent 100%)",
                          animation: "wand-glow 1.6s cubic-bezier(0.4,0,0.2,1)",
                          zIndex: 1,
                          filter: "blur(6px) drop-shadow(0 0 16px #fde68a88)",
                          position: "absolute",
                          left: 0,
                          top: 0,
                        }}
                      />
                    )}
                  </span>
                  {/* Click hint */}
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-yellow-300/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    Click me!
                  </span>
                  <Wand2
                    tabIndex={0}
                    className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 text-yellow-300 opacity-90 transition-transform duration-300 hover:scale-150 hover:drop-shadow-2xl focus:scale-150 focus:outline-none cursor-pointer pointer-events-auto animate-bounce group"
                    style={{
                      filter: "drop-shadow(0 4px 40px #fde68a)",
                      animation: "float2 8s ease-in-out infinite",
                      zIndex: 2,
                      position: "relative",
                    }}
                    onClick={handleWandClick}
                    onMouseEnter={() => setTooltip("Magic!")}
                    onMouseLeave={() => setTooltip("")}
                  />
                </span>
              </span>
            </span>
            <span
              className="w-full flex items-center justify-center bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent text-center leading-[1.15] min-h-[1.2em] pb-2 animate-gradient-move relative text-3xl md:text-5xl lg:text-7xl font-extrabold drop-shadow-[0_0_16px_white]"
              style={{
                backgroundSize: "200% 200%",
                animation: "gradient-move 4s ease-in-out infinite",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                textShadow: "0 0 1.5px #fff, 0 0 3px #fff",
                letterSpacing: "0.12em",
                fontFamily:
                  "SweetSansProRegular, Sweet Sans Pro, Arial, sans-serif",
              }}
            >
              {/* Centered Graphic Designer */}
              <span className="inline-block font-normal">Graphic Designer</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in animate-slide-up delay-200">
            I create bold, strategic designs that communicate clearly and leave
            a lasting impact.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-slide-up delay-300">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-800 to-blue-950 hover:from-purple-900 hover:to-slate-950 text-white px-8 py-4 text-lg animate-bounce-in"
              onClick={() => scrollToSection("work")}
            >
              View My Work
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-purple-100 px-8 py-4 text-lg font-semibold animate-bounce-in delay-200"
              onClick={() => scrollToSection("contact")}
            >
              Let's Talk
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto relative z-50">
            <div className="text-center animate-fade-in animate-scale-up delay-200">
              <div className="text-3xl font-bold text-white mb-2">300+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center animate-fade-in animate-scale-up delay-300">
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-gray-400">Clients</div>
            </div>
            <div className="text-center animate-fade-in animate-scale-up delay-400">
              <div className="text-3xl font-bold text-white mb-2">1+</div>
              <div className="text-gray-400">Year Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Add the glow animation style if not present */}
      <style>{`
        @keyframes hero-heading-glow {
          0%, 100% { text-shadow: 0 0 3px #fff, 0 0 8px #fff; filter: drop-shadow(0 0 3px #fff); }
          50% { text-shadow: 0 0 8px #fff, 0 0 16px #fff; filter: drop-shadow(0 0 8px #fff); }
        }
        .animate-hero-heading-glow {
          animation: hero-heading-glow 2s infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default Hero;
