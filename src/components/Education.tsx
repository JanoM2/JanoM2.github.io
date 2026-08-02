import { useState, useEffect, useRef, useCallback } from "react";
import type { PortfolioViewData, Translations } from "../types";

interface EduCarouselProps {
  data: PortfolioViewData;
}

function EduCarousel({ data }: EduCarouselProps) {
  const [index, setIndex] = useState(() => data.education.length);
  const [animated, setAnimated] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [slideStep, setSlideStep] = useState(296);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);
  const dragStartIndex = useRef(0);
  const isDraggingRef = useRef(false);
  const dragOffsetRef = useRef(0);
  const slideStepRef = useRef(296);
  const indexRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const total = data.education.length;
  const items = [...data.education, ...data.education, ...data.education];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateSlideStep = () => {
      const step = parseFloat(
        getComputedStyle(el).getPropertyValue("--edu-slide-step"),
      );
      if (!Number.isNaN(step)) setSlideStep(step);
    };

    updateSlideStep();
    window.addEventListener("resize", updateSlideStep);
    return () => window.removeEventListener("resize", updateSlideStep);
  }, []);

  useEffect(() => {
    slideStepRef.current = slideStep;
  }, [slideStep]);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        setAnimated(true);
        setIndex((prev) => prev + 1);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    if (index >= 2 * total) {
      const timeout = setTimeout(() => {
        setAnimated(false);
        setIndex((prev) => prev - total);
      }, 650);
      return () => clearTimeout(timeout);
    }

    if (index <= 0) {
      const timeout = setTimeout(() => {
        setAnimated(false);
        setIndex((prev) => prev + total);
      }, 650);
      return () => clearTimeout(timeout);
    }
  }, [index, total]);

  const currentDot = index % total;

  const nextSlide = () => {
    setAnimated(true);
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setAnimated(true);
    setIndex((prev) => prev - 1);
  };

  const finishDrag = useCallback((e?: PointerEvent) => {
    if (!isDraggingRef.current) return;

    isDraggingRef.current = false;
    setIsDragging(false);
    setIsPaused(false);

    if (wrapperRef.current && e?.pointerId !== undefined) {
      try {
        wrapperRef.current.releasePointerCapture(e.pointerId);
      } catch {
        /* pointer already released */
      }
    }

    const delta = dragOffsetRef.current;
    const step = slideStepRef.current;
    const targetIndex = Math.round(dragStartIndex.current - delta / step);

    setAnimated(true);
    setDragOffset(0);
    dragOffsetRef.current = 0;

    if (targetIndex !== indexRef.current) {
      setIndex(targetIndex);
    }
  }, []);

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (!isDraggingRef.current) return;

    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 5) hasDraggedRef.current = true;

    dragOffsetRef.current = delta;
    setDragOffset(delta);
  }, []);

  const handlePointerUp = useCallback(
    (e: PointerEvent) => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
      finishDrag(e);
    },
    [finishDrag, handlePointerMove],
  );

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;

    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);

    const track = e.currentTarget.querySelector(".edu-carousel-track");
    const card = track?.querySelector(".edu-card");
    if (track && card instanceof HTMLElement) {
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const measuredStep = card.offsetWidth + gap;
      if (measuredStep > 0) {
        slideStepRef.current = measuredStep;
        setSlideStep(measuredStep);
      }
    }

    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    dragStartX.current = e.clientX;
    dragStartIndex.current = indexRef.current;
    dragOffsetRef.current = 0;

    setIsDragging(true);
    setIsPaused(true);
    setAnimated(false);
    setDragOffset(0);

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
  };

  useEffect(() => {
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [handlePointerMove, handlePointerUp]);

  const handleCardClick = () => {
    console.log("hasDraggedRef.current", hasDraggedRef, hasDraggedRef.current);
    // if (hasDraggedRef.current) e.preventDefault();
  };

  return (
    <div className="edu-carousel-container" ref={containerRef}>
      <button className="edu-arrow edu-arrow-left" onClick={prevSlide}>
        ‹
      </button>
      <div
        ref={wrapperRef}
        className={`edu-carousel-wrapper${isDragging ? " is-dragging" : ""}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => !isDraggingRef.current && setIsPaused(false)}
        onPointerDown={handlePointerDown}
      >
        <div
          className="edu-carousel-track"
          style={{
            transform: `translateX(${dragOffset - index * slideStep}px)`,
            transition: animated
              ? "transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)"
              : "none",
          }}
        >
          {items.map((e, i) => (
            <a
              key={i}
              href={e.cert}
              target="_blank"
              rel="noreferrer"
              className="edu-card"
              onClick={handleCardClick}
              draggable={false}
            >
              <img src={e.img} alt={e.name} />
              <div className="edu-card-body">
                <div className="edu-org">{e.org}</div>
                <div className="edu-name">{e.name}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <button className="edu-arrow edu-arrow-right" onClick={nextSlide}>
        ›
      </button>
      <div className="edu-dots">
        {data.education.map((_, i) => (
          <button
            key={i}
            className={`edu-dot ${i === currentDot ? "active" : ""}`}
            onClick={() => {
              setAnimated(true);
              setIndex(total + i);
            }}
          />
        ))}
      </div>
    </div>
  );
}

interface EducationProps {
  data: PortfolioViewData;
  t: Translations;
}

export function Education({ data, t }: EducationProps) {
  return (
    <section id="educacion" className="section">
      <p className="section-label">{t.sectionLabels.education}</p>
      <h2 className="section-title">{t.sectionTitles.education}</h2>
      <EduCarousel data={data} />
    </section>
  );
}
