import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Palette,
  Monitor,
  Smartphone,
  Package,
  PenTool,
  Layers,
  Image,
  Megaphone,
  Gift,
  Music,
  Calendar,
  Share2,
} from "lucide-react";

const skills = [
  {
    icon: PenTool,
    title: "Logo Design",
    description:
      "Creating memorable and distinctive logos that capture brand essence",
    level: 95,
  },
  {
    icon: Megaphone,
    title: "Campaign Design",
    description:
      "Comprehensive campaign materials that drive engagement and results",
    level: 90,
  },
  {
    icon: Palette,
    title: "Branding",
    description:
      "Complete brand identity systems including guidelines and applications",
    level: 92,
  },
  {
    icon: Share2,
    title: "Social Media Posts",
    description: "Eye-catching social media content that boosts engagement",
    level: 88,
  },
  {
    icon: Image,
    title: "Banners",
    description: "Professional banners for web and print applications",
    level: 85,
  },
  {
    icon: Calendar,
    title: "Events & Competition",
    description:
      "Design solutions for events, competitions and promotional materials",
    level: 87,
  },
  {
    icon: Music,
    title: "Album Covers & Posters",
    description: "Creative album covers and promotional posters that stand out",
    level: 90,
  },
  {
    icon: Gift,
    title: "Gift Cards",
    description: "Attractive gift card designs that enhance brand recognition",
    level: 83,
  },
];

