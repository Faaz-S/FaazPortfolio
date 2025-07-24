import { FileCode, Globe, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  accentColor: 'green' | 'cyan' | 'red';
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  achievements,
  accentColor,
  githubUrl,
  liveUrl,
  imageUrl,
}: ProjectCardProps) {
  const colorClasses = {
    green: {
      text: 'text-neon-green',
      border: 'border-neon-green/30',
      gradient: 'from-neon-green/20',
    },
    cyan: {
      text: 'text-neon-cyan',
      border: 'border-neon-cyan/30',
      gradient: 'from-neon-cyan/20',
    },
    red: {
      text: 'text-neon-red',
      border: 'border-neon-red/30',
      gradient: 'from-neon-red/20',
    },
  };

  const colors = colorClasses[accentColor];

  return (
    <div className="project-card bg-dark-card rounded-xl overflow-hidden">
      {/* Project Image */}
      <div className="aspect-video bg-dark-bg relative overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={`${title} screenshot`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <FileCode className="w-16 h-16 mx-auto mb-2 opacity-50" />
              <p className="text-sm font-mono">{title} Preview</p>
            </div>
          </div>
        )}
        <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300`} />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className={`text-xl font-bold ${colors.text}`}>{title}</h3>
          <div className="flex space-x-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-300 text-sm mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-2 py-1 bg-dark-bg border ${colors.border} rounded text-xs font-mono ${colors.text}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Achievements */}
        <ul className="space-y-1 text-sm text-gray-400">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className={`${colors.text} mt-0.5`}>•</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
