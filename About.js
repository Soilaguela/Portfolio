document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        const level = bar.getAttribute("data-level");
        bar.style.width = level;
    });
});