// Official Canva SVG as React component
const CanvaIcon = () => (
  <svg
    viewBox="0 0 508 508"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    width="24"
    height="24"
  >
    <g transform="matrix(.26718 0 0 .26718 0 0)">
      <circle cx="950" cy="950" r="950" fill="#7d2ae7" />
      <circle cx="950" cy="950" r="950" fill="url(#prefix___Radial1)" />
      <circle cx="950" cy="950" r="950" fill="url(#prefix___Radial2)" />
      <circle cx="950" cy="950" r="950" fill="url(#prefix___Radial3)" />
      <circle cx="950" cy="950" r="950" fill="url(#prefix___Radial4)" />
    </g>
    <path
      d="M446.744 276.845c-.665 0-1.271.43-1.584 1.33-4.011 11.446-9.43 18.254-13.891 18.254-2.563 0-3.6-2.856-3.6-7.336 0-11.21 6.71-34.982 10.095-45.82.392-1.312.646-2.485.646-3.483 0-3.15-1.722-4.696-5.987-4.696-4.598 0-9.547 1.8-14.36 10.233-1.663-7.435-6.691-10.683-13.715-10.683-8.12 0-15.965 5.224-22.421 13.696-6.456 8.471-14.048 11.25-19.76 9.88 4.108-10.057 5.634-17.57 5.634-23.145 0-8.746-4.324-14.028-11.308-14.028-10.624 0-16.747 10.134-16.747 20.797 0 8.237 3.736 16.708 11.954 20.817-6.887 15.573-16.943 29.66-20.758 29.66-4.93 0-6.379-24.123-6.105-41.38.176-9.9.998-10.408.998-13.401 0-1.722-1.115-2.896-5.595-2.896-10.448 0-13.676 8.844-14.165 18.998a50.052 50.052 0 01-1.8 11.406c-4.363 15.573-13.363 27.39-19.232 27.39-2.72 0-3.463-2.72-3.463-6.28 0-11.21 6.28-25.219 6.28-37.173 0-8.784-3.854-14.34-11.112-14.34-8.55 0-19.858 10.173-30.56 29.229 3.521-14.595 4.97-28.721-5.459-28.721a14.115 14.115 0 00-6.476 1.683 3.689 3.689 0 00-2.113 3.56c.998 15.535-12.521 55.329-25.336 55.329-2.328 0-3.463-2.524-3.463-6.593 0-11.23 6.691-34.943 10.056-45.801.43-1.409.666-2.622.666-3.678 0-2.974-1.84-4.5-6.007-4.5-4.578 0-9.547 1.741-14.34 10.174-1.683-7.435-6.711-10.683-13.735-10.683-11.523 0-24.397 12.19-30.051 28.076-7.572 21.208-22.832 41.692-43.375 41.692-18.645 0-28.486-15.515-28.486-40.03 0-35.392 25.982-64.308 45.253-64.308 9.215 0 13.617 5.869 13.617 14.869 0 10.897-6.085 15.964-6.085 20.112 0 1.272 1.057 2.524 3.15 2.524 8.374 0 18.234-9.841 18.234-23.262 0-13.422-10.897-23.243-30.168-23.243-31.851 0-63.898 32.047-63.898 73.113 0 32.673 16.121 52.374 44 52.374 19.017 0 35.628-14.79 44.588-32.047 1.018 14.302 7.513 21.776 17.413 21.776 8.804 0 15.925-5.243 21.364-14.458 2.094 9.645 7.65 14.36 14.87 14.36 8.275 0 15.201-5.243 21.794-14.986-.097 7.65 1.644 14.85 8.276 14.85 3.13 0 6.867-.725 7.533-3.464 6.984-28.877 24.24-52.453 29.523-52.453 1.565 0 1.995 1.507 1.995 3.287 0 7.846-5.537 23.928-5.537 34.2 0 11.092 4.716 18.43 14.459 18.43 10.8 0 21.775-13.227 29.092-32.556 2.29 18.058 7.24 32.633 14.987 32.633 9.508 0 26.392-20.014 36.625-41.203 4.01.509 10.036.372 15.827-3.717-2.465 6.241-3.912 13.07-3.912 19.897 0 19.663 9.39 25.18 17.47 25.18 8.785 0 15.907-5.243 21.365-14.458 1.8 8.315 6.398 14.34 14.85 14.34 13.225 0 24.71-13.519 24.71-24.612 0-2.934-1.252-4.715-2.72-4.715zm-274.51 18.547c-5.342 0-7.435-5.38-7.435-13.401 0-13.93 9.528-37.193 19.604-37.193 4.402 0 6.065 5.185 6.065 11.524 0 14.145-9.059 39.07-18.235 39.07zm182.948-41.574c-3.189-3.796-4.343-8.961-4.343-13.559 0-5.673 2.074-10.467 4.558-10.467 2.485 0 3.248 2.446 3.248 5.85 0 5.693-2.035 14.008-3.463 18.176zm41.418 41.574c-5.34 0-7.434-6.182-7.434-13.401 0-13.441 9.528-37.193 19.682-37.193 4.402 0 5.967 5.146 5.967 11.524 0 14.145-8.902 39.07-18.215 39.07z"
      fill="#fff"
      fillRule="nonzero"
    />
    <defs>
      <radialGradient
        id="prefix___Radial1"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="scale(1469.491) rotate(-49.416 1.37 .302)"
      >
        <stop offset="0" stopColor="#6420ff" />
        <stop offset="1" stopColor="#6420ff" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="prefix___Radial2"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(54.703 42.717 594.194) scale(1657.122)"
      >
        <stop offset="0" stopColor="#00c4cc" />
        <stop offset="1" stopColor="#00c4cc" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="prefix___Radial3"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(1023 -1030 473.711 470.491 367 1684)"
      >
        <stop offset="0" stopColor="#6420ff" />
        <stop offset="1" stopColor="#6420ff" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="prefix___Radial4"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(595.999 1372 -2298.41 998.431 777 256)"
      >
        <stop offset="0" stopColor="#00c4cc" stopOpacity=".73" />
        <stop offset="0" stopColor="#00c4cc" />
        <stop offset="1" stopColor="#00c4cc" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

// Official CapCut SVG as React component
const CapCutIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 512 509.659"
    width="24"
    height="24"
  >
    <path
      fill="#fff"
      d="M116.971 2.475h278.058c62.971 0 114.494 51.522 114.494 114.494v275.722c0 62.971-51.523 114.493-114.494 114.493H116.971c-62.972 0-114.494-51.522-114.494-114.493V116.969c0-62.972 51.522-114.494 114.494-114.494z"
    />
    <path
      fill="#999"
      fillRule="nonzero"
      d="M116.97-.001h278.06C459.366-.001 512 52.633 512 116.969v275.722c0 64.335-52.634 116.969-116.97 116.969H116.97C52.636 509.66 0 457.026 0 392.691V116.969C0 52.633 52.636-.001 116.97-.001zm278.06 4.953H116.97C55.364 4.952 4.953 55.363 4.953 116.969v275.722c0 61.605 50.411 112.017 112.017 112.017h278.06c61.607 0 112.017-50.411 112.017-112.017V116.969c0-61.607-50.41-112.017-112.017-112.017z"
    />
    <path
      fill="#fff"
      fillRule="nonzero"
      d="M109.095 181.505c-.123 8.897 0 17.813 0 26.71a5.41 5.41 0 003.225 4.917 23898.407 23898.407 0 0084.108 41.646c-27.832 13.672-55.563 27.526-83.353 41.259a5.938 5.938 0 00-4.081 4.876v26.771c1.854 18.195 15.823 32.817 33.913 35.503 3.509.326 7.02.266 10.529.266l155.85.001a45.08 45.08 0 0011.224-.92 40.825 40.825 0 0026.137-20.015 63.699 63.699 0 004.288-11.226c15.997 8.325 32.341 16.079 48.462 24.179.385.291.857.447 1.343.447a2.266 2.266 0 002.265-2.265v-.016-27.669a4.695 4.695 0 00-3.143-4.079l-135.323-67.112c45.203-22.431 90.412-44.876 135.63-67.335a4.573 4.573 0 002.754-4.082v-27.628a2.183 2.183 0 00-3.142-1.673l-49.135 24.363a42.189 42.189 0 00-6.388-14.917 40.613 40.613 0 00-30.097-17.422l-167.133-.001c-19.615.91-35.688 15.918-37.933 35.424v-.002z"
    />
    <path
      fill="#fff"
      fillRule="nonzero"
      d="M140.049 181.689a10.082 10.082 0 019.345-5.55h161.545l.106-.001c5.066 0 9.368 3.72 10.096 8.734.205 2.714.102 5.428 0 8.162l-90.597 44.891c-30.608-15.018-61.03-30.22-91.535-45.339.142-3.632-.633-7.53 1.04-10.897zM139.009 317.095a24846.007 24846.007 0 0191.351-45.319c30.322 14.773 60.521 29.954 90.802 44.89-.204 3.918.755 8.162-1.305 11.773a10.085 10.085 0 01-8.755 5.08h-.082l-161.605.002-.277.002a10.202 10.202 0 01-9.007-5.411c-1.796-3.386-.98-7.345-1.122-11.017z"
    />
    <path
      fillRule="nonzero"
      d="M109.095 181.505c2.223-19.532 18.316-34.578 37.955-35.483l167.194-.001a40.612 40.612 0 0130.095 17.427 42.152 42.152 0 016.39 14.915l49.135-24.364a2.185 2.185 0 013.141 1.674v27.628l.001.096a4.571 4.571 0 01-2.837 4.229 177620.936 177620.936 0 00-135.63 67.336l135.324 66.948a4.695 4.695 0 013.142 4.08v27.685a2.266 2.266 0 01-3.613 1.821c-16.12-8.162-32.464-15.854-48.462-24.18a63.503 63.503 0 01-4.282 11.225 40.813 40.813 0 01-26.098 20.135 44.994 44.994 0 01-11.221.919l-155.833.003c-3.51 0-7.04 0-10.53-.266-18.089-2.705-32.049-17.363-33.869-35.565v-26.77a5.935 5.935 0 014.08-4.879c27.791-13.732 55.521-27.587 83.353-41.258a32412.61 32412.61 0 00-84.17-41.748 5.41 5.41 0 01-3.223-4.918c-.042-8.876-.185-17.792-.042-26.689zm30.975.184c-1.674 3.367-.898 7.263-1.041 10.896 30.608 15.12 60.99 30.321 91.536 45.339 30.185-14.963 60.384-29.927 90.596-44.89 0-2.714.123-5.428 0-8.162a10.203 10.203 0 00-10.096-8.734h-.106l-161.565.001a10.082 10.082 0 00-9.345 5.55h.021zm-1.041 135.406c.142 3.673-.654 7.631 1.122 11.039a10.204 10.204 0 009.284 5.405l161.667.002.081-.001c3.618 0 6.961-1.94 8.754-5.081 2.04-3.57 1.102-7.855 1.305-11.773-30.26-14.936-60.48-30.118-90.801-44.89a43915.126 43915.126 0 00-91.432 45.299h.02z"
    />
  </svg>
);

