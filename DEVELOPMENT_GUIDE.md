# 프로필 포트폴리오 사이트 개발 가이드

이 문서는 현재까지 진행된 프로필 사이트의 개발 상황을 정리하고, 향후 완성을 위해 필요한 작업들을 안내하기 위해 작성되었습니다.

## 1. 프로젝트 개요

*   **기술 스택:** React 19, TypeScript, Vite, Tailwind CSS (v4), Framer Motion, Lucide React
*   **디자인 컨셉:** Clean & Minimal, One Page Scroll, Dark Mode Support, Multi-language Support (KR/EN)

## 2. 현재 디렉토리 구조

```
src/
├── components/
│   ├── layout/       # 레이아웃 관련 컴포넌트 (Navbar, Footer, Layout)
│   └── ui/           # 재사용 가능한 UI 컴포넌트 (버튼, 카드 등 - 예정)
├── data/             # 포트폴리오 데이터 파일 (직접 수정 필요)
│   ├── experience.ts # 경력 사항
│   ├── profile.ts    # 프로필 정보 (이름, 소개, 소셜 링크)
│   └── projects.ts   # 프로젝트 목록
├── sections/         # 각 페이지 섹션 컴포넌트 (구현 예정)
├── App.tsx           # 메인 애플리케이션 컴포넌트 (섹션 조립)
└── index.css         # Tailwind CSS 설정
```

## 3. 완료된 작업

1.  **환경 설정:**
    *   Vite + React + TypeScript 프로젝트 생성
    *   Tailwind CSS v4 설치 및 설정 (PostCSS 플러그인 방식)
    *   Framer Motion (애니메이션), Lucide React (아이콘) 설치
2.  **레이아웃 구현:**
    *   반응형 `Navbar` (모바일 메뉴 포함)
    *   `Footer` (저작권 및 소셜 아이콘)
    *   기본 `Layout` 구조 잡기
3.  **데이터 구조화:**
    *   `src/data` 폴더에 TypeScript 인터페이스와 함께 더미 데이터 생성

## 4. 데이터 수정 가이드 (사용자 작업)

본인의 정보로 포트폴리오를 채우기 위해 아래 파일들을 수정해 주세요. **다국어 지원을 위해 텍스트 필드는 한글(`ko`)과 영문(`en`)을 모두 포함해야 합니다.**

*   **구조 변경 예시:** `title: "제목"` → `title: { ko: "제목", en: "Title" }`
*   **`src/data/profile.ts`**: 이름, 직무, 자기소개(about) 등을 다국어 객체로 수정합니다.
*   **`src/data/experience.ts`**: 경력 상세 내용 및 직함 등을 영문 버전과 함께 작성합니다.
*   **`src/data/projects.ts`**: 프로젝트 설명 및 제목을 다국어로 입력합니다.

## 5. 남은 작업 (구현 가이드)

현재 `App.tsx`에는 각 섹션의 위치를 표시하는 플레이스홀더만 있습니다. 각 섹션을 별도의 컴포넌트로 구현하여 교체해야 합니다.

### 단계별 구현 계획

1.  **다국어 지원 (Internationalization)**
    *   `LanguageContext`를 생성하여 현재 언어 상태(`ko` | `en`)를 전역에서 관리합니다.
    *   **Fallback 처리:** 번역 데이터가 없거나 특정 언어(예: 한국어) 내용이 비어있는 경우, 기본적으로 **영어(`en`)**가 표시되도록 유틸리티 함수나 로직을 구현합니다.
    *   **Navbar 업데이트:** 헤더에 한/영 전환(Toggle) 버튼을 추가하고, 클릭 시 언어가 변경되도록 구현합니다.

2.  **Hero 섹션 (`src/sections/Hero.tsx`)**
    *   `src/data/profile.ts`의 데이터를 불러와 현재 선택된 언어에 맞는 텍스트(이름, 직무, 슬로건)를 표시합니다.
    *   배경 이미지나 추상적인 도형을 배치하여 시각적 요소를 더합니다.
    *   "자세히 보기" 또는 "연락하기" 버튼을 추가합니다.

3.  **About 섹션 (`src/sections/About.tsx`)**
    *   자기소개 텍스트를 언어 상태에 맞춰 렌더링합니다.
    *   기술 스택(Skills)을 태그나 아이콘 형태로 시각화합니다.

4.  **Experience 섹션 (`src/sections/Experience.tsx`)**
    *   `src/data/eperience.ts` 데이터를 map 함수로 순회하여 현재 언어에 맞는 내용을 렌더링합니다.
    *   수직 타임라인(Vertical Timeline) 디자인을 적용하면 좋습니다.

5.  **Projects 섹션 (`src/sections/Projects.tsx`)**
    *   `src/data/projects.ts` 데이터를 카드(Card) 형태로 보여주며, 설명 텍스트를 다국어 처리합니다.
    *   Grid 레이아웃(`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)을 사용하여 반응형으로 배치합니다.
    *   카드 호버 시 약간의 애니메이션(확대, 그림자)을 추가합니다.

6.  **App.tsx 연결**
    *   위에서 만든 컴포넌트들을 `App.tsx`에 import 하여 기존 `section` 태그들을 대체합니다.

### 팁

*   **애니메이션:** `framer-motion`의 `motion.div`를 사용하여 스크롤 시 요소가 부드럽게 나타나도록(`initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}`) 설정해 보세요.
*   **다크 모드:** Tailwind의 `dark:` 클래스를 적극 활용하여 다크 모드에서도 가독성이 좋도록 색상을 조정하세요.

## 6. 실행 및 빌드

*   **개발 서버 실행:** `npm run dev`
*   **프로덕션 빌드:** `npm run build`
*   **배포 (GitHub Pages):** `npm run deploy`

---
*작성일: 2025-12-18*
