import React from 'react';
import { Target, PenTool, Code, BookOpen } from 'lucide-react';

// Service type definition
interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Services data configuration
const services: Service[] = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Facebook Ads Strategy",
    description: "Data-driven Facebook advertising campaigns that convert your ideal fitness clients."
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Email Marketing",
    description: "Compelling copywriting that nurtures leads and drives engagement with your audience."
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description: "Custom web solutions that showcase your fitness business and streamline operations."
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Course Creation",
    description: "High-ticket course development that transforms your expertise into scalable digital products."
  }
];

// Services section component
export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">How I Can Help You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition duration-300"
            >
              <div className="text-purple-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}