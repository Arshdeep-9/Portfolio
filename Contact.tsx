import React from 'react';
import { Calendar } from 'lucide-react';
import SocialLinks from './SocialLinks';

// Contact section component
export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Let's Connect</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-8 text-gray-300">
            Ready to transform your fitness business with proven digital marketing strategies? 
            Schedule a call to discuss how we can help you reach your goals.
          </p>
          <div className="flex flex-col items-center gap-8">
            <a
              href="https://calendly.com/https://calendly.com/b96397709"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full hover:from-purple-500 hover:to-pink-400 transition duration-300 text-lg font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="w-6 h-6" />
              Schedule a Strategy Call
            </a>
            <div className="mt-4">
              <p className="text-gray-400 mb-4">Or connect with me on social media:</p>
              <SocialLinks className="flex gap-6 justify-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}