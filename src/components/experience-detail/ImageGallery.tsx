import { useEffect, useState } from "react";
import { Carousel } from "../common/Carousel";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const total = images.length;

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % total,
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + total) % total,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, total]);

  if (total === 0) return null;

  const stepLightbox = (direction: -1 | 1) => {
    setLightboxIndex((prev) => {
      if (prev === null) return prev;
      return (prev + direction + total) % total;
    });
  };

  const items = images.map((src, index) => (
    <img
      key={`${src}-${index}`}
      src={src}
      alt={`${title} screenshot ${index + 1}`}
    />
  ));

  return (
    <>
      <Carousel
        items={items}
        showArrows
        showCounter
        showDots={false}
        autoplay
        perViewDesktop={2}
        perViewMobile={1}
        paused={lightboxIndex !== null}
        onItemClick={setLightboxIndex}
        ariaLabel={`${title} screenshots`}
        className="exp-detail-carousel"
      />

      {lightboxIndex !== null && (
        <div
          className="exp-detail-lightbox"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="exp-detail-lightbox-close"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <button
            type="button"
            className="exp-detail-lightbox-nav exp-detail-lightbox-nav-left"
            onClick={(e) => {
              e.stopPropagation();
              stepLightbox(-1);
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <img
            src={images[lightboxIndex]}
            alt={`${title} screenshot ${lightboxIndex + 1}`}
            className="exp-detail-lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="exp-detail-lightbox-nav exp-detail-lightbox-nav-right"
            onClick={(e) => {
              e.stopPropagation();
              stepLightbox(1);
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
