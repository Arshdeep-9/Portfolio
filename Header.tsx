import React from 'react';
import { Calendar } from 'lucide-react';
import SocialLinks from './SocialLinks';

// Header component - Main hero section of the portfolio
export default function Header() {
  return (
    <header className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
          {/* Left side - Text content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-100">
              Arshdeep Hundal
            </h1>
            <p className="text-xl mb-6 text-pink-100">
              Digital Marketing Specialist & IT Professional
            </p>
            <p className="text-lg mb-8 text-pink-50/90">
              Helping fitness coaches scale their business through strategic digital marketing, 
              course creation, and tech solutions.
            </p>
            
            {/* Call to action button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://calendly.com/https://calendly.com/b96397709" 
                className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition duration-300 text-center border border-white/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="inline-block w-5 h-5 mr-2" />
                Book a Strategy Call
              </a>
              <SocialLinks className="flex sm:flex-row gap-4 justify-center" />
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full animate-spin-slow border-2 border-dashed border-white/20"></div>
              <div className="absolute inset-4 rounded-full animate-spin-reverse-slow border-2 border-dashed border-white/20"></div>
              
              {/* Profile image container */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
                <img 
                  src="2.jpeg" 
                  alt="Arshdeep Hundal" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}