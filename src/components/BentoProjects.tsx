import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI Student Report System',
    description: 'Flask-based ML web application to analyze student performance and generate insightful reports using data visualization and predictive analytics.',
    tags: ['Flask', 'Scikit-learn', 'Pandas'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    size: 'large',
    color: 'from-blue-500/20 to-cyan-500/20',
    link: '#',
    github: 'https://github.com/Lalith9701/AI-Student-Report-System',
  },
  {
    id: 2,
    title: 'Stress Predictor App',
    description: 'ML application with Tkinter GUI to predict stress levels based on user inputs.',
    tags: ['Python', 'Tkinter', 'ML'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
    size: 'medium',
    color: 'from-purple-500/20 to-pink-500/20',
    link: '#',
    github: 'https://github.com/Lalith9701/Stress-Predictor',
  },
  {
    id: 3,
    title: 'School Attendance System',
    description: 'Django-based system to manage student records and automate attendance tracking.',
    tags: ['Django', 'MySQL', 'Python'],
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&h=400&fit=crop',
    size: 'medium',
    color: 'from-emerald-500/20 to-teal-500/20',
    link: '#',
    github: 'https://github.com/Lalith9701/SCHOOL_ATTENDANCE',
  },
  {
    id: 4,
    title: 'The Angels Restaurant',
    description: 'Django-based restaurant web app with Veg & Non-Veg menus, image-based items, interactive cart, and modern responsive UI.',
    tags: ['Django', 'HTML/CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    size: 'large',
    color: 'from-orange-500/20 to-red-500/20',
    link: '#',
    github: 'https://github.com/Lalith9701/THE-ANGELS-RESTAURANT',
  },
];

const BentoProjects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="projects" className="py-24 px-6">
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
            Selected Work
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my passion for creating 
            beautiful, functional digital experiences.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`group relative overflow-hidden rounded-3xl glass-card cursor-pointer ${
                project.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} via-background/80 to-background/95`} />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full p-6 flex flex-col justify-end">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-background/50 backdrop-blur-sm text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Action Buttons - Revealed on hover */}
                <div
                  className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    View Project
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full glass-card hover:bg-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BentoProjects;
