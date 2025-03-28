document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to my personal website!");

    const translations = {
        en: {
            welcome: "Welcome to My Personal Website",
            "about-title": "About Me",
            "about-content": "Hello! My name is Huỳnh Chánh Thuật",
            dob: "Date of Birth: September 1, 2000",
            gender: "Gender: Male",
            location: "Location: Ho Chi Minh City, Vietnam",
            height: "Height: 160 cm",
            weight: "Weight: 60 kg",
            job: "no job",
            interest: "interest",
            "career-title": "Career Interests",
            "career-content": "Software Development, AI, and Web Design",
            "contact-title": "Contact Information",
            email: 'Email: <a href="mailto:Huynhchanhthuat19200088@gmail.com">Huynhchanhthuat19200088@gmail.com</a>',
            github: 'GitHub: <a href="https://github.com/Cncv2025" target="_blank">github.com/Cncv2025</a>',
            footer: "&copy; 2025 [KSLP]HCT. All rights reserved."
        },
        vi: {
            welcome: "Chào mừng đến với trang web cá nhân của tôi",
            "about-title": "Thông tin cơ bản",
            "about-content": "Xin chào! Tôi là Huỳnh Chánh Thuật",
            dob: "Ngày sinh: 1 tháng 9, 2000",
            gender: "Giới tính: Nam",
            location: "Nơi ở: Thành phố Hồ Chí Minh, Việt Nam",
            height: "Chiều cao: 160 cm",
            weight: "Cân nặng: 60 kg",
            job: "không có việc",
            interest: "sở thích",
            "career-title": "Sở thích nghề nghiệp",
            "career-content": "Phát triển phần mềm, AI, và Thiết kế web",
            "contact-title": "Thông tin liên hệ",
            email: 'Email: <a href="mailto:Huynhchanhthuat19200088@gmail.com">Huynhchanhthuat19200088@gmail.com</a>',
            github: 'GitHub: <a href="https://github.com/Cncv2025" target="_blank">github.com/Cncv2025</a>',
            footer: "&copy; 2025 [KSLP]HCT. Tất cả các quyền được bảo lưu."
        }
    };

    let currentLang = "en";

    // Hàm cập nhật nội dung trang
    const updateContent = () => {
        document.querySelectorAll("[data-lang]").forEach((el) => {
            const key = el.getAttribute("data-lang");
            el.innerHTML = translations[currentLang][key];
        });
    };

    // Gọi hàm cập nhật khi trang tải
    updateContent();

    // Thay đổi ngôn ngữ khi nhấn nút
    document.getElementById("toggle-lang").addEventListener("click", () => {
        currentLang = currentLang === "en" ? "vi" : "en";
        document.getElementById("toggle-lang").textContent =
            currentLang === "en" ? "Switch to Vietnamese" : "Chuyển sang tiếng Anh";
        updateContent();
    });
});