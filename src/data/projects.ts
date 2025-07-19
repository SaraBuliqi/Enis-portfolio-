// Project data for the portfolio
// This file exports the projects array and the Project type

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  tags: string[];
  technologies: string[];
  client: string;
  date: string;
  teamSize: string;
  liveUrl: string | null;
  githubUrl: string | null;
  featured: boolean;
}

export const projects: Project[] = [
  // Social Media Posts
  {
    id: 1,
    title: "Shpiragu Social Media",
    category: "Social Media Posts",
    description:
      "Creative social media content for Shpiragu brand engagement and audience growth.",
    fullDescription:
      "A comprehensive social media campaign for Shpiragu brand, featuring engaging content that increased brand awareness by 40% and boosted customer engagement. The campaign included Instagram posts, stories, and interactive content designed to resonate with the target audience.",
    image: "/Enis/postet/SOCIAL%20M%20POSTS/shpiragu/shpiragu%20mikser.jpg",
    images: [
      "/Enis/postet/SOCIAL%20M%20POSTS/shpiragu/shpiragu%20mikser.jpg",
      "/Enis/postet/SOCIAL%20M%20POSTS/shpiragu/shpiragu%20banak%201.1.jpg",
      "/Enis/postet/SOCIAL%20M%20POSTS/shpiragu/shpiragu%20mikser1.1.jpg",
      "/Enis/postet/SOCIAL%20M%20POSTS/shpiragu/shpragu%20banak.jpg",
    ],
    tags: ["Instagram", "Social Media", "Content Creation"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Canva"],
    client: "Shpiragu",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: 2,
    title: "Sharp Postime Campaign",
    category: "Social Media Posts",
    description:
      "Engaging social media posts for Sharp Postime brand awareness and customer interaction.",
    fullDescription:
      "Strategic social media campaign for Sharp Postime that focused on building brand awareness and fostering customer relationships. The campaign utilized modern design trends and interactive elements to maximize engagement.",
    image: "/Enis/postet/SOCIAL%20M%20POSTS/sharp%20postime/sharp%20tema%202.jpg",
    images: [
      "/Enis/postet/SOCIAL%20M%20POSTS/sharp%20postime/sharp%20tema%202.jpg",
      "/Enis/postet/SOCIAL%20M%20POSTS/sharp%20postime/sharp%20post%201.jpg",
      "/Enis/postet/SOCIAL%20M%20POSTS/sharp%20postime/sharp%20post%201.1.jpg",
      "/Enis/postet/SOCIAL%20M%20POSTS/sharp%20postime/sharp%20tema%203.jpg",
      "/Enis/postet/SOCIAL%20M%20POSTS/sharp%20postime/sharp%20tema%204.jpg",
    ],
    tags: ["Social Media", "Brand Awareness", "Digital Marketing"],
    technologies: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Social Media Tools",
    ],
    client: "Sharp Postime",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: 3,
    title: "Saraqi Social Content",
    category: "Social Media Posts",
    description:
      "Dynamic social media content series for Saraqi brand promotion and engagement.",
    fullDescription:
      "A dynamic social media content series designed to promote Saraqi brand and increase customer engagement. The project featured consistent branding and creative content that resonated with the target audience.",
    image: "/Enis/postet/SOCIAL%20M%20POSTS/saraqi/saraqi%203.jpg",
    images: [
      "/Enis/postet/SOCIAL%20M%20POSTS/saraqi/saraqi%203.jpg",
      "/Enis/postet/SOCIAL%20M%20POSTS/saraqi/saraqi%201.jpg",
      "/Enis/postet/SOCIAL%20M%20POSTS/saraqi/saraqi%202.jpg",
      "/Enis/postet/SOCIAL%20M%20POSTS/saraqi/saraqi%204.jpg",
      "/Enis/postet/SOCIAL%20M%20POSTS/saraqi/saraqi%205.jpg",
      "/Enis/postet/SOCIAL%20M%20POSTS/saraqi/saraqi%206.jpg",
      "/Enis/postet/SOCIAL%20M%20POSTS/saraqi/saraqi%207.jpg",
    ],
    tags: ["Social Media", "Brand Promotion", "Content Strategy"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Content Strategy"],
    client: "Saraqi",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 4,
    title: "ROI Kids Campaign",
    category: "Social Media Posts",
    description:
      "Fun and engaging social media content designed for children's brand ROI Kids.",
    fullDescription:
      "Creative social media content specifically designed for ROI Kids brand, featuring colorful and engaging designs that appeal to children and parents alike. The campaign focused on creating a fun and trustworthy brand image.",
    image: "/Enis/postet/SOCIAL%20M%20POSTS/roikids/kids%202.2%20ks.jpg",
    images: [
      "/Enis/postet/SOCIAL%20M%20POSTS/roikids/kids%202.2%20ks.jpg",
      "/Enis/postet/SOCIAL%20M%20POSTS/roikids/kids%202.1%20ks.jpg",
    ],
    tags: ["Children's Brand", "Social Media", "Engagement"],
    technologies: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Child-Friendly Design",
    ],
    client: "ROI Kids",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  // Album Covers
  {
    id: 5,
    title: "MASQUERADE Album Design",
    category: "Album Covers",
    description:
      "Striking album cover design for MASQUERADE featuring bold visuals and artistic elements.",
    fullDescription:
      "A visually captivating album cover design for MASQUERADE that combines bold typography with artistic elements to create a memorable visual identity. The design includes both front and back covers with cohesive branding.",
    image: "/Enis/postet/album%20covers/MASQUERADE%20ARTCOVER.jpg",
    images: [
      "/Enis/postet/album%20covers/MASQUERADE%20ARTCOVER.jpg",
      "/Enis/postet/album%20covers/MASQUERADE%20BACKCOVER.jpg",
    ],
    tags: ["Album Cover", "Music", "Typography"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Typography Design"],
    client: "MASQUERADE",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: 6,
    title: "REBIRTH Album Design",
    category: "Album Covers",
    description:
      "Dynamic album cover design for REBIRTH with contemporary visual elements.",
    fullDescription:
      "An innovative album cover design for REBIRTH that incorporates contemporary design elements and symbolism. The project included front and back covers with a unified visual theme.",
    image: "/Enis/postet/album%20covers/REBIRTH%20ARTCOVER.jpg",
    images: [
      "/Enis/postet/album%20covers/REBIRTH%20ARTCOVER.jpg",
      "/Enis/postet/album%20covers/REBIRTH%20BACKCOVER.jpg",
    ],
    tags: ["Album Cover", "Music", "Contemporary Design"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Digital Art"],
    client: "REBIRTH",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  // Brand Identity
  {
    id: 7,
    title: "MEDUS Brand Identity",
    category: "Brand Identity",
    description:
      "Comprehensive brand identity design for MEDUS with modern and versatile elements.",
    fullDescription:
      "A complete brand identity system for MEDUS that includes logo design, color palette, typography, and brand guidelines. The design focuses on creating a modern and versatile identity that works across various applications.",
    image: "/Enis/postet/BRAND%20IDENTITY/MEDUS%20BRAND%20IDENTITY.jpg",
    images: ["/Enis/postet/BRAND%20IDENTITY/MEDUS%20BRAND%20IDENTITY.jpg"],
    tags: ["Brand Identity", "Logo Design", "Guidelines"],
    technologies: ["Adobe Illustrator", "Adobe InDesign", "Brand Strategy"],
    client: "MEDUS",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  // Gift Cards
  {
    id: 8,
    title: "ROI Gift Card Design",
    category: "Gift Cards",
    description:
      "Elegant gift card designs for ROI with front and back layouts.",
    fullDescription:
      "Custom gift card designs for ROI featuring elegant layouts and premium finishes. The project included both front and back designs with attention to detail and brand consistency.",
    image: "/Enis/postet/gift%20card/roi%20card%20perpara.jpg",
    images: [
      "/Enis/postet/gift%20card/roi%20card%20perpara.jpg",
      "/Enis/postet/gift%20card/roi%20card%20mrapa.jpg",
    ],
    tags: ["Gift Cards", "Print Design", "Branding"],
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Print Design"],
    client: "ROI",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  // Campaigns
  {
    id: 9,
    title: "Pretty Campaign",
    category: "Campaigns",
    description:
      "Comprehensive marketing campaign for Pretty brand with multiple visual assets.",
    fullDescription:
      "A multi-faceted marketing campaign for Pretty brand that included various visual assets and promotional materials. The campaign focused on brand consistency while delivering engaging content across different platforms.",
    image: "/Enis/postet/kampanjat/pretty%20campaign.jpg",
    images: [
      "/Enis/postet/kampanjat/pretty%20campaign.jpg",
      "/Enis/postet/kampanjat/pretty%20kamp0anja.jpg",
    ],
    tags: ["Marketing Campaign", "Brand Promotion", "Visual Design"],
    technologies: [
      "Adobe Creative Suite",
      "Marketing Strategy",
      "Campaign Design",
    ],
    client: "Pretty",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  // Banners
  {
    id: 10,
    title: "Pretty Banners Collection",
    category: "Banners",
    description:
      "Eye-catching banner designs for Pretty brand with modern aesthetics.",
    fullDescription:
      "A collection of modern banner designs for Pretty brand that showcase contemporary design trends and effective visual communication. The banners were designed to work across various digital platforms.",
    image: "/Enis/postet/pretty%20banerat/deborah%20milano%20baner.jpg",
    images: [
      "/Enis/postet/pretty%20banerat/deborah%20milano%20baner.jpg",
      "/Enis/postet/pretty%20banerat/dermolab%20baner.jpg",
      "/Enis/postet/pretty%20banerat/flormar%20baner.jpg",
      "/Enis/postet/pretty%20banerat/flormar%202%20baner.jpg",
      "/Enis/postet/pretty%20banerat/parfum%20baner.jpg",
      "/Enis/postet/pretty%20banerat/pierre%20cardin%20baner.jpg",
    ],
    tags: ["Banner Design", "Digital Marketing", "Brand Promotion"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Digital Design"],
    client: "Pretty",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  // Events and Competitions
  {
    id: 11,
    title: "Events and Competitions",
    category: "Events",
    description:
      "Creative designs for various events and competition materials.",
    fullDescription:
      "A diverse collection of event and competition materials showcasing creative design solutions for different occasions and promotional activities.",
    image: "/Enis/postet/EVENTS%20AND%20COMP/KONKURS%20PUNE%20VER%201.jpg",
    images: [
      "/Enis/postet/EVENTS%20AND%20COMP/KONKURS%20PUNE%20VER%201.jpg",
      "/Enis/postet/EVENTS%20AND%20COMP/shpiragu%20event%20english.jpg",
    ],
    tags: ["Event Design", "Competition", "Promotional Materials"],
    technologies: ["Adobe Creative Suite", "Event Design", "Print Design"],
    client: "Various",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
];
