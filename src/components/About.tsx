import { motion } from 'framer-motion';
import { Code2, Palette, Rocket, Users } from 'lucide-react';

const stats = [
  { icon: Code2, label: 'Years Experience', value: '5+' },
  { icon: Rocket, label: 'Projects Completed', value: '50+' },
  { icon: Users, label: 'Happy Clients', value: '30+' },
  { icon: Palette, label: 'Design Awards', value: '8' },
];

const timeline = [
  {
    year: '2024',
    title: 'Senior Full-Stack Developer',
    company: 'Tech Innovators Inc.',
    description: 'Leading a team of developers to build enterprise-scale applications.',
  },
  {
    year: '2022',
    title: 'Full-Stack Developer',
    company: 'Digital Agency Co.',
    description: 'Built and deployed 20+ client projects using modern web technologies.',
  },
  {
    year: '2020',
    title: 'Frontend Developer',
    company: 'StartUp Labs',
    description: 'Developed responsive web applications and contributed to open-source projects.',
  },
  {
    year: '2019',
    title: 'Started My Journey',
    company: 'Self-taught',
    description: 'Began learning programming and fell in love with web development.',
  },
];

const About = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="about" className="py-24 px-6">
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
            About Me
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            The Story <span className="gradient-text">Behind</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate developer who transforms ideas into elegant digital solutions.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 text-center group"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
              <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">
              Turning Complex Problems Into
              <span className="gradient-text"> Simple Solutions</span>
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a full-stack developer with a deep passion for creating beautiful, 
                performant web applications. My journey started with curiosity about 
                how websites work, and it has evolved into a career dedicated to 
                crafting exceptional digital experiences.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying up-to-date 
                with the latest technologies. Whether it's building a startup's MVP 
                or scaling an enterprise application, I approach every project with 
                the same level of dedication and attention to detail.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, 
                contributing to open-source projects, or mentoring aspiring developers.
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-8">
              My <span className="gradient-text">Journey</span>
            </h3>
            <div className="space-y-0">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  variants={itemVariants}
                >
                  <div className="glass-card p-5 ml-2">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-2">
                      {item.year}
                    </span>
                    <h4 className="font-display text-lg font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm text-primary/80 mb-2">{item.company}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
