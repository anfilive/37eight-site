import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// ─── Smooth scrolling ──────────────────────────────────────────────────────
ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.4,
  effects: true,
});

// ─── Shared defaults ───────────────────────────────────────────────────────
const TRIGGER_START = "top 88%";
const DURATION = 0.7;
const EASE = "power3.out";

function makeTrigger(el) {
  return { trigger: el, start: TRIGGER_START };
}

// ─── fade-up ───────────────────────────────────────────────────────────────
gsap.utils.toArray("[data-gsap='fade-up']").forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    y: 40,
    duration: DURATION,
    ease: EASE,
    scrollTrigger: makeTrigger(el),
  });
});

// ─── stagger-up (parent triggers staggered children) ──────────────────────
gsap.utils.toArray("[data-gsap='stagger-up']").forEach((container) => {
  const children = container.children;
  gsap.from(children, {
    opacity: 0,
    y: 40,
    duration: DURATION,
    ease: EASE,
    stagger: 0.1,
    scrollTrigger: makeTrigger(container),
  });
});

// ─── fade-in (opacity only) ────────────────────────────────────────────────
gsap.utils.toArray("[data-gsap='fade-in']").forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    duration: DURATION + 0.2,
    ease: EASE,
    scrollTrigger: makeTrigger(el),
  });
});

// ─── slide-left ────────────────────────────────────────────────────────────
gsap.utils.toArray("[data-gsap='slide-left']").forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    x: -50,
    duration: DURATION,
    ease: EASE,
    scrollTrigger: makeTrigger(el),
  });
});

// ─── slide-right ───────────────────────────────────────────────────────────
gsap.utils.toArray("[data-gsap='slide-right']").forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    x: 50,
    duration: DURATION,
    ease: EASE,
    scrollTrigger: makeTrigger(el),
  });
});

// ─── scale-up ──────────────────────────────────────────────────────────────
gsap.utils.toArray("[data-gsap='scale-up']").forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    scale: 0.94,
    duration: DURATION,
    ease: EASE,
    scrollTrigger: makeTrigger(el),
  });
});

// ─── Hero entrance (runs immediately, no scroll) ───────────────────────────
const hero = document.querySelector("[data-gsap='hero']");
if (hero) {
  gsap.from(hero, { opacity: 0, duration: 1.2, ease: "power2.out" });
}
