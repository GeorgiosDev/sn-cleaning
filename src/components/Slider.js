import React, { useState } from 'react';
import "../styles/slider.css"

const Slider = ({ images }) => {
  // Initial state for image and thumbnails
  const [currentImage, setCurrentImage] = useState(0);
  const [thumbnail, setThumbnail] = useState(0);
  //Set state as previous image 
  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };
  // Set state as next image
  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };
  // Select thumbnail
  const selectThumbnail = (index) => {
    setCurrentImage(index)
    setThumbnail(index)
  }

  return (
    <div className="image-slider">
      <div className="main-slider">
        <button className="button" onClick={previousImage}>
          <span className="text">Previous</span>
          <svg className="arrow" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" transform="rotate(180 224 256)"></path></svg>
        </button>
        <img src={images[currentImage]} alt="Slider" className='image' />
        <button className="button" onClick={nextImage}>
          <span className="text">Next</span>
          <svg className="arrow" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
        </button>
      </div>
      <div className="thumbnail-slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={`thumbnail ${thumbnail === index ? 'selected' : ''}`}
            onClick={() => selectThumbnail(index)}
          />
        ))}
      </div>
</div>

  );
};

export default Slider;
