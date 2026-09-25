export const profile = {
  name: 'Ghazi Ben Halima',
  title: {
    fr: 'Senior Full Stack .NET / Angular | Monétique & Fintech',
    en: 'Senior Full Stack .NET / Angular | Payment Systems & Fintech',
  },
  location: 'Tunis, Tunisie',
  email: 'benhalimaghazi@gmail.com',
  phone: '+216 53 126 178',
  linkedin: 'https://www.linkedin.com/in/ghazibenhalima',
  github: 'https://github.com/GhaziBH',
  cv: '/cv/Cv_GhaziBenHalima_2025.pdf',
  yearsOfExperience: 5,
  projectsDelivered: 10,
  clients: 8,
};

export const experiences = [
  {
    company: 'MS SOLUTIONS',
    role: {
      fr: 'Project Lead / Senior Développeur Full Stack .NET & Angular',
      en: 'Project Lead / Senior Full Stack .NET & Angular Developer',
    },
    period: { start: '2024', end: { fr: 'Présent', en: 'Present' } },
    location: 'Tunis, Tunisie',
    bullets: {
      fr: [
        'Pilotage technique de plateformes monétiques critiques pour Pluxee (+500 000 utilisateurs), Royal Air Maroc et des opérateurs de paiement mobile.',
        'Leadership Agile/Scrum : estimation, chiffrage, backlog, coordination client, code reviews et mentoring.',
        'Gateway ISO8583/SPDH : 100 000+ transactions/jour, temps de réponse < 150 ms.',
        'Émission et compensation de 50 000+ vouchers financiers/mois pour Royal Air Maroc.',
        'Optimisation des traitements batch Hangfire/CRON : amélioration de 45% du temps d\'exécution.',
        'Renforcement qualité : tests unitaires NUnit/xUnit/Moq avec +85% de couverture, SonarQube, CI/CD.',
        'Définition et évolution des architectures (Clean Architecture, Microservices, CQRS).',
        'Déploiements sur IIS et Azure, monitoring, diagnostic et résolution d\'incidents critiques en production.',
      ],
      en: [
        'Technical leadership of critical payment platforms for Pluxee (500K+ users), Royal Air Maroc and national mobile payment operators.',
        'Agile/Scrum leadership: estimation, backlog grooming, client coordination, code reviews and mentoring.',
        'ISO8583/SPDH Authorization Gateway: 100K+ transactions/day, response time < 150ms.',
        'Issuance and settlement of 50K+ financial vouchers/month for Royal Air Maroc.',
        'Batch processing optimization (Hangfire/CRON): 45% improvement in execution time.',
        'Quality enforcement: NUnit/xUnit/Moq unit tests with 85%+ coverage, SonarQube, CI/CD.',
        'Architecture design and evolution (Clean Architecture, Microservices, CQRS).',
        'Deployments on IIS and Azure, monitoring, diagnostics and critical incident resolution in production.',
      ],
    },
    tech: [
      'C#', '.NET 8', 'ASP.NET Core', 'Angular 17', 'TypeScript', 'EF Core', 'Dapper',
      'CQRS', 'SQL Server', 'T-SQL', 'ISO8583', 'SPDH', 'JWT', 'Swagger',
      'Hangfire', 'Azure', 'Azure DevOps', 'CI/CD', 'IIS', 'SonarQube', 'NUnit', 'Moq',
    ],
  },
  {
    company: 'MS SOLUTIONS',
    role: {
      fr: 'Développeur Full Stack .NET & Angular',
      en: 'Full Stack .NET & Angular Developer',
    },
    period: { start: '2022', end: { fr: '2023', en: '2023' } },
    location: 'Tunis, Tunisie',
    bullets: {
      fr: [
        'Développement de solutions monétiques et de paiement pour des clients bancaires et institutionnels.',
        'Switch National Mobile Payment : interconnexion des transactions financières entre établissements.',
        'Switch POS : interconnexion points de vente / systèmes monétiques avec automatisation CRON.',
        'Migration Sodexo vers Clean Architecture et microservices, amélioration de la maintenabilité.',
        'Développement de dashboards dynamiques de supervision avec ChartJS.',
        'Implémentation de tests unitaires avec couverture supérieure à 85%.',
        'CRON pour synchronisation, désactivation de cartes expirées, CashBack et alertes.',
        'Déploiements et support post-production sur IIS et Azure.',
      ],
      en: [
        'Development of payment solutions for banking and institutional clients.',
        'National Mobile Payment Switch: financial transaction interconnection between institutions.',
        'POS Switch: point-of-sale interconnection with payment systems and CRON automation.',
        'Sodexo migration to Clean Architecture and microservices, improving maintainability.',
        'Dynamic supervision dashboards with ChartJS.',
        'Unit test implementation with 85%+ coverage on critical modules.',
        'CRON jobs for synchronization, card deactivation, CashBack and alerts.',
        'Deployments and post-production support on IIS and Azure.',
      ],
    },
    tech: [
      'C#', '.NET Core', 'Angular 8', 'EF Core', 'ADO.NET', 'Dapper',
      'SQL Server', 'ChartJS', 'SFTP', 'CRON', 'Hangfire',
      'Azure', 'Azure DevOps', 'CI/CD', 'IIS', 'Swagger', 'Scrum',
    ],
  },
];

