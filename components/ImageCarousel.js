"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./ImageCarousel.module.css";

export default function ImageCarousel({ images }) {
  // If there are no images, render nothing
  if (!images || images.length === 0) return null;

  // Current shown image in the carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  // Whether modal is open or not
  const [isOpen, setIsOpen] = useState(false);

  // Touch positions for swipe support on mobile
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const deltaX = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (deltaX > threshold) nextImage();
    else if (deltaX < -threshold) prevImage();
  };

  // Setting rules for when the modal is open
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, nextImage, prevImage]);

  // Prevent background scrolling when the modal is open
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  // Current image being displayed
  const active = images[currentIndex];

  return (
    <>
      <div className={styles.carouselWrapper}>
        <div
          className={styles.carousel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className={styles.imageContainer}>
            <button
              type="button"
              className={styles.imageButton}
              onClick={openModal}
              aria-label="Open image fullscreen"
            >
              <Image
                src={active.image_url}
                alt="Blog Image"
                className={styles.carouselImage}
                fill
                sizes="(max-width: 939px) 75vw, 800px"
                priority
              />
            </button>
          </div>

          {/* Hide these arrows when the modal is open so they don't duplicate */}
          {!isOpen && (
            <>
              <button
                type="button"
                className={`${styles.carouselArrow} ${styles.carouselLeft}`}
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                aria-label="Previous image"
              >
                &#8592;
              </button>

              <button
                type="button"
                className={`${styles.carouselArrow} ${styles.carouselRight}`}
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                aria-label="Next image"
              >
                &#8594;
              </button>
            </>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          <div className={styles.modalContent}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              aria-label="Close"
            >
              ×
            </button>

            <button
              type="button"
              className={`${styles.modalArrow} ${styles.modalLeft}`}
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Previous image"
            >
              &#8592;
            </button>

            <div
              className={styles.modalImageWrap}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={active.image_url}
                alt="Blog Image fullscreen"
                fill
                className={styles.modalImage}
                sizes="100vw"
                priority
              />
            </div>

            <button
              type="button"
              className={`${styles.modalArrow} ${styles.modalRight}`}
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
            >
              &#8594;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
