const translations = {
  en: {
    name: "Ilya Semochkin",
    position: "Lead Systems Analyst / Architect",
    about: "About Me",
    skills: "Key Skills",
    experience: "Experience",
    education: "Education & Courses",
    languages: "Languages",
    extra: "Additional Info"
  },
  ru: {
    name: "Семочкин Илья",
    position: "Ведущий системный аналитик / Архитектор",
    about: "Обо мне",
    skills: "Ключевые навыки",
    experience: "Опыт работы",
    education: "Образование и курсы",
    languages: "Языки",
    extra: "Дополнительно"
  }
};

let currentLang = "ru";

document.getElementById("langSwitch").addEventListener("click", () => {
  currentLang = currentLang === "ru" ? "en" : "ru";
  updateLang();
});

function updateLang() {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    el.textContent = translations[currentLang][key];
  });

  document.querySelectorAll("[data-lang-section]").forEach(section => {
    const key = section.getAttribute("data-lang-section");
    section.querySelector("button").textContent = translations[currentLang][key];
  });

  document.getElementById("langSwitch").textContent =
    currentLang === "ru" ? "Switch to English 🌐" : "Переключить на русский 🌐";
}
