const toggle = document.getElementById("themeToggle");

if (toggle) {
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light");
        toggle.textContent = "☀️";
    }

    toggle.addEventListener("click", () => {
        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            localStorage.setItem("theme", "light");
            toggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "dark");
            toggle.textContent = "🌙";
        }
    });
}

const toggler = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const overlay = document.getElementById("menuOverlay");

if (toggler && menu && overlay) {

    toggler.addEventListener("click", () => {

        menu.classList.toggle("show");
        overlay.classList.toggle("active");

        toggler.textContent =
            menu.classList.contains("show") ? "✕" : "☰";
    });

    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("show");
            overlay.classList.remove("active");
            toggler.textContent = "☰";
        });
    });

    overlay.addEventListener("click", () => {
        menu.classList.remove("show");
        overlay.classList.remove("active");
        toggler.textContent = "☰";
    });
}