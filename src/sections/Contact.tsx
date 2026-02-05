import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t({ ko: '연락하기', en: 'Contact Me' })}
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t(
              {
                ko: '새로운 프로젝트 제안이나 협업 문의는 언제든 환영합니다!\n아래 채널을 통해 편하게 연락주세요.',
                en: 'I am always open to new projects and collaboration opportunities!\nFeel free to reach out through any of the channels below.'
              }
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {profileData.socialLinks.map((link, index) => (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 mb-4">
                <link.icon size={28} />
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">
                {link.platform}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Footer simple text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-24 pt-8 border-t border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 text-sm"
        >
          <p>© {new Date().getFullYear()} {t(profileData.name)}. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
