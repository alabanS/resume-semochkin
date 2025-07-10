const translations = {
  en: {
    name: "Ilya Semochkin",
    position: "Lead Systems Analyst / Architect",
    sections: {
      about: "🧠 About Me",
      skills: "🛠 Key Skills",
      experience: "💼 Work Experience",
      education: "🎓 Education & Courses",
      languages: "🌍 Languages",
      extra: "➕ Additional Info"
    },
    contact: {
      title: "Systems Analyst / Solution Architect",
      details: "Man, 31 years old (born August 30, 1993)<br>📍 Moscow, Dmitrovskaya metro station<br>📧 <a href='mailto:semochkin.i@icloud.com'>semochkin.i@icloud.com</a><br>📞 +7 (915) 394-59-43<br>Ready to relocate, open to occasional business trips"
    },
    keyInfo: "7+ years of experience in system analysis and architecture. Specialization: e-commerce (marketplaces) and retail technologies, particularly PIM system design.",
    sidebar: {
      title: "Examples of artifacts",
      items: [
        "API-contracts",
        "PDM",
        "ER-diagram",
        "Sequence diagram"
      ]
    },
    experience: [
      {
        company: "Megamarket (megamarket.ru)",
        period: "March 2023 — Present (2 years 5 months)",
        position: "Lead System Analyst",
        project: "Project: UTKA - MegaMarket's own PIM system for product catalog management",
        responsibilities: [
          "API and event contract design (REST/OpenAPI, Kafka, Avro/Protobuf)",
          "Architectural and process modeling (ADR, C4 diagrams, UML Sequence)",
          "Design of core UTKA services for 300M+ SKU",
          "Integration with OpenAI (ChatGPT) and Sber (GigaChat)",
          "Implementation of system analysis processes in the team"
        ],
        stack: "Stack: microservices, SOA, EDA, CQRS, PostgreSQL, Redis, ClickHouse, Elasticsearch, Kafka, gRPC, Camunda"
      },
      {
        company: "Digital League (digitalleague.ru)",
        period: "November 2021 — February 2023 (1 year 4 months)",
        position: "System Analyst/Architect",
        project: "Project: Federal property management system for Rosimushchestvo",
        responsibilities: [
          "API contract design (REST, SOAP/WSDL)",
          "Database schema development and property object data model",
          "Business process configuration (Camunda) and ETI processes (Talend)",
          "CI/CD practices implementation (GitLab, Jenkins)"
        ],
        stack: "Stack: PostgreSQL, RabbitMQ, Jenkins, Camunda, Talend, OpenAM, Python"
      }
    ],
    skills: [
      "Architecture: Microservices, SOA, EDA, CQRS, Saga",
      "Notations: BPMN, UML, C4, ERD",
      "Integrations: REST, Kafka, gRPC, RabbitMQ",
      "Databases: PostgreSQL, Redis, ClickHouse, Elasticsearch",
      "DevOps: Docker, Kubernetes, GitLab CI/CD, Jenkins",
      "API: OpenAPI/Swagger, CloudEvents",
      "Tools: Jira, Confluence, draw.io, Camunda",
      "Programming: Python, SQL, Golang",
      "Soft skills: Facilitation, review, interviewing, mentoring"
    ],
    education: {
      university: "Russian State University of Oil and Gas named after I.M. Gubkin",
      degree: "Master's degree, Automation and Computer Engineering, Instrumentation",
      year: "2017",
      courses: [
        "Python: basics and application (Bioinformatics Institute, 2021)",
        "Data analysis in SQL (ANO DPO \"Training Center RRS\", 2021)",
        "Art of presentation (Moscow Business School, 2021)",
        "SQL basics (Shultais Education, 2021)"
      ]
    },
    languages: [
      "Russian — Native",
      "English — A1 (Beginner)",
      "German — A1 (Beginner)"
    ],
    additional: [
      "Open to remote work",
      "Mentoring experience",
      "Hobbies: sports, video editing",
      "Example API Documentation"
    ]
  },
  ru: {
    name: "Семочкин Илья",
    position: "Cистемный аналитик /Solution Architec",
    sections: {
      about: "🧠 Обо мне",
      skills: "🛠 Ключевые навыки",
      experience: "💼 Опыт работы",
      education: "🎓 Образование и курсы",
      languages: "🌍 Языки",
      extra: "➕ Дополнительно"
    },
    contact: {
      title: "Cистемный аналитик /Solution Architec",
      details: "Мужчина, 31 год (родился 30 августа 1993)<br>📍 Москва, м. Дмитровская<br>📧 <a href='mailto:semochkin.i@icloud.com'>semochkin.i@icloud.com</a><br>📞 +7 (915) 394-59-43<br>Готов к переезду, готов к редким командировкам"
    },
    keyInfo: "7+ лет опыта в системном анализе и архитектуре. Специализация: e-commerce (маркетплейсы) и ритейл-технологии, проектирование PIM-систем.",
    sidebar: {
      title: "Примеры артефактов",
      items: [
        "API-contracts",
        "PDM",
        "ER-diagram",
        "Sequence diagram"
      ]
    },
    experience: [
      {
        company: "Метамаркет (megamarket.ru)",
        period: "Март 2023 — настоящее время (2 года 5 месяцев)",
        position: "Ведущий системный аналитик",
        project: "Проект: UTKA - собственная PIM-система Мега Маркета для управления товарным каталогом",
        responsibilities: [
          "Проектирование API и событийных контрактов (REST/OpenAPI, Kafka, Avro/Protobuf)",
          "Архитектурное и процессное моделирование (ADR, C4-диаграммы, UML Sequence)",
          "Проектирование основных сервисов UTKA для 300M+ SKU",
          "Интеграции с OpenAI (ChatGPT) и Sber (GigaChat)",
          "Внедрение процессов системного анализа в команде"
        ],
        stack: "Стек: микросервисы, SOA, EDA, CQRS, PostgreSQL, Redis, ClickHouse, Elasticsearch, Kafka, gRPC, Camunda"
      },
      {
        company: "Лига Цифровой Экономики (digitalleague.ru)",
        period: "Ноябрь 2021 — Февраль 2023 (1 год 4 месяца)",
        position: "Системный аналитик/Архитектор",
        project: "Проект: Система управления федеральным имуществом для Росимущества",
        responsibilities: [
          "Проектирование API-контрактов (REST, SOAP/WSDL)",
          "Разработка схем БД и модели данных объектов имущества",
          "Настройка бизнес-процессов (Camunda) и ETI-процессов (Talend)",
          "Внедрение CI/CD-практик (GitLab, Jenkins)"
        ],
        stack: "Стек: PostgreSQL, RabbitMQ, Jenkins, Camunda, Talend, OpenAM, Python"
      }
    ],
    skills: [
      "Архитектура: Microservices, SOA, EDA, CQRS, Saga",
      "Нотации: BPMN, UML, C4, ERD",
      "Интеграции: REST, Kafka, gRPC, RabbitMQ",
      "Базы данных: PostgreSQL, Redis, ClickHouse, Elasticsearch",
      "DevOps: Docker, Kubernetes, GitLab CI/CD, Jenkins",
      "API: OpenAPI/Swagger, CloudEvents",
      "Инструменты: Jira, Confluence, draw.io, Camunda",
      "Программирование: Python, SQL, Golang",
      "Soft skills: фасилитация, ревью, интервью, наставничество"
    ],
    education: {
      university: "Российский государственный университет нефти и газа им. И.М. Губкина",
      degree: "Магистр, Автоматика и вычислительная техника, Приборостроение",
      year: "2017 год",
      courses: [
        "Python: основы и применение (Bioinformatics Institute, 2021)",
        "Анализ данных на языке SQL (АНО ДПО \"Учебный центр РРС\", 2021)",
        "Искусство презентации (Moscow Business School, 2021)",
        "Основы SQL (Shultais Education, 2021)"
      ]
    },
    languages: [
      "Русский — Родной",
      "Английский — A1 (начальный)",
      "Немецкий — A1 (начальный)"
    ],
    additional: [
      "Готов к удаленной работе",
      "Опыт наставничества",
      "Хобби: спорт, видеомонтаж",
      "Пример документации API"
    ]
  }
};

