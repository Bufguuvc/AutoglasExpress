import React from 'react';
import { Sun, Shield, Award, CheckCircle } from 'lucide-react';

const Solfilm = () => {
  const benefits = [
    {
      icon: Sun,
      title: 'UV-beskyttelse',
      description: 'Beskytter mod skadelige UV-stråler og reducerer varme i bilen'
    },
    {
      icon: Shield,
      title: 'Privatliv',
      description: 'Øget privatliv og sikkerhed med diskret tonet glas'
    },
    {
      icon: Award,
      title: '3M Kvalitet',
      description: 'Vi bruger kun solfilm fra 3M med lang holdbarhed'
    }
  ];

  return (
    <div className="min-h-screen bg-[#212529] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Solfilm
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professionel montering af solfilm med 20 års erfaring. Vi bruger kun 
            kvalitetsfilm fra 3M der har lang holdbarhed og ikke falmer.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-gray-800 rounded-lg p-6 text-center">
                <IconComponent className="w-12 h-12 text-[#09a9d5] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Hvorfor vælge vores solfilm?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#09a9d5] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">20 års erfaring</h4>
                  <p className="text-gray-400">
                    Vi har monteret solfilm i over 20 år og kender alle tricks
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#09a9d5] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">3M Kvalitet</h4>
                  <p className="text-gray-400">
                    Vi bruger kun solfilm fra 3M - verdens førende producent
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#09a9d5] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Lang holdbarhed</h4>
                  <p className="text-gray-400">
                    Vores solfilm falmer ikke og holder i mange år
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#09a9d5] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Lovlig toning</h4>
                  <p className="text-gray-400">
                    Vi sørger for at solfilmen overholder danske regler
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="/Solfilm.png" 
              alt="Professionel solfilm montering"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Types Section */}
        <div className="bg-gray-800 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Forskellige typer solfilm
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-white mb-3">Standard solfilm</h4>
              <p className="text-gray-300 mb-4">
                Grundlæggende UV-beskyttelse og reduceret varme. Perfekt til daglig brug.
              </p>
              <ul className="text-gray-400 space-y-1">
                <li>• UV-beskyttelse op til 99%</li>
                <li>• Reducerer varme med 35-50%</li>
                <li>• Forskellige tonegrader</li>
              </ul>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-white mb-3">Premium solfilm</h4>
              <p className="text-gray-300 mb-4">
                Avanceret teknologi med maksimal komfort og beskyttelse.
              </p>
              <ul className="text-gray-400 space-y-1">
                <li>• UV-beskyttelse op til 99.9%</li>
                <li>• Reducerer varme med 60-80%</li>
                <li>• Ingen interferens med elektronik</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Interesseret i solfilm?
          </h3>
          <p className="text-gray-300 mb-8">
            Kontakt os for et uforpligtende tilbud på solfilm til din bil
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

export default Solfilm;