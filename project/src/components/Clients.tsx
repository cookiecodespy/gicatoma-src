import React from 'react';
import { Star, Quote } from 'lucide-react';

const Clients: React.FC = () => {
  const testimonials = [
    {
      name: 'María González',
      company: 'TechCorp Solutions',
      position: 'CEO',
      content: 'Gicatoma transformó completamente nuestros procesos de auditoría. Su profesionalismo y atención al detalle son excepcionales.',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Carlos Rodríguez',
      company: 'Industrial Dynamics',
      position: 'CFO',
      content: 'El equipo de consultoría fiscal nos ayudó a optimizar nuestras cargas tributarias significativamente. Altamente recomendados.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Ana Martínez',
      company: 'Global Services Inc.',
      position: 'Operations Director',
      content: 'Su análisis financiero nos proporcionó insights valiosos que impulsaron nuestro crecimiento del 40% este año.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    },
  ];

  const clientLogos = [
    'TechCorp',
    'InnovateCo',
    'GlobalTech',
    'Solutions+',
    'FutureSys',
    'ProActive',
    'SmartBiz',
    'TechFlow',
  ];

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Clientes Confían en Nosotros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trabajamos con empresas líderes que valoran la excelencia y la innovación en servicios profesionales.
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Empresas que Confían en Gicatoma</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="text-2xl font-bold text-gray-400">{logo}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Quote Icon */}
              <div className="text-blue-600 mb-6">
                <Quote className="h-10 w-10" />
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-blue-600 font-medium">{testimonial.position}</div>
                  <div className="text-gray-500 text-sm">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-12 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">¿Listo para unirse a nuestros clientes satisfechos?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Descubra por qué las empresas más exitosas eligen Gicatoma para sus necesidades de servicios profesionales.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg">
              Comenzar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;