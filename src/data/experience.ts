import type { BilingualText } from '../types';

export interface ExperienceItem {
  id: number;
  company: BilingualText;
  position: BilingualText;
  period: BilingualText;
  description: BilingualText[];
  techStack: string[];
}

export const experiences: ExperienceItem[] = [
  // 틀만 잡아놓기 위해 비워두거나 샘플 하나만 남깁니다.
  {
    id: 1,
    company: { ko: "회사명", en: "Company Name" },
    position: { ko: "직무", en: "Position" },
    period: { ko: "202X.XX - 현재", en: "202X.XX - Present" },
    description: [
      { ko: "주요 성과 및 업무 내용 1", en: "Key achievement and responsibility 1" },
      { ko: "주요 성과 및 업무 내용 2", en: "Key achievement and responsibility 2" }
    ],
    techStack: ["Tech A", "Tech B"]
  }
];