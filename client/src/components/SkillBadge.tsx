interface SkillBadgeProps {
  name: string;
  icon: string;
  category?: 'frontend' | 'backend' | 'robotics' | 'general';
}

export default function SkillBadge({ name, icon, category = 'general' }: SkillBadgeProps) {
  const categoryColors = {
    frontend: 'text-neon-green',
    backend: 'text-neon-cyan',
    robotics: 'text-neon-red',
    general: 'text-white',
  };

  return (
    <div className="skill-badge bg-dark-card rounded-lg p-4 text-center group">
      <div className="text-2xl mb-2 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <span className={`font-mono text-sm ${categoryColors[category]} transition-colors duration-300`}>
        {name}
      </span>
    </div>
  );
}
