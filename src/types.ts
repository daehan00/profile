export type Language = 'ko' | 'en';

export interface BilingualText {
  ko: string;
  en: string;
}

// Helper type to check if a value is BilingualText
export const isBilingual = (text: any): text is BilingualText => {
  return typeof text === 'object' && text !== null && 'ko' in text && 'en' in text;
};