export const projects = [
  {
    name: 'Pluxee — Plateforme Monétique',
    region: 'Tunisie & Maroc',
    period: '2022 — Présent',
    description: {
      fr: "Plateforme monétique pour +500 000 utilisateurs. Monitoring transactionnel, gestion des commissions, cartes, portefeuilles, commerçants et POS. Optimisation batch : -45% sur les temps d'exécution. Migration vers Clean Architecture et microservices.",
      en: 'Payment platform for 500K+ users. Transaction monitoring, commission management, cards, wallets, merchants and POS. Batch optimization: 45% execution time improvement. Migration to Clean Architecture and microservices.',
    },
    tech: ['C#', '.NET 8', 'Angular 17', 'EF Core', 'CQRS', 'Hangfire', 'SQL Server', 'Azure', 'Azure DevOps', 'CI/CD', 'SonarQube'],
    accent: 'from-emerald-500/30 to-teal-500/20',
  },
  {
    name: "Gateway d'Autorisation ISO8583 / SPDH",
    region: 'Tunisie',
    period: '2022 — 2023',
    description: {
      fr: "Serveur d'autorisation monétique haute performance. 100 000+ transactions/jour, temps de réponse < 150 ms. Implémentation des flux transactionnels ISO8583/SPDH. Monitoring et résolution d'incidents critiques.",
      en: 'High-performance payment authorization server. 100K+ transactions/day, response time < 150ms. ISO8583/SPDH transaction flow implementation. Monitoring and critical incident resolution.',
    },
    tech: ['C#', '.NET Core', 'ISO8583', 'SPDH', 'SQL Server', 'Azure', 'IIS'],
    accent: 'from-sky-500/30 to-cyan-500/20',
  },
  {
    name: 'Royal Air Maroc — Vouchers Financiers',
    region: 'Maroc',
    period: '2022 — Présent',
    description: {
      fr: "Plateforme d'émission et de compensation de 50 000+ vouchers financiers par mois. Gestion du cycle complet : émission, traitement, compensation. Recette, déploiement et support client.",
      en: 'Platform for issuance and settlement of 50K+ financial vouchers/month. Full lifecycle management: issuance, processing, settlement. UAT, deployment and client support.',
    },
    tech: ['C#', '.NET Core', 'SQL Server', 'API REST', 'Azure', 'CRON', 'IIS'],
    accent: 'from-rose-500/30 to-orange-500/20',
  },
  {
    name: 'Switch National Mobile Payment',
    region: 'Tunisie',
    period: '2022 — Présent',
    description: {
      fr: "Service national d'interconnexion des transactions financières entre établissements bancaires. Dashboard analytique de supervision en temps réel avec ChartJS.",
      en: 'National financial transaction interconnection service between banking institutions. Real-time analytical supervision dashboard with ChartJS.',
    },
    tech: ['Angular 8', '.NET Core', 'ADO.NET', 'SQL Server', 'ChartJS', 'Azure', 'IIS'],
    accent: 'from-violet-500/30 to-fuchsia-500/20',
  },
  {
    name: 'Switch POS — Monetic Services',
    region: 'Tunisie',
    period: '2022 — Présent',
    description: {
      fr: "Interconnexion entre les points de vente et les systèmes monétiques. Automatisation des traitements via CRON et gestion des flux transactionnels.",
      en: 'Point-of-sale interconnection with payment systems. Automated processing via CRON and transaction flow management.',
    },
    tech: ['.NET Core', 'Angular 8', 'SQL Server', 'CRON', 'Azure', 'IIS'],
    accent: 'from-amber-500/30 to-yellow-500/20',
  },
  {
    name: 'Mobile Payment SMT',
    region: 'Tunisie',
    period: '2023 — Présent',
    description: {
      fr: "Portail de supervision des transactions, commissions, wallets, marchands, abonnés, Cash In/Cash Out. Automatisation CRON et SFTP.",
      en: 'Transaction monitoring portal: commissions, wallets, merchants, subscribers, Cash In/Cash Out. CRON and SFTP automation.',
    },
    tech: ['.NET Core', 'Angular 8', 'SQL Server', 'SFTP', 'CRON', 'Azure', 'IIS'],
    accent: 'from-emerald-500/30 to-lime-500/20',
  },
  {
    name: 'Portail Consolidé MultiBank',
    region: 'Tunisie',
    period: '2025 — Présent',
    description: {
      fr: "Plateforme centralisée de suivi multibanque des transactions. Rôles utilisateurs/banques, dashboards et statistiques par rôle. CRON multi-tâches pour collecte automatique (Joker, Pluxee, ServiMax).",
      en: 'Centralized multi-bank transaction monitoring platform. User/bank roles, dashboards & statistics. Multi-task CRON for automatic collection (Joker, Pluxee, ServiMax).',
    },
    tech: ['.NET Core 6', 'Angular 16', 'SQL Server', 'Azure', 'IIS', 'Moq', 'CRON'],
    accent: 'from-indigo-500/30 to-blue-500/20',
  },
  {
    name: 'SYSINFO — Gestion Interne',
    region: 'Tunisie',
    period: '2024 — Présent',
    description: {
      fr: "Application interne de gestion des tâches, imputations et feuilles de temps. Suivi des projets, équipes et reporting des coûts.",
      en: 'Internal task, imputation and timesheet management app. Project/team tracking and cost reporting.',
    },
    tech: ['.NET Core 6', 'Angular 16', 'SQL Server', 'Azure', 'IIS'],
    accent: 'from-pink-500/30 to-fuchsia-500/20',
  },
];

