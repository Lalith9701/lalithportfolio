import { motion } from 'framer-motion';
import { Code2, Brain, Database, Zap, Github, BookOpen } from 'lucide-react';

interface Skill {
  name: string;
  category: string;
  proficiency: number; // 0-100
  icon: React.ComponentType<any>;
}

const skills: Skill[] = [
  // Backend & Languages
  { name: 'Python', category: 'Languages', proficiency: 69, icon: Code2 },
  { name: 'HTML', category: 'Languages', proficiency: 75, icon: Code2 },
  { name: 'CSS', category: 'Languages', proficiency: 70, icon: Code2 },
  { name: 'SQL', category: 'Languages', proficiency: 60, icon: Database },
  
  // Frameworks & Libraries
  { name: 'Django', category: 'Web Frameworks', proficiency: 85, icon: Zap },
  { name: 'Flask', category: 'Web Frameworks', proficiency: 80, icon: Zap },
  
  // ML & Data Science
  { name: 'Scikit-learn', category: 'ML Libraries', proficiency: 70, icon: Brain },
  { name: 'Pandas', category: 'ML Libraries', proficiency: 70, icon: Brain },
  { name: 'NumPy', category: 'ML Libraries', proficiency: 70, icon: Brain },
  { name: 'TensorFlow', category: 'ML Libraries', proficiency: 70, icon: Brain },
  
  // Databases & Tools
  { name: 'MySQL', category: 'Databases', proficiency: 65, icon: Database },
  { name: 'Git & GitHub', category: 'Tools', proficiency: 85, icon: Github },
  { name: 'VS Code', category: 'Tools', proficiency: 75, icon: Code2 },
];

const categories = ['Languages', 'Web Frameworks', 'ML Libraries', 'Databases', 'Tools'];

const Skills = () => {
  const avgProficiency = Math.round(
    skills.reduce((sum, skill) => sum + skill.proficiency, 0) / skills.length
  );

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
    <section id="skills" className="py-24 px-6">
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
            Technical Arsenal
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive set of tools and technologies I've mastered through real-world projects and continuous learning.
          </p>
        </motion.div>

        {/* Skills Grid by Category */}
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category);
            return (
              <motion.div key={category} variants={itemVariants}>
                <h3 className="font-display text-xl md:text-2xl font-bold mb-6 text-foreground/80">
                  {category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categorySkills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        className="group glass-card p-6 hover:border-primary/50 transition-all duration-300"
                        whileHover={{ y: -3 }}
                      >
                        {/* Icon and Name */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          <h4 className="font-semibold text-foreground">{skill.name}</h4>
                        </div>

                        {/* Proficiency Bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-muted-foreground">Proficiency</span>
                            <span className="text-sm font-medium text-primary">{skill.proficiency}%</span>
                          </div>
                          <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-primary to-secondary"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.proficiency}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1,
                                ease: 'easeOut',
                                delay: 0.2,
                              }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Footer */}
        <motion.div
          className="grid grid-cols-3 gap-4 mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="glass-card p-6 text-center"
            variants={itemVariants}
          >
            <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
              {skills.length}
            </div>
            <div className="text-sm text-muted-foreground">Skills Mastered</div>
          </motion.div>
          <motion.div
            className="glass-card p-6 text-center"
            variants={itemVariants}
          >
            <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
              {categories.length}
            </div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </motion.div>
          <motion.div
            className="glass-card p-6 text-center"
            variants={itemVariants}
          >
            <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
              {avgProficiency}%
            </div>
            <div className="text-sm text-muted-foreground">Avg Proficiency</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
