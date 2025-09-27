import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { StyledService } from '../types/services';
import { getServiceIcon } from '../utils/serviceIcons';

interface ServicesProps {
  onServiceClick: (service: StyledService) => void;
}

const services: StyledService[] = [
  {
    id: 'digitalizacion-documental',
    icon: 'digitalizacion',
    title: 'Digitalización de Documentos',
    description:
      'Transformamos sus documentos físicos en archivos digitales accesibles y seguros, optimizando la gestión y reduciendo costos operativos.',
    features: [
      'Escaneo masivo y clasificación',
      'Organización digital',
      'Almacenamiento seguro en la nube',
    ],
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 'auditoria-compliance',
    icon: 'auditoria',
    title: 'Auditoría y Compliance',
    description:
      'Evaluación exhaustiva de procesos, identificación de riesgos y aseguramiento del cumplimiento normativo.',
    features: [
      'Auditoría interna y externa',
      'Gestión de riesgos',
      'Compliance regulatorio',
      'Reportes ejecutivos',
    ],
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'consultoria-fiscal',
    icon: 'fiscal',
    title: 'Consultoría Fiscal',
    description: 'Asesoramiento especializado en materia tributaria y optimización de cargas fiscales.',
    features: [
      'Planificación fiscal',
      'Declaraciones tributarias',
      'Reestructuraciones',
      'Defensa ante autoridades',
    ],
    color: 'from-green-500 to-green-600',
  },
  {
    id: 'analisis-financiero',
    icon: 'financiero',
    title: 'Análisis Financiero',
    description: 'Evaluación profunda de la salud financiera y estrategias de crecimiento empresarial.',
    features: [
      'Estados financieros',
      'Análisis de rentabilidad',
      'Proyecciones financieras',
      'Valuaciones',
    ],
    color: 'from-orange-500 to-orange-600',
  },
  {
    id: 'consultoria-operacional',
    icon: 'operacional',
    title: 'Consultoría Operacional',
    description: 'Optimización de procesos operativos y mejora continua de la eficiencia empresarial.',
    features: [
      'Mapeo de procesos',
      'Automatización',
      'Control de calidad',
      'Mejora continua',
    ],
    color: 'from-teal-500 to-teal-600',
  },
  {
    id: 'consultoria-estrategica',
    icon: 'estrategica',
    title: 'Consultoría Estratégica',
    description: 'Desarrollo de estrategias corporativas para el crecimiento sostenible y competitividad.',
    features: [
      'Planeación estratégica',
      'Análisis de mercado',
      'Fusiones y adquisiciones',
      'Transformación digital',
    ],
    color: 'from-red-500 to-red-600',
  },
];

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Servicios Profesionales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos soluciones integrales diseñadas para impulsar el éxito de su empresa con los más altos estándares de calidad y profesionalismo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = getServiceIcon(service.icon);

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 group cursor-pointer transform hover:-translate-y-2"
                onClick={() => onServiceClick(service)}
              >
                {/* Icon */}
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {(service.features ?? []).slice(0, 3).map((feature, index) => (
                    <li key={`${service.id}-feature-${index}`} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-400">Ver detalles</span>
                  <ArrowRight className="h-5 w-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">¿Necesita una solución personalizada?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contacte con nuestros especialistas para una consulta gratuita y descubra cómo podemos transformar su empresa.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg">
              Consulta Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
