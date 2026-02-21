"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const card = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      {/* Thumbnail */}
      <div className={`relative overflow-hidden bg-accent ${project.thumbnail.includes('screenshots') ? 'aspect-[3/5]' : 'aspect-[4/3]'}`}>
        {project.thumbnail.includes('screenshots') ? (
          <img
            src={project.thumbnail}
            alt={project.name}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center transition-all duration-700 grayscale group-hover:grayscale-0"
            style={{ background: `linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)` }}
          >
            <span className="font-display text-3xl font-bold text-secondary/20 transition-colors duration-700 group-hover:text-secondary/70">
              {project.name}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="mt-4">
        <div className="flex items-baseline justify-between">
          <h3 className="font-display text-lg font-semibold text-primary">
            {project.name}
          </h3>
          <span className="font-body text-xs text-muted">{project.period}</span>
        </div>

        <p className="mt-1 font-body text-xs text-muted">{project.nameJa}</p>

        <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary/5 px-2 py-1 font-body text-[10px] tracking-wide text-muted transition-all duration-200 hover:bg-primary/20 hover:text-primary cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  if (project.url) {
    return (
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        {card}
      </a>
    );
  }

  return card;
}
