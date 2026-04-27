import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { schoolData } from '../../content/schoolData';
import { Button } from '../shared/Button';
import { useState } from 'react';
import { navigateTo } from '../../utils/navigation';

export const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  const handleNavClick = (path: string) => {
    navigateTo(path);
  };

  return (
    <footer className="bg-gradient-to-br from-navy via-navy-dark to-maroon-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-navy/40 shadow-sm">
                <img
                  src="/LIS.png"
                  alt={`${schoolData.schoolInfo.name} logo`}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-bold">{schoolData.schoolInfo.name}</h3>
                <p className="font-poppins text-sm text-white/80">{schoolData.schoolInfo.tagline}</p>
              </div>
            </div>
            <p className="font-inter text-white/80 leading-relaxed mb-6">{schoolData.footer.about}</p>
            <div className="flex gap-4">
              {schoolData.footer.social.map((social) => {
                const Icon = Icons[social.icon as keyof typeof Icons] as React.FC<{ className?: string }>;
                return (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2 rounded-lg bg-white/10 hover:bg-gold transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-poppins text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {schoolData.footer.quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNavClick(link.path)}
                    className="font-inter text-white/80 hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <span className="font-inter text-white/80">
                  {schoolData.schoolInfo.address.street}, {schoolData.schoolInfo.address.mandal},{' '}
                  {schoolData.schoolInfo.address.district} - {schoolData.schoolInfo.address.pincode}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold" />
                <div className="font-inter text-white/80">
                  {schoolData.schoolInfo.contact.phones.map((phone, index) => (
                    <div key={index}>
                      <a href={`tel:${phone}`} className="hover:text-gold transition-colors">
                        {phone}
                      </a>
                    </div>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold" />
                <a
                  href={`mailto:${schoolData.schoolInfo.contact.email}`}
                  className="font-inter text-white/80 hover:text-gold transition-colors"
                >
                  {schoolData.schoolInfo.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* <div>
            <h4 className="font-poppins text-lg font-semibold mb-6">Newsletter</h4>
            <p className="font-inter text-white/80 mb-4">
              Subscribe to receive updates and news from The Lighthouse School.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold transition-colors"
              />
              <Button variant="primary" size="sm" className="w-full">
                Subscribe
              </Button>
            </form>
          </div> */}
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-inter text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} {schoolData.schoolInfo.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button className="font-inter text-white/60 hover:text-gold text-sm transition-colors">
                Privacy Policy
              </button>
              <button className="font-inter text-white/60 hover:text-gold text-sm transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
