import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  selectedProject: Project | null;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
  zoom: number;
  setZoom: (zoom: number) => void;
  pan: { x: number; y: number };
  setPan: (pan: { x: number; y: number }) => void;
  handleMouseDown: (e: React.MouseEvent<HTMLImageElement>) => void;
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleMouseUp: () => void;
  handlePrevImage: () => void;
  handleNextImage: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  selectedProject,
  isModalOpen,
  setIsModalOpen,
  currentImageIndex,
  setCurrentImageIndex,
  zoom,
  setZoom,
  pan,
  setPan,
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
  handlePrevImage,
  handleNextImage,
}) => {
  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent
        className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-700 scrollbar-hide"
        aria-label={
          selectedProject
            ? `Project details for ${selectedProject.title}`
            : "Project details"
        }
      >
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
                    aria-label="Zoom out"
                  >
                    -
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => setZoom(1)}
                    className="text-white"
                    aria-label="Reset zoom"
                  >
                    Reset
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => setZoom((z) => Math.min(3, z + 0.2))}
                    className="text-white"
                    aria-label="Zoom in"
                  >
                    +
                  </Button>
                </div>
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`Project image ${currentImageIndex + 1} for ${selectedProject.title}`}
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
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white border border-white/20 backdrop-blur-sm"
                      onClick={handleNextImage}
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-white/20">
                      {currentImageIndex + 1} / {selectedProject.images.length}
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
                      window.open(selectedProject.liveUrl!, "_blank")
                    }
                    className="bg-purple-400 hover:bg-purple-500 text-white"
                    aria-label={`View live site for ${selectedProject.title}`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </Button>
                )}
                {selectedProject.githubUrl && (
                  <Button
                    variant="outline"
                    onClick={() =>
                      window.open(selectedProject.githubUrl!, "_blank")
                    }
                    className="border-purple-400 text-purple-400 hover:bg-purple-400/20"
                    aria-label={`View code for ${selectedProject.title}`}
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
  );
};

export default ProjectModal;
