function toggleMenu() {
    burgerMenu.classList.toggle("is-active");
    nav.classList.toggle("active");
    burgerMenu.classList.toggle("active");
}

let navElement = document.querySelectorAll(".navEl"),
    burgerMenu = document.getElementById("burger"),
    toggle = document.getElementById("toggle"),
    nav = document.querySelector("nav"),
    sections = document.querySelectorAll(".main"),
    current;

toggle.addEventListener("click", toggleMenu);
window.addEventListener("scroll", () => {
    let current = "";

<<<<<<< HEAD
    if (scrollY > 100) nav.style.padding = ".2rem 2.5rem";
    else nav.style.padding = ".5rem 2rem";
=======
    if (scrollY > 100) {
        nav.style.padding = ".2rem 2.5rem";
        nav.style.background = "var(--secondary-blue)"
    } else {
        nav.style.padding = ".5rem 2rem";
        nav.style.background = "transparent"
    }
>>>>>>> 33c421cef32a11bc6b89479b0e79bbd4ce2d5316

    sections.forEach((div) => {
        const sectionTop = div.offsetTop;
        const sectionHeight = div.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = div.getAttribute("id");
            // window.location.hash = current;
        }
    });

    navElement.forEach((a) => {
        a.classList.remove("active");
        if (a.classList.contains(current)) a.classList.add("active");
    });
<<<<<<< HEAD
});
=======
});
>>>>>>> 33c421cef32a11bc6b89479b0e79bbd4ce2d5316
