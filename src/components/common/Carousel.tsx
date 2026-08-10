import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

export interface CarouselProps {
  items: ReactNode[];
  showDots?: boolean;
  showCounter?: boolean;
  showArrows?: boolean;
  autoplay?: boolean;
  intervalMs?: number;
  perViewDesktop?: number;
  perViewMobile?: number;
  mobileBreakpoint?: number;
  /** Pause autoplay from the outside (e.g. while a lightbox is open). */
  paused?: boolean;
  onItemClick?: (index: number) => void;
  className?: string;
  ariaLabel?: string;
}

export function Carousel({
  items,
  showDots = false,
  showCounter = false,
  showArrows = true,
  autoplay = true,
  intervalMs = 4000,
  perViewDesktop = 2,
  perViewMobile = 1,
  mobileBreakpoint = 640,
  paused: pausedProp = false,
  onItemClick,
  className = "",
  ariaLabel = "Carousel",
}: CarouselProps) {
  const [slide, setSlide] = useState(0);
  const [perView, setPerView] = useState(perViewDesktop);
  const [hoverPaused, setHoverPaused] = useState(false);

  const total = items.length;
  const maxSlide = Math.max(0, total - perView);
  const isPaused = pausedProp || hoverPaused;

  useEffect(() => {
    const updatePerView = () => {
      setPerView(
        window.innerWidth <= mobileBreakpoint ? perViewMobile : perViewDesktop,
      );
    };

    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, [mobileBreakpoint, perViewDesktop, perViewMobile]);

  useEffect(() => {
    setSlide((prev) => Math.min(prev, maxSlide));
  }, [maxSlide]);

  useEffect(() => {
    if (!autoplay || total <= perView || isPaused) return;

    const timer = window.setInterval(() => {
      setSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [autoplay, total, perView, maxSlide, isPaused, intervalMs]);

  if (total === 0) return null;

  const goPrev = () => {
    setSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const goNext = () => {
    setSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const rootClassName = ["carousel", className].filter(Boolean).join(" ");

  return (
    <div
      className={rootClassName}
      style={{ "--carousel-per-view": perView } as CSSProperties}
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      aria-label={ariaLabel}
    >
      {showArrows && (
        <button
          type="button"
          className="carousel-arrow carousel-arrow-left"
          onClick={goPrev}
          aria-label="Previous slide"
        >
          ‹
        </button>
      )}

      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${slide * (100 / perView)}%)`,
          }}
        >
          {items.map((item, index) =>
            onItemClick ? (
              <button
                key={index}
                type="button"
                className="carousel-slide"
                onClick={() => onItemClick(index)}
              >
                {item}
              </button>
            ) : (
              <div key={index} className="carousel-slide">
                {item}
              </div>
            ),
          )}
        </div>

        {showCounter && (
          <span className="carousel-count">
            {slide + 1} / {total}
          </span>
        )}
      </div>

      {showArrows && (
        <button
          type="button"
          className="carousel-arrow carousel-arrow-right"
          onClick={goNext}
          aria-label="Next slide"
        >
          ›
        </button>
      )}

      {showDots && (
        <div className="carousel-dots">
          {Array.from({ length: maxSlide + 1 }, (_, index) => (
            <button
              key={index}
              type="button"
              className={`carousel-dot${index === slide ? " active" : ""}`}
              onClick={() => setSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
