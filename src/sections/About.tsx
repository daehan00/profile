import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t({ ko: '소개', en: 'About Me' })}
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col gap-12">
          {/* Greetings & Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
              {t({ ko: '안녕하세요!', en: 'Greetings!' })}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line mb-8 max-w-2xl mx-auto">
              {t(profileData.about)}
            </p>
          </motion.div>

          {/* Languages Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold mb-6">
              {t({ ko: '사용 언어', en: 'Languages' })}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {profileData.languages.map((lang, index) => (
                <motion.span
                  key={lang}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium shadow-sm border border-blue-100 dark:border-blue-800"
                >
                  {lang}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">
              {t({ ko: '기술 스택', en: 'Technical Skills' })}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {profileData.skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium shadow-sm border border-gray-100 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-400 transition-colors"
                >
                  #{skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
