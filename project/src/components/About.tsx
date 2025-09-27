import React from 'react';
import { Target, Eye, Award, Users, Globe, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Precisión',
      description: 'Cada proyecto se ejecuta con máxima precisión y atención al detalle.',
    },
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Comprometidos con la calidad superior en todos nuestros servicios.',
    },
    {
      icon: Users,
      title: 'Colaboración',
      description: 'Trabajamos en estrecha colaboración con nuestros clientes.',
    },
    {
      icon: Globe,
      title: 'Visión Global',
      description: 'Perspectiva internacional con expertise local.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Proyectos Completados' },
    { number: '15+', label: 'Años de Experiencia' },
    { number: '98%', label: 'Satisfacción Cliente' },
    { number: '50+', label: 'Especialistas Certificados' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Acerca de Gicatoma
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos una firma de servicios profesionales con más de 15 años de experiencia, dedicada a brindar soluciones integrales que impulsan el crecimiento y éxito empresarial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            {/* Mission & Vision */}
            <div className="space-y-12">
              <div>
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Nuestra Misión</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Proporcionar servicios profesionales de la más alta calidad, ayudando a nuestros clientes a alcanzar sus objetivos empresariales mediante soluciones innovadoras, éticas y eficientes que generen valor sostenible.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Nuestra Visión</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Ser reconocidos como la firma líder en servicios profesionales integrales, destacando por nuestra excelencia, innovación y compromiso inquebrantable con el éxito de nuestros clientes.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Nuestro Compromiso</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Mantenemos los más altos estándares profesionales y éticos, adaptándonos continuamente a las necesidades cambiantes del mercado para ofrecer soluciones que generen impacto real y duradero.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                alt="Equipo profesional de Gicatoma"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-blue-100">Años de Excelencia</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Nuestros Valores</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center space-y-3"
                >
                  <IconComponent className="h-10 w-10 text-blue-600" />
                  <h4 className="text-lg font-semibold text-gray-800">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;