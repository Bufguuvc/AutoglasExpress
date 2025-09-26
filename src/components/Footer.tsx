import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Autoglas E<span className="text-[#09a9d5]">x</span>press
            </h3>
            <p className="text-gray-400 mb-4">
              Professionel bilrudeservice med over 20 års erfaring. 
              Vi tilbyder hurtig og pålidelig service til konkurrencedygtige priser.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span className="font-semibold">CVR:</span>
              <span>12345678</span>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#09a9d5]" />
                <a href="tel:24626371" className="hover:text-[#09a9d5] transition-colors">
                  24 62 63 71
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#09a9d5]" />
                <a href="mailto:info@autoglasexpress.dk" className="hover:text-[#09a9d5] transition-colors">
                  info@autoglasexpress.dk
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#09a9d5] mt-1" />
                <div>
                  <p>Middelfartvej 299</p>
                  <p>5200 Odense V</p>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Åbningstider</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[#09a9d5]" />
                <div>
                  <p className="font-medium">Mandag - Fredag</p>
                  <p className="text-gray-400">08:00 - 16:00</p>
                </div>
              </div>
              <div className="ml-8">
                <p className="font-medium">Lørdag - Søndag</p>
                <p className="text-gray-400">Lukket</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-300">
                <strong>Akut service:</strong> Ring for aftale uden for normal åbningstid
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Autoglas Express. Alle rettigheder forbeholdes.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privatlivspolitik
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Handelsbetingelser
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;