import React from 'react';
import { AlertTriangle, Clock, Shield, CheckCircle } from 'lucide-react';

const Stenslag = () => {
  return (
    <div className="min-h-screen bg-[#212529] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stenslag Reparation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hurtig og professionel reparation af stenslag. Kontakt os straks for den bedste 
            chance for en succesfuld reparation.
          </p>
        </div>

        {/* Warning Section */}
        <div className="bg-amber-600 rounded-lg p-6 mb-12">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-8 h-8 text-white flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Vigtigt: Kontakt os straks!
              </h3>
              <p className="text-white">
                Sandsynligheden for en succesfuld reparation af stenslag stiger betydeligt, 
                hvis der ikke er kommet snavs og fugt ind i stenslaget. Jo hurtigere du 
                kontakter os, jo bedre er chancerne for reparation.
              </p>
            </div>
          </div>
        </div>

        {/* Service Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="/Stenslag.jpg" 
              alt="Stenslag reparation"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Professionel stenslag reparation
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-[#09a9d5] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Hurtig service</h4>
                  <p className="text-gray-400">
                    Reparation af stenslag tager typisk 30-60 minutter
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-[#09a9d5] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Kvalitetsgaranti</h4>
                  <p className="text-gray-400">
                    Vi giver garanti på vores stenslag reparationer
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#09a9d5] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Forsikringsdækning</h4>
                  <p className="text-gray-400">
                    Stenslag reparation er ofte gratis med glasforsikring
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gray-800 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Sådan foregår reparationen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-[#09a9d5] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Vurdering</h4>
              <p className="text-gray-400">
                Vi vurderer stenslaget og afgør om det kan repareres
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#09a9d5] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Reparation</h4>
              <p className="text-gray-400">
                Professionel reparation med specialudstyr og materialer
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#09a9d5] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Færdig</h4>
              <p className="text-gray-400">
                Din bil er klar til brug efter 30-60 minutter
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Har du fået stenslag?
          </h3>
          <p className="text-gray-300 mb-8">
            Ring til os med det samme for den bedste chance for reparation
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

export default Stenslag;