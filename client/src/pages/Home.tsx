import { Helmet } from 'react-helmet';
import { Download, ExternalLink, Mail, Phone, Linkedin, Github } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import ProjectCard from '@/components/ProjectCard';
import SkillBadge from '@/components/SkillBadge';
import SectionWrapper from '@/components/SectionWrapper';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: 'CodeScribe',
      description: 'AI-assisted development pipeline that converts tickets to draft code with PR automation and human-in-loop review system.',
      technologies: ['Vellum AI', 'Gemini', 'Supabase', 'Linear API', 'GitHub API', 'Node.js'],
      achievements: [
        'AI-assisted pipeline: ticket→draft code→PR + ticket update',
        'Human-in-loop review before merge'
      ],
      accentColor: 'green' as const,
      imageUrl: '/CodeScribe.png',
    },
    {
      title: 'Raaz Tutoring',
      description: 'Serverless tutoring platform with automated contact forms, templated emails, and cost-effective AWS infrastructure.',
      technologies: ['React', 'AWS S3', 'AWS SES', 'AWS Lambda'],
      achievements: [
        'Serverless contact form with templated emails',
        '< $5/mo costs, 17 students onboarded'
      ],
      accentColor: 'cyan' as const,
      imageUrl: '/RaazTutoring.png',
    },
    {
      title: 'YU Snaps',
      description: 'Social photo sharing platform for York University students with optimized performance and Firebase integration.',
      technologies: ['React', 'Firebase Auth', 'Firebase DB', 'WebP'],
      achievements: [
        '+15% Lighthouse score via WebP + resource preloading',
        '30+ active users'
      ],
      accentColor: 'red' as const,
      imageUrl: '/YUSnaps.png',
    },
  ];

  const skills = [
    { name: 'React', icon: '⚛️', category: 'frontend' as const },
    { name: 'Tailwind CSS', icon: '🎨', category: 'frontend' as const },
    { name: 'TypeScript', icon: '📘', category: 'frontend' as const },
    { name: 'AWS', icon: '☁️', category: 'backend' as const },
    { name: 'Firebase', icon: '🔥', category: 'backend' as const },
    { name: 'Node.js', icon: '📦', category: 'backend' as const },
    { name: 'ROS2', icon: '🤖', category: 'robotics' as const },
    { name: 'Python', icon: '🐍', category: 'robotics' as const },
    { name: 'Docker', icon: '🐳', category: 'general' as const },
    { name: 'Kubernetes', icon: '☸️', category: 'general' as const },
    { name: 'Git/GitHub', icon: '🔧', category: 'general' as const },
    { name: 'Java', icon: '☕', category: 'general' as const },
  ];

  return (
    <>
      <Helmet>
        <title>Faaz Sherwani - Software Developer & Robotics Enthusiast</title>
        <meta name="description" content="Portfolio of Faaz Sherwani, Software Developer and Robotics Enthusiast specializing in React, AWS, ROS2, and robotics development at York University." />
      </Helmet>

      <div className="min-h-screen bg-dark-bg text-white">
        <AnimatedBackground />
        <Header />

        <main className="relative z-10">
          {/* Hero Section */}
          <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
            <div className="container mx-auto px-6 text-center">
              <div className="max-w-4xl mx-auto animate-fade-in">
                <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-glow">
                  Building the <span className="text-neon-green">Future</span> with Code
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Computer Science student at York University passionate about robotics, AI, and creating innovative solutions. 
                  Currently developing ROS2 navigation systems and building scalable web applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="cta-button px-8 py-4 bg-transparent border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black font-semibold rounded-lg neon-glow"
                  >
                    See My Work
                  </button>
                  <a
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button px-8 py-4 bg-dark-card border border-dark-border hover:border-neon-cyan text-white font-semibold rounded-lg inline-flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <SectionWrapper id="about" className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-16 neon-text">About Me</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I'm a passionate Computer Science student at York University with a deep fascination for robotics and artificial intelligence. 
                    My journey in technology spans from developing autonomous navigation systems using ROS2 to building scalable web applications 
                    that serve real users.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    When I'm not coding, you'll find me tutoring students in advanced mathematics or contributing to robotics projects. 
                    I believe in the power of technology to solve real-world problems and am constantly exploring new ways to push the 
                    boundaries of what's possible.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <span className="px-4 py-2 bg-dark-card border border-neon-green/30 rounded-full text-sm font-mono text-neon-green">York University</span>
                    <span className="px-4 py-2 bg-dark-card border border-neon-cyan/30 rounded-full text-sm font-mono text-neon-cyan">GPA: 3.8/4.0</span>
                    <span className="px-4 py-2 bg-dark-card border border-neon-red/30 rounded-full text-sm font-mono text-neon-red">Robotics Enthusiast</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 bg-dark-card border-2 border-neon-cyan/30 rounded-xl overflow-hidden">
                      <img 
                        src="/professional-photo.jpg" 
                        alt="Faaz Sherwani - Professional Photo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-r from-neon-green to-neon-cyan opacity-20 blur-xl rounded-xl animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>

          {/* Education Section */}
          <SectionWrapper id="education" className="py-20 bg-dark-card/30">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-16 neon-text">Education</h2>
              <div className="max-w-4xl mx-auto">
                <div className="bg-dark-card border border-dark-border rounded-xl p-8 hover:border-neon-green/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-neon-green">Bachelor of Science, Computer Science (Honours)</h3>
                    <span className="text-gray-400 font-mono">Expected April 2027</span>
                  </div>
                  <p className="text-xl text-gray-300 mb-4">York University, Toronto, ON</p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-neon-cyan font-mono">GPA:</span>
                      <span className="text-white font-bold">3.8/4.0</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-neon-cyan font-mono">Focus:</span>
                      <span className="text-white">Software Engineering & Robotics</span>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <span className="px-3 py-2 bg-dark-bg border border-neon-green/30 rounded-lg text-sm text-center font-mono">Data Structures</span>
                    <span className="px-3 py-2 bg-dark-bg border border-neon-green/30 rounded-lg text-sm text-center font-mono">Algorithms</span>
                    <span className="px-3 py-2 bg-dark-bg border border-neon-green/30 rounded-lg text-sm text-center font-mono">Software Engineering</span>
                    <span className="px-3 py-2 bg-dark-bg border border-neon-green/30 rounded-lg text-sm text-center font-mono">AI/ML</span>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>

          {/* Experience Section */}
          <SectionWrapper id="experience" className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-16 neon-text">Experience</h2>
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="bg-dark-card border border-dark-border rounded-xl p-8 hover:border-neon-cyan/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-neon-cyan">Software Team Member</h3>
                    <span className="text-gray-400 font-mono">Dec 2024 – Present</span>
                  </div>
                  <p className="text-xl text-gray-300 mb-4">York University Robotics Society</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-3">
                      <span className="text-neon-green mt-1">▸</span>
                      <span>Developed ROS2 nodes for autonomous rover navigation using GPS coordinates and Haversine formula calculations</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-neon-green mt-1">▸</span>
                      <span>Implemented sensor fusion algorithms for improved localization accuracy in outdoor environments</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-dark-bg border border-neon-cyan/30 rounded-full text-xs font-mono text-neon-cyan">ROS2</span>
                    <span className="px-3 py-1 bg-dark-bg border border-neon-cyan/30 rounded-full text-xs font-mono text-neon-cyan">Python</span>
                    <span className="px-3 py-1 bg-dark-bg border border-neon-cyan/30 rounded-full text-xs font-mono text-neon-cyan">GPS Navigation</span>
                  </div>
                </div>

                <div className="bg-dark-card border border-dark-border rounded-xl p-8 hover:border-neon-cyan/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-neon-cyan">Math Instructor</h3>
                    <span className="text-gray-400 font-mono">Part-time</span>
                  </div>
                  <p className="text-xl text-gray-300 mb-4">Varsity Tutors</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-3">
                      <span className="text-neon-green mt-1">▸</span>
                      <span>Provide one-on-one online tutoring in advanced functions, calculus, and statistics</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-neon-green mt-1">▸</span>
                      <span>Developed personalized learning strategies resulting in average 25% grade improvement</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-dark-bg border border-neon-cyan/30 rounded-full text-xs font-mono text-neon-cyan">Mathematics</span>
                    <span className="px-3 py-1 bg-dark-bg border border-neon-cyan/30 rounded-full text-xs font-mono text-neon-cyan">Calculus</span>
                    <span className="px-3 py-1 bg-dark-bg border border-neon-cyan/30 rounded-full text-xs font-mono text-neon-cyan">Statistics</span>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>

          {/* Projects Section */}
          <SectionWrapper id="projects" className="py-20 bg-dark-card/30">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-16 neon-text">Featured Projects</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
              
              
            </div>
          </SectionWrapper>

          {/* Skills Section */}
          <SectionWrapper id="skills" className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-16 neon-text">Technical Skills</h2>
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {skills.map((skill, index) => (
                    <SkillBadge key={index} {...skill} />
                  ))}
                </div>
                
                <div className="mt-16 grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-neon-green mb-4">Frontend</h3>
                    <div className="space-y-2 text-gray-300">
                      <p>React & Next.js</p>
                      <p>Tailwind CSS</p>
                      <p>TypeScript</p>
                      <p>Responsive Design</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-neon-cyan mb-4">Backend & Cloud</h3>
                    <div className="space-y-2 text-gray-300">
                      <p>AWS (S3, Lambda, SES)</p>
                      <p>Firebase</p>
                      <p>Node.js</p>
                      <p>Serverless Architecture</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-neon-red mb-4">Robotics & AI</h3>
                    <div className="space-y-2 text-gray-300">
                      <p>ROS2</p>
                      <p>Computer Vision</p>
                      <p>Machine Learning</p>
                      <p>GPS Navigation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>

          {/* Contact Section */}
          <SectionWrapper id="contact" className="py-20 bg-dark-card/30">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-16 neon-text">Get In Touch</h2>
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-xl text-gray-300 mb-12">
                  I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology and robotics.
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <a
                    href="mailto:sherwanifaaz@gmail.com"
                    className="group block bg-dark-card border border-dark-border rounded-xl p-6 hover:border-neon-green/50 transition-all duration-300"
                  >
                    <Mail className="w-8 h-8 mx-auto mb-4 group-hover:text-neon-green transition-colors" />
                    <h3 className="font-semibold text-neon-green mb-2">Email</h3>
                    <p className="text-gray-400 text-sm">sherwanifaaz@gmail.com</p>
                  </a>
                  
                  <a
                    href="tel:+14169092600"
                    className="group block bg-dark-card border border-dark-border rounded-xl p-6 hover:border-neon-cyan/50 transition-all duration-300"
                  >
                    <Phone className="w-8 h-8 mx-auto mb-4 group-hover:text-neon-cyan transition-colors" />
                    <h3 className="font-semibold text-neon-cyan mb-2">Phone</h3>
                    <p className="text-gray-400 text-sm">(416) 909-2600</p>
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/faaz-sherwani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-dark-card border border-dark-border rounded-xl p-6 hover:border-neon-red/50 transition-all duration-300"
                  >
                    <Linkedin className="w-8 h-8 mx-auto mb-4 group-hover:text-neon-red transition-colors" />
                    <h3 className="font-semibold text-neon-red mb-2">LinkedIn</h3>
                    <p className="text-gray-400 text-sm">faaz-sherwani</p>
                  </a>
                  
                  <a
                    href="https://github.com/Faaz-S"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-dark-card border border-dark-border rounded-xl p-6 hover:border-neon-green/50 transition-all duration-300"
                  >
                    <Github className="w-8 h-8 mx-auto mb-4 group-hover:text-neon-green transition-colors" />
                    <h3 className="font-semibold text-neon-green mb-2">GitHub</h3>
                    <p className="text-gray-400 text-sm">Faaz-S</p>
                  </a>
                </div>
                
                <div className="mt-12">
                  <a
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black font-semibold rounded-lg neon-glow"
                  >
                    <Download className="w-4 h-4" />
                    Download My Resume
                  </a>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </main>

        <Footer />
      </div>
    </>
  );
}
