import React from 'react';
import { Phone, Mail, MapPin, Clock, Car } from 'lucide-react';
import content from '../content/site.json';

const Kontakt = () => {
  const c = content.kontakt;

  return (
    <div className="min-h-screen bg-[#212529] py-16 kontakt-hero-desktop">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {c.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {c.subtitle}
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <Phone className="w-12 h-12 text-[#09a9d5] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Telefon</h3>
            <a 
              href={`tel:${c.phoneLink}`} 
              className="text-[#09a9d5] hover:text-[#0891b2] text-lg font-medium transition-colors"
            >
              {c.phone}
            </a>
            <p className="text-gray-400 mt-2">Ring for akut service</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <Mail className="w-12 h-12 text-[#09a9d5] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Email</h3>
            <a 
              href={`mailto:${c.email}`} 
              className="text-[#09a9d5] hover:text-[#0891b2] transition-colors"
            >
              {c.email}
            </a>
            <p className="text-gray-400 mt-2">Skriv for tilbud</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <MapPin className="w-12 h-12 text-[#09a9d5] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Adresse</h3>
            <div className="text-gray-300">
              {c.addressLines.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <p className="text-gray-400 mt-2">Besøg vores værksted</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <Clock className="w-12 h-12 text-[#09a9d5] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Åbningstider</h3>
            <div className="text-gray-300 text-sm">
              {c.hours.map((schedule, index) => (
                <p key={index}>{schedule.days}: {schedule.hours}</p>
              ))}
            </div>
            <p className="text-gray-400 mt-2">{c.hoursNote}</p>
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
                <p className="text-white font-semibold">{c.addressLines[0]}</p>
                <p className="text-gray-400">{c.addressLines[1]}</p>
                <a 
                  href={content.global.googleMapsUrl}
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
              {c.services.map((service, index) => {
                const icons = [Car, 'S', '☀', '⚙'];
                const icon = icons[index];
                return (
                  <div key={index} className="flex items-center space-x-3">
                    {index === 0 ? (
                      <Car className="w-6 h-6 text-[#09a9d5]" />
                    ) : (
                      <div className="w-6 h-6 bg-[#09a9d5] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{icon}</span>
                      </div>
                    )}
                    <div>
                      <h4 className="text-lg font-semibold text-white">{service.title}</h4>
                      <p className="text-gray-400">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-600 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            {c.emergency.title}
          </h3>
          <p className="text-white mb-6">
            {c.emergency.text}
          </p>
          <a 
            href={`tel:${c.phoneLink}`} 
            className="inline-block bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold text-lg transition-colors"
          >
            {c.emergency.cta}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;