// Official Figma SVG as React component
const FigmaIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 346 512.36"
    width="24"
    height="24"
  >
    <g fillRule="nonzero">
      <path
        fill="#00B6FF"
        d="M172.53 246.9c0-42.04 34.09-76.11 76.12-76.11h11.01c.3.01.63-.01.94-.01 47.16 0 85.4 38.25 85.4 85.4 0 47.15-38.24 85.39-85.4 85.39-.31 0-.64-.01-.95-.01l-11 .01c-42.03 0-76.12-34.09-76.12-76.12V246.9z"
      />
      <path
        fill="#24CB71"
        d="M0 426.98c0-47.16 38.24-85.41 85.4-85.41l87.13.01v84.52c0 47.65-39.06 86.26-86.71 86.26C38.67 512.36 0 474.13 0 426.98z"
      />
      <path
        fill="#FF7237"
        d="M172.53.01v170.78h87.13c.3-.01.63.01.94.01 47.16 0 85.4-38.25 85.4-85.4C346 38.24 307.76 0 260.6 0c-.31 0-.64.01-.95.01h-87.12z"
      />
      <path
        fill="#FF3737"
        d="M0 85.39c0 47.16 38.24 85.4 85.4 85.4h87.13V.01H85.39C38.24.01 0 38.24 0 85.39z"
      />
      <path
        fill="#874FFF"
        d="M0 256.18c0 47.16 38.24 85.4 85.4 85.4h87.13V170.8H85.39C38.24 170.8 0 209.03 0 256.18z"
      />
    </g>
  </svg>
);

