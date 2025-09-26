import React from 'react';
import { AlertTriangle, Clock, Shield, CheckCircle } from 'lucide-react';
import content from '../content/site.json';

const Stenslag = () => {
  const c = content.stenslag;

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

        {/* Warning Section */}
        <div className="bg-amber-600 rounded-lg p-6 mb-12">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-8 h-8 text-white flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                {c.warning.title}
              </h3>
              <p className="text-white">
                {c.warning.text}
              </p>
            </div>
          </div>
        </div>

        {/* Service Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={c.heroImage} 
              alt="Stenslag reparation"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Professionel stenslag reparation
            </h2>
            <div className="space-y-4">
              {c.benefits.map((benefit, index) => {
                const icons = [Clock, Shield, CheckCircle];
                const IconComponent = icons[index];
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <IconComponent className="w-6 h-6 text-[#09a9d5] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">{benefit.title}</h4>
                      <p className="text-gray-400">{benefit.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gray-800 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Sådan foregår reparationen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#09a9d5] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-gray-400">{step.description}</p>
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

export default Stenslag;