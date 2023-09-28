// メニューバー
{
  const btn = document.querySelector(".js-hum-button");
  const line = document.querySelector(".js-hum-button-line");
  const menu = document.querySelector(".js-list");

  btn.addEventListener("click", () => {
    menu.classList.toggle("is-open");
    line.classList.toggle("is-open");
    btn.classList.toggle("is-open");
  });
}

// Swiper
{
  const swiper = new Swiper(".swiper1", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickeble: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
}

{
  const swiper = new Swiper(".swiper2", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickeble: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });
}

// モーダル
{
  const open = document.querySelector(".js-open");
  const mask = document.querySelector(".js-mask");
  const modal = document.querySelector(".js-modal");
  const close = document.querySelector(".js-close");
  const header = document.querySelector(".js-header");

  open.addEventListener("click", () => {
    mask.classList.add("is-open");
    modal.classList.add("is-hidden");
    header.classList.add("is-header");
  });


  
  close.addEventListener("click", () => {
    mask.classList.remove("is-open");
    modal.classList.remove("is-hidden");
    header.classList.remove("is-header");
  });

  mask.addEventListener("click", () => {
    close.click();
  });
}