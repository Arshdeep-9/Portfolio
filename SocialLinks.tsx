import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

// Props interface for the SocialLinks component
interface SocialLinksProps {
  className?: string;
}

// Social media links component with icons
export default function SocialLinks({ className = '' }: SocialLinksProps) {
  // Social media profiles configuration
  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      href: 'https://www.facebook.com/share/19Z6farTJR/',
      label: 'Facebook'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'www.linkedin.com/in/arshdeephundal',
      label: 'LinkedIn'
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://www.instagram.com/arshdeephundal_/profilecard/?igsh=MTc2ZWlocWNybmhncA==',
      label: 'Instagram'
    }
  ];

  return (
    <div className={className}>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}