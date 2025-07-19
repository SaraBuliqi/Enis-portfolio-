import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  hoveredProject: number | null;
  setHoveredProject: (id: number | null) => void;
  handleProjectClick: (project: Project) => void;
  handleImageClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = React.memo(
  ({
    project,
    hoveredProject,
    setHoveredProject,
    handleProjectClick,
    handleImageClick,
  }) => {
    return (
      <Card
        className="bg-white/5 border-white/10 overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 h-full flex flex-col"
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
        onClick={() => handleProjectClick(project)}
        aria-label={`Open details for project: ${project.title}`}
      >
        <div className="relative overflow-hidden bg-slate-800 flex-shrink-0">
          <img
            src={project.image}
            alt={`Preview image for project ${project.title}`}
            className="w-full h-72 object-contain object-center transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
            loading="lazy"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center transition-opacity duration-300 ${
              hoveredProject === project.id ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex space-x-4 mb-4">
              <Button
                size="sm"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20"
                aria-label={`View images for project ${project.title}`}
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
                  aria-label={`Open live site for project ${project.title}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.liveUrl!, "_blank");
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
            <span className="flex items-center gap-1">{project.date}</span>
            <span className="flex items-center gap-1">{project.teamSize}</span>
          </div>
        </CardContent>
      </Card>
    );
  },
);

export default ProjectCard;