export const personalProjects = [
  {
    name: 'Invexa',
    tagline: { fr: 'SaaS Gestion Commerciale & Facturation avec IA', en: 'SaaS Invoicing & Commercial Management with AI' },
    description: {
      fr: "Portail SaaS complet de gestion commerciale multi-rôles. Gestion des produits, factures d'entrée/sortie, extraction automatique d'informations par IA (OCR/photo), rôles et permissions paramétrables, interface personnalisable par utilisateur.",
      en: 'Full SaaS commercial management portal with multi-role system. Product management, inbound/outbound invoices, AI-powered data extraction (OCR/photo), configurable roles and permissions, per-user customizable interface.',
    },
    tech: ['ASP.NET Core', '.NET', 'Angular', 'SQL Server', 'IA / OCR', 'JWT', 'Clean Architecture'],
    github: 'https://github.com/GhaziBH/Invexa',
    accent: 'from-brand-500/30 to-emerald-500/20',
  },
  {
    name: 'KolChy Shop',
    tagline: { fr: 'E-commerce Full Stack', en: 'Full Stack E-commerce' },
    description: {
      fr: "Boutique en ligne complète : panier, wishlist, checkout, dashboard admin avec KPIs, CRUD produits/catégories/commandes. Dark/light mode, responsive, SEO optimisé. Seed automatique.",
      en: 'Full e-commerce platform: cart, wishlist, checkout, admin dashboard with KPIs, product/category/order CRUD. Dark/light mode, responsive, SEO optimized.',
    },
    tech: ['Angular 18', 'ASP.NET Core 8', 'EF Core 8', 'SQL Server', 'JWT', 'Swagger'],
    github: 'https://github.com/GhaziBH/KolChyShop',
    accent: 'from-orange-500/30 to-amber-500/20',
  },
  {
    name: 'SiteBuilder SaaS',
    tagline: { fr: 'Création de Sites Web avec IA', en: 'AI-Powered Website Builder' },
    description: {
      fr: "Plateforme SaaS de création de sites web assistée par IA (OpenAI GPT-4o). Architecture Clean Architecture + CQRS/MediatR. Paiement Stripe, stockage Azure Blob.",
      en: 'AI-powered SaaS website builder (OpenAI GPT-4o). Clean Architecture + CQRS/MediatR. Stripe payments, Azure Blob storage.',
    },
    tech: ['.NET 10', 'Angular 20', 'OpenAI', 'Redis', 'Stripe', 'Azure', 'Docker', 'CI/CD'],
    github: 'https://github.com/GhaziBH/SiteBuilderSaaS',
    accent: 'from-purple-500/30 to-violet-500/20',
  },
  {
    name: 'G-Techis Consulting',
    tagline: { fr: 'Site Vitrine Corporate Premium', en: 'Premium Corporate Website' },
    description: {
      fr: "Site vitrine premium pour cabinet de consulting. Angular 20, TailwindCSS v4, glassmorphism, animations scroll-reveal, SEO complet (meta, OG, JSON-LD, sitemap). Bundle : 92 kB.",
      en: 'Premium corporate showcase website. Angular 20, TailwindCSS v4, glassmorphism, scroll-reveal animations, full SEO (meta, OG, JSON-LD, sitemap). Bundle: 92 kB.',
    },
    tech: ['Angular 20', 'TailwindCSS v4', 'TypeScript', 'SEO', 'Netlify'],
    github: 'https://github.com/GhaziBH/g-techis-consulting',
    live: 'https://g-techis-consulting.netlify.app',
    accent: 'from-cyan-500/30 to-sky-500/20',
  },
  {
    name: 'Social Origin Detector',
    tagline: { fr: 'Détection IA de Sources de Publications', en: 'AI-Powered Text Origin Detection' },
    description: {
      fr: "Système IA de détection de la source originale de textes sur les réseaux sociaux. Scoring multi-critères (similarité sémantique, ancienneté, fiabilité). 100% local, 100% gratuit.",
      en: 'AI system to detect the original source of social media texts. Multi-criteria scoring (semantic similarity, recency, reliability). 100% local, 100% free.',
    },
    tech: ['FastAPI', 'Angular 17', 'sentence-transformers', 'SQLite', 'Docker', 'Nginx'],
    github: 'https://github.com/GhaziBH/Social-Origin-Detector',
    accent: 'from-teal-500/30 to-green-500/20',
  },
  {
    name: 'Imputation Tracker',
    tagline: { fr: 'Analyse Automatique du Temps de Travail', en: 'Automated Work Time Analysis' },
    description: {
      fr: "Outil d'automatisation de l'imputation du temps. Capture les activités via ActivityWatch, catégorisation par regex ou IA locale (Ollama LLM), rapports HTML professionnels. 100% local.",
      en: 'Automated time tracking tool. Captures activities via ActivityWatch, categorization by regex or local AI (Ollama LLM), professional HTML reports. 100% local.',
    },
    tech: ['Python', 'ActivityWatch', 'Ollama LLM', 'SQLite', 'HTML/CSS'],
    github: 'https://github.com/GhaziBH/imputation-tracker',
    accent: 'from-yellow-500/30 to-orange-500/20',
  },
];

