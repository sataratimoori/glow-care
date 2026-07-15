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



        const swiper = new Swiper(".carSwiper", {

    loop:true,

    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },


    effect:"coverflow",

    coverflowEffect:{
        rotate:30,
        stretch:0,
        depth:150,
        modifier:1,
        slideShadows:false,
    },


    slidesPerView:1,

    spaceBetween:30,


    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },


    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },


    breakpoints:{

        768:{
            slidesPerView:2,
        },


        1200:{
            slidesPerView:3,
        }

    }

});






document.querySelectorAll('.btn-add-cart').forEach(button => {
  button.addEventListener('click', function() {
    this.innerText = 'Added!';
    this.style.backgroundColor = '#28a745'; // تغییر رنگ به سبز بعد از کلیک
    
    // بازگرداندن متن بعد از 2 ثانیه
    setTimeout(() => {
      this.innerText = 'Add to Cart';
      this.style.backgroundColor = '#e91e63';
    }, 2000);
  });
});
