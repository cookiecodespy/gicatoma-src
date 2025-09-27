import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { ChevronLeft, ChevronRight, Shield, Users, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Servicios Integrales de Excelencia',
      subtitle: 'Transformamos su visión empresarial en realidad con soluciones profesionales de alta calidad',
    },
    {
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Auditoría y Compliance',
      subtitle: 'Garantizamos el cumplimiento normativo y la transparencia en todos sus procesos empresariales',
    },
    {
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Consultoría Estratégica',
      subtitle: 'Desarrollamos estrategias personalizadas que impulsan el crecimiento y la competitividad de su empresa',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Carousel */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            
            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed animate-slide-up-delay">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delay-2">
                    <Link
                      to="contact"
                      smooth
                      duration={500}
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition text-center cursor-pointer"
                    >
                      Contáctanos
                    </Link>
                    <Link
                      to="services"
                      smooth
                      duration={500}
                      className="border border-green-600 text-green-600 hover:bg-green-50 font-semibold px-6 py-3 rounded-lg transition text-center cursor-pointer"
                    >
                      Ver servicios
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Key Features Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-900/95 to-blue-800/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4 text-white">
              <Shield className="h-8 w-8 text-blue-300" />
              <div>
                <h3 className="font-semibold">Seguridad Garantizada</h3>
                <p className="text-sm text-blue-100">Cumplimiento normativo total</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <Users className="h-8 w-8 text-blue-300" />
              <div>
                <h3 className="font-semibold">Equipo Especializado</h3>
                <p className="text-sm text-blue-100">Profesionales certificados</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <Award className="h-8 w-8 text-blue-300" />
              <div>
                <h3 className="font-semibold">Calidad Premium</h3>
                <p className="text-sm text-blue-100">Estándares internacionales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;