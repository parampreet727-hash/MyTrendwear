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
    <div className="hidden sm:block relative w-full overflow-hidden">
      {/* Aspect ratio wrapper: 2:1 on mobile → 16:6 on md → full viewport height on xl */}
      <div className="relative w-full aspect-2/1 sm:aspect-16/7 md:aspect-16/6 xl:aspect-auto xl:h-screen">
        {/* Slider track */}
        <div
          className="flex w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
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
          aria-label="Previous slide"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2
                     bg-black/50 text-white rounded-full
                     w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12
                     text-sm sm:text-xl lg:text-2xl
                     hover:bg-black/80 transition"
        >
          ❮
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2
                     bg-black/50 text-white rounded-full
                     w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12
                     text-sm sm:text-xl lg:text-2xl
                     hover:bg-black/80 transition"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-2 sm:bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`rounded-full transition-all duration-300
                          w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3
                          ${currentImage === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
