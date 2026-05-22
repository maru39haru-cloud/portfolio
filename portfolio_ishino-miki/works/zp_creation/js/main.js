'use strict';

// ハンバーガーメニュー
const hamburger = document.querySelector('.js_hamburger');
const navigation = document.querySelector('.js_navigation');
const body = document.querySelector('.js_body');

//ハンバーガーをクリックしたら
hamburger.addEventListener("click", () => {
//それぞれに対してクラスをつけ外しする
  hamburger.classList.toggle("is-active");
  navigation.classList.toggle("is-active");
	body.classList.toggle("is-active");
});

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.top_kv-about-wrap',
    start: 'top top',
    end: '+=100%',
    scrub: true,
    pin: true
  }
});

tl.to('.top_kv', {
  opacity: 0
});

tl.to('.top_about_section', {
  opacity: 1
}, 0);

tl.to('.top_about_section-inner', {
  opacity: 1,
  y: 0
}, 0.3);

// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".top_about_section", {
//   opacity: 1,
//   y: 0,
//   duration: 1.2,
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: ".top_kv",       // KVを基準に
//     start: "bottom center",   // KVの下端が画面中央に来たら発火
//     toggleActions: "play none none reverse"
//   }
// });

// gsap.registerPlugin(ScrollTrigger);

// // KV → ABOUT の入れ替わり
// gsap.to(".top_kv", {
//   opacity: 0,
//   duration: 1,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".top_kv",
//     start: "top top",
//     end: "bottom top",
//     scrub: true
//   }
// });

// gsap.to(".top_about_section", {
//   opacity: 1,
//   y: 0,
//   duration: 1,
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: ".top_kv",
//     start: "bottom bottom",
//     end: "bottom center",
//     scrub: true
//   }
// });

// gsap.to(".bg1", {
//   y: -100,
//   scrollTrigger: {
//     trigger: ".top_kv",
//     start: "top top",
//     end: "bottom top",
//     scrub: true
//   }
// });

// gsap.registerPlugin(ScrollTrigger);

// // ABOUT テキストだけふわっと
// gsap.from(".top_about_section", {
//   opacity: 0,
//   y: 40,
//   duration: 1.2,
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: ".top_about_section",
//     start: "top 80%",   // 画面の下の方で発火
//     toggleActions: "play none none reverse"
//   }
// });

// const hero = document.getElementById('hero');

//   function onScroll() {
//     if (window.scrollY > window.innerHeight * 0.7) {
//       hero.classList.add('is-switched');
//     } else {
//       hero.classList.remove('is-switched');
//     }
//   }

//   window.addEventListener('scroll', onScroll);
//   onScroll();