import React from 'react';
import { Sun, Shield, Award, CheckCircle } from 'lucide-react';
import content from '../content/site.json';

const Solfilm = () => {
  const c = content.solfilm;
  const benefits = [
    { icon: Sun, ...c.benefits[0] },
    { icon: Shield, ...c.benefits[1] },
    { icon: Award, ...c.benefits[2] }
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
              {c.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#09a9d5] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                    <p className="text-gray-400">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <img 
              src={c.heroImage} 
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
            {c.types.map((type, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-white mb-3">{type.title}</h4>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <ul className="text-gray-400 space-y-1">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
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

export default Solfilm;