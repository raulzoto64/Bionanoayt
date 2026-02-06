import { FlaskConical, FileCheck, Microscope, Factory, TrendingUp, Globe } from "lucide-react";

export function Process() {
  const steps = [
    {
      icon: FlaskConical,
      title: "Investigación y Desarrollo",
      description: "Nuestro equipo de científicos investiga constantemente nuevas formulaciones y mejoras a productos existentes.",
      details: [
        "Revisión de literatura científica",
        "Diseño experimental",
        "Síntesis de nanocompuestos",
        "Caracterización fisicoquímica"
      ]
    },
    {
      icon: Microscope,
      title: "Pruebas de Laboratorio",
      description: "Realizamos exhaustivas pruebas de eficacia antimicrobiana y seguridad en nuestros laboratorios certificados.",
      details: [
        "Ensayos microbiológicos",
        "Pruebas de estabilidad",
        "Análisis de toxicidad",
        "Estudios de compatibilidad"
      ]
    },
    {
      icon: FileCheck,
      title: "Validación y Certificación",
      description: "Obtenemos las certificaciones necesarias para garantizar la calidad y seguridad de nuestros productos.",
      details: [
        "Registro sanitario",
        "Certificaciones ISO",
        "Estudios de campo",
        "Documentación técnica"
      ]
    },
    {
      icon: Factory,
      title: "Producción Escalable",
      description: "Manufactura bajo estrictos controles de calidad con capacidad de producción industrial.",
      details: [
        "Buenas prácticas de manufactura",
        "Control de calidad continuo",
        "Trazabilidad completa",
        "Empaque especializado"
      ]
    },
    {
      icon: TrendingUp,
      title: "Optimización Continua",
      description: "Mejoramos constantemente nuestros procesos basándonos en retroalimentación y nuevos descubrimientos.",
      details: [
        "Análisis de datos",
        "Feedback de clientes",
        "Innovación continua",
        "Reducción de costos"
      ]
    },
    {
      icon: Globe,
      title: "Distribución y Soporte",
      description: "Llevamos nuestros productos al mercado con soporte técnico completo y seguimiento post-venta.",
      details: [
        "Red de distribución",
        "Capacitación a usuarios",
        "Asistencia técnica",
        "Monitoreo de resultados"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1C5D15] to-[#629960] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl mb-6">Nuestro Proceso</h1>
          <p className="text-xl text-[#F7F9CE] max-w-3xl">
            Desde la investigación inicial hasta la entrega final, cada paso está diseñado 
            para garantizar productos de la más alta calidad y efectividad.
          </p>
        </div>
      </div>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-[#19FF00] rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-[#1C5D15]" />
                      </div>
                      <div>
                        <div className="text-sm text-[#629960]">Paso {index + 1}</div>
                        <h3 className="text-3xl text-[#1C5D15]">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-lg text-[#629960] mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[#629960]">
                          <span className="text-[#19FF00] mt-1">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex-1">
                    <div className={`w-full h-80 rounded-2xl bg-gradient-to-br from-[#1C5D15] to-[#629960] flex items-center justify-center text-white text-6xl`}>
                      <Icon className="w-32 h-32 opacity-20" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#1C5D15] mb-4">
              Tiempo Promedio de Desarrollo
            </h2>
            <p className="text-xl text-[#629960]">
              De la idea al producto comercial
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            {[
              { phase: "I+D", time: "3-6 meses" },
              { phase: "Pruebas", time: "2-4 meses" },
              { phase: "Certificación", time: "4-8 meses" },
              { phase: "Producción", time: "Continuo" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="text-center bg-white p-6 rounded-xl shadow-lg border-2 border-[#19FF00]">
                  <div className="text-2xl text-[#1C5D15] mb-2">{item.phase}</div>
                  <div className="text-[#629960]">{item.time}</div>
                </div>
                {index < 3 && (
                  <div className="hidden md:block text-[#19FF00] text-3xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
