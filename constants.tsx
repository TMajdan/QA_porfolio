import { Github, Linkedin, Mail, FileText, Globe } from 'lucide-react';
import { Job, Project, Skill, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Jan Kowalski",
  role: "Senior QA Automation Engineer",
  summary: "Jestem pasjonatem jakości oprogramowania z ponad 5-letnim doświadczeniem w branży IT. Specjalizuję się w projektowaniu skalowalnych frameworków testowych oraz wdrażaniu kultury Quality Assurance w zespołach Agile. Moim celem jest nie tylko znajdowanie błędów, ale przede wszystkim zapobieganie im poprzez automatyzację i bliską współpracę z deweloperami.",
  location: "Warszawa, Polska (Hybrid/Remote)",
  email: "jan.kowalski@example.com"
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com", icon: Github },
  { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  { name: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: Mail },
  { name: "Website", url: "#", icon: Globe },
];

export const SKILLS: Skill[] = [
  // Automation
  { name: "Playwright", level: 95, category: "Automation" },
  { name: "Cypress", level: 90, category: "Automation" },
  { name: "Selenium WebDriver", level: 85, category: "Automation" },
  { name: "Appium", level: 70, category: "Automation" },
  { name: "RestAssured", level: 80, category: "Automation" },
  
  // Languages
  { name: "TypeScript / JavaScript", level: 95, category: "Languages" },
  { name: "Python", level: 80, category: "Languages" },
  { name: "Java", level: 60, category: "Languages" },
  { name: "SQL", level: 75, category: "Languages" },

  // Tools
  { name: "Git & GitHub", level: 90, category: "Tools" },
  { name: "Docker", level: 70, category: "Tools" },
  { name: "Postman / Insomnia", level: 95, category: "Tools" },
  { name: "Jenkins / GitHub Actions", level: 75, category: "Tools" },
  { name: "JIRA / Xray", level: 100, category: "Tools" },

  // Manual / Soft
  { name: "Test Strategy", level: 90, category: "Manual" },
  { name: "Exploratory Testing", level: 95, category: "Manual" },
  { name: "Agile / Scrum", level: 95, category: "Manual" },
  { name: "Mentoring", level: 80, category: "Manual" },
];

export const EXPERIENCE: Job[] = [
  {
    company: "Global Tech Solutions",
    role: "Senior QA Automation Engineer",
    period: "Styczeń 2022 - Obecnie",
    description: [
      "Zaprojektowanie i wdrożenie frameworku E2E w oparciu o Playwright i TypeScript, co zredukowało czas regresji z 2 dni do 4 godzin.",
      "Konfiguracja potoków CI/CD w GitHub Actions uruchamiających testy przy każdym Pull Requeście.",
      "Mentoring dla 3 młodszych testerów, prowadzenie warsztatów z dobrych praktyk testowania.",
      "Współpraca z Product Ownerami w celu definiowania kryteriów akceptacji (Gherkin/BDD)."
    ]
  },
  {
    company: "Software House 'CodeMasters'",
    role: "QA Engineer",
    period: "Marzec 2019 - Grudzień 2021",
    description: [
      "Tworzenie scenariuszy testowych i wykonywanie testów manualnych dla aplikacji webowych i mobilnych.",
      "Automatyzacja kluczowych procesów biznesowych przy użyciu Cypress.",
      "Testowanie API REST przy użyciu Postman i skryptów JS.",
      "Udział w procesach Scrumowych (Planning, Daily, Review, Retro)."
    ]
  },
  {
    company: "StartUp Inc.",
    role: "Junior Software Tester",
    period: "Lipiec 2018 - Luty 2019",
    description: [
      "Wykonywanie testów eksploracyjnych i zgłaszanie błędów w JIRA.",
      "Weryfikacja poprawek programistycznych (retesty).",
      "Przygotowywanie dokumentacji testowej i instrukcji dla użytkowników."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Playwright-TS-Boilerplate",
    description: "Gotowy szablon projektu automatyzacji testów z pełną konfiguracją ESLint, Prettier, Husky i raportowaniem Allure.",
    tags: ["TypeScript", "Playwright", "CI/CD", "Docker"],
    link: "https://github.com"
  },
  {
    title: "Rest-API-Testing-Framework",
    description: "Framework do testowania API napisany w Pythonie (Pytest + Requests) z automatycznym generowaniem danych testowych.",
    tags: ["Python", "Pytest", "REST API", "Faker"],
    link: "https://github.com"
  },
  {
    title: "QA Dashboard",
    description: "Aplikacja React prezentująca metryki jakościowe z JIRA i Jenkins w czasie rzeczywistym.",
    tags: ["React", "Chart.js", "API Integrations"],
    link: "https://github.com"
  }
];