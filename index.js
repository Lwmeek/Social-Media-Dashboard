const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");
const container = document.querySelector(".main_container");

toggle.addEventListener("click", () => {
    event.preventDefault();

    if(!toggle.classList.contains("backward")) {
        toggle.classList?.add("backward");
        toggle.classList?.remove("forward");
        body.classList?.add("dark_theme");
        container.classList?.add("dark_theme");
    } else {
        toggle.classList?.remove("backward");
        toggle.classList?.add("forward");
        body.classList?.remove("dark_theme");
        container.classList?.remove("dark_theme");
    }
})