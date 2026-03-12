import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Github, Target, Users } from 'lucide-react';
import React, { useState } from 'react';

// Version statique pour le comptage (sans traduction)
export const projectsData = [
  { categories: ["Personnel"] },
  { categories: ["Personnel"] },
  { categories: ["Personnel"] },
];

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = React.useState("Tout");
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const projects = [
    {
      id: 1,
      title: 'Prolance',
      shortDescription: 'A secure, milestone-based escrow payment platform enabling risk-free financial transactions between global users with Redis caching and multi-layered security.',
      fullDescription: 'Prolance is a comprehensive freelance platform featuring a secure, milestone-based escrow payment system that utilizes conditional fund-release logic to facilitate transparent and risk-free financial transactions between global users. The platform is optimized for high performance with Redis caching, achieving a 45-60% reduction in API latency and decreasing database overhead by ~50% during concurrent high-traffic sessions. It features a robust multi-layered security framework incorporating CAPTCHA and JWT authentication, successfully neutralizing 95% of bot attacks and reducing unauthorized access by ~70%.',
      image: "./images/projects/prolance.png",
      tech: ["Node.js", "Express", "React", "Redis", "MongoDB", "Razorpay", "JWT", "CAPTCHA"],
      categories: ["Personnel"],
      type: "Web",
      duration: "Mar' 2025 - Jun' 2025",
      team: "Team Project",
      challenges: ["Milestone-based escrow system", "Redis caching optimization", "Multi-layered security framework"],
      results: ["45-60% API latency reduction", "50% database overhead reduction", "95% bot attack neutralization"],
      demoUrl: "http://prolance-five.vercel.app/",
      githubUrl: "https://github.com/MerazMz/prolance"
    },
    {
      id: 2,
      title: 'Tars Chat App',
      shortDescription: 'TARS Chat App is a platform that allows people to communicate and stay connected in real time. Users can interact with friends or groups, share messages, and engage in conversations easily through a simple and secure chat environment.',
      fullDescription: 'TARS Chat App is a modern real-time communication platform designed to help users connect and interact easily. The application allows users to send messages, react to texts with emojis, and communicate in both private and group chats. Users can create groups to have conversations with multiple people at the same time. To maintain privacy and security, the platform includes a friend request system that allows users to control who can connect with them. The app integrates Clerk for secure authentication and user management. For handling real-time data and storing messages efficiently, it uses Convex as the database. The combination of these technologies ensures a smooth, secure, and responsive chat experience. Overall, TARS Chat App provides an interactive environment where users can communicate, collaborate, and stay connected.',
      image: "./images/projects/tars-chat.png",
      tech: ["Node.js", "Express", "React", "Redis", "MongoDB", "Razorpay", "JWT", "CAPTCHA"],
      categories: ["Personnel"],
      type: "Web",
      duration: "Jan' 2026 - Feb' 2026",
      team: "Solo Project",
      challenges: ["Clerk Authentication Integration", "Handling and manipulating data using Convex", "Multi-layered security framework"],
      results: ["45-60% API latency reduction", "50% database overhead reduction", "95% bot attack neutralization"],
      demoUrl: "https://tars-chat-ecru.vercel.app/",
      githubUrl: "https://github.com/Pranay921/tars-chat"
    },
    {
      id: 3,
      title: 'Medical Support System',
      shortDescription: 'A centralized healthcare portal with appointment scheduling, emergency bookings, voice AI assistant, and geolocation-based medical services.',
      fullDescription: 'Medical Support System is a comprehensive healthcare portal that consolidates appointment scheduling and emergency bookings into a unified interface, significantly reducing the friction of accessing critical medical services. The platform features an accessibility-driven voice AI assistant using JavaScript Speech API, resulting in a 40% improvement in navigation efficiency and enabling seamless hands-free user interaction. It optimizes emergency response workflows by deploying a one-tap ambulance request module and a geolocation-based medical store locator to provide rapid assistance during critical health situations.',
      image: "./images/projects/medibot.png",
      tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "Speech API", "Geolocation API"],
      categories: ["Personnel"],
      type: "Web",
      duration: "Mar' 2025 - Jun' 2025",
      team: "Team Project",
      challenges: ["Voice AI assistant integration", "Emergency response optimization", "Geolocation-based services"],
      results: ["40% navigation efficiency improvement", "One-tap emergency services", "Hands-free interaction enabled"],
      demoUrl: undefined,
      githubUrl: "https://github.com/Pranay921/MediBot"
    },
    {
      id: 4,
      title: 'Group Chat App',
      shortDescription: 'A full-stack communication hub supporting instant group conversations, peer collaboration, and secure document exchange.',
      fullDescription: 'Group Chat App is a comprehensive full-stack communication platform that supports instant group conversations and peer collaboration. The application features a protected document-exchange module for smooth sharing of PDFs, notes, and presentations inside the chat space. It implements a reliable login system with session persistence using PHP-MySQL for controlled and consistent user access, ensuring secure and seamless communication across teams.',
      image: "./images/projects/group-chat.png",
      tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "Session Management"],
      categories: ["Personnel"],
      type: "Web",
      duration: "Mar' 2025 - Jun' 2025",
      team: "Solo",
      challenges: ["Real-time messaging", "Document sharing module", "Session persistence"],
      results: ["Instant group conversations", "Secure document exchange", "Reliable session management"],
      demoUrl: undefined,
      githubUrl: "https://github.com/Pranay921/A-group-chat-app-"
    }
  ];

  const categories = [
    t('portfolio.filter.all'),
    t('portfolio.filter.university'),
    t('portfolio.filter.personal'),
    t('portfolio.filter.ai'),
    t('portfolio.filter.cybersecurity'),
    t('portfolio.filter.collaboration'),
    t('portfolio.filter.certificate')
  ];

  const toggleCard = (projectId: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const filteredProjects = projects.filter(project => {
    if (selectedCategory === t('portfolio.filter.all')) return true;
    if (selectedCategory === t('portfolio.filter.university')) {
      return project.categories.includes("Universitaire");
    }
    if (selectedCategory === t('portfolio.filter.personal')) {
      return !project.categories.includes("Universitaire");
    }
    if (selectedCategory === t('portfolio.filter.ai')) {
      return project.categories.includes("IA");
    }
    if (selectedCategory === t('portfolio.filter.cybersecurity')) {
      return project.categories.includes("CyberSecurite");
    }
    if (selectedCategory === t('portfolio.filter.collaboration')) {
      return project.categories.includes("Collaboration");
    }
    if (selectedCategory === t('portfolio.filter.certificate')) {
      return project.categories.includes("Certificat");
    }
    return true;
  });

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {t('portfolio.title')}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>




        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-96"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                className="relative w-full h-full cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: flippedCards.has(project.id) ? 180 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                onClick={() => toggleCard(project.id)}
              >
                {/* Face avant */}
                <div
                  className="absolute inset-0 bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 overflow-y-auto h-96"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 text-white text-xs rounded-full backdrop-blur-sm">
                      {project.categories.join(' / ')}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech && project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech && project.tech.length > 3 && (
                        <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="text-center pt-2">
                      <p className="text-xs text-muted-foreground">{t('portfolio.details')}</p>
                    </div>
                  </div>
                </div>

                {/* Face arrière */}
                <div
                  className="absolute inset-0 bg-background rounded-2xl overflow-hidden shadow-lg p-6 space-y-4 overflow-y-auto h-96"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="space-y-4 h-full flex flex-col">
                    <h3 className="text-lg font-bold text-foreground">{project.title}</h3>

                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {project.fullDescription}
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div className="flex items-center gap-2">
                        <Calendar size={12} className="text-primary" />
                        <span className="text-muted-foreground">{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={12} className="text-primary" />
                        <span className="text-muted-foreground">{project.team}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Target size={12} className="text-primary" />
                        <span className="text-xs font-medium text-foreground">{t('portfolio.challenges')}:</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {project.challenges && project.challenges.slice(0, 2).join(" • ")}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      {project.demoUrl && (
                        <motion.a
                          href={project.demoUrl}
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium text-xs hover:shadow-lg transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={12} />
                          {t('portfolio.demo')}
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-border text-foreground rounded-lg font-medium text-xs hover:bg-muted transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={12} />
                          {t('portfolio.code')}
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
