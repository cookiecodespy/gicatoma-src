import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo-gicatoma.png';
import { recolorLogoToBrandBlue } from '../utils/recolorLogo';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [brandLogo, setBrandLogo] = useState(logo);

  useEffect(() => {
    let isMounted = true;
    recolorLogoToBrandBlue(logo)
      .then((processed) => {
        if (isMounted && processed) setBrandLogo(processed);
      })
      .catch(() => undefined);

    return () => {
      isMounted = false;
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Nosotros' },
    { id: 'services', label: 'Servicios' },
    { id: 'clients', label: 'Clientes' },
    { id: 'contact', label: 'Contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 rounded-lg px-2 py-1 hover:bg-slate-50 transition-colors"
          >
            <img src={brandLogo} alt="GICATOMA" className="h-11 w-auto object-contain" />
            <span className="hidden sm:block text-left">
              <strong className="block text-slate-900 tracking-tight">GICATOMA</strong>
              <span className="text-xs text-slate-500">Consultoría y Servicios Profesionales</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden rounded-lg p-2 hover:bg-slate-100"
            aria-label="Abrir menú"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-5">
            <nav className="space-y-2 rounded-xl border border-slate-200 bg-white p-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full rounded-lg px-4 py-3 text-left text-sm font-medium ${
                    currentPage === item.id ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
