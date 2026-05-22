"use strict";

$(document).ready(function () {
  const m_page_top_btn = $(".m_page_top_btn");

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      // 300pxスクロールしたら表示
      m_page_top_btn.addClass("is-show"); // 300px以上スクロールしたらボタンをフェードイン
    } else {
      m_page_top_btn.removeClass("is-show"); // 300px以下になったらボタンをフェードアウト
    }
  });

  m_page_top_btn.on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500,
    ); //500ミリ秒かけて戻る
    return false;
  });
});

/*---------- ハンバーガーメニュー ----------*/
const hamburger = document.querySelector(".js_hamburger");
const navigation = document.querySelector(".js_nav");
const body = document.querySelector(".js_body");

// 1. ボタンがバッテンになる
// 2. ナビゲーションが出てくる
// 3. 画面がロックされる（スクロールさせない）
// 4. クリックしたら繰り返される（往復）

hamburger.addEventListener("click", () => {
  // クリックしたときに
  hamburger.classList.toggle("is-active");
  // ハンバーガーにis-activeが追加される
  navigation.classList.toggle("is-active");
  // ナビゲーションにis-activeが追加される
  body.classList.toggle("is-active");
});

/*---------- スライドイン ----------*/
gsap
  .timeline()
  .from(".js_opening-ttl", {
    duration: 0.8,
    autoAlpha: 0,
    x: 600,
    ease: "bounce.out",
  })
  .from(".js_copy", {
    duration: 0.6,
    autoAlpha: 0,
    x: -100,
    ease: "bounce.out",
  });

gsap.registerPlugin(ScrollTrigger);

gsap.from(".js_speech-bubble", {
  x: -70,
  autoAlpha: 0,
  duration: 1.3,
  ease: "power4.out",
  scrollTrigger: {
  trigger: ".top_kv",
  start: "bottom 80%",
    // markers: true,
  },
});

/*---------- スライドイン 複数----------*/

gsap.registerPlugin(ScrollTrigger);

gsap.from(".js_about", {
  x: 60,
  autoAlpha: 0,
  duration: 1,
  ease: "power4.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".js_about-trigger",
    start: "10% center",
    // markers: true,
  },
});
