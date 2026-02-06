import { Microscope, Atom, Shield, Leaf } from "lucide-react";

export function Technology() {
  const technologies = [
    {
      icon: Microscope,
      title: "Nanotecnología Avanzada",
      description: "Utilizamos nanopartículas de última generación con tamaños entre 1-100 nanómetros para máxima efectividad antimicrobiana.",
      details: [
        "Síntesis controlada de nanopartículas",
        "Caracterización mediante TEM y DLS",
        "Estabilidad coloidal garantizada"
      ]
    },
    {
      icon: Atom,
      title: "Biocompatibilidad",
      description: "Nuestros productos son diseñados para ser seguros con el medio ambiente y los seres vivos, manteniendo alta eficacia.",
      details: [
        "Certificaciones de seguridad",
        "Biodegradabilidad comprobada",
        "Sin efectos citotóxicos"
      ]
    },
    {
      icon: Shield,
      title: "Acción Antimicrobiana",
      description: "Amplio espectro de acción contra bacterias, hongos y virus con eficacia comprobada del 99.9%.",
      details: [
        "Mecanismo de acción múltiple",
        "Resistencia prolongada",
        "Sin generación de resistencia"
      ]
    },
    {
      icon: Leaf,
      title: "Sostenibilidad",
      description: "Comprometidos con el desarrollo sostenible mediante procesos de síntesis verde y materiales renovables.",
      details: [
        "Química verde",
        "Reducción de huella de carbono",
        "Economía circular"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1C5D15] to-[#629960] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-[#19FF00] text-[#1C5D15] rounded-full mb-6">
              Innovación Científica
            </div>
            <h1 className="text-5xl md:text-6xl mb-6">
              Nuestra Tecnología
            </h1>
            <p className="text-xl text-[#F7F9CE] leading-relaxed">
              Desarrollamos soluciones antimicrobianas basadas en bionanotecnología de vanguardia, 
              combinando ciencia de punta con sostenibilidad ambiental.
            </p>
          </div>
        </div>
      </div>

      {/* Technologies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-[#629960]/20 hover:border-[#19FF00] transition-all duration-300 hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-[#19FF00] rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-[#1C5D15]" />
                  </div>
                  <h3 className="text-2xl text-[#1C5D15] mb-4">{tech.title}</h3>
                  <p className="text-[#629960] mb-6 leading-relaxed">
                    {tech.description}
                  </p>
                  <ul className="space-y-2">
                    {tech.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[#629960]">
                        <span className="text-[#19FF00] mt-1">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#1C5D15] mb-4">
              Proceso de Desarrollo
            </h2>
            <p className="text-xl text-[#629960]">
              De la investigación al producto final
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Investigación", desc: "Estudios científicos y pruebas de laboratorio" },
              { step: "02", title: "Desarrollo", desc: "Formulación y optimización de productos" },
              { step: "03", title: "Validación", desc: "Ensayos clínicos y certificaciones" },
              { step: "04", title: "Producción", desc: "Manufactura bajo estándares ISO" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#1C5D15] text-[#19FF00] rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl text-[#1C5D15] mb-2">{item.title}</h3>
                <p className="text-[#629960]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1C5D15] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl mb-6">
            ¿Interesado en conocer más?
          </h2>
          <p className="text-xl text-[#F7F9CE] mb-8">
            Contáctanos para recibir información técnica detallada de nuestros productos
          </p>
          <a 
            href="/#contact"
            className="inline-block px-8 py-4 bg-[#19FF00] text-[#1C5D15] rounded-lg hover:bg-[#19FF00]/90 transition-colors"
          >
            Contactar a nuestro equipo
          </a>
        </div>
      </section>
    </div>
  );
}
