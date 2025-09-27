import React, { useEffect, useState } from 'react';

const InsuranceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const insuranceLogos = [
    { name: 'Insurance 1', logo: '/f8.png' },
    { name: 'Insurance 2', logo: '/f7.png' },
    { name: 'Insurance 3', logo: '/f6.png' },
    { name: 'Insurance 4', logo: '/f5.png' },
    { name: 'Insurance 5', logo: '/f4.png' },
    { name: 'Insurance 6', logo: '/f3.png' },
    { name: 'Insurance 7', logo: '/f2.png' },
    { name: 'Insurance 8', logo: '/f1.png' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === insuranceLogos.length - 4 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [insuranceLogos.length]);

  return (
    <div className="w-full max-w-4xl mx-auto overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ 
          transform: `translateX(-${currentIndex * 25}%)`,
          width: `${insuranceLogos.length * 25}%`
        }}
      >
        {insuranceLogos.map((insurance, index) => (
          <div 
            key={index}
            className="flex-shrink-0 w-1/4 px-4"
          >
            <div className="bg-white rounded-lg p-4 h-20 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={insurance.logo} 
                alt={`${insurance.name} forsikring`}
                className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: insuranceLogos.length - 3 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === index ? 'bg-[#09a9d5]' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default InsuranceCarousel;