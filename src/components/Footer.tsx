import React from 'react';
import { Logo } from './Navbar';
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-ink border-t border-white/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-6 text-white/50 leading-relaxed">
              Empowering the energy transition through strategic partnership and innovative infrastructure.
            </p>
            <div className="flex gap-4 mt-8">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-volt hover:border-volt transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              {['Solutions', 'Sectors', 'About', 'Contact', 'Careers'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/50 hover:text-volt transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/50">
                <Mail size={18} className="text-volt" />
                Info@voltspark.be
              </li>
              <li className="flex items-center gap-3 text-white/50">
                <Phone size={18} className="text-volt" />
                050 25 02 40
              </li>
              <li className="flex items-start gap-3 text-white/50">
                <MapPin size={18} className="text-volt mt-1" />
                <div>
                  Schatting 42F, <br />
                  8210 Zedelgem
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Newsletter</h4>
            <p className="text-white/50 mb-6 text-sm">Stay updated with the latest in energy transition.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-volt transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-volt text-ink px-4 rounded-full text-xs font-bold hover:bg-white transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/30 font-medium uppercase tracking-widest">
          <div>© 2026 Voltspark. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
