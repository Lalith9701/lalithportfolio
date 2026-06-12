import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'Deloitte Technology Job Simulation',
    issuer: 'Forage',
  },
  {
    title: 'Vadodara Hackathon 6.0',
    issuer: 'Participant',
  },
  {
    title: 'Campus Ambassador Program',
    issuer: 'KiTech',
  },
  {
    title: 'Nestle E-learning: Resilience',
    issuer: 'Nesternship',
  },
  {
    title: 'ICAT - Internship Common Aptitude Test',
    issuer: 'Participant',
  },
  {
    title: 'Android App Development Bootcamp (Kotlin)',
    issuer: 'Udemy',
  },
];

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="certifications" className="py-24 px-6 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1 rounded-full glass-card text-sm text-primary mb-4"
          >
            Achievements
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Courses & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my continuous learning and participation in various programs and hackathons.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 group hover:border-primary/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2 text-foreground/90">
                {cert.title}
              </h3>
              <p className="text-primary/80 font-medium">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
