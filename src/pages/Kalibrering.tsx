import React from 'react';
import { Settings, Shield, Award, CheckCircle, AlertTriangle } from 'lucide-react';

const Kalibrering = () => {
  return (
    <div className="min-h-screen bg-[#212529] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Kalibrering
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professionel kalibrering af sikkerhedssystemer efter forrude udskiftning. 
            Vi har det rette udstyr til at sikre alt fungerer perfekt.
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-amber-600 rounded-lg p-6 mb-12">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-8 h-8 text-white flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Vigtigt efter forrude udskiftning
              </h3>
              <p className="text-white">
                Moderne biler har avancerede sikkerhedssystemer der kræver kalibrering 
                efter forrude udskiftning. Dette sikrer at alle systemer fungerer korrekt 
                og din sikkerhed ikke kompromitteres.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="/Kalibrering 2.png" 
              alt="Professionel kalibrering af bilens sikkerhedssystemer"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Hvad kalibrerer vi?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#09a9d5] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">ADAS systemer</h4>
                  <p className="text-gray-400">
                    Advanced Driver Assistance Systems - alle moderne sikkerhedssystemer
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#09a9d5] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Lane Keeping Assist</h4>
                  <p className="text-gray-400">
                    Vognbaneassistent der hjælper med at holde bilen i sporet
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#09a9d5] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Collision Warning</h4>
                  <p className="text-gray-400">
                    Kollisionsadvarsel der advarer om forhindringer foran
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#09a9d5] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Adaptive Cruise Control</h4>
                  <p className="text-gray-400">
                    Adaptiv fartpilot der tilpasser hastigheden efter trafikken
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Equipment Section */}
        <div className="bg-gray-800 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Professionelt udstyr
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Settings className="w-12 h-12 text-[#09a9d5] mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Avanceret udstyr</h4>
              <p className="text-gray-400">
                Vi har investeret i det nyeste kalibreringudstyr fra førende leverandører
              </p>
            </div>
            
            <div className="text-center">
              <Shield className="w-12 h-12 text-[#09a9d5] mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Certificeret proces</h4>
              <p className="text-gray-400">
                Vores kalibrering følger producentens specifikationer nøjagtigt
              </p>
            </div>
            
            <div className="text-center">
              <Award className="w-12 h-12 text-[#09a9d5] mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Kvalitetsgaranti</h4>
              <p className="text-gray-400">
                Vi garanterer at alle systemer fungerer perfekt efter kalibrering
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Kalibrerings processen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-[#09a9d5] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Diagnose</h4>
              <p className="text-gray-400">
                Vi scanner bilens systemer for at identificere hvad der skal kalibreres
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#09a9d5] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Opsætning</h4>
              <p className="text-gray-400">
                Specialudstyr opstilles præcist efter producentens anvisninger
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#09a9d5] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Kalibrering</h4>
              <p className="text-gray-400">
                Alle relevante systemer kalibreres med præcision
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#09a9d5] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Test</h4>
              <p className="text-gray-400">
                Grundig test sikrer at alle systemer fungerer perfekt
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Har du brug for kalibrering?
          </h3>
          <p className="text-gray-300 mb-8">
            Kontakt os for professionel kalibrering efter forrude udskiftning
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

export default Kalibrering;