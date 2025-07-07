'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

type Project = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  experience: number;
  demoUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "Grow Up",
    description: "A gamified career tracker with Tamagotchi mechanics.",
    technologies: ["React", "Next.js", "TypeScript", "Vercel", "MongoDB"],
    experience: 60,
    demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    githubUrl: "https://github.com/yjasso/grow-up"
  },
  {
    id: 2,
    name: "Portfolio v2",
    description: "Personal portfolio with Y2K/retro vibes.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    experience: 50,
    demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    githubUrl: "https://github.com/yjasso/portfolio-v2"
  },
  {
    id: 3,
    name: "DevDeck",
    description: "Flashcard app for developers.",
    technologies: ["React", "Next.js", "TypeScript", "MongoDB"],
    experience: 45,
    demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    githubUrl: "https://github.com/yjasso/devdeck"
  },
  {
    id: 4,
    name: "LeetHub",
    description: "Chrome extension to sync LeetCode with GitHub.",
    technologies: ["JavaScript", "Chrome Extension", "GitHub API"],
    experience: 40,
    demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    githubUrl: "https://github.com/yjasso/LeetHub"
  },
  {
    id: 5,
    name: "CodeConnect",
    description: "Social platform for developers to share code.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    experience: 38,
    demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    githubUrl: "https://github.com/yjasso/codeconnect"
  },
  {
    id: 6,
    name: "Pixel Pets",
    description: "Virtual pet game with pixel art.",
    technologies: ["React", "Canvas", "TypeScript"],
    experience: 35,
    demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    githubUrl: "https://github.com/yjasso/pixel-pets"
  },
  {
    id: 7,
    name: "Y2K Blog",
    description: "Blog with Y2K/retro design.",
    technologies: ["Next.js", "MDX", "Tailwind"],
    experience: 32,
    demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    githubUrl: "https://github.com/yjasso/y2k-blog"
  },
  {
    id: 8,
    name: "OpenResume",
    description: "Free resume builder.",
    technologies: ["React", "Next.js", "Chakra UI"],
    experience: 30,
    demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    githubUrl: "https://github.com/yjasso/openresume"
  },
  {
    id: 9,
    name: "Tamagotchi CLI",
    description: "Tamagotchi game in the terminal.",
    technologies: ["Node.js", "Inquirer.js"],
    experience: 28,
    demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    githubUrl: "https://github.com/yjasso/tamagotchi-cli"
  },
  {
    id: 10,
    name: "Neon Notes",
    description: "Minimal note-taking app.",
    technologies: ["React", "TypeScript", "Firebase"],
    experience: 25,
    demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    githubUrl: "https://github.com/yjasso/neon-notes"
  },
  {
    id: 11,
    name: "Retro Weather",
    description: "Weather app with retro UI.",
    technologies: ["React", "OpenWeatherMap API"],
    experience: 22,
    demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    githubUrl: "https://github.com/yjasso/retro-weather"
  },
  {
    id: 12,
    name: "Synthwave Timer",
    description: "Pomodoro timer with synthwave theme.",
    technologies: ["React", "Styled Components"],
    experience: 20,
    demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    githubUrl: "https://github.com/yjasso/synthwave-timer"
  }
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-item" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div className="project-title">{project.name}</div>
      <div className="project-description">{project.description}</div>
      <div className="project-tech">{project.technologies.join(', ')}</div>
      <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-demo-btn"
          style={{ background: '#ffb3d6', color: '#fff', borderRadius: 6, padding: '4px 10px', fontSize: 12, textDecoration: 'none' }}
        >
          ▶️ Demo
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-github-btn"
          style={{ background: '#222', color: '#fff', borderRadius: 6, padding: '4px 10px', fontSize: 12, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
          GitHub
        </a>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const router = useRouter();
  return (
    <div className="screen-content" style={{ minHeight: '100vh', width: '100vw', margin: 0, borderRadius: 0, boxShadow: 'none', padding: '32px 0 32px 0', background: 'none' }}>
      <button 
        className="tamagotchi-button" 
        style={{ alignSelf: 'flex-start', marginBottom: 18, fontSize: 12 }}
        onClick={() => router.push('/')}
      >
        ← Back to Tamagotchi
      </button>
      <div className="portfolio-title">Full Portfolio</div>
      <div className="portfolio-section about-section">
        <div className="about-profile-row">
          <div className="about-profile-pic" />
          <div className="about-profile-text">
            <div className="about-name">Yuli</div>
            <div className="about-title">Full Stack Developer</div>
            <div className="about-summary">
              Hi! I'm Yuli, a full stack developer passionate about building playful, interactive web experiences. I specialize in React, Next.js, and TypeScript, and love blending creativity with code. I enjoy working on gamified apps, retro UIs, and anything that makes the web more fun and engaging. Let's build something amazing together!
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-section">
        <div className="portfolio-title">Skills</div>
        <div>
          <span className="skill-item">React</span>
          <span className="skill-item">TypeScript</span>
          <span className="skill-item">Node.js</span>
          <span className="skill-item">Python</span>
          <span className="skill-item">MongoDB</span>
          <span className="skill-item">PostgreSQL</span>
        </div>
      </div>
      <div className="portfolio-section">
        <div className="portfolio-title">Projects ({projects.length})</div>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
} 