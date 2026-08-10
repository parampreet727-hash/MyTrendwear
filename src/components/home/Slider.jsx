import { useState, useEffect } from "react";

const images = ["/banner1.webp", "/hero.webp", "/hero2.webp"];

export default function Slider() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="relative w-full overflow-hidden h-62.5 sm:h-87.5 md:h-112.5 lg:h-137.5 xl:h-screen">
        {/* Slider */}
        <div
          className="flex w-full h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentImage * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover shrink-0"
            />
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2
                         bg-black/50 text-white rounded-full
                         w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12
                         text-lg sm:text-xl lg:text-2xl
                         hover:bg-black transition"
        >
          ❮
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2
                         bg-black/50 text-white rounded-full
                         w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12
                         text-lg sm:text-xl lg:text-2xl
                         hover:bg-black transition"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`rounded-full transition
                    w-2 h-2 sm:w-3 sm:h-3
                    ${currentImage === index ? "bg-white" : "bg-gray-400"}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
