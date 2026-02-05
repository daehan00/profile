import type { BilingualText } from '../types';

export interface ProjectItem {
  id: number;
  title: BilingualText;
  description: BilingualText;
  thumbnail?: string; // 이미지 경로 (없으면 demoUrl 기반 미리보기)
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: { ko: "1LinkMe", en: "1LinkMe" },
    description: {
      ko: "안전하고 간편한 메모 공유 서비스입니다. 암호화된 메모 생성, 일회성 링크 공유, 그리고 조회수/시간 기반 자동 삭제 기능을 제공하며 MZ 감성의 글래스모피즘 디자인이 적용되었습니다.",
      en: "Frontend for a secure and simple memo sharing service. Provides encrypted memo creation, one-time link sharing, and auto-deletion based on views/time, featuring a modern glassmorphism design."
    },
    techStack: ["React", "FastAPI"],
    demoUrl: "https://1linkme-frontend.vercel.app/",
    githubUrl: "https://github.com/daehan00/1LinkMe"
  },
  {
    id: 2,
    title: { ko: "오메추", en: "Omechoo" },
    description: {
      ko: "결정 장애를 위한 오늘 메뉴 추천 및 주변 식당 검색 서비스입니다. 취향 기반 위저드 추천, 랜덤 가차 모드, 카카오맵 연동 식당 검색, 그리고 실시간 투표 공유 기능을 제공합니다.",
      en: "A menu recommendation and restaurant search service for indecisive users. Features wizard-style recommendations, random gacha mode, KakaoMap-integrated restaurant search, and real-time voting share."
    },
    techStack: ["React", "FastAPI"],
    demoUrl: "https://daehan00.github.io/Omechoo/",
    githubUrl: "https://github.com/daehan00/Omechoo"
  },
  {
    id: 3,
    title: { ko: "MyResume", en: "MyResume" },
    description: {
      ko: "AI 기반 자기소개서 및 이력서 작성 보조 도구입니다. 채용 공고 분석부터 전략 수립, LLM(OpenAI/Gemini)을 활용한 초안 작성 및 심층 리뷰까지의 전 과정을 지원합니다.",
      en: "An AI-powered assistant for writing cover letters and resumes. Supports the entire process from job posting analysis and strategy formulation to drafting and in-depth review using LLMs (OpenAI/Gemini)."
    },
    techStack: ["Streamlit", "LangChain"],
    demoUrl: "https://myresume-daehan00.streamlit.app",
    githubUrl: "https://github.com/daehan00/MyResume"
  }
];