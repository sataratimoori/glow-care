// HEADER SCROLL

window.addEventListener("scroll", function () {
    const header = document.getElementById("mainNav");
    
    if (window.scrollY > 100) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
});