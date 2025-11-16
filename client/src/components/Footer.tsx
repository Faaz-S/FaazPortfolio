import { Mail, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-dark-bg/95 backdrop-blur-sm border-t border-dark-border py-3">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-6">
          <a
            href="mailto:sherwanifaaz@gmail.com"
            className="flex items-center gap-2 text-gray-400 hover:text-neon-green transition-colors font-mono text-sm"
          >
            <Mail className="w-4 h-4" />
            sherwanifaaz@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/faaz-sherwani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-neon-cyan transition-colors font-mono text-sm"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/Faaz-S"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-neon-red transition-colors font-mono text-sm"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
