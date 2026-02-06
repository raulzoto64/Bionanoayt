import { Users, Target, Lightbulb } from "lucide-react";

export function Purpose() {
  const purposes = [
    {
      icon: Users,
      title: "¿Quiénes somos?",
      description: "Empresa de base tecnológica dedicada a rutas verdes y amigables con el medio ambiente.",
    },
    {
      icon: Target,
      title: "¿Qué hacemos?",
      description: "Resolución de contaminación por microorganismos (hongos, virus y bacterias) mediante experticia científica.",
    },
    {
      icon: Lightbulb,
      title: "¿Cómo lo hacemos?",
      description: "Proveedores líderes de nanocompuestos para Latinoamérica.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8 sm:gap-10">
          {purposes.map((purpose) => (
            <div key={purpose.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 rounded-full bg-[#F7F9CE]">
                <purpose.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#1C5D15]" />
              </div>
              <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-[#1C5D15]">{purpose.title}</h3>
              <p className="text-[#629960] leading-relaxed text-sm sm:text-base">{purpose.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
