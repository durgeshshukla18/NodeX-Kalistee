import React, { useEffect } from 'react';

const Marque2 = () => {
  // Injecting custom CSS for marquee animation directly into the document
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes marquee {
        0% {
          transform: translateX(100%);
          opacity: 1;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateX(-100%);
          opacity: 1;
        }
      }
      .animate-marquee {
        animation: marquee 20s linear infinite;
        white-space: nowrap; /* Ensure text stays in a single line */
      }
    `;
    document.head.appendChild(style);

    // Cleanup the style tag when component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-yellow-400 ">
      {/* Marquee content */}
      <div className="flex animate-marquee font-bodyFont py-2">
        {/* Apply Tailwind semibold font to each span */}
        <span className="px-12 text-xl text-gray-800 font-semibold">People powered.</span>
        <span className="px-12 text-xl text-gray-800 font-semibold">Tradition rooted.</span>
        <span className="px-12 text-xl text-gray-800 font-semibold">Expert backed.</span>
        <span className="px-12 text-xl text-gray-800 font-semibold">Science perfected.</span>

        {/* Apply Tailwind semibold font to each span */}
        <span className="px-12 text-xl text-gray-800 font-semibold">People powered.</span>
        <span className="px-12 text-xl text-gray-800 font-semibold">Tradition rooted.</span>
        <span className="px-12 text-xl text-gray-800 font-semibold">Expert backed.</span>
        <span className="px-12 text-xl text-gray-800 font-semibold">Science perfected.</span>

        {/* Apply Tailwind semibold font to each span */}
        <span className="px-12 text-xl text-gray-800 font-semibold">People powered.</span>
        <span className="px-12 text-xl text-gray-800 font-semibold">Tradition rooted.</span>
        <span className="px-12 text-xl text-gray-800 font-semibold">Expert backed.</span>
        <span className="px-12 text-xl text-gray-800 font-semibold">Science perfected.</span>

        {/* Apply Tailwind semibold font to each span */}
        <span className="px-12 text-xl text-gray-800 font-semibold">People powered.</span>
        <span className="px-12 text-xl text-gray-800 font-semibold">Tradition rooted.</span>
        <span className="px-12 text-xl text-gray-800 font-semibold">Expert backed.</span>
        <span className="px-12 text-xl text-gray-800 font-semibold">Science perfected.</span>

        

        
      </div>
    </div>
  );
};

export default Marque2;