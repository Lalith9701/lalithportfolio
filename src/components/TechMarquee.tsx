import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Figma', icon: '🎭' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'GraphQL', icon: '◈' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Git', icon: '📦' },
  { name: 'Python', icon: '🐍' },
];

const TechMarquee = () => {
  return (
    <section id="tech" className="py-20 overflow-hidden border-y border-border/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-12">
          Technologies I Work With
        </h2>
        
        <div className="marquee">
          <div className="marquee-content">
            {[...technologies, ...technologies].map((tech, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 px-6 py-3 rounded-full glass-card"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-foreground font-medium whitespace-nowrap">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="marquee-content" aria-hidden="true">
            {[...technologies, ...technologies].map((tech, index) => (
              <motion.div
                key={`duplicate-${index}`}
                className="flex items-center gap-3 px-6 py-3 rounded-full glass-card"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-foreground font-medium whitespace-nowrap">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TechMarquee;