export const education = [
  {
    degree: { fr: 'Cycle Ingénieur en Génie Informatique', en: 'Engineering Degree in Computer Science' },
    school: { fr: "École Nationale d'Électronique et des Télécommunications de Sfax — ENET'COM", en: "National School of Electronics & Telecom — ENET'COM Sfax" },
    period: 'Sep 2019 — Avril 2021',
  },
  {
    degree: { fr: 'Cycle Préparatoire en Physique Technique', en: 'Preparatory Cycle — Technical Physics' },
    school: { fr: "Institut Préparatoire aux Études d'Ingénieur de Monastir — IPEIM", en: 'Preparatory Engineering Institute of Monastir — IPEIM' },
    period: 'Sep 2015 — Juin 2019',
  },
  {
    degree: { fr: 'Baccalauréat en Sciences Techniques', en: 'High School Diploma — Technical Sciences' },
    school: { fr: 'Lycée Said Boubaker Moknine', en: 'Said Boubaker High School, Moknine' },
    period: 'Sep 2010 — Juin 2014',
  },
];

export const skills = {
  backend: ['C#', '.NET Framework 4.x', '.NET Core', '.NET 5-10', 'ASP.NET Core', 'ASP.NET', 'Web API', 'WCF', 'Windows Services', 'Hangfire', 'CRON', 'Serilog'],
  frontend: ['Angular 8-20', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'TailwindCSS', 'Bootstrap', 'NgRx', 'Standalone Components', 'OnPush', 'ChartJS', 'Leaflet'],
  databases: ['SQL Server', 'T-SQL', 'Entity Framework Core', 'Dapper', 'ADO.NET', 'MySQL', 'SQLite', 'Redis', 'SSRS', 'SSIS'],
  api: ['API REST', 'JWT', 'Swagger / OpenAPI', 'CORS', 'Postman', 'ISO8583', 'SPDH', 'SFTP', 'Apache Kafka', 'Nginx'],
  devops: ['Azure', 'Azure DevOps', 'CI/CD', 'Git', 'Docker', 'IIS', 'SonarQube', 'Linux', 'Visual Studio', 'Logstash'],
  architecture: ['Clean Architecture', 'Microservices', 'CQRS', 'DDD', 'SOLID', 'Design Patterns', 'Multi-tenant', 'Open Graph', 'SEO'],
  testing: ['NUnit', 'xUnit', 'Moq', 'Tests unitaires', 'Tests d\'intégration', 'Couverture > 85%', 'bcrypt'],
  methods: ['Agile / Scrum', 'Six Sigma Yellow Belt', 'Jira', 'Gestion de projet', 'Estimation de projet', 'Leadership technique', 'Analyse fonctionnelle'],
  other: ['Python', 'FastAPI', 'Ollama LLM', 'Java', 'C++', 'E-Banking', 'BMC Remedy'],
};

