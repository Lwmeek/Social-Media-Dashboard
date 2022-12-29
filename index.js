const toggle = document.querySelector(".toggle");


toggle.addEventListener("click", () => {
    event.preventDefault();

    if(!toggle.classList.contains("backward")) {
        toggle.classList.add("backward");
        toggle.classList.remove("forward");
    } else {
        toggle.classList.remove("backward");
        toggle.classList.add("forward");
    }
})