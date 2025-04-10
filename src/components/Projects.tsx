
import { Github, ExternalLink } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  liveLink?: string;
  reversed?: boolean;
}

const ProjectCard = ({ title, description, tech, github, liveLink, reversed = false }: ProjectProps) => {
  return (
    <div className={`relative grid grid-cols-12 items-center gap-2 md:gap-4 group ${reversed ? 'text-right' : 'text-left'}`}>
      {/* Content */}
      <div className={`col-span-12 md:col-span-7 bg-tech-navy/80 p-6 rounded-lg shadow-xl z-10 transition-transform duration-300 ${
        reversed ? 'md:col-start-6 group-hover:-translate-x-2' : 'group-hover:translate-x-2'
      }`}>
        <p className="font-mono text-tech-teal text-sm mb-2">Featured Project</p>
        <h3 className="text-2xl font-bold text-tech-lightest mb-4">{title}</h3>
        <div className="bg-tech-navy/90 rounded p-5 mb-4 shadow-lg">
          <p className="text-tech-light">{description}</p>
        </div>
        <div className={`flex flex-wrap mb-6 ${reversed ? 'justify-end' : 'justify-start'}`}>
          {tech.map((item, index) => (
            <span key={index} className="tech-badge">{item}</span>
          ))}
        </div>
        <div className={`flex gap-4 ${reversed ? 'justify-end' : 'justify-start'}`}>
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github size={20} />
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="social-icon">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className={`col-span-12 md:col-span-6 row-start-1 ${
        reversed ? 'md:col-start-1' : 'md:col-start-7'
      }`}>
        <div className="h-[250px] bg-tech-teal/10 rounded-lg ring-1 ring-tech-teal/20 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="font-mono text-tech-teal/20 text-xl">&lt;/&gt;</div>
          </div>
          <div className={`absolute inset-0 bg-tech-navy/80 transition-opacity duration-300 ${
            reversed ? 'group-hover:opacity-20' : 'group-hover:opacity-20'
          }`}></div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Virtual Network Simulator",
      description: "An interactive web application that simulates computer networking concepts, allowing users to create, manage and troubleshoot virtual networks in real-time.",
      tech: ["React", "Node.js", "Socket.io", "Tailwind CSS"],
      github: "https://github.com/johnjustin",
      liveLink: "https://project.com",
    },
    {
      title: "Smart Home Dashboard",
      description: "A comprehensive dashboard for monitoring and controlling smart home devices with real-time updates, energy usage statistics, and customizable automation rules.",
      tech: ["React", "Firebase", "Chart.js", "Material UI"],
      github: "https://github.com/johnjustin",
      liveLink: "https://project.com",
      reversed: true,
    },
    {
      title: "Code Snippet Manager",
      description: "A developer utility for storing, organizing and sharing code snippets with syntax highlighting, tags, and search functionality to improve workflow efficiency.",
      tech: ["TypeScript", "Next.js", "MongoDB", "Prisma"],
      github: "https://github.com/johnjustin",
      liveLink: "https://project.com",
    }
  ];
  
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">My Projects</h2>
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
            />
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-tech-light mb-6">View more of my projects on GitHub</p>
          <a 
            href="https://github.com/johnjustin" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary inline-flex items-center"
          >
            <Github size={18} className="mr-2" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