let currentLang = "ru";

document.getElementById("langSwitch").addEventListener("click", () => {
  currentLang = currentLang === "ru" ? "en" : "ru";
  updateLang();
});

function updateLang() {
  const lang = translations[currentLang];

  // Основные элементы
  document.querySelector("[data-lang='name']").textContent = lang.name;

  // Секции аккордеона
  document.querySelectorAll("[data-lang-section]").forEach(section => {
    const key = section.getAttribute("data-lang-section");
    section.querySelector("button").innerHTML = lang.sections[key];
  });

  // Кнопка переключения языка
  document.getElementById("langSwitch").textContent =
    currentLang === "ru" ? "Switch to English 🌐" : "Переключить на русский 🌐";

  // Контактная информация
  const contact = document.querySelector(".contact");
  contact.innerHTML = `
    <strong>${lang.contact.title}</strong><br>
    ${lang.contact.details}
  `;

  // Ключевая информация
  document.querySelector("[data-lang='keyInfoTitle']").textContent = currentLang === "ru" ? "Ключевая информация" : "Core Expertise";
  document.querySelector("[data-lang='keyInfoText']").textContent = lang.keyInfo;

  // Опыт работы
  const experienceContainer = document.querySelector(".experience-container");
  experienceContainer.innerHTML = lang.experience.map(exp => `
    <div class="experience-item">
      <h3>${exp.company}</h3>
      <p class="experience-period">${exp.period}</p>
      <p><strong>${exp.position}</strong></p>
      <p>${exp.project}</p>
      <ul>
        ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join("")}
      </ul>
      <p><strong>${currentLang === "ru" ? "Стек:" : "Stack:"}</strong> ${exp.stack}</p>
    </div>
  `).join("");

  // Навыки
  const skillsList = document.querySelector(".skills-list");
  skillsList.innerHTML = lang.skills.map(skill => {
    const [category, value] = skill.split(":");
    return `<li><strong>${category}:</strong>${value}</li>`;
  }).join("");

  // Образование
  const educationPanel = document.querySelector(".education-panel");
  educationPanel.innerHTML = `
    <h3>${lang.education.university}</h3>
    <p>${lang.education.degree}</p>
    <p>${lang.education.year}</p>
    <h3>${currentLang === "ru" ? "Курсы" : "Courses"}</h3>
    <ul>
      ${lang.education.courses.map(course => `<li>${course}</li>`).join("")}
    </ul>
  `;

  // Языки
  const languagesList = document.querySelector(".languages-list");
  languagesList.innerHTML = lang.languages.map(lang => `<li>${lang}</li>`).join("");

  // Дополнительная информация
  const additionalList = document.querySelector(".additional-list");
  additionalList.innerHTML = lang.additional.map((item, i) => {
    if (i === lang.additional.length - 1) {
      return `<li><a href="https://alabans.github.io/resume-semochkin/api/api-docs.html" target="_blank" class="doc-button">${item}</a></li>`;
    }
    return `<li>${item}</li>`;
  }).join("");
}

// Инициализация при загрузке
document.addEventListener("DOMContentLoaded", () => {
  // Добавляем необходимые классы для элементов
  const mainContent = document.querySelector(".main-content");

  // Опыт работы
  const experienceSection = document.querySelector("[data-lang-section='experience']");
  experienceSection.querySelector(".panel").classList.add("experience-container");

  // Образование
  const educationSection = document.querySelector("[data-lang-section='education']");
  educationSection.querySelector(".panel").classList.add("education-panel");

  // Навыки
  const skillsSection = document.querySelector("[data-lang-section='skills']");
  skillsSection.querySelector("ul").classList.add("skills-list");

  // Языки
  const languagesSection = document.querySelector("[data-lang-section='languages']");
  languagesSection.querySelector("ul").classList.add("languages-list");

  // Дополнительно
  const additionalSection = document.querySelector("[data-lang-section='extra']");
  additionalSection.querySelector("ul").classList.add("additional-list");

  // Инициализируем перевод
  updateLang();
});