export const languages = [
  { name: { fr: 'Arabe', en: 'Arabic' }, level: { fr: 'Natif', en: 'Native' }, value: 100 },
  { name: { fr: 'Français', en: 'French' }, level: { fr: 'Courant', en: 'Fluent' }, value: 95 },
  { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'Courant technique', en: 'Professional' }, value: 85 },
  { name: { fr: 'Espagnol', en: 'Spanish' }, level: { fr: 'Intermédiaire', en: 'Intermediate' }, value: 55 },
];

export const certifications = [
  'Scrum SFPC — CertiProf',
  'Six Sigma Yellow Belt — VMEdu',
  'Scrum Master Training — Master of Project Academy',
  'Scrum Fundamentals (SFC) — VMEdu',
  'Azure DevOps Boards — Coursera',
  'MTA: Python — Microsoft',
  'Software Developer — LinkedIn',
  'C# — Sololearn',
  'SQL — Sololearn',
  'C++ — Sololearn',
  'Python — Coursera (Google)',
  'HTML5 & CSS3 — BitDegree',
];

export const awards = {
  fr: [
    "Organisateur de l'événement national ENIMROBOT (2018)",
    "Organisateur du NASA International Space Apps Challenge (2019)",
    "Membre actif d'ENACTUS et du club MTC Microsoft ENET'COM",
  ],
  en: [
    'Organizer of the national ENIMROBOT event (2018)',
    'Organizer of the NASA International Space Apps Challenge (2019)',
    "Active member of ENACTUS and MTC Microsoft ENET'COM club",
  ],
};
