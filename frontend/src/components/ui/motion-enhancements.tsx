"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motionTokens as motion } from "@/lib/motion";

type RevealDirection = "up" | "left" | "right";

const revealTargets = [
  "main .section-top",
  "main .solution-card",
  "main .about-art",
  "main .about-copy",
  "main .benefits-grid > :first-child",
  "main .benefit-row",
  "main .process-step",
  "main .contact-panel",
  "main .contact-channels",
  "main .inline-contact > div",
  "main .inline-contact > form",
  "main .faq-grid > div",
  "main [data-reveal]",
].join(", ");

/** Native, one-shot motion. Content stays visible without JS and under reduced motion. */
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

    function directionFor(element: HTMLElement): RevealDirection {
      const explicit = element.dataset.reveal;
      if (explicit === "left" || explicit === "right" || explicit === "up")
        return explicit;
      if (
        element.matches(
          ".about-art, .contact-panel, .inline-contact-intro, .contact-page-aside",
        )
      )
        return "left";
      if (
        element.matches(
          ".about-copy, .contact-channels, .inline-contact > form, .contact-page-form",
        )
      )
        return "right";
      return "up";
    }

    function reveal(element: HTMLElement, delay = 0) {
      const direction = directionFor(element);
      const distance = motion.revealDistance;
      const translate =
        direction === "left"
          ? `-${distance}px 0`
          : direction === "right"
            ? `${distance}px 0`
            : `0 ${distance}px`;
      // Individual translate keeps entry motion independent from transform-based hover.
      play(
        element,
        [
          { opacity: 0, translate },
          { opacity: 1, translate: "0 0" },
        ],
        delay,
      );
    }

    function heroSequence() {
      if (heroPlayed || preference.matches) return;
      heroPlayed = true;
      const copy = document.querySelectorAll<HTMLElement>(
        ".hero-copy > .eyebrow, .hero-copy > h1, .hero-description, .hero-copy .hero-actions, .hero-footnote, .inner-hero .breadcrumbs, .inner-hero-copy > .eyebrow, .inner-hero-copy > h1, .inner-hero-copy > .lead, .inner-hero-copy > .hero-actions",
      );
      copy.forEach((element, index) => {
        completed.add(element);
        reveal(element, index * motion.heroStagger);
      });

      const visual = document.querySelector<HTMLElement>(
        ".hero-art, .inner-hero-visual",
      );
      if (visual) {
        completed.add(visual);
        const fromLeft = Boolean(visual.closest(".inner-hero-reverse"));
        play(
          visual,
          [
            {
              opacity: 0,
              transform: `translateX(${fromLeft ? -28 : 28}px) scale(.97)`,
            },
            { opacity: 1, transform: "translateX(0) scale(1)" },
          ],
          230,
          1050,
        );
      }
    }

    const targets = document.querySelectorAll<HTMLElement>(revealTargets);

    function staggerDelay(element: HTMLElement) {
      if (!element.matches(".solution-card, .benefit-row, [data-stagger]"))
        return 0;
      const parent = element.parentElement;
      if (!parent) return 0;
      const index = Array.from(parent.children).indexOf(element);
      const template = getComputedStyle(parent).gridTemplateColumns;
      const columns =
        template === "none"
          ? Math.min(parent.children.length, 3)
          : Math.max(1, template.split(" ").filter(Boolean).length);
      return (index % columns) * motion.cardStagger;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          if (preference.matches || completed.has(entry.target)) continue;

          completed.add(entry.target);
          const element = entry.target as HTMLElement;
          let delay = staggerDelay(element);

          if (element.matches(".process-step")) {
            const parent = element.parentElement;
            delay = parent
              ? Array.from(parent.children).indexOf(element) * 170
              : 0;
            const number = element.querySelector<HTMLElement>(
              ".step-top > span:first-child",
            );
            const connector =
              element.querySelector<HTMLElement>(".step-connector");
            if (number)
              play(
                number,
                [
                  { opacity: 0, translate: "0 18px", scale: 0.8 },
                  { opacity: 1, translate: "0 0", scale: 1 },
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

          // One settling gesture for institutional graphics; never a looping motion.
          const graphic = element.querySelector<HTMLElement>(".brand-ribbon");
          if (graphic)
            play(
              graphic,
              [
                { translate: "20px 0", opacity: 0.65 },
                { translate: "0 0", opacity: 1 },
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
