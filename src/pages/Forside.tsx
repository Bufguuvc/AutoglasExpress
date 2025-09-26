import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Shield, Sun, Settings, Wrench, CheckCircle } from 'lucide-react';
import InsuranceCarousel from '../components/InsuranceCarousel';

const Forside = () => {
  const services = [
    {
      title: 'Autoruder',
      description: 'Idag er vi i stand til at udskifte bilruder og gøre biler med airbags køreklar i løbet af 4-5 timer, så du hurtigt og effektivt kan komme videre.',
      icon: Car,
      path: '/autoruder',
      color: 'blue',
      image: '/Bjarne_Larsen.png'
    },
    {
      title: 'Stenslag',
      description: 'Har du fået en skade på en af dine ruder i bilen, så kontakt os straks da sandsynligheden for en succesfuld reparation stiger meget, hvis der ikke er kommet snavs i stenslaget.',
      icon: Shield,
      path: '/stenslag',
      color: 'green',
      image: '/Stenslag.jpg'
    },
    {
      title: 'Solfilm',
      description: 'Autoglas Express har 20 års erfaring i montering af solfilm som har en lang holdbarhed og ikke falmer. Vi har valgt kun at bruge solfilm fra 3M.',
      icon: Sun,
      path: '/solfilm',
      color: 'amber',
      image: '/Solfilm.png'
    },
    {
      title: 'Kalibrering',
      description: 'Hos Autoglas Express har vi det professionelle udstyr der skal til, for at du kan være sikker på, at alt udstyr fungerer perfekt, også når du har fået skiftet din forrude.',
      icon: Settings,
      path: '/kalibrering',
      color: 'purple',
      image: '/Kalibrering 2.png'
    }
  ];

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
      <section className="relative h-screen md:h-[95vh] flex flex-col justify-center items-center overflow-hidden" style={{ marginTop: '-1rem' }}>
        {/* Background Video/Image Container */}
        <div className="absolute inset-0 w-full h-full">
          {/* Fallback Image - Always present */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-500"
            style={{ 
              backgroundImage: 'url(/Bjarne_Larsen.png)',
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
            <source src="/Rudeskift.mp4" type="video/mp4" />
            
            {/* Fallback for browsers that don't support video */}
            <img 
              src="/Bjarne_Larsen.png" 
              alt="Autoglas Express Service" 
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#212529]/60 via-[#212529]/70 to-[#212529]/80"></div>
        </div>
        
        {/* Company Logo Headline - Vertically Centered */}
        <div className="relative z-10 text-center flex flex-col items-center justify-center">
          <h1 className="relative z-[1] m-0 leading-none text-[clamp(40px,6vw,84px)] font-bold text-white mb-4 hero-title-mobile">
            <span>Autoglas E</span><span className="text-[#09a9d5]">x</span><span>press</span>
          </h1>
          <div className="mt-4 text-center">
            <a 
              href="https://www.google.com/maps/place/Autoglas+Express/@55.3924802,10.298997,15z/data=!3m1!4b1!4m6!3m5!1s0x464ce0aa35db047d:0x642de83e9be4afc3!8m2!3d55.3924684!4d10.3092967!16s%2Fg%2F1tkc58pr?entry=ttu&g_ep=EgoyMDI1MDkxNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline text-xl font-normal hover:text-[#09a9d5] transition-colors"
            >
              Middelfartvej 299, 5200 Odense V
            </a>
          </div>
          
          {/* Call-to-Action Button */}
          <div className="mt-12 mb-16 sm:mb-12 text-center flex justify-center">
            <a 
              href="tel:24626371" 
              className="inline-block bg-[#09a9d5] hover:bg-[#09a9d5] hover:underline text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors"
            >
              Ring nu
            </a>
          </div>
        </div>
        
        {/* Two horizontal items with checkmarks - positioned at bottom */}
        <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 z-10 w-full mobile-hero-features">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 lg:justify-end lg:pr-16 mobile-features-container">
              {/* Item 1 */}
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-8 h-8 text-[#09a9d5] flex-shrink-0" />
                  <div className="text-white font-bold text-base sm:text-lg">2 års garanti</div>
                </div>
                <div className="text-white text-sm sm:text-base font-normal">På bilruder og korrekt montering</div>
              </div>
              
              {/* Item 2 */}
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-8 h-8 text-[#09a9d5] flex-shrink-0" />
                  <div className="text-white font-bold text-base sm:text-lg">Dækket af din forsikring</div>
                </div>
                <div className="text-white text-sm sm:text-base font-normal">Glas­skader dækket af forsikringen (ved kasko)</div>
              </div>
              
              {/* Item 3 - New */}
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-8 h-8 text-[#09a9d5] flex-shrink-0" />
                  <div className="text-white font-bold text-base sm:text-lg">Gratis stenslag</div>
                </div>
                <div className="text-white text-sm sm:text-base font-normal">Ofte betalt af forsikringen, hvis du har glasforsikring</div>
              </div>
              
              {/* Item 4 - Gratis kundebil */}
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-8 h-8 text-[#09a9d5] flex-shrink-0" />
                  <div className="text-white font-bold text-base sm:text-lg">Gratis kundebil</div>
                </div>
                <div className="text-white text-sm sm:text-base font-normal">Ved udskiftning af din forrude</div>
              </div>
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
              Vi samarbejder med <span className="underline">alle</span> forsikringsselskaber
            </h2>
            
            {/* Insurance Carousel */}
            <InsuranceCarousel />
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-full">
            {services.map((service) => {
              const IconComponent = service.icon;
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
                src="/kundebilNy.jpg" 
                alt="Gratis kundebil ved forrude udskiftning"
                className="w-full rounded-lg shadow-lg mx-auto"
              />
            </div>
            
            {/* Content - Centered */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-bold text-white mb-6 text-center lg:text-left">
                Gratis kundebil ved udskiftning af din forrude.
              </h2>
              <div className="text-white text-lg leading-relaxed space-y-2 text-center lg:text-left">
                <p>Kundebil er altid tanket og rengjort ved udlejning.</p>
                <p>Det eneste du betaler er 1 kr pr km du kører i bilen som dækker brændstof.</p>
                <p>Ved kørsel over 100 km giver du 1.5 kr pr km.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Forside;