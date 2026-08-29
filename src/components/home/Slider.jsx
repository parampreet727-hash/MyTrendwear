import { useState, useEffect, useRef } from "react";

const images = ["/banner1.webp", "/hero.webp", "/hero2.webp"];

export default function Slider() {
  const [currentImage, setCurrentImage] = useState(0);
  const touchStartX = useRef(null);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setCurrentImage((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? nextSlide() : prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Aspect ratio: 16:9 on mobile → 21:9 on xl */}
      <div className="relative w-full aspect-video sm:aspect-16/7 xl:aspect-21/8">
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
              loading={index === 0 ? "eager" : "lazy"}
              className="w-full h-full object-cover shrink-0"
            />
          ))}
        </div>

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2
                     bg-black/50 text-white rounded-full
                     w-8 h-8 sm:w-11 sm:h-11
                     text-sm sm:text-xl
                     hover:bg-black/80 transition-all duration-200
                     flex items-center justify-center
                     backdrop-blur-sm border border-white/10"
        >
          ❮
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2
                     bg-black/50 text-white rounded-full
                     w-8 h-8 sm:w-11 sm:h-11
                     text-sm sm:text-xl
                     hover:bg-black/80 transition-all duration-200
                     flex items-center justify-center
                     backdrop-blur-sm border border-white/10"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`rounded-full transition-all duration-300
                          ${
                            currentImage === index
                              ? "w-6 h-2.5 sm:w-8 bg-white"
                              : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
                          }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
