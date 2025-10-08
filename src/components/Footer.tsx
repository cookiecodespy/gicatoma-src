import React from 'react';
import { Building2, Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const services = [
    'Auditoría y Compliance',
    'Consultoría Fiscal',
    'Recursos Humanos',
    'Análisis Financiero',
    'Consultoría Operacional',
    'Consultoría Estratégica',
  ];

  const quickLinks = [
    'Inicio',
    'Nosotros',
    'Servicios',
    'Clientes',
    'Contacto',
    'Términos y Condiciones',
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-lg">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">GICATOMA</h3>
                <p className="text-sm text-gray-400">Servicios Integrales</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Firma de servicios profesionales con más de 15 años de experiencia, comprometida con la excelencia y el éxito de nuestros clientes.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/gicatoma"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-lg hover:scale-110 transition-transform duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/gicatoma"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-lg hover:scale-110 transition-transform duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/gicatoma"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg hover:scale-110 transition-transform duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Nuestros Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Santiago, Chile</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+56223456789"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  +56 2 2345 6789
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:contacto@gicatoma.cl"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  contacto@gicatoma.cl
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Gicatoma. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;