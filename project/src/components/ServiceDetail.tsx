import React from 'react';
import { ArrowLeft, CheckCircle, Star, Clock, Users } from 'lucide-react';
import type { StyledService } from '../types/services';
import { getServiceIcon } from '../utils/serviceIcons';

interface ServiceDetailProps {
  service: StyledService;
  onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  const IconComponent = getServiceIcon(service.icon);

  const benefits = [
    'Metodología probada y certificada',
    'Equipo de especialistas con experiencia internacional',
    'Seguimiento continuo y reportes detallados',
    'Cumplimiento de estándares internacionales',
    'Soporte 24/7 durante todo el proceso',
    'Garantía de resultados satisfactorios',
  ];

  const process = [
    {
      step: '01',
      title: 'Análisis Inicial',
      description: 'Evaluación completa de la situación actual y necesidades específicas.',
    },
    {
      step: '02',
      title: 'Propuesta Personalizada',
      description: 'Desarrollo de una estrategia adaptada a sus objetivos empresariales.',
    },
    {
      step: '03',
      title: 'Implementación',
      description: 'Ejecución profesional con seguimiento continuo y ajustes necesarios.',
    },
    {
      step: '04',
      title: 'Seguimiento',
      description: 'Monitoreo de resultados y optimización continua del servicio.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className={`bg-gradient-to-r ${service.color} text-white py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Volver a Servicios
          </button>

          <div className="flex items-center mb-8">
            <div className="bg-white/20 p-4 rounded-xl mr-6">
              <IconComponent className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Features */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Qué incluye este servicio?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(service.features ?? []).map((feature, index) => (
                  <div key={`${service.id}-feature-${index}`} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature}</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        Implementación profesional con los más altos estándares de calidad.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Process */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Nuestro Proceso</h2>
              <div className="space-y-6">
                {process.map((item) => (
                  <div key={item.step} className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-sm">
                    <div
                      className={`bg-gradient-to-r ${service.color} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0`}
                    >
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Beneficios Clave</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    <Star className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">¿Interesado en este servicio?</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-600">Respuesta en 24 horas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-600">Consulta gratuita</span>
                </div>
              </div>
              <button
                className={`w-full bg-gradient-to-r ${service.color} text-white py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-lg`}
              >
                Solicitar Cotización
              </button>
            </div>

            {/* Stats */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Nuestros Números</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600 text-sm">Proyectos Completados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">98%</div>
                  <div className="text-gray-600 text-sm">Satisfacción Cliente</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">15+</div>
                  <div className="text-gray-600 text-sm">Años de Experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
