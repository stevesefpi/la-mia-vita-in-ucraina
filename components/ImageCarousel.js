"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ImageCarousel.module.css";

export default function ImageCarousel({ images }) {
  if (!images || images.length === 0) return null;

  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className={styles.carousel}>
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

      <button className={`${styles.arrow} ${styles.leftArrow}`} onClick={prevImage}>
        &#8592;
      </button>

      <button className={`${styles.arrow} ${styles.rightArrow}`} onClick={nextImage}>
        &#8594;
      </button>
    </div>
  );
}