const tools = [
  {
    name: "Adobe Photoshop",
    level: 100,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png",
  },
  {
    name: "Adobe Illustrator",
    level: 100,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png",
  },
  {
    name: "Adobe InDesign",
    level: 93,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/2101px-Adobe_InDesign_CC_icon.svg.png",
  },
  { name: "Canva", level: 98, logo: "canva" },
  { name: "CapCut", level: 75, logo: "capcut" },
  { name: "Figma", level: 55, logo: "figma" },
];

const SkillsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-slate-900">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Skills & <span className="text-purple-400">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I combine creativity with technical expertise to deliver exceptional
            design solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">
              What I Do
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="bg-white/5 border-white/10 group hover:bg-white/10 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/30 transition-colors">
                        <skill.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {skill.title}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">
              Tools I Use
            </h3>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {tools.map((tool, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          {tool.logo === "canva" ? (
                            <CanvaIcon />
                          ) : tool.logo === "capcut" ? (
                            <CapCutIcon />
                          ) : tool.logo === "figma" ? (
                            <FigmaIcon />
                          ) : tool.logo.startsWith("http") ? (
                            <img
                              src={tool.logo}
                              alt={tool.name}
                              className="w-6 h-6"
                            />
                          ) : (
                            <span className="text-2xl">{tool.logo}</span>
                          )}
                          <span className="text-white font-medium">
                            {tool.name}
                          </span>
                        </div>
                        <span className="text-purple-400">{tool.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-blue-900 h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${tool.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-4">
                Certifications
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">
                    Roi Academy - Basic Graphic Design Training
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">
                    Roi Academy - Advanced Graphic Design Training
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
