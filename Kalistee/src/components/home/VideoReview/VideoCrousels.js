import React, { useState, useEffect, useRef } from "react";

const VideoCarousel = ({ videoUrls }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Scroll to the next video
  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Scroll to the previous video
  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Auto-scroll and update current video index
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
    }, 4000); // Change video every 4 seconds

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, [videoUrls.length]);

  useEffect(() => {
    // Scroll to the current video
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: currentIndex * 300, // Scroll to the current video index
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full ">
      {/* Scroll Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
      >
        ◀
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
      >
        ▶
      </button>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex overflow"
        style={{
          scrollSnapType: "x mandatory", // Ensures smooth snap to each video
          scrollBehavior: "smooth", // Smooth scroll behavior
        }}
      >
        {videoUrls.map((url, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-2 relative"
            style={{
              width: "300px", // Set width to 300px
              height: "600px", // Set height to 600px
              transform: index === currentIndex ? "scale(1)" : "scale(0.9)", // Scale the center video larger
              transition: "transform 0.3s ease", // Smooth scaling transition
              scrollSnapAlign: "center", // Ensure the video snaps to center
            }}
          >
            <video
              src={url}
              muted
              loop
              autoPlay // All videos will auto play
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
