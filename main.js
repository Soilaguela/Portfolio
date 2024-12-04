document.addEventListener("DOMContentLoaded", () => {
    // Alternância de modo claro/escuro
    const modeToggle = document.getElementById("modeToggle");
    const body = document.body;

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        modeToggle.classList.add("dark-mode");
        modeToggle.innerHTML = '<i class="bi bi-sun"></i>';
    }

    modeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        modeToggle.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            modeToggle.innerHTML = '<i class="bi bi-sun"></i>';
            localStorage.setItem("theme", "dark");
        } else {
            modeToggle.innerHTML = '<i class="bi bi-moon"></i>';
            localStorage.setItem("theme", "light");
        }
    });

});
