"use client";

import { useState } from 'react';
import { BsQuestionCircle } from 'react-icons/bs'; 

export default function Gallery() {
  const [images, setImages] = useState([
    "/images/me2.png",
    "/images/me4.png",
    "/images/me3.png",
    "/images/me1.png",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImageURL = URL.createObjectURL(file);
      setImages((prevImages) => [...prevImages, newImageURL]);
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 3 ? prevIndex + 1 : 0
    );
  };

  return (
    <section className="relative flex flex-col items-center p-4 bg-gray-900 text-white">
      <div className="absolute top-2 left-2">
        <BsQuestionCircle className="text-gray-400 text-xl" />
      </div>

      <div className="flex justify-between items-center w-full max-w-3xl mb-4">
        <h2 className="text-lg font-semibold bg-black rounded-full px-4 py-2 shadow-md">Gallery</h2>

        <label className="flex items-center cursor-pointer">
          <span className="bg-gray-700 text-white font-semibold px-4 py-2 rounded-full hover:bg-gray-600 shadow-lg">
            + Add Image
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={handleAddImage}
            className="hidden"
          />
        </label>

        <div className="flex gap-2">
          <button
            onClick={handlePrevious}
            className="bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600 shadow-lg"
            style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600 shadow-lg"
            style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            →
          </button>
        </div>
      </div>

      <div className="relative w-full max-w-3xl h-64 bg-gray-800 flex justify-center items-center gap-2 overflow-hidden rounded-md shadow-lg">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${currentIndex + index + 1}`}
            className="object-cover w-1/3 h-full rounded-md"
          />
        ))}
      </div>
    </section>
  );
}
