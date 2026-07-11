const cards = document.querySelectorAll(".why-card");

		cards.forEach(card => {

			card.addEventListener("mouseenter", () => {

				cards.forEach(c => c.classList.remove("active"));

				card.classList.add("active");

			});

		});