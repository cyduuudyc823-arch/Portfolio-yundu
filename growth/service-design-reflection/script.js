const header = document.getElementById("site-header");
const progress = document.getElementById("page-progress");
const menuButton = document.getElementById("menu-toggle");
const navigation = document.getElementById("site-nav");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const scrollSequences = [...document.querySelectorAll("[data-sequence]")];

function updatePageChrome() {
  const maximum = document.documentElement.scrollHeight - window.innerHeight;
  const percent = maximum > 0 ? (window.scrollY / maximum) * 100 : 0;
  progress.style.width = `${Math.min(100, Math.max(0, percent))}%`;
  header.classList.toggle("is-scrolled", window.scrollY > 24);

  scrollSequences.forEach((sequence) => {
    const items = [...sequence.querySelectorAll(".sequence-item")];
    const counter = sequence.querySelector(".sequence-count span");
    const bounds = sequence.getBoundingClientRect();
    const travel = Math.max(1, bounds.height - window.innerHeight);
    const sequenceProgress = Math.min(1, Math.max(0, -bounds.top / travel));
    const activeIndex = reducedMotion
      ? items.length - 1
      : Math.min(items.length - 1, Math.floor(sequenceProgress * items.length));

    items.forEach((item, index) => {
      item.classList.toggle("is-sequence-active", index <= activeIndex);
    });
    if (counter) counter.textContent = String(activeIndex + 1).padStart(2, "0");
  });
}

window.addEventListener("scroll", updatePageChrome, { passive: true });
window.addEventListener("resize", updatePageChrome);
updatePageChrome();

menuButton.addEventListener("click", () => {
  const open = !navigation.classList.contains("is-open");
  navigation.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

const editorialRevealTargets = document.querySelectorAll(
  "main p:not(.kicker):not(.sequence-item), main blockquote, main h3, main .lesson-matrix article"
);

editorialRevealTargets.forEach((element) => {
  const alreadyAnimated = element.classList.contains("reveal") || element.closest(".reveal");
  const steppedSequence = element.classList.contains("sequence-item") || element.closest("[data-sequence]");
  const liveStoryCopy = element.closest(".story-copy");

  if (!alreadyAnimated && !steppedSequence && !liveStoryCopy) {
    element.classList.add("reveal", "reveal--editorial");
  }
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const storySteps = [...document.querySelectorAll(".story-step")];
const storyGalleries = [...document.querySelectorAll(".story-gallery")];
const storyDots = [...document.querySelectorAll(".story-dots i")];
const storyTitle = document.getElementById("story-title");
const storyText = document.getElementById("story-text");

const storyObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const index = storySteps.indexOf(entry.target);
    storyTitle.textContent = entry.target.dataset.title;
    storyTitle.classList.toggle("story-title--quote", index === 1);
    storyText.textContent = entry.target.dataset.copy;
    storyGalleries.forEach((gallery, galleryIndex) => gallery.classList.toggle("is-active", galleryIndex === index));
    storyDots.forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === index));
  });
}, { threshold: 0.55 });

storySteps.forEach((step) => storyObserver.observe(step));

document.querySelectorAll(".story-images img").forEach((image) => {
  image.addEventListener("error", () => {
    image.hidden = true;
  });
});

document.querySelectorAll("img[data-fallback]").forEach((image) => {
  image.addEventListener("error", () => {
    if (image.src.endsWith(image.dataset.fallback)) return;
    image.src = image.dataset.fallback;
  });
});

if (!reducedMotion) {
  const parallaxImage = document.querySelector(".wide-image img");
  let ticking = false;

  function updateParallax() {
    const bounds = parallaxImage.getBoundingClientRect();
    if (bounds.bottom > 0 && bounds.top < window.innerHeight) {
      const offset = (window.innerHeight - bounds.top) / (window.innerHeight + bounds.height);
      parallaxImage.style.transform = `translateY(${(offset - 0.5) * 8}%)`;
    }
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });
}
