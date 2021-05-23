let navElements = document.querySelectorAll(".navEl"),
    currentNav = 0;

/* Change active class of navBar */
navElements.forEach((a) => {
    a.addEventListener("click", () => {
        navElements[currentNav].classList.remove("active");
        a.classList.add("active");
        currentNav = a.dataset.pos;
    });
});
© 2021 GitHub, Inc.
