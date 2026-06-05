export const profile = {
  name: 'Ghazi Ben Halima',
  title: {
    fr: 'Ingénieur Full Stack — .NET / Angular',
    en: 'Full Stack Engineer — .NET / Angular',
  },
  location: 'Monastir, Tunisie',
  email: 'benhalimaghazi@gmail.com',
  phone: '+216 53 126 178',
  linkedin: 'https://www.linkedin.com/in/ghazibenhalima',
  github: 'https://github.com/',
  cv: '/cv/Cv_GhaziBenHalima_2025.pdf',
  yearsOfExperience: 3,
  projectsDelivered: 7,
  clients: 5,
};

export const experiences = [
  {
    company: 'MS SOLUTIONS',
    role: {
      fr: 'Project Lead / Développeur Full Stack — Pluxee Tunisie & Maroc',
      en: 'Project Lead / Full Stack Developer — Pluxee Tunisia & Morocco',
    },
    period: { start: '2024', end: { fr: 'Présent', en: 'Present' } },
    location: 'Tunisie / Maroc',
    bullets: {
      fr: [
        'Analyse et spécifications des besoins fonctionnels et techniques, coordination avec les clients.',
        "Gestion Agile : création du backlog, estimation des tâches, animation de réunions de suivi avec les clients et l'équipe.",
        "Conception technique : rédaction de drafts, définition de l'architecture des APIs / microservices.",
        'Développement de modules web et services transactionnels sécurisés.',
        'Migration vers Clean Architecture et microservices, améliorant maintenabilité et scalabilité.',
        'Implémentation de tests unitaires avec >85% de couverture sur les modules critiques.',
        'Supervision et mentorat de stagiaires et développeurs juniors.',
        'Gestion et suivi des déploiements, documentation technique et support post-production.',
      ],
      en: [
        'Functional and technical requirements analysis and specification, client coordination.',
        'Agile management: backlog grooming, task estimation, leading sync meetings with clients and team.',
        'Technical design: drafting and defining API / microservices architecture.',
        'Development of secured web modules and transactional services.',
        'Migration to Clean Architecture and microservices, improving maintainability and scalability.',
        'Implementation of unit tests with >85% coverage on critical modules.',
        'Mentoring of interns and junior developers.',
        'Deployment management, technical documentation and post-production support.',
      ],
    },
    tech: [
      '.NET 4.6/6', '.NET Core', 'Angular 8/17', 'EF Core', 'Dapper', 'CQRS',
      'ADO.NET', 'Windows Service', 'Hangfire', 'SFTP', 'WinSCP', 'SQL Server',
      'Azure', 'REST', 'Swagger', 'SonarQube', 'Scrum', 'Firebase',
    ],
  },
];

