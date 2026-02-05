import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t({ ko: '경력 사항', en: 'Experience' })}
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 ml-4"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900" />
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {t(exp.company)}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {t(exp.position)}
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-mono mt-1 md:mt-0">
                  {t(exp.period)}
                </span>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300 text-sm list-disc list-inside">
                    {t(desc)}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.techStack.map(tech => (
                  <span 
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs border border-gray-200 dark:border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
