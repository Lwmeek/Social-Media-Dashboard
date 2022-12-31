const toggle = document.querySelector(".toggle");
const body = document.querySelector("body")

toggle.addEventListener("click", () => {
    event.preventDefault();

    if(!toggle.classList.contains("backward")) {
        toggle.classList?.add("backward");
        toggle.classList?.remove("forward");
        body.classList?.add("black_theme");
    } else {
        toggle.classList?.remove("backward");
        toggle.classList?.add("forward");
        body.classList?.remove("black_theme");
    }
})