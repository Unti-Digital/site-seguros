"use client";

import { useEffect } from "react";
import { motionTokens as motion } from "@/lib/motion";
import { usePathname } from "next/navigation";

/** Native, one-shot motion. Content is visible without JS and reduced motion cancels all effects. */
export function MotionEnhancements() {
  const pathname = usePathname();
  useEffect(() => {
    if (!("IntersectionObserver" in window) || !Element.prototype.animate)
      return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const completed = new Set<Element>();
    const active = new Set<Animation>();
    let heroPlayed = false;

    function play(
      element: Element,
      frames: Keyframe[],
      delay = 0,
      duration: number = motion.revealDuration,
    ) {
      if (preference.matches) return;
      const animation = element.animate(frames, {
        duration,
        delay,
        easing: motion.ease,
        fill: "backwards",
      });
      active.add(animation);
      void animation.finished.then(
        () => active.delete(animation),
        () => active.delete(animation),
      );
    }
    function reveal(element: Element, delay = 0) {
      play(
        element,
        [
          { opacity: 0, transform: `translateY(${motion.revealDistance}px)` },
          { opacity: 1, transform: "translateY(0)" },
        ],
        delay,
      );
    }
    function heroSequence() {
      if (heroPlayed || preference.matches) return;
      heroPlayed = true;
      const copy = document.querySelectorAll(
        ".hero-copy > .eyebrow, .hero-copy > h1, .hero-description, .hero-copy .hero-actions, .hero-footnote, .inner-hero .eyebrow, .inner-hero h1, .inner-hero .lead, .inner-hero .hero-actions",
      );
      copy.forEach((element, index) => {
        completed.add(element);
        reveal(element, index * motion.heroStagger);
      });
      const visual = document.querySelector(".hero-art, .inner-hero-visual");
      if (visual) {
        completed.add(visual);
        play(
          visual,
          [
            { opacity: 0, transform: "translateX(28px) scale(.97)" },
            { opacity: 1, transform: "translateX(0) scale(1)" },
          ],
          230,
          1050,
        );
      }
    }

    const targets = document.querySelectorAll<HTMLElement>(
      "main .section-top, main .solution-card, main .about-art, main .about-copy, main .benefits-grid > div, main .process-step, main .contact-panel, main .contact-channels, main .inline-contact > div, main .inline-contact > form, main .faq-grid > div, main [data-reveal]",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          if (preference.matches || completed.has(entry.target)) continue;
          completed.add(entry.target);
          const element = entry.target;
          let delay = 0;
          if (element.matches(".solution-card, [data-stagger]")) {
            const row = Array.from(element.parentElement!.children).indexOf(
              element,
            );
            delay =
              (row % (window.innerWidth >= 1024 ? 4 : 2)) * motion.cardStagger;
          }
          if (element.matches(".process-step")) {
            delay =
              Array.from(element.parentElement!.children).indexOf(element) *
              170;
            const number = element.querySelector(
              ".step-top > span:first-child",
            );
            const connector = element.querySelector(".step-connector");
            if (number)
              play(
                number,
                [
                  { opacity: 0, transform: "translateY(18px) scale(.8)" },
                  { opacity: 1, transform: "translateY(0) scale(1)" },
                ],
                delay + 160,
                850,
              );
            if (connector)
              play(
                connector,
                [
                  { transform: "scaleX(0)", opacity: 0 },
                  { transform: "scaleX(1)", opacity: 1 },
                ],
                delay + 260,
                1000,
              );
          }
          reveal(element, delay);
          // A single settling gesture, never a continuous loop or scroll-linked parallax.
          const graphic = element.querySelector(".brand-ribbon");
          if (graphic)
            play(
              graphic,
              [
                { transform: "translateX(20px)", opacity: 0.65 },
                { transform: "translateX(0)", opacity: 1 },
              ],
              delay + 120,
              1150,
            );
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" },
    );

    function updatePreference() {
      observer.disconnect();
      for (const animation of active) animation.cancel();
      active.clear();
      if (!preference.matches) {
        heroSequence();
        targets.forEach((target) => {
          if (!completed.has(target)) observer.observe(target);
        });
      }
    }
    function onFocus(event: FocusEvent) {
      if (!(event.target instanceof Element)) return;
      for (const target of targets)
        if (target.contains(event.target)) {
          completed.add(target);
          observer.unobserve(target);
          target
            .getAnimations({ subtree: true })
            .forEach((animation) => animation.finish());
        }
      // Hero actions remain immediately visible to a keyboard user.
      event.target
        .closest(".hero-actions")
        ?.getAnimations()
        .forEach((animation) => animation.finish());
    }
    updatePreference();
    preference.addEventListener("change", updatePreference);
    document.addEventListener("focusin", onFocus);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", updatePreference);
      document.removeEventListener("focusin", onFocus);
      active.forEach((animation) => animation.cancel());
    };
  }, [pathname]);
  return null;
}
