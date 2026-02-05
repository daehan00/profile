import React from 'react';
import { profileData } from '../../data/profile';
import { useLanguage } from '../../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-white border-t border-gray-100 py-12 dark:bg-gray-900 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} {t(profileData.name)}. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          {profileData.socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
              aria-label={link.platform}
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
