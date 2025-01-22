let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add('active');
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 50);
      });``
    }, 2000);

    setTimeout(() => {
      intro.style.top = '-100vh';
    }, 2000);
  });
});




// Jam Jakarta
function updateClock() {
  const now = new Date();
  const options = { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
  const timeString = now.toLocaleTimeString('id-ID', options);
  document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();


//Testimonial Data
const testimonials = [
  {
    name: "Khairul Aqil Nizar",
    job: "CEO OPPO INDONESIA",
    image: "profile.png",
    testimonial:
      "ARCHIPELAGO Culture totally made my trip to Bromo unforgettable! The site gave me all the tips I needed to explore the area, from the best sunrise spots to local legends about the volcano. I wouldn’t have known about some hidden gems if it wasn’t for this site. If you’re planning a trip to Bromo or anywhere in Indonesia, this site is a must for an epic adventure!",
  },
  {
    name: "Ahmad Fadel Alkadri",
    job: "A.K.A Shiro Oni",
    image: "profile.png",
    testimonial:
      "ARCHIPELAGO Culture 덕분에 토바 호수 여행이 정말 잊을 수 없는 경험이었어요! 토바 호수의 역사부터 숨겨진 멋진 명소까지, 모든 정보가 잘 정리되어 있어요. 현지 문화를 깊이 느낄 수 있었고, 바탁족에 대해 많은 것을 배울 수 있었어요. 토바 호수를 특별하게 경험하고 싶다면, 이 사이트는 꼭 확인해야 해요!",
  },
  {
    name: "Syamil",
    job: "CEO Bluelock",
    image: "profile.png",
    testimonial:
      "ARCHIPELAGO Culture a vraiment enrichi mon expérience à la cascade Sekumpul ! Grâce à ce site, j'ai découvert des informations pratiques sur comment y arriver et des détails fascinants sur l'histoire de cet endroit magique. La randonnée était époustouflante et la cascade, un véritable paradis. Si vous voulez vivre Bali autrement et explorer des endroits cachés comme Sekumpul, ce site est un must !",
  },
  {
    name: "Arsyad Faqih Alhisyami",
    job: "CEO NIVARA",
    image: "profile.png",
    testimonial:
      "ARCHIPELAGO Culture a sublimé ma visite à l'île de Komodo. Le site offre une richesse d'informations, allant des dragons célèbres aux trésors écologiques cachés de l'île. Grâce à lui, j'ai pu vivre une expérience authentique et profonde, bien au-delà des simples attractions touristiques. Un indispensable pour tout voyageur avisé.",
  },
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `;
};
window.onload = displayTestimonial; 