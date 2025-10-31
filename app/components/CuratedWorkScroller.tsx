"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import React from "react";

const curatedProjects = [
  {
    id: "ridesense",
    title: "🚧 CaseStudy under construction, coming Soon 🚧",
    subtitle: "🚧 CaseStudy under construction, coming Soon 🚧",
    date: "July 2025",
    description:
      "Owning the full product roadmap at RideSense, from concept to creation and launch! Designing the best experience for bike riders.",
    thumbnail: "/curatedWork/ridesense-thumbnail.png",
  },
  {
    id: "pantrypal",
    title: "PantryPal",
    subtitle: "Concept app design",
    date: "Feb 2025",
    description:
      "A kitchen inventory management and cooking app, allowing you to track the health of the items in your pantry.",
    thumbnail: "/curatedWork/pantrypal-thumbnail.png",
  },
  {
    id: "ambition",
    title: "Ambition",
    subtitle: "Concept app design",
    date: "Apr 2025",
    description:
      "A career vision-building app that allows users to break down ambitious goals into actionable steps.",
    thumbnail: "/curatedWork/ambition-thumbnail.png",
  },
];

export default function CuratedWorkScroller() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement | null>(null);

  const slideRefs = useMemo(
    () => curatedProjects.map(() => React.createRef<HTMLElement>()),
    []
  );

  const [activeIdx, setActiveIdx] = useState(0);
  const [animating, setAnimating] = useState(false);

  const isInSection = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      isInSection.current =
        rect.top < window.innerHeight * 0.5 &&
        rect.bottom > window.innerHeight * 0.5;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollToSlide = useCallback((idx: number) => {
    const target = slideRefs[idx]?.current;
    if (!target) return;

    setAnimating(true);
    const top = window.scrollY + target.getBoundingClientRect().top;
    window.scrollTo({ top, behavior: "smooth" });
    // simple throttle window for smooth scroll end
    setTimeout(() => setAnimating(false), 650);
  }, [slideRefs]);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;

      // Find the slide whose top is closest to viewport top
      let best = 0;
      let bestDist = Infinity;
      slideRefs.forEach((r, i) => {
        const el = r.current;
        if (!el) return;
        const d = Math.abs(el.getBoundingClientRect().top);
        if (d < bestDist) {
          best = i;
          bestDist = d;
        }
      });
      setActiveIdx(best);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slideRefs]);

  // Wheel handler: only intercept when inside section and not at edges
  const onWheel = useCallback(
    (e: React.WheelEvent) => {
      if (!isInSection.current || animating) return;

      const delta = e.deltaY;
      if (delta > 20) {
        // scrolling down
        if (activeIdx < curatedProjects.length - 1) {
          e.preventDefault();
          scrollToSlide(activeIdx + 1);
        }
      } else if (delta < -20) {
        // scrolling up
        if (activeIdx > 0) {
          e.preventDefault();
          scrollToSlide(activeIdx - 1);
        }
      }
    },
    [activeIdx, animating, scrollToSlide]
  );

  // Touch support (mobile)
  const touchStartY = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isInSection.current || animating || touchStartY.current === null) return;
    const diff = touchStartY.current - e.touches[0].clientY;

    // threshold
    if (diff > 30) {
      // swipe up => next
      if (activeIdx < curatedProjects.length - 1) {
        e.preventDefault();
        scrollToSlide(activeIdx + 1);
      }
      touchStartY.current = null;
    } else if (diff < -30) {
      // swipe down => prev
      if (activeIdx > 0) {
        e.preventDefault();
        scrollToSlide(activeIdx - 1);
      }
      touchStartY.current = null;
    }
  };

  return (
    <section
      ref={sectionRef}
      // we keep overflow visible; the window is the scroll container
      className="relative bg-black text-white"
      onWheel={onWheel}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
    >
      {/* Sticky header (doesn't change document height) */}
      <div className="sticky top-0 z-10 bg-black flex justify-between items-center w-full pt-6 pb-0">
        <Image
          src="/curatedWork/banner-title.png"
          alt="left banner"
          width={450}
          height={400}
          className="object-contain"
        />
        <h2
          className="text-4xl italic font-light"
          style={{ fontFamily: "var(--font-cooperlt)" }}
        >
          Curated Work
        </h2>
        <Image
          src="/curatedWork/banner-title.png"
          alt="right banner"
          width={450}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Slides are normal block elements in the page flow */}
      {curatedProjects.map((project, i) => (
        <section
          ref={slideRefs[i]}
          key={project.id}
          // Full viewport height minus header (adjust header height if needed)
          className="min-h-screen flex flex-col justify-center items-center px-6"
          onClick={() => !animating && router.push(`/projects/${project.id}`)}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center max-w-4xl"
          >
            <p
              className="mb-4 text-2xl"
              style={{ fontFamily: "var(--font-cooperlt)" }}
            >
              {project.subtitle}
            </p>

            <HoverPreview imageSrc={project.thumbnail} />

            <p
              className="text-2xl mt-2 mb-2 max-w-sm mx-auto font-light text-left"
              style={{ fontFamily: "var(--font-cooperlt)" }}
            >
              ~ {project.date}
            </p>
            <p
              className="text-2xl max-w-sm mx-auto font-light text-left"
              style={{ fontFamily: "var(--font-cooperlt)" }}
            >
              {project.description}
            </p>

            <Link
              href={`/projects/${project.id}`}
              className="inline-block mt-4 px-4 py-2 border border-white rounded-full text-lg hover:bg-white hover:text-black transition-all"
            >
              View Case Study →
            </Link>
          </motion.div>
        </section>
      ))}
    </section>
  );
}

function HoverPreview({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="group transition-transform duration-500 hover:scale-105">
      <div className="relative w-[600px] h-[350px] rounded-xl overflow-hidden mx-auto">
        <Image
          src={imageSrc}
          alt="thumbnail"
          width={600}
          height={350}
          className="object-cover"
        />
      </div>
    </div>
  );
}
