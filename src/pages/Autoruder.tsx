import React from 'react';
import { Shield, Clock, Award, CheckCircle } from 'lucide-react';
import content from '../content/site.json';

const Autoruder = () => {
  const c = content.autoruder;
  const features = [
    { icon: Clock, ...c.features[0] },
    { icon: Shield, ...c.features[1] },
    { icon: Award, ...c.features[2] }
  ];

  return (
    <div className="min-h-screen bg-[#212529] py-16">
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
              {c.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#09a9d5] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">{benefit.title}</h4>
                    <p className="text-gray-400">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <img 
              src={c.heroImage} 
              alt="Professionel bilrudeudskiftning"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            {c.cta.title}
          </h3>
          <p className="text-gray-300 mb-8">
            {c.cta.subtitle}
          </p>
          <a 
            href={`tel:${content.global.phoneLink}`} 
            className="inline-block bg-[#09a9d5] hover:bg-[#0891b2] text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors"
          >
            Ring nu: {content.global.phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Autoruder;