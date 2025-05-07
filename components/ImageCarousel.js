"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./ImageCarousel.module.css";

export default function ImageCarousel({ images }) {
  if (!images || images.length === 0) return null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    const threshold = 50; // Minimum swipe distance in px

    if (deltaX > threshold) {
      // Swipe left
      nextImage();
    } else if (deltaX < -threshold) {
      // Swipe right
      prevImage();
    }
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carouselWrapper}>
      <div
        className={styles.carousel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.imageContainer}>
          <div className={styles.imageContainer}>
            <Image
              src={images[currentIndex].image_url}
              alt="Blog Image"
              className={styles.carouselImage}
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>

        <button
          className={`${styles.arrow} ${styles.leftArrow}`}
          onClick={prevImage}
        >
          &#8592;
        </button>

        <button
          className={`${styles.arrow} ${styles.rightArrow}`}
          onClick={nextImage}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}