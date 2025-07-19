import React, { useState, useEffect, useRef } from "react";
import {
  ExternalLink,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  Tag,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const projects = [
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
    featured: false,
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
  {
    id: 5,
    title: "Let's Dance Social",
    category: "Social Media Posts",
    description:
      "Energetic social media content for Let's Dance brand and community engagement.",
    fullDescription:
      "Energetic and dynamic social media content for Let's Dance brand, designed to build community engagement and promote dance culture. The content featured vibrant colors and movement-inspired designs.",
    image: "/Enis/postet/SOCIAL M POSTS/letsdance/Artboard 1 copy 10.jpg",
    images: [
      "/Enis/postet/SOCIAL M POSTS/letsdance/Artboard 1 copy 10.jpg",
      "/Enis/postet/SOCIAL M POSTS/letsdance/Artboard 1 copy 9.jpg",
    ],
    tags: ["Dance", "Community", "Social Media"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Motion Graphics"],
    client: "Let's Dance",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 6,
    title: "Izzihr Digital Content",
    category: "Social Media Posts",
    description:
      "Modern digital content for Izzihr brand across social media platforms.",
    fullDescription:
      "Modern and sophisticated digital content for Izzihr brand, featuring contemporary design elements and strategic content that enhances brand positioning across multiple social media platforms.",
    image: "/Enis/postet/SOCIAL M POSTS/izzihr/hrizzi1.jpg",
    images: ["/Enis/postet/SOCIAL M POSTS/izzihr/hrizzi1.jpg"],
    tags: ["Digital Content", "Modern Design", "Brand Identity"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Digital Design"],
    client: "Izzihr",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 7,
    title: "Elfbar Social Campaign",
    category: "Social Media Posts",
    description:
      "Trendy social media campaign for Elfbar brand with contemporary design elements.",
    fullDescription:
      "Trendy and contemporary social media campaign for Elfbar brand, featuring modern design elements and innovative content strategies that appeal to the target demographic.",
    image: "/Enis/postet/SOCIAL M POSTS/elfbar/ELFBAR CONCEPT 2.jpg",
    images: [
      "/Enis/postet/SOCIAL M POSTS/elfbar/ELFBAR CONCEPT 3.jpg",
      "/Enis/postet/SOCIAL M POSTS/elfbar/ELFBAR CONCEPT.jpg",
      "/Enis/postet/SOCIAL M POSTS/elfbar/ELFBAR CONCEPT 2.jpg",
    ],
    tags: ["Trendy", "Contemporary", "Social Campaign"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Trend Analysis"],
    client: "Elfbar",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: 8,
    title: "Education Trends",
    category: "Social Media Posts",
    description:
      "Educational content series highlighting current trends in learning and development.",
    fullDescription:
      "Educational content series that highlights current trends in learning and development, designed to inform and engage audiences interested in educational innovation and best practices.",
    image:
      "/Enis/postet/SOCIAL M POSTS/education trends/Artboard 1 copy 21.jpg",
    images: [
      "/Enis/postet/SOCIAL M POSTS/education trends/Artboard 1 copy 21.jpg",
      "/Enis/postet/SOCIAL M POSTS/education trends/Artboard 1 copy 27.jpg",
      "/Enis/postet/SOCIAL M POSTS/education trends/ed.jpg",
    ],
    tags: ["Education", "Trends", "Learning"],
    technologies: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Educational Design",
    ],
    client: "Education Platform",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 9,
    title: "Diamond Vector Designs",
    category: "Social Media Posts",
    description:
      "Premium vector-based designs with diamond themes for luxury brand positioning.",
    fullDescription:
      "Premium vector-based designs featuring diamond themes, created for luxury brand positioning. These sophisticated designs emphasize quality and exclusivity.",
    image:
      "/Enis/postet/SOCIAL M POSTS/diamond vector dizajnet/diamond vector concept 7.jpg",
    images: [
      "/Enis/postet/SOCIAL M POSTS/diamond vector dizajnet/diamond vector concept 6.jpg",
      "/Enis/postet/SOCIAL M POSTS/diamond vector dizajnet/diamond vector concept 5.jpg",
      "/Enis/postet/SOCIAL M POSTS/diamond vector dizajnet/diamond vector concept 3.jpg",
      "/Enis/postet/SOCIAL M POSTS/diamond vector dizajnet/diamond vector concept 4.jpg",
      "/Enis/postet/SOCIAL M POSTS/diamond vector dizajnet/diamond vector concept 7.jpg",
    ],
    tags: ["Vector Design", "Luxury", "Premium"],
    technologies: ["Adobe Illustrator", "Vector Graphics", "Luxury Design"],
    client: "Luxury Brand",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: 10,
    title: "Cover Ardent",
    category: "Social Media Posts",
    description:
      "Cover designs for Ardent brand with modern aesthetic and brand consistency.",
    fullDescription:
      "Modern cover designs for Ardent brand, featuring contemporary aesthetics and maintaining strong brand consistency across all touchpoints.",
    image: "/Enis/postet/SOCIAL M POSTS/cover ardent/cover ver 2.jpg",
    images: ["/Enis/postet/SOCIAL M POSTS/cover ardent/cover ver 2.jpg"],
    tags: ["Cover Design", "Modern", "Brand Consistency"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Brand Design"],
    client: "Ardent",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 11,
    title: "Bond Investment",
    category: "Social Media Posts",
    description:
      "Professional investment-focused content for Bond brand with financial expertise.",
    fullDescription:
      "Professional investment-focused content for Bond brand, demonstrating financial expertise and building trust with potential investors through well-designed, informative content.",
    image: "/Enis/postet/SOCIAL M POSTS/bond invesment/Artboard 2.jpg",
    images: [
      "/Enis/postet/SOCIAL M POSTS/bond invesment/Artboard 2.jpg",
      "/Enis/postet/SOCIAL M POSTS/bond invesment/Artboard 2 copy 9.jpg",
    ],
    tags: ["Investment", "Financial", "Professional"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Financial Design"],
    client: "Bond Investment",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 12,
    title: "Amievent Social",
    category: "Social Media Posts",
    description:
      "Event-focused social media content for Amievent brand and event promotion.",
    fullDescription:
      "Event-focused social media content for Amievent brand, designed to promote events and build excitement among potential attendees through engaging visual content.",
    image: "/Enis/postet/SOCIAL M POSTS/amievent/Artboard 1.jpg",
    images: ["/Enis/postet/SOCIAL M POSTS/amievent/Artboard 1.jpg"],
    tags: ["Events", "Promotion", "Social Media"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Event Marketing"],
    client: "Amievent",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 13,
    title: "Alfapan Campaign",
    category: "Social Media Posts",
    description:
      "Creative campaign content for Alfapan brand with innovative design approaches.",
    fullDescription:
      "Creative campaign content for Alfapan brand, featuring innovative design approaches and creative solutions that set the brand apart from competitors.",
    image:
      "/Enis/postet/SOCIAL M POSTS/alfapan/alfapan diferenca mes pur, pir, dhe leshit mineral copy 9.jpg",
    images: [
      "/Enis/postet/SOCIAL M POSTS/alfapan/alfapan diferenca mes pur, pir, dhe leshit mineral copy 9.jpg",
      "/Enis/postet/SOCIAL M POSTS/alfapan/alfapan diferenca mes pur, pir, dhe leshit mineral copy 10.jpg",
      "/Enis/postet/SOCIAL M POSTS/alfapan/alfapan diferenca mes pur, pir, dhe leshit mineral copy 11.jpg",
    ],
    tags: ["Creative", "Innovation", "Campaign"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Creative Design"],
    client: "Alfapan",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },

  // Campaigns
  {
    id: 14,
    title: "Kredo Campaign Series",
    category: "Campaigns",
    description:
      "Comprehensive marketing campaign series for Kredo brand with multiple touchpoints.",
    fullDescription:
      "A comprehensive marketing campaign series for Kredo brand, featuring multiple touchpoints and integrated marketing strategies that delivered measurable results and increased brand awareness.",
    image: "/Enis/postet/kampanjat/kredo kampanje 2.jpg",
    images: [
      "/Enis/postet/kampanjat/kredo kampanje 2.jpg",
      "/Enis/postet/kampanjat/kredo kampanje 1.jpg",
      "/Enis/postet/kampanjat/kredo kampanje 3.jpg",
    ],
    tags: ["Marketing", "Campaign", "Brand Awareness"],
    technologies: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Marketing Strategy",
    ],
    client: "Kredo",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: 15,
    title: "Bond Investment Campaign",
    category: "Campaigns",
    description:
      "Professional investment campaign materials for Bond brand with financial expertise.",
    fullDescription:
      "Professional investment campaign materials for Bond brand, showcasing financial expertise and building credibility with potential investors through sophisticated design and strategic messaging.",
    image: "/Enis/postet/kampanjat/bond kampanja 1.jpg",
    images: [
      "/Enis/postet/kampanjat/bond kampanja 1.jpg",
      "/Enis/postet/kampanjat/bond kampanjja 2.jpg",
    ],
    tags: ["Investment", "Financial", "Professional"],
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
    id: 16,
    title: "Izzi Campaign",
    category: "Campaigns",
    description:
      "Dynamic campaign materials for Izzi brand with modern design elements.",
    fullDescription:
      "Dynamic campaign materials for Izzi brand, featuring modern design elements and contemporary aesthetics that resonate with the target audience.",
    image: "/Enis/postet/kampanjat/izzi campaign.jpg",
    images: [
      "/Enis/postet/kampanjat/izzi campaign.jpg",
      "/Enis/postet/kampanjat/izzi campaign 2.jpg",
    ],
    tags: ["Modern", "Campaign", "Brand Identity"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Modern Design"],
    client: "Izzi",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 17,
    title: "Saraqi Campaign",
    category: "Campaigns",
    description:
      "Comprehensive campaign materials for Saraqi brand promotion and engagement.",
    fullDescription:
      "Comprehensive campaign materials for Saraqi brand, designed to promote the brand and increase customer engagement through strategic messaging and creative design.",
    image: "/Enis/postet/kampanjat/saraqi kampanja 1.jpg",
    images: [
      "/Enis/postet/kampanjat/saraqi kampanja 1.jpg",
      "/Enis/postet/kampanjat/saraqi kampanja 2.jpg",
    ],
    tags: ["Campaign", "Brand Promotion", "Engagement"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Brand Strategy"],
    client: "Saraqi",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 18,
    title: "Pretty Campaign",
    category: "Campaigns",
    description:
      "Beautiful campaign materials for Pretty brand with aesthetic appeal.",
    fullDescription:
      "Beautiful campaign materials for Pretty brand, featuring aesthetic appeal and design elements that enhance the brand's visual identity and market positioning.",
    image: "/Enis/postet/kampanjat/pretty campaign.jpg",
    images: [
      "/Enis/postet/kampanjat/pretty campaign.jpg",
      "/Enis/postet/kampanjat/pretty kamp0anja.jpg",
    ],
    tags: ["Aesthetic", "Beauty", "Campaign"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Aesthetic Design"],
    client: "Pretty",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 19,
    title: "Bina Campaign",
    category: "Campaigns",
    description:
      "Strategic campaign materials for Bina brand with targeted messaging.",
    fullDescription:
      "Strategic campaign materials for Bina brand, featuring targeted messaging and design elements that effectively communicate the brand's value proposition to the intended audience.",
    image: "/Enis/postet/kampanjat/bina kampanja 1.jpg",
    images: [
      "/Enis/postet/kampanjat/bina kampanja 1.jpg",
      "/Enis/postet/kampanjat/bina kampanja 2.jpg",
    ],
    tags: ["Strategic", "Targeted", "Campaign"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Strategic Design"],
    client: "Bina",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 20,
    title: "Sharp Campaign Series",
    category: "Campaigns",
    description:
      "Multi-part campaign series for Sharp brand with consistent messaging.",
    fullDescription:
      "Multi-part campaign series for Sharp brand, featuring consistent messaging and design elements that maintain brand coherence across all campaign touchpoints.",
    image: "/Enis/postet/kampanjat/sharp kampanja 1.jpg",
    images: [
      "/Enis/postet/kampanjat/sharp kampanja 1.jpg",
      "/Enis/postet/kampanjat/sharp kampanja 2.jpg",
      "/Enis/postet/kampanjat/sharp kampanja 3.jpg",
      "/Enis/postet/kampanjat/sharp kampanja 4.jpg",
    ],
    tags: ["Series", "Consistent", "Brand Messaging"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Brand Consistency"],
    client: "Sharp",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },

  // Brand Identity
  {
    id: 21,
    title: "Medus Brand Identity",
    category: "Brand Identity",
    description:
      "Complete brand identity system for Medus including logo, guidelines, and applications.",
    fullDescription:
      "A complete brand identity system for Medus, including logo design, brand guidelines, and comprehensive applications across various media. This project established a strong, cohesive brand presence.",
    image: "/Enis/postet/BRAND IDENTITY/MEDUS BRAND IDENTITY.jpg",
    images: ["/Enis/postet/BRAND IDENTITY/MEDUS BRAND IDENTITY.jpg"],
    tags: ["Brand Identity", "Logo Design", "Guidelines"],
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Brand Strategy"],
    client: "Medus",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },

  // Events & Competitions
  {
    id: 22,
    title: "Konkurs Pune",
    category: "Events & Competitions",
    description:
      "Event branding and promotional materials for job competition event.",
    fullDescription:
      "Event branding and promotional materials for a job competition event, featuring professional design elements that attract participants and establish credibility for the competition.",
    image: "/Enis/postet/EVENTS AND COMP/KONKURS PUNE VER 1.jpg",
    images: ["/Enis/postet/EVENTS AND COMP/KONKURS PUNE VER 1.jpg"],
    tags: ["Event Design", "Competition", "Promotional"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Event Marketing"],
    client: "Job Competition",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 23,
    title: "Shpiragu Event",
    category: "Events & Competitions",
    description:
      "Event branding and promotional materials for Shpiragu brand event.",
    fullDescription:
      "Event branding and promotional materials for Shpiragu brand event, featuring cohesive design elements that enhance the event experience and strengthen brand recognition.",
    image: "/Enis/postet/EVENTS AND COMP/shpiragu event english.jpg",
    images: ["/Enis/postet/EVENTS AND COMP/shpiragu event english.jpg"],
    tags: ["Event Design", "Brand Event", "Promotional"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Event Branding"],
    client: "Shpiragu",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },

  // Album Covers
  {
    id: 24,
    title: "Rebirth Album",
    category: "Album Covers",
    description:
      "Creative album cover design for Rebirth with front and back cover artwork.",
    fullDescription:
      "Creative album cover design for Rebirth, featuring both front and back cover artwork that captures the essence of the music and creates a compelling visual identity for the album.",
    image: "/Enis/postet/album covers/REBIRTH ARTCOVER.jpg",
    images: [
      "/Enis/postet/album covers/REBIRTH ARTCOVER.jpg",
      "/Enis/postet/album covers/REBIRTH BACKCOVER.jpg",
    ],
    tags: ["Album Covers", "Music", "Art"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Music Design"],
    client: "Rebirth",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: 25,
    title: "Masquerade Album",
    category: "Album Covers",
    description:
      "Elegant album cover design for Masquerade with sophisticated artwork.",
    fullDescription:
      "Elegant album cover design for Masquerade, featuring sophisticated artwork that reflects the mysterious and artistic nature of the music while maintaining visual appeal.",
    image: "/Enis/postet/album covers/MASQUERADE ARTCOVER.jpg",
    images: [
      "/Enis/postet/album covers/MASQUERADE ARTCOVER.jpg",
      "/Enis/postet/album covers/MASQUERADE BACKCOVER.jpg",
    ],
    tags: ["Album Covers", "Music", "Elegant"],
    technologies: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Sophisticated Design",
    ],
    client: "Masquerade",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },

  // Gift Cards
  {
    id: 26,
    title: "ROI Gift Cards",
    category: "Gift Cards",
    description:
      "Attractive gift card designs for ROI brand with modern and traditional themes.",
    fullDescription:
      "Attractive gift card designs for ROI brand, featuring both modern and traditional themes that appeal to different customer segments and enhance the gift-giving experience.",
    image: "/Enis/postet/gift card/roi card perpara.jpg",
    images: [
      "/Enis/postet/gift card/roi card perpara.jpg",
      "/Enis/postet/gift card/roi card mrapa.jpg",
    ],
    tags: ["Gift Cards", "ROI", "Modern Design"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Print Design"],
    client: "ROI",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },

  // Website Banners
  {
    id: 27,
    title: "Pierre Cardin Banner",
    category: "Website Banners",
    description: "Professional banner design for Pierre Cardin brand website.",
    fullDescription:
      "Professional banner design for Pierre Cardin brand website, featuring luxury aesthetics and sophisticated design elements that reflect the brand's premium positioning.",
    image: "/Enis/postet/pretty banerat/pierre cardin baner.jpg",
    images: ["/Enis/postet/pretty banerat/pierre cardin baner.jpg"],
    tags: ["Web Design", "Banners", "Luxury"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Web Design"],
    client: "Pierre Cardin",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: 28,
    title: "Deborah Milano Banner",
    category: "Website Banners",
    description: "Elegant banner design for Deborah Milano beauty brand.",
    fullDescription:
      "Elegant banner design for Deborah Milano beauty brand, featuring sophisticated design elements that enhance the brand's beauty and elegance positioning.",
    image: "/Enis/postet/pretty banerat/deborah milano baner.jpg",
    images: ["/Enis/postet/pretty banerat/deborah milano baner.jpg"],
    tags: ["Beauty", "Banners", "Elegant"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Beauty Design"],
    client: "Deborah Milano",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: 29,
    title: "Parfum Banner",
    category: "Website Banners",
    description: "Sophisticated banner design for perfume brand website.",
    fullDescription:
      "Sophisticated banner design for perfume brand website, featuring elegant design elements that convey luxury and sophistication appropriate for the fragrance industry.",
    image: "/Enis/postet/pretty banerat/parfum baner.jpg",
    images: ["/Enis/postet/pretty banerat/parfum baner.jpg"],
    tags: ["Perfume", "Banners", "Sophisticated"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Luxury Design"],
    client: "Perfume Brand",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 30,
    title: "Flormar Banners",
    category: "Website Banners",
    description:
      "Professional banner designs for Flormar beauty brand website.",
    fullDescription:
      "Professional banner designs for Flormar beauty brand website, featuring modern design elements that enhance the brand's professional image and appeal to beauty-conscious consumers.",
    image: "/Enis/postet/pretty banerat/flormar baner.jpg",
    images: [
      "/Enis/postet/pretty banerat/flormar baner.jpg",
      "/Enis/postet/pretty banerat/flormar 2 baner.jpg",
    ],
    tags: ["Beauty", "Banners", "Professional"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Beauty Marketing"],
    client: "Flormar",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 31,
    title: "Dermolab Banner",
    category: "Website Banners",
    description: "Medical-grade banner design for Dermolab skincare brand.",
    fullDescription:
      "Medical-grade banner design for Dermolab skincare brand, featuring professional design elements that convey trust, expertise, and medical credibility appropriate for skincare products.",
    image: "/Enis/postet/pretty banerat/dermolab baner.jpg",
    images: ["/Enis/postet/pretty banerat/dermolab baner.jpg"],
    tags: ["Skincare", "Medical", "Professional"],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Medical Design"],
    client: "Dermolab",
    date: "2025",
    teamSize: "Solo",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
];

const categories = [
  "All",
  "Social Media Posts",
  "Campaigns",
  "Brand Identity",
  "Events & Competitions",
  "Album Covers",
  "Gift Cards",
  "Website Banners",
];

// Define the Project type for better type safety
interface Project {
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

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Zoom state for Brand Identity category
  const [zoom, setZoom] = useState(1);
  // Pan state for image dragging
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  // Reset zoom and pan when modal closes, project changes, or image changes
  useEffect(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, [isModalOpen, selectedProject, currentImageIndex]);

  // Mouse event handlers for panning
  const handleMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
    if (zoom === 1) return;
    isDragging.current = true;
    lastPos.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
    document.body.style.cursor = "grabbing";
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    setPan({
      x: e.clientX - lastPos.current.x,
      y: e.clientY - lastPos.current.y,
    });
  };
  const handleMouseUp = () => {
    isDragging.current = false;
    document.body.style.cursor = "";
  };

  // Define which projects to show initially (featured projects)
  const featuredProjectIds = projects
    .filter((p) => p.featured)
    .map((p) => p.id);

  let displayedProjects: Project[];
  if (activeCategory === "All") {
    displayedProjects = showAllProjects
      ? projects
      : projects.filter((project) => featuredProjectIds.includes(project.id));
  } else {
    displayedProjects = projects.filter(
      (project) => project.category === activeCategory,
    );
  }

  const handleViewAllProjects = (e?: React.MouseEvent<HTMLButtonElement>) => {
    setShowAllProjects(true);
    setTimeout(() => {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (e && e.currentTarget) e.currentTarget.blur();
    }, 0);
  };

  const handleResetView = (e?: React.MouseEvent<HTMLButtonElement>) => {
    setShowAllProjects(false);
    setTimeout(() => {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (e && e.currentTarget) e.currentTarget.blur();
    }, 0);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleNextImage = () => {
    if (selectedProject && selectedProject.images.length > 1) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedProject && selectedProject.images.length > 1) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1,
      );
    }
  };

  const handleImageClick = (project: Project) => {
    handleProjectClick(project);
  };

  return (
    <section
      id="work"
      className="py-20 bg-gradient-to-b from-slate-900 to-black"
    >
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Featured <span className="text-purple-400">Work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A selection of my recent projects showcasing creativity, innovation,
            and attention to detail
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => {
                setActiveCategory(category);
                setShowAllProjects(false); // Reset to featured view when changing categories
              }}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-purple-400 text-white border-purple-400 hover:bg-white hover:text-purple-400 hover:border-purple-400"
                  : "border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white hover:border-purple-400"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[1200px]">
          {displayedProjects.length === 0 ? (
            <div className="col-span-full text-center text-gray-400">
              No projects found in this category.
            </div>
          ) : (
            displayedProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-white/5 border-white/10 overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 h-full flex flex-col min-h-[420px]"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative bg-slate-800 flex-shrink-0 w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 bg-slate-700"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center transition-opacity duration-300 ${
                      hoveredProject === project.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <div className="flex space-x-4 mb-4">
                      <Button
                        size="sm"
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleImageClick(project);
                        }}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl, "_blank");
                          }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {project.category}
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                      Featured
                    </div>
                  )}
                </div>
                <CardContent className="p-6 bg-gradient-to-b from-white/5 to-white/0 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-purple-400/20 text-purple-400 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {project.teamSize}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* View more/less button - only in 'All' view */}
        {activeCategory === "All" && (
          <div className="text-center mt-12">
            {!showAllProjects ? (
              <Button
                size="lg"
                variant="outline"
                onClick={e => {
                  e.preventDefault();
                  handleViewAllProjects(e);
                }}
                type="button"
                className="bg-white text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3"
              >
                View All Projects ({projects.length - featuredProjectIds.length}{" "}
                more)
              </Button>
            ) : (
              <Button
                size="lg"
                variant="outline"
                onClick={e => { e.preventDefault(); handleResetView(e); }}
                type="button"
                className="bg-white text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3"
              >
                Show Featured Only
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Project Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-700 scrollbar-hide [&>button]:text-white [&>button]:hover:text-gray-300 [&>button]:opacity-100 [&>button]:hover:opacity-100 [&>button]:bg-white/10 [&>button]:hover:bg-white/20 [&>button]:rounded-full [&>button]:p-2 [&>button]:border [&>button]:border-white/20">
          <DialogHeader>
            <DialogTitle className="text-white text-2xl">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>

          {selectedProject && (
            <div className="space-y-6">
              {/* Image Gallery */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div
                  className="relative bg-slate-800 rounded-lg overflow-hidden"
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                >
                  {/* Zoom controls for all categories */}
                  <div className="absolute z-10 top-4 right-4 flex gap-2 bg-black/40 p-2 rounded-lg">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => setZoom((z) => Math.max(0.5, z - 0.2))}
                      className="text-white"
                    >
                      -
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => setZoom(1)}
                      className="text-white"
                    >
                      Reset
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => setZoom((z) => Math.min(3, z + 0.2))}
                      className="text-white"
                    >
                      +
                    </Button>
                  </div>
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.title}
                    className="w-full h-96 object-contain bg-slate-800 transition-transform duration-300"
                    loading="lazy"
                    style={{
                      transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                    }}
                    onMouseDown={handleMouseDown}
                    draggable={false}
                  />
                  {selectedProject.images.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white border border-white/20 backdrop-blur-sm"
                        onClick={handlePrevImage}
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white border border-white/20 backdrop-blur-sm"
                        onClick={handleNextImage}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </Button>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-white/20">
                        {currentImageIndex + 1} /{" "}
                        {selectedProject.images.length}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Project Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">
                    Description
                  </h3>
                  <p className="text-gray-300">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Project Details
                    </h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div className="flex justify-between">
                        <span>Client:</span>
                        <span>{selectedProject.client}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span>{selectedProject.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Team Size:</span>
                        <span>{selectedProject.teamSize}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-purple-400/20 text-purple-400"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag: string) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-purple-400 text-purple-400"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  {selectedProject.liveUrl && (
                    <Button
                      onClick={() =>
                        window.open(selectedProject.liveUrl, "_blank")
                      }
                      className="bg-purple-400 hover:bg-purple-500 text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </Button>
                  )}
                  {selectedProject.githubUrl && (
                    <Button
                      variant="outline"
                      onClick={() =>
                        window.open(selectedProject.githubUrl, "_blank")
                      }
                      className="border-purple-400 text-purple-400 hover:bg-purple-400/20"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
