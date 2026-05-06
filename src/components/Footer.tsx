import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">GICATOMA</h3>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Firma corporativa especializada en auditoría, consultoría y optimización empresarial.
            </p>
            <div className="mt-5 flex gap-3">
              {[Instagram, Linkedin, Facebook].map((Icon, idx) => (
                <span key={idx} className="rounded-lg bg-slate-800 p-2 text-slate-300">
                  <Icon className="h-5 w-5" />
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Cobertura de servicios</h4>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>Consultoría estratégica corporativa</li>
              <li>Auditoría, compliance y riesgos</li>
              <li>Análisis financiero y fiscal</li>
              <li>Digitalización y gestión documental</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Contacto</h4>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-300" /> Santiago, Chile</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-blue-300" /> +56 2 2345 6789</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-blue-300" /> contacto@gicatoma.cl</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-400 flex flex-col sm:flex-row justify-between gap-2">
          <p>© 2026 GICATOMA. Todos los derechos reservados.</p>
          <p>Diseño web corporativo moderno, funcional y orientado a resultados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
