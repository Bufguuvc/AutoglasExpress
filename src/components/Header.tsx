import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import content from '../content/site.json';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Forside', path: '/' },
    { name: 'Autoruder', path: '/autoruder' },
    { name: 'Stenslag', path: '/stenslag' },
    { name: 'Solfilm', path: '/solfilm' },
    { name: 'Kalibrering', path: '/kalibrering' },
    { name: 'Kontakt', path: '/kontakt' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-[#212529] border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">
              Autoglas E<span className="text-[#09a9d5]">x</span>press
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-[#09a9d5] border-b-2 border-[#09a9d5]'
                    : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-gray-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Phone Number - Desktop */}
          <div className="hidden md:flex items-center">
            <a
              href={`tel:${content.global.phoneLink}`}
              className="flex items-center space-x-2 bg-[#09a9d5] hover:bg-[#0891b2] text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">{content.global.phone}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#212529] border-t border-gray-700">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-[#09a9d5] bg-gray-800'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Phone Number - Mobile */}
              <div className="px-3 py-2">
                <a
                  href={`tel:${content.global.phoneLink}`}
                  className="flex items-center justify-center space-x-2 bg-[#09a9d5] hover:bg-[#0891b2] text-white px-4 py-2 rounded-lg transition-colors w-full"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">{content.global.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;