export const projects = [
  {
    name: 'Pluxee Plateforme (Monétique Service)',
    region: 'Tunisie & Maroc',
    period: '2022 — Présent',
    description: {
      fr: "Portail web pour superviser les transactions et gérer les commissions, abonnés, portefeuilles, commerçants, points de vente et terminaux. CRON pour la synchronisation des données (désactivation des cartes expirées, CashBack, rechargement des soldes). Dashboards dynamiques & géolocalisation.",
      en: 'Web portal to monitor transactions and manage commissions, subscribers, wallets, merchants, POS and terminals. CRON jobs for data synchronization. Dynamic dashboards & geolocation tracking.',
    },
    tech: ['.NET 4.6/6', '.NET Core', 'Angular 8/17', 'EF Core', 'Dapper', 'CQRS', 'Hangfire', 'SQL Server', 'Azure', 'Swagger', 'SonarQube', 'Firebase'],
    accent: 'from-emerald-500/30 to-teal-500/20',
  },
  {
    name: 'Gateway Solution (Monétique Service)',
    region: 'Tunisie',
    period: '2022 — Présent',
    description: {
      fr: "Intégration et mise en place d'un serveur d'autorisation basé sur l'ISO8583 pour permettre des transactions financières sécurisées et des paramétrages à distance pour les terminaux de paiement.",
      en: 'Integration of an ISO8583-based authorization server enabling secured financial transactions and remote configuration of payment terminals.',
    },
    tech: ['.NET Core', 'ISO8583', 'SQL', 'Swagger', 'Azure', 'Scrum', 'IIS'],
    accent: 'from-sky-500/30 to-cyan-500/20',
  },
  {
    name: 'Switch National Mobile Payment',
    region: 'Tunisie',
    period: '2023 — Présent',
    description: {
      fr: "Développement d'un web service national d'interconnexion des transactions financières entre établissements. Mise en place d'un dashboard analytique.",
      en: 'National web service interconnecting financial transactions between institutions. Analytics dashboard.',
    },
    tech: ['Angular 8', '.NET Core 3.1', 'EF6', 'ADO.NET', 'SQL Server', 'Azure', 'IIS', 'Scrum'],
    accent: 'from-violet-500/30 to-fuchsia-500/20',
  },
  {
    name: 'RAM Project — Royal Air Maroc',
    region: 'Maroc',
    period: '2022 — Présent',
    description: {
      fr: "Développement et déploiement de services web pour interconnexion des points de vente, gestion des recettes et création d'un dashboard temps réel pour les statistiques.",
      en: 'Web services interconnecting points of sale, revenue management and real-time statistics dashboard.',
    },
    tech: ['.NET Core', 'Angular 8', 'SQL Server', 'Azure', 'CRON', 'Swagger', 'IIS', 'Scrum'],
    accent: 'from-rose-500/30 to-orange-500/20',
  },
  {
    name: 'SYSINFO',
    region: 'Tunisie',
    period: '2024 — Présent',
    description: {
      fr: "Application web interne de gestion des tâches, imputations et feuilles de temps, avec suivi des projets/équipes et reporting des coûts.",
      en: 'Internal web application for task, imputation and timesheet management with project/team tracking and cost reporting.',
    },
    tech: ['.NET Core 6', 'Angular 16', 'SQL Server', 'Azure', 'IIS', 'Scrum'],
    accent: 'from-amber-500/30 to-yellow-500/20',
  },
  {
    name: 'Mobile Payment SMT (Monétique Service)',
    region: 'Tunisie',
    period: '2023 — Présent',
    description: {
      fr: "Portail web de monitoring des transactions et gestion des commissions (cash-in / cash-out, portefeuilles, commerçants, abonnés).",
      en: 'Web portal for transaction monitoring and commission management (cash-in / cash-out, wallets, merchants, subscribers).',
    },
    tech: ['.NET Core', 'Angular 8', 'SQL Server', 'Azure', 'SFTP', 'CRON', 'Swagger', 'Scrum'],
    accent: 'from-emerald-500/30 to-lime-500/20',
  },
  {
    name: 'Portail Consolidé MultiBank',
    region: 'Tunisie',
    period: '2025 — Présent',
    description: {
      fr: 'Plateforme centralisée pour le suivi multibanque des transactions avec rôles utilisateurs/banques. Dashboards & statistiques par rôle. CRON pour la collecte automatique des transactions (Joker, Pluxee, ServiMax).',
      en: 'Centralized multi-bank platform for transaction monitoring with user/bank roles, dashboards & statistics. Multi-task CRON for automatic transaction collection.',
    },
    tech: ['.NET Core 6', 'Angular 16', 'SQL Server', 'Azure', 'IIS', 'Scrum', 'Moq', 'CRON'],
    accent: 'from-indigo-500/30 to-blue-500/20',
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
  languages: ['C#', '.NET', '.NET Core', 'Angular 8/19', 'ASP.NET MVC', 'Spring', 'JavaScript', 'HTML5', 'CSS3'],
  databases: ['SQL Server', 'MySQL', 'PL/SQL', 'Entity Framework', 'Dapper'],
  web: ['REST', 'SOAP', 'Web API', 'WCF', 'Swagger'],
  devops: ['Azure DevOps', 'Git', 'SonarQube', 'CI/CD', 'Kubernetes', 'Hangfire', 'Logstash', 'WinSCP', 'SFTP', 'SQL Agent'],
  methods: ['Agile', 'Scrum', 'Six Sigma Yellow Belt'],
  other: ['Microservices', 'Clean Architecture', 'Tests unitaires (NUnit / XUnit)', 'CQRS'],
};

export const languages = [
  { name: { fr: 'Arabe', en: 'Arabic' }, level: { fr: 'Natif', en: 'Native' }, value: 100 },
  { name: { fr: 'Français', en: 'French' }, level: { fr: 'Courant', en: 'Fluent' }, value: 95 },
  { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'Courant', en: 'Fluent' }, value: 85 },
  { name: { fr: 'Espagnol', en: 'Spanish' }, level: { fr: 'Intermédiaire', en: 'Intermediate' }, value: 55 },
];

export const certifications = [
  'Six Sigma Yellow Belt',
  'BitDegree — HTML5 & CSS3',
  'Scrum SFPC',
  'C#',
  'C++',
  'SQL',
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
