import React from 'react';
import { Shield, Clock, Award, CheckCircle } from 'lucide-react';

const Autoruder = () => {
  const features = [
    {
      icon: Clock,
      title: '4-5 timers service',
      description: 'Hurtig udskiftning af bilruder, så du kan komme videre samme dag'
    },
    {
      icon: Shield,
      title: '2 års garanti',
      description: 'Fuld garanti på både bilruder og korrekt montering'
    },
    {
      icon: Award,
      title: 'Professionel kvalitet',
      description: 'Over 20 års erfaring med bilrudeservice'
    }
  ];

  return (
    <div className="min-h-screen bg-[#212529] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Autoruder
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professionel udskiftning af bilruder med hurtig service og høj kvalitet. 
            Vi gør biler med airbags køreklar i løbet af 4-5 timer.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-gray-800 rounded-lg p-6 text-center">
                <IconComponent className="w-12 h-12 text-[#09a9d5] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Service Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Hvorfor vælge os til din bilrude?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#09a9d5] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Hurtig service</h4>
                  <p className="text-gray-400">
                    Vi kan udskifte din bilrude og gøre biler med airbags køreklar på 4-5 timer
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#09a9d5] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Kvalitetsruder</h4>
                  <p className="text-gray-400">
                    Vi bruger kun originale eller tilsvarende kvalitetsruder fra anerkendte leverandører
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#09a9d5] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Forsikringsdækning</h4>
                  <p className="text-gray-400">
                    Glasskader er ofte dækket af din kaskoforsikring - vi hjælper med papirarbejdet
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#09a9d5] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Gratis kundebil</h4>
                  <p className="text-gray-400">
                    Ved udskiftning af forrude tilbyder vi gratis kundebil, så du kan komme rundt
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="/Bjarne_Larsen.png" 
              alt="Professionel bilrudeudskiftning"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            Har du brug for en ny bilrude?
          </h3>
          <p className="text-gray-300 mb-8">
            Kontakt os i dag for et uforpligtende tilbud
          </p>
          <a 
            href="tel:24626371" 
            className="inline-block bg-[#09a9d5] hover:bg-[#0891b2] text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors"
          >
            Ring nu: 24 62 63 71
          </a>
        </div>
      </div>
    </div>
  );
};

export default Autoruder;