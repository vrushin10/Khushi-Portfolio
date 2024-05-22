import React, { useState, useEffect } from 'react';
import imgUrl from './aliverse/aliverse-01.png'

const Slideshow = ({ images: [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to increment the image index
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Effect to update the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
    </div>
  );
};

export default Slideshow;
