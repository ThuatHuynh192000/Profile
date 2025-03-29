document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to my personal website!");

    let translations = {};
    let currentLang = "en";

    fetch("translations.json")
        .then((response) => response.json())
        .then((data) => {
            translations = data;
            updateContent(); 
        })
        .catch((error) => console.error("Error loading translations:", error));

    const updateContent = () => {
        document.querySelectorAll("[data-lang]").forEach((el) => {
            const key = el.getAttribute("data-lang");
            el.innerHTML = translations[currentLang][key];
        });
    };

    document.getElementById("toggle-lang").addEventListener("click", () => {
        currentLang = currentLang === "en" ? "vi" : "en";
        document.getElementById("toggle-lang").textContent =
            currentLang === "en" ? "Switch to Vietnamese" : "Chuyển sang tiếng Anh";
        updateContent();
    });
});