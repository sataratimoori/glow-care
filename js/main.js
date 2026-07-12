// HEADER SCROLL

window.addEventListener("scroll", function () {
    const header = document.getElementById("mainNav");
    
    if (window.scrollY > 100) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
});

const cards = document.querySelectorAll(".why-card");

		cards.forEach(card => {

			card.addEventListener("mouseenter", () => {

				cards.forEach(c => c.classList.remove("active"));

				card.classList.add("active");

			});

		});
