const luxuryEase = "power4.out";
const luxuryEaseInOut = "power3.inOut";

function splitHeroTitle(titleEl) {
  const words = titleEl.textContent.trim().split(/\s+/);

  titleEl.textContent = "";
  titleEl.setAttribute("aria-label", words.join(" "));

  words.forEach((word, index) => {
    const wordWrap = document.createElement("span");
    wordWrap.className = "hero-word";
    wordWrap.setAttribute("aria-hidden", "true");

    const wordInner = document.createElement("span");
    wordInner.className = "hero-word__inner";
    wordInner.textContent = word;

    wordWrap.appendChild(wordInner);
    titleEl.appendChild(wordWrap);

    if (index < words.length - 1) {
      titleEl.appendChild(document.createTextNode(" "));
    }
  });
}

function initMenuAnimation() {
  const navItems = gsap.utils.toArray(".nav__item");

  const animateMenuIn = () => {
    gsap.fromTo(
      navItems,
      { x: -48, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: luxuryEase,
        overwrite: true,
      },
    );

    gsap.fromTo(
      [".menu__phone-number", ".menu__call-to-order"],
      { y: 24, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        stagger: 0.12,
        delay: 0.35,
        ease: luxuryEase,
        overwrite: true,
      },
    );
  };

  window.addEventListener("hashchange", () => {
    if (location.hash === "#menu") {
      animateMenuIn();
    }
  });

  if (location.hash === "#menu") {
    animateMenuIn();
  }
}

function initProductHover() {
  gsap.utils.toArray(".compare__product").forEach((card) => {
    const photo = card.querySelector(".product__photo");

    card.addEventListener("mouseenter", () => {
      gsap.to(photo, {
        scale: 1.06,
        duration: 0.7,
        ease: luxuryEaseInOut,
        overwrite: true,
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(photo, {
        scale: 1,
        duration: 0.7,
        ease: luxuryEaseInOut,
        overwrite: true,
      });
    });
  });
}

function initAnimations() {
  const heroTitle = document.querySelector(".header__title");

  if (heroTitle) {
    splitHeroTitle(heroTitle);
  }

  const heroTl = gsap.timeline({ defaults: { ease: luxuryEase } });

  heroTl
    .from(".top-bar__logo", {
      y: -36,
      autoAlpha: 0,
      duration: 1.1,
    })
    .from(
      ".top-bar__icons .icon",
      {
        y: -20,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.12,
      },
      "-=0.7",
    )
    .from(
      ".hero-word__inner",
      {
        yPercent: 120,
        duration: 1.2,
        stagger: 0.14,
      },
      "-=0.5",
    )
    .from(
      ".header__bottom",
      {
        autoAlpha: 0,
        duration: 0.8,
      },
      "-=0.9",
    );

  gsap.to(".header", {
    backgroundPositionY: "30%",
    ease: "none",
    scrollTrigger: {
      trigger: ".header",
      start: "top top",
      end: "bottom top",
      scrub: 1.2,
    },
  });

  gsap.from(".about .content__title", {
    x: -80,
    autoAlpha: 0,
    duration: 1.2,
    ease: luxuryEase,
    scrollTrigger: {
      trigger: ".about",
      start: "top 78%",
      once: true,
    },
  });

  gsap.from(".about .content__description", {
    x: 80,
    autoAlpha: 0,
    duration: 1.2,
    ease: luxuryEase,
    scrollTrigger: {
      trigger: ".about",
      start: "top 72%",
      once: true,
    },
  });

  gsap.utils.toArray(".section-title.fade-in-up").forEach((title) => {
    gsap.from(title, {
      y: 60,
      autoAlpha: 0,
      duration: 1.1,
      ease: luxuryEase,
      scrollTrigger: {
        trigger: title,
        start: "top 82%",
        once: true,
      },
    });
  });

  gsap.from(".compare__product", {
    y: 80,
    autoAlpha: 0,
    scale: 0.96,
    duration: 1.1,
    stagger: 0.18,
    ease: luxuryEase,
    scrollTrigger: {
      trigger: ".compare__products",
      start: "top 80%",
      once: true,
    },
  });

  gsap.utils.toArray(".detail").forEach((detail, index) => {
    const photos = detail.querySelectorAll(".detail__photo");
    const text = detail.querySelectorAll(".detail__title, .detail__description");

    gsap.from(photos, {
      clipPath: "inset(100% 0 0 0)",
      scale: 1.08,
      duration: 1.3,
      stagger: 0.12,
      ease: luxuryEaseInOut,
      scrollTrigger: {
        trigger: detail,
        start: "top 80%",
        once: true,
      },
    });

    gsap.from(text, {
      y: 40,
      autoAlpha: 0,
      duration: 1,
      stagger: 0.1,
      delay: index * 0.05,
      ease: luxuryEase,
      scrollTrigger: {
        trigger: detail,
        start: "top 75%",
        once: true,
      },
    });
  });

  gsap.from(".detail__button", {
    y: 32,
    autoAlpha: 0,
    scale: 0.94,
    duration: 1,
    ease: luxuryEase,
    scrollTrigger: {
      trigger: ".detail__button",
      start: "top 90%",
      once: true,
    },
  });

  gsap.from(".contacts__form > *", {
    y: 36,
    autoAlpha: 0,
    duration: 0.9,
    stagger: 0.1,
    ease: luxuryEase,
    scrollTrigger: {
      trigger: ".contacts__form",
      start: "top 82%",
      once: true,
    },
  });

  gsap.from(".information > div", {
    x: 40,
    autoAlpha: 0,
    duration: 0.9,
    stagger: 0.12,
    ease: luxuryEase,
    scrollTrigger: {
      trigger: ".information",
      start: "top 82%",
      once: true,
    },
  });

  gsap.from(".footer-image", {
    scale: 1.12,
    autoAlpha: 0,
    duration: 1.4,
    ease: luxuryEaseInOut,
    scrollTrigger: {
      trigger: ".footer-image",
      start: "top 92%",
      once: true,
    },
  });

  gsap.to(".footer-image", {
    yPercent: -8,
    ease: "none",
    scrollTrigger: {
      trigger: ".footer-image",
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5,
    },
  });

  initMenuAnimation();
  initProductHover();
}

function initReducedMotionState() {
  gsap.set(
    [
      ".top-bar__logo",
      ".top-bar__icons .icon",
      ".about .content__title",
      ".about .content__description",
      ".section-title",
      ".compare__product",
      ".detail__photo",
      ".detail__title",
      ".detail__description",
      ".detail__button",
      ".contacts__form > *",
      ".information > div",
      ".footer-image",
      ".nav__item",
      ".menu__phone-number",
      ".menu__call-to-order",
    ],
    { autoAlpha: 1, x: 0, y: 0, scale: 1, clipPath: "inset(0% 0 0 0)" },
  );
}

function bootAnimations() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.error("GSAP failed to load. Check your network connection.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    initReducedMotionState();
    return;
  }

  initAnimations();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootAnimations);
} else {
  bootAnimations();
}
