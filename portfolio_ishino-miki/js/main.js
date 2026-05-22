"use strict";

/*---------- GSAP 設定 ----------*/

//存在しない要素を取得しようとするときに出るエラーを非表示にする
gsap.config({
  nullTargetWarn: false,
});

/*---------- ハンバーガーメニュー ----------*/
const hamburger = document.querySelector(".js_hamburger");
const navigation = document.querySelector(".js_nav");
const body = document.querySelector(".js_body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navigation.classList.toggle("is-active");
  body.classList.toggle("is-active");
});



// ハンバーガーメニュー内リンクを押したら閉じる
const navLinks = document.querySelectorAll(".l_header-nav_link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {

document.querySelector(".js_nav").classList.remove("is-active");
document.querySelector(".js_hamburger").classList.remove("is-active");
document.querySelector(".js_body").classList.remove("is-active");

  });
});

/*---------- kvのタイトルバウンディング ----------*/
gsap.registerPlugin();

const letters = gsap.utils.toArray(".js_kv_ttl_bounce");

// p（最初の文字）
const firstP = letters[0];

// 2番目（o）
const second = letters[1];

// 残り
const rest = letters.slice(2);

const tl = gsap.timeline();

// ① p → 回転しながら登場
tl.from(firstP, {
  rotation: -360, // ← 回転
  scale: 0.5, // ← 少し小さく
  autoAlpha: 0,
  duration: 1,
  ease: "back.out(1.7)",
  transformOrigin: "center center", // ← 回転の軸
});

// ② o → バウンス
tl.from(second, {
  y: -120,
  autoAlpha: 0,
  duration: 1.5,
  ease: "bounce.out",
});

// ③ 残り → 自然に
tl.from(
  rest,
  {
    y: -80,
    autoAlpha: 0,
    duration: 0.8,
    ease: "power4.out",
    stagger: 0.08,
  },
  "-=0.6", // ← 少し被せる
);

// ② 名前をふわっと遅れて表示
tl.from(
  ".m_kv_title",
  {
    y: 10,
    autoAlpha: 0,
    duration: 1,
    ease: "power4.out",
  },
  "=0.3",
);

// 桜の花登場
tl.from(
  ".js_page_top",
  {
    y: 5,
    autoAlpha: 0,
    duration: 1,
    ease: "power4.out",
  },
  // "-=0.2"
);

// 桜ボタンのアニメーション
// gsap.to(".m_page_top_btn", {
//   autoAlpha: 1,
//   duration: 1,
//   delay: 2,
//   ease: "power2.out",
//   onStart: () => {
//     gsap.set(".m_page_top_btn", { pointerEvents: "auto" });
//   },
//   onComplete: () => {
//     document.querySelector(".m_page_top_btn").classList.add("is-active");
//   }
// });

document.getElementById("page-top").addEventListener("click", function (e) {
  e.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/*---------- スライドイン 複数----------*/

// gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.config({
//   ignoreMobileResize: true
// });

// ScrollTrigger.defaults({
//   invalidateOnRefresh: true
// });

// const items = document.querySelectorAll(".js_work_slide");

// items.forEach((item, idx) => {
//   const img = item.querySelector(".js_work_img_slide");
//   const txt = item.querySelector(".js_work_txt_slide");

//   const imgX = (idx + 1) % 2 == 0 ? 100 : -100;
//   const txtX = (idx + 1) % 2 == 0 ? -100 : 100;

//   gsap.from(img, {
//     x: imgX,
//     scale: 1.2,
//     autoAlpha: 0,
//     ease: "power4.out",
//     scrollTrigger: {
//       trigger: item,
//       start: "top 70%",
//       end: "top 50%",
//       scrub: 1,
// markers: true,
//   },
// });

// テキスト
//   gsap.from(txt, {
//     x: txtX,
//     y: 40,
//     autoAlpha: 0,
//     ease: "power4.out",
//     scrollTrigger: {
//       trigger: item,
//       start: "top 65%",
//       end: "top 55%",
//       scrub: 1,
//     },
//   });
// });






// aboutpageの画像スライドイン
gsap.registerPlugin(ScrollTrigger);

gsap.from(
  [
    ".about_img-02",
    ".about_img-03",
    ".about_img-04"
  ],
  {
    scrollTrigger: {
      trigger: ".about_profile_section",
      start: "top 70%",
    },

    x: 80,
    opacity: 0,
    scale: 0.95,
    filter: "blur(4px)",

    duration: 1.2,
    ease: "power3.out",

    stagger: 0.25,
  }
);



/*---------- aboutページの大切にしていることカード登場 ----------*/

gsap.fromTo(
  '.js_about',
  {
    // y値を予め下方向に24pxずらす
    y: 24,
    // 不透明度を0
    autoAlpha: 0,
  },
  {
    // y値を定位置に戻す
    y: 0,
    // 不透明度を0
    autoAlpha: 1,
    // アニメーションの時間
    duration: 0.8,
    // 変化前から変化後までのアニメーションの振る舞い
    ease: 'Power4.inOut',
    // スクロールで発火させる
    scrollTrigger: {
      // アニメーションの発火するスクロール位置
      trigger: '.js_about-trigger',
      // スクロール位置の基準（markersをするとscroller-startと表示され、top centerは画面中央）
      start: 'top 40%',
      // 発火するスクロール位置や終了位置をマーカーする
      // markers: true,
    },
    // 同じクラスがついた複数要素を順番にアニメーションする
    stagger: {
      // each: 指定した時間が経過された時に次の要素のアニメーションを開始する
      each: 0.8,
      // amount: アニメーションの総時間（eachかamountのどちらかを指定する）
      // amount: 1,
      // アニメーションする要素の順番
      from: 'start',
      // 順番に表示する際のアニメーションスピード
      // ease: "bounce"
    },
  }
);



/*---------- aboutのアコーディオン ----------*/

const faq = document.querySelectorAll(".js_faq");

faq.forEach((element) => {
  const faqA = element.querySelector(".js_faq-a");
  const mark = element.querySelector(".js_faq_mark");

  // 1個ずつ取得
  const items = element.querySelectorAll(".js_faq_content");

  // 初期状態
  gsap.set(faqA, {
    height: 0,
    autoAlpha: 0,
    overflow: "hidden",
  });

  gsap.set(items, {
    height: 0,
    autoAlpha: 0,
    overflow: "hidden",
  });

  element.addEventListener("click", () => {
    const isActive = element.classList.contains("is-active");

    if (!isActive) {
      element.classList.add("is-active");
      mark.classList.add("is-open");

      // タイムライン
      const tl = gsap.timeline();

      // アコーディオン本体を開く
      tl.to(faqA, {
        height: "auto",
        autoAlpha: 1,
        duration: 0.1,
        ease: "power4.inOut",
      });

      // 順番に表示
      tl.to(items, {
        height: "auto",
        autoAlpha: 1,
        duration: 0.5,
        stagger: 0.3,
        ease: "power2.out",
      });
    } else {
      element.classList.remove("is-active");
      mark.classList.remove("is-open");

      // 閉じる時
      gsap.to(faqA, {
        height: 0,
        autoAlpha: 0,
        duration: 0.4,
        ease: "power4.inOut",
      });

      // 中身を初期位置へ戻す
      gsap.set(items, {
        y: 30,
        autoAlpha: 0,
      });
    }
  });
});











