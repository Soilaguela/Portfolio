document.addEventListener("DOMContentLoaded", () => {
    const modeToggle = document.getElementById("modeToggle");
    const body = document.body;

    // Checar e aplicar o modo salvo no localStorage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        modeToggle.classList.add("dark-mode");
        modeToggle.innerHTML = '<i class="bi bi-sun"></i>';
    }

    // Alternar modo claro/escuro ao clicar no botão
    modeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        modeToggle.classList.toggle("dark-mode");

        // Atualizar ícone e salvar preferência no localStorage
        if (body.classList.contains("dark-mode")) {
            modeToggle.innerHTML = '<i class="bi bi-sun"></i>';
            localStorage.setItem("theme", "dark");
        } else {
            modeToggle.innerHTML = '<i class="bi bi-moon"></i>';
            localStorage.setItem("theme", "light");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        navMenu.classList.toggle("hidden");

        // Alterna o ícone do botão
        menuToggle.innerHTML = navMenu.classList.contains("show")
            ? '<i class="bi bi-x"></i>'
            : '<i class="bi bi-list"></i>';
    });
});

