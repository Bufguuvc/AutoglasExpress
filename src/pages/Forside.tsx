import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Shield, Sun, Settings, Wrench, CheckCircle } from 'lucide-react';
import InsuranceCarousel from '../components/InsuranceCarousel';
import content from '../content/site.json';

const Forside = () => {
  const c = content.forside;
  const services = c.services;

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-600 hover:bg-blue-500 border-blue-500',
      green: 'bg-green-600 hover:bg-green-500 border-green-500',
      amber: 'bg-amber-600 hover:bg-amber-500 border-amber-500',
      purple: 'bg-purple-600 hover:bg-purple-500 border-purple-500'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-[#212529]">
      {/* Hero Section */}
      <section className="relative h-screen md:h-[95vh] flex flex-col justify-center items-center overflow-hidden video-background" style={{ marginTop: '-1rem' }}>
        {/* Background Video/Image Container */}
        <div className="absolute inset-0 w-full h-full">
          {/* Fallback Image - Always present */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-500"
            style={{ 
              backgroundImage: 'url(/bjarne_larsen.png)',
              filter: 'contrast(1.1) brightness(0.9)'
            }}
          ></div>
          
          {/* Primary Video Element */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover transition-opacity duration-500"
            style={{ 
              filter: 'contrast(1.1) brightness(0.9)',
              objectPosition: 'center center'
            }}
            onLoadedData={(e) => {
              // Hide fallback when video loads successfully
              const fallback = e.currentTarget.parentElement?.querySelector('div') as HTMLElement;
              if (fallback) fallback.style.opacity = '0';
            }}
            onError={(e) => {
              // Hide broken video and show fallback
              e.currentTarget.style.display = 'none';
              console.warn('Video failed to load, using fallback image');
            }}
            aria-label="Autoglas Express Rudeskift Service Video"
          >
            <source src="/Rudeskift_video.mp4" type="video/mp4" />
            
            {/* Fallback for browsers that don't support video */}
            <img 
              src="/bjarne_larsen.png" 
              alt="Autoglas Express Service" 
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#212529]/60 via-[#212529]/70 to-[#212529]/80"></div>
        </div>
        
        {/* Company Logo Headline - Vertically Centered */}
        <div className="relative z-10 text-center flex flex-col items-center justify-center">
          <h1 className="relative z-[1] m-0 leading-none text-[clamp(40px,6vw,84px)] font-bold text-white mb-4 hero-title-mobile">
            <span>{c.heroTitle.split('E')[0]}E</span><span className="text-[#09a9d5]">x</span><span>press</span>
          </h1>
          <div className="mt-4 text-center">
            <a 
              href={content.global.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline text-xl font-normal hover:text-[#09a9d5] transition-colors"
            >
              {c.address}
            </a>
          </div>
          
          {/* Call-to-Action Button */}
          <div className="mt-12 mb-16 sm:mb-12 text-center flex justify-center">
            <a 
              href={`tel:${c.phone}`} 
              className="inline-block bg-[#09a9d5] hover:bg-[#09a9d5] hover:underline text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors"
            >
              {c.cta}
            </a>
          </div>
        </div>
        
        {/* Two horizontal items with checkmarks - positioned at bottom */}
        <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 z-10 w-full mobile-hero-features">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 lg:justify-end lg:pr-16 mobile-features-container">
              {c.usp.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-8 h-8 text-[#09a9d5] flex-shrink-0" />
                    <div className="text-white font-bold text-base sm:text-lg">{item.title}</div>
                  </div>
                  <div className="text-white text-sm sm:text-base font-normal">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CHANGE 4: Removed "Vores Services" heading and subtext */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Insurance collaboration text */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              {c.insuranceText.split('alle')[0]}<span className="underline">alle</span>{c.insuranceText.split('alle')[1]}
            </h2>
            
            {/* Insurance Carousel */}
            <InsuranceCarousel />
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-full">
            {services.map((service) => {
              return (
                <Link
                  key={service.path}
                  to={service.path}
                  className="group flex-1"
                >
                  <div className="bg-gray-800 rounded-lg overflow-hidden h-full border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 flex flex-col">
                    {/* Image at top */}
                    <div className="relative h-56 overflow-hidden flex-shrink-0">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                    </div>
                    
                    {/* Content below image */}
                    <div className="p-6 pt-4 flex-grow flex flex-col justify-between">
                      {/* Service title below image */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-semibold text-white group-hover:text-[#09a9d5] transition-colors text-center">
                          {service.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-400 text-lg leading-relaxed flex-grow text-center mt-6">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Car Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image - Centered */}
            <div className="order-2 lg:order-1">
              <img 
                src="/kundebilny.jpg" 
                alt="Gratis kundebil ved forrude udskiftning"
                className="w-full rounded-lg shadow-lg mx-auto"
              />
            </div>
            
            {/* Content - Centered */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-bold text-white mb-6 text-center lg:text-left">
                {c.customerCarSection.title}
              </h2>
              <div className="text-white text-lg leading-relaxed space-y-2 text-center lg:text-left">
                {c.customerCarSection.details.map((detail, index) => (
                  <p key={index}>{detail}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Forside;