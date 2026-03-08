import React from 'react';
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-paper border-t border-ink/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-ink">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2">
              <img 
                src="/cura-logo.jpg" 
                alt="Cura Energy Logo" 
                className="h-10 w-auto mix-blend-multiply" 
              />
            </a>
            <p className="mt-6 text-ink/60 leading-relaxed font-medium">
              Wij versnellen de energietransitie door strategisch partnerschap en innovatieve infrastructuur.
            </p>
            <div className="flex gap-4 mt-8">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center text-ink/60 hover:text-kinetic hover:border-kinetic transition-all bg-white hover:bg-kinetic/5">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Navigatie</h4>
            <ul className="space-y-4 font-medium">
              {[
                { tag: 'Diensten', id: 'solutions' },
                { tag: 'Sectoren', id: 'sectors' },
                { tag: 'Over Ons', id: 'about' },
                { tag: 'Contact', id: 'contact' },
                { tag: 'Vacatures', id: 'careers' }
              ].map((link) => (
                <li key={link.tag}>
                  <a href={`#${link.id}`} className="text-ink/60 hover:text-kinetic transition-colors">{link.tag}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 font-medium">
              <li className="flex items-center gap-3 text-ink/60">
                <Mail size={18} className="text-kinetic" />
                info@cura-energy.be
              </li>
              <li className="flex items-center gap-3 text-ink/60">
                <Phone size={18} className="text-kinetic" />
                050 25 02 40
              </li>
              <li className="flex items-start gap-3 text-ink/60">
                <MapPin size={18} className="text-kinetic mt-1" />
                <div>
                  Schatting 42F, <br />
                  8210 Zedelgem
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Nieuwsbrief</h4>
            <p className="text-ink/60 mb-6 text-sm font-medium">Blijf op de hoogte van de laatste ontwikkelingen.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="E-mailadres"
                className="w-full bg-white border border-ink/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-kinetic transition-colors shadow-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-kinetic text-white px-4 rounded-full text-xs font-bold hover:bg-kinetic-dark transition-colors shadow-sm">
                Inschrijven
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-ink/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-ink/40 text-sm">
          <div>© 2026 Cura Energy. Alle rechten voorbehouden.</div>
          <div className="flex gap-6 border-b-2 border-transparent">
            <a href="#" className="hover:text-kinetic transition-colors">Privacybeleid</a>
            <a href="#" className="hover:text-kinetic transition-colors">Algemene Voorwaarden</a>
            <a href="#" className="hover:text-kinetic transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
