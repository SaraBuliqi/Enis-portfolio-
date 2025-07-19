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
    image: "/Enis/postet/SOCIAL M POSTS/shpiragu/shpiragu mikser.jpg",
    images: [
      "/Enis/postet/SOCIAL M POSTS/shpiragu/shpiragu mikser.jpg",
      "/Enis/postet/SOCIAL M POSTS/shpiragu/shpiragu banak 1.1.jpg",
      "/Enis/postet/SOCIAL M POSTS/shpiragu/shpiragu mikser1.1.jpg",
      "/Enis/postet/SOCIAL M POSTS/shpiragu/shpragu banak.jpg",
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
    image: "/Enis/postet/SOCIAL M POSTS/sharp postime/sharp tema 2.jpg",
    images: [
      "/Enis/postet/SOCIAL M POSTS/sharp postime/sharp tema 2.jpg",
      "/Enis/postet/SOCIAL M POSTS/sharp postime/sharp post 1.jpg",
      "/Enis/postet/SOCIAL M POSTS/sharp postime/sharp post 1.1.jpg",
      "/Enis/postet/SOCIAL M POSTS/sharp postime/sharp tema 3.jpg",
      "/Enis/postet/SOCIAL M POSTS/sharp postime/sharp tema 4.jpg",
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
    image: "/Enis/postet/SOCIAL M POSTS/saraqi/saraqi 3.jpg",
    images: [
      "/Enis/postet/SOCIAL M POSTS/saraqi/saraqi 3.jpg",
      "/Enis/postet/SOCIAL M POSTS/saraqi/saraqi 1.jpg",
      "/Enis/postet/SOCIAL M POSTS/saraqi/saraqi 2.jpg",
      "/Enis/postet/SOCIAL M POSTS/saraqi/saraqi 4.jpg",
      "/Enis/postet/SOCIAL M POSTS/saraqi/saraqi 5.jpg",
      "/Enis/postet/SOCIAL M POSTS/saraqi/saraqi 6.jpg",
      "/Enis/postet/SOCIAL M POSTS/saraqi/saraqi 7.jpg",
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
    image: "/Enis/postet/SOCIAL M POSTS/roikids/kids 2.2 ks.jpg",
    images: [
      "/Enis/postet/SOCIAL M POSTS/roikids/kids 2.2 ks.jpg",
      "/Enis/postet/SOCIAL M POSTS/roikids/kids 2.1 ks.jpg",
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
    image: "/Enis/postet/album covers/MASQUERADE ARTCOVER.jpg",
    images: [
      "/Enis/postet/album covers/MASQUERADE ARTCOVER.jpg",
      "/Enis/postet/album covers/MASQUERADE BACKCOVER.jpg",
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
    image: "/Enis/postet/album covers/REBIRTH ARTCOVER.jpg",
    images: [
      "/Enis/postet/album covers/REBIRTH ARTCOVER.jpg",
      "/Enis/postet/album covers/REBIRTH BACKCOVER.jpg",
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
    image: "/Enis/postet/BRAND IDENTITY/MEDUS BRAND IDENTITY.jpg",
    images: ["/Enis/postet/BRAND IDENTITY/MEDUS BRAND IDENTITY.jpg"],
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
    image: "/Enis/postet/gift card/roi card perpara.jpg",
    images: [
      "/Enis/postet/gift card/roi card perpara.jpg",
      "/Enis/postet/gift card/roi card mrapa.jpg",
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
    image: "/Enis/postet/kampanjat/pretty campaign.jpg",
    images: [
      "/Enis/postet/kampanjat/pretty campaign.jpg",
      "/Enis/postet/kampanjat/pretty kamp0anja.jpg",
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
      "Series of eye-catching banners for various Pretty brand products.",
    fullDescription:
      "A collection of visually striking banners designed for Pretty brand's product lines including Deborah Milano, Dermolab, Flormar, and Pierre Cardin. Each banner maintains brand consistency while highlighting unique product features.",
    image: "/Enis/postet/pretty banerat/deborah milano baner.jpg",
    images: [
      "/Enis/postet/pretty banerat/deborah milano baner.jpg",
      "/Enis/postet/pretty banerat/dermolab baner.jpg",
      "/Enis/postet/pretty banerat/flormar baner.jpg",
      "/Enis/postet/pretty banerat/flormar 2 baner.jpg",
      "/Enis/postet/pretty banerat/parfum baner.jpg",
      "/Enis/postet/pretty banerat/pierre cardin baner.jpg",
    ],
    tags: ["Banners", "Product Marketing", "Visual Design"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Digital Design"],
    client: "Pretty",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  // Additional Campaigns
  {
    id: 11,
    title: "Bina Campaign",
    category: "Campaigns",
    description:
      "Strategic marketing campaign for Bina brand with distinctive visuals.",
    fullDescription:
      "A comprehensive marketing campaign for Bina that showcased the brand's unique value proposition through compelling visuals and messaging. The campaign achieved significant engagement across multiple channels.",
    image: "/Enis/postet/kampanjat/bina kampanja 1.jpg",
    images: [
      "/Enis/postet/kampanjat/bina kampanja 1.jpg",
      "/Enis/postet/kampanjat/bina kampanja 2.jpg",
    ],
    tags: ["Marketing Campaign", "Brand Strategy", "Visual Design"],
    technologies: [
      "Adobe Creative Suite",
      "Marketing Strategy",
      "Campaign Design",
    ],
    client: "Bina",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: 12,
    title: "Bond Investment Campaign",
    category: "Campaigns",
    description:
      "Professional campaign for Bond Investment focusing on trust and reliability.",
    fullDescription:
      "A sophisticated marketing campaign designed for Bond Investment that emphasized the company's expertise and trustworthiness in the financial sector. The campaign utilized a clean, professional aesthetic to appeal to investors.",
    image: "/Enis/postet/kampanjat/bond kampanja 1.jpg",
    images: [
      "/Enis/postet/kampanjat/bond kampanja 1.jpg",
      "/Enis/postet/kampanjat/bond kampanjja 2.jpg",
    ],
    tags: ["Financial Services", "Corporate Campaign", "Investment"],
    technologies: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Financial Marketing",
    ],
    client: "Bond Investment",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: 13,
    title: "Kredo Campaign Series",
    category: "Campaigns",
    description:
      "Dynamic marketing campaign for Kredo with multiple creative executions.",
    fullDescription:
      "An innovative marketing campaign for Kredo that included multiple creative executions across various platforms. The campaign successfully increased brand visibility and engagement through cohesive messaging and striking visuals.",
    image: "/Enis/postet/kampanjat/kredo kampanje 1.jpg",
    images: [
      "/Enis/postet/kampanjat/kredo kampanje 1.jpg",
      "/Enis/postet/kampanjat/kredo kampanje 2.jpg",
      "/Enis/postet/kampanjat/kredo kampanje 3.jpg",
    ],
    tags: ["Marketing Campaign", "Brand Development", "Creative Design"],
    technologies: [
      "Adobe Creative Suite",
      "Marketing Strategy",
      "Digital Design",
    ],
    client: "Kredo",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: 14,
    title: "Sharp Marketing Campaign",
    category: "Campaigns",
    description:
      "Comprehensive marketing campaign for Sharp with multiple visual touchpoints.",
    fullDescription:
      "A multi-channel marketing campaign for Sharp that delivered consistent brand messaging across various touchpoints. The campaign included a series of visually striking materials that enhanced brand recognition and engagement.",
    image: "/Enis/postet/kampanjat/sharp kampanja 1.jpg",
    images: [
      "/Enis/postet/kampanjat/sharp kampanja 1.jpg",
      "/Enis/postet/kampanjat/sharp kampanja 2.jpg",
      "/Enis/postet/kampanjat/sharp kampanja 3.jpg",
      "/Enis/postet/kampanjat/sharp kampanja 4.jpg",
    ],
    tags: ["Marketing Campaign", "Brand Strategy", "Visual Design"],
    technologies: [
      "Adobe Creative Suite",
      "Marketing Strategy",
      "Campaign Design",
    ],
    client: "Sharp",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  // Events
  {
    id: 15,
    title: "Shpiragu Event Campaign",
    category: "Events",
    description:
      "Event marketing materials for Shpiragu with bilingual execution.",
    fullDescription:
      "A comprehensive event marketing campaign for Shpiragu that included bilingual materials in both English and Albanian. The campaign effectively promoted the event while maintaining brand consistency across all materials.",
    image: "/Enis/postet/EVENTS AND COMP/shpiragu event english.jpg",
    images: [
      "/Enis/postet/EVENTS AND COMP/shpiragu event english.jpg",
      "/Enis/postet/EVENTS AND COMP/shpiragu event shqip.jpg",
    ],
    tags: ["Event Marketing", "Bilingual Design", "Brand Events"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Event Design"],
    client: "Shpiragu",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: 16,
    title: "Job Competition Design",
    category: "Events",
    description:
      "Visual design for job competition announcement with professional aesthetics.",
    fullDescription:
      "A professionally designed job competition announcement that effectively communicated the opportunity while maintaining corporate standards. The design balanced information clarity with visual appeal.",
    image: "/Enis/postet/EVENTS AND COMP/KONKURS PUNE VER 1.jpg",
    images: ["/Enis/postet/EVENTS AND COMP/KONKURS PUNE VER 1.jpg"],
    tags: ["Corporate Design", "Recruitment", "Professional"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Corporate Design"],
    client: "Corporate Client",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
];
