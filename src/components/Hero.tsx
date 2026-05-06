import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const highlights = [
    'Consultoría corporativa y operacional',
    'Auditoría, cumplimiento y gestión de riesgos',
    'Transformación documental y financiera',
  ];

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-slate-950 text-white"
      aria-label="Presentación principal de GICATOMA"
    >
      <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_15%_10%,#2563eb_0%,transparent_40%),radial-gradient(circle_at_80%_20%,#0ea5e9_0%,transparent_45%)]" />
      <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-blue-100 mb-6">
              <Sparkles className="h-4 w-4" />
              Soluciones corporativas de alto impacto
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              GICATOMA impulsa el crecimiento de su empresa con una ejecución impecable.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed">
              Diseñamos estrategias, optimizamos procesos y fortalecemos su cumplimiento para que su organización avance con seguridad, eficiencia y visión de futuro.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 font-semibold hover:bg-blue-400 transition-colors"
              >
                Solicitar asesoría
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Explorar servicios
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-2xl">
            <div className="flex items-center gap-3 pb-5 border-b border-white/10">
              <ShieldCheck className="h-7 w-7 text-blue-300" />
              <div>
                <h2 className="font-semibold text-lg">Estándar corporativo GICATOMA</h2>
                <p className="text-slate-300 text-sm">Precisión técnica y foco estratégico</p>
              </div>
            </div>
            <ul className="mt-6 space-y-4">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-slate-100">
                  <CheckCircle2 className="h-5 w-5 text-blue-300 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { value: '15+', label: 'Años' },
                { value: '500+', label: 'Proyectos' },
                { value: '98%', label: 'Satisfacción' },
              ].map((metric) => (
                <div key={metric.label} className="rounded-xl bg-white/10 p-3 text-center">
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <p className="text-xs text-slate-300">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
