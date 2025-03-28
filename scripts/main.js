document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to my personal website!");

    const translations = {
        en: {
            welcome: "Welcome to My Personal Website",
            "about-title": "About Me",
            "about-content": "Hello! My name is Huỳnh Chánh Thuật",
            "contact-title": "Contact Information",
            email: "Email: ",
            github: "GitHub: ",
            footer: "&copy; 2025 [KSLP]HCT. All rights reserved."
        },
        vi: {
            welcome: "Chào mừng đến với trang web cá nhân của tôi",
            "about-title": "Về tôi",
            "about-content": "Xin chào! Tôi là Huỳnh Chánh Thuật",
            "contact-title": "Thông tin liên hệ",
            email: "Email: ",
            github: "GitHub: ",
            footer: "&copy; 2025 [KSLP]HCT. Tất cả các quyền được bảo lưu."
        }
    };

    let currentLang = "en";

    document.getElementById("toggle-lang").addEventListener("click", () => {
        currentLang = currentLang === "en" ? "vi" : "en";
        document.getElementById("toggle-lang").textContent =
            currentLang === "en" ? "Switch to Vietnamese" : "Chuyển sang tiếng Anh";

        document.querySelectorAll("[data-lang]").forEach((el) => {
            const key = el.getAttribute("data-lang");
            el.innerHTML = translations[currentLang][key];
        });
    });
});