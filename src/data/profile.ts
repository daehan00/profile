import { Github, Mail, Instagram, BookText } from 'lucide-react';
import React from 'react';
import type { BilingualText } from '../types';

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ElementType;
}

export interface ProfileData {
  name: BilingualText;
  role: BilingualText;
  slogan: BilingualText;
  about: BilingualText;
  languages: string[];
  skills: string[];
  socialLinks: SocialLink[];
}

export const profileData: ProfileData = {
  name: {
    ko: "김대한",
    en: "Daehan Kim"
  },
  role: {
    ko: "Web Developer",
    en: "Web Developer"
  },
  slogan: {
    ko: "코드를 이용한 문제 해결을 즐기는 개발자입니다.",
    en: "A developer who enjoys solving problems with code."
  },
  about: {
    ko: `저는 데이터를 읽고, AI와 자동화 기술을 통해 최적의 해답을 찾아내는 개발자입니다.
  새로운 기술을 탐구하여 실제 서비스에 녹여내는 실행력을 무기로,
  매일의 기록을 통해 어제보다 더 나은 설계를 고민합니다.
  단순한 기능을 넘어 사람들의 시간을 아껴주고 
삶을 편리하게 만드는 서비스를 만드는 것이 제 지향점입니다.`,
    en: `I am a web developer passionate about solving problems and creating better web environments.
I enjoy learning new technologies and aim to grow together through smooth communication with colleagues.
I always strive to write efficient and maintainable code.`
  },
  languages: ["Python", "TypeScript", "SQL"],
  skills: [
    "FastAPI", "Flask", "React", "Next.js",          // Frameworks
    "PostgreSQL", "ChromaDB",                        // DB
    "Node.js", "Docker", "AWS", "Nginx",             // Infra
    "Langchain", "Langgraph",                        // AI
    "HTML/CSS/JS", "Git", "Figma"                    // etc
  ],
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/daehan00", icon: Github },
    { platform: "Email", url: "mailto:rlaeogks4682@gmail.com", icon: Mail },
    { platform: "Instagram", url: "https://www.instagram.com/about.kor", icon: Instagram },
    { platform: "Blog", url: "https://rlaeogks4682.tistory.com/", icon: BookText },
  ]
};