import React from 'react';
import { Phone, Mail, MapPin, Clock, Car } from 'lucide-react';

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-[#212529] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Kontakt os
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Vi er klar til at hjælpe dig med alle dine bilrudebehov. 
            Kontakt os i dag for hurtig og professionel service.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <Phone className="w-12 h-12 text-[#09a9d5] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Telefon</h3>
            <a 
              href="tel:24626371" 
              className="text-[#09a9d5] hover:text-[#0891b2] text-lg font-medium transition-colors"
            >
              24 62 63 71
            </a>
            <p className="text-gray-400 mt-2">Ring for akut service</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <Mail className="w-12 h-12 text-[#09a9d5] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Email</h3>
            <a 
              href="mailto:info@autoglasexpress.dk" 
              className="text-[#09a9d5] hover:text-[#0891b2] transition-colors"
            >
              info@autoglasexpress.dk
            </a>
            <p className="text-gray-400 mt-2">Skriv for tilbud</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <MapPin className="w-12 h-12 text-[#09a9d5] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Adresse</h3>
            <div className="text-gray-300">
              <p>Middelfartvej 299</p>
              <p>5200 Odense V</p>
            </div>
            <p className="text-gray-400 mt-2">Besøg vores værksted</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <Clock className="w-12 h-12 text-[#09a9d5] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Åbningstider</h3>
            <div className="text-gray-300 text-sm">
              <p>Man-Fre: 08:00-16:00</p>
              <p>Lør-Søn: Lukket</p>
            </div>
            <p className="text-gray-400 mt-2">Akut service efter aftale</p>
          </div>
        </div>

        {/* Map and Additional Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Map placeholder */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Find os her</h3>
            <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#09a9d5] mx-auto mb-4" />
                <p className="text-white font-semibold">Middelfartvej 299</p>
                <p className="text-gray-400">5200 Odense V</p>
                <a 
                  href="https://www.google.com/maps/place/Autoglas+Express/@55.3924802,10.298997,15z/data=!3m1!4b1!4m6!3m5!1s0x464ce0aa35db047d:0x642de83e9be4afc3!8m2!3d55.3924684!4d10.3092967!16s%2Fg%2F1tkc58pr?entry=ttu&g_ep=EgoyMDI1MDkxNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-[#09a9d5] hover:bg-[#0891b2] text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Se på Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Services Summary */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Vores services</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Car className="w-6 h-6 text-[#09a9d5]" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Autoruder</h4>
                  <p className="text-gray-400">Hurtig udskiftning på 4-5 timer</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#09a9d5] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Stenslag</h4>
                  <p className="text-gray-400">Professionel reparation</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#09a9d5] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">☀</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Solfilm</h4>
                  <p className="text-gray-400">20 års erfaring med 3M film</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#09a9d5] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">⚙</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Kalibrering</h4>
                  <p className="text-gray-400">Sikkerhedssystemer efter forrude</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-600 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Akut bilrudeservice
          </h3>
          <p className="text-white mb-6">
            Har du brug for akut hjælp? Vi tilbyder service uden for normal åbningstid efter aftale.
          </p>
          <a 
            href="tel:24626371" 
            className="inline-block bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold text-lg transition-colors"
          >
            Ring nu: 24 62 63 71
          </a>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;