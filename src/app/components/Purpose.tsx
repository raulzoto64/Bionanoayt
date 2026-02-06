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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {purposes.map((purpose) => (
            <div key={purpose.title} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-[#F7F9CE]">
                <purpose.icon className="w-10 h-10 text-[#1C5D15]" />
              </div>
              <h3 className="text-2xl mb-4 text-[#1C5D15]">{purpose.title}</h3>
              <p className="text-[#629960] leading-relaxed">{purpose.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
