import { ShoppingCart, Check } from "lucide-react";
import { Button } from "./ui/button";

export function Products() {
  const products = [
    {
      name: "Bionanoaxus (BNX)",
      category: "Antimicrobiano Premium",
      description: "Nanotecnología antimicrobiana y fungicida de amplio espectro para aplicaciones industriales y comerciales.",
      image: "https://images.unsplash.com/photo-1576834976341-53b1b975c6f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbnRpbWljcm9iaWFsJTIwc3ByYXklMjBib3R0bGUlMjBwcm9kdWN0fGVufDF8fHx8MTc3MDQwODQxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Eficacia comprobada 99.9%",
        "Tecnología patentada",
        "Acción prolongada",
        "Amigable con el medio ambiente"
      ],
      popular: true
    },
    {
      name: "Z-Klean",
      category: "Limpieza Industrial",
      description: "Solución ecológica para limpieza y desinfección de superficies con nanocompuestos activos.",
      image: "https://images.unsplash.com/photo-1580053234218-74eb4ae03a44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwY2xlYW5pbmclMjBzb2x1dGlvbiUyMGdyZWVufGVufDF8fHx8MTc3MDQwODQxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Biodegradable",
        "Sin químicos agresivos",
        "Aplicación versátil",
        "Certificado ecológico"
      ],
      popular: false
    },
    {
      name: "BioProtect Plus",
      category: "Protección Agrícola",
      description: "Formulación especializada para protección de cultivos contra hongos y bacterias patógenas.",
      image: "https://images.unsplash.com/photo-1601839215170-6ce5854968d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaW90ZWNobm9sb2d5JTIwcHJvZHVjdCUyMGNvbnRhaW5lcnxlbnwxfHx8fDE3NzA0MDg0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Apto para agricultura orgánica",
        "Resistencia prolongada",
        "No fitotóxico",
        "Aumenta productividad"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#19FF00] text-[#1C5D15] rounded-full mb-4">
            Catálogo
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-[#1C5D15]">
            Productos Más Demandados
          </h2>
          <p className="text-xl text-[#629960] max-w-3xl mx-auto">
            Soluciones bionanotecnológicas innovadoras para diferentes industrias
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.name}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#629960]/20 hover:border-[#19FF00] group relative flex flex-col"
            >
              {product.popular && (
                <div className="absolute top-4 right-4 z-10 bg-[#19FF00] text-[#1C5D15] px-3 py-1 rounded-full text-sm">
                  Más Popular
                </div>
              )}
              
              {/* Product Image */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#1C5D15] to-[#629960]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Product Details */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-[#629960] text-sm mb-2">{product.category}</div>
                <h3 className="text-2xl mb-3 text-[#1C5D15]">{product.name}</h3>
                <p className="text-[#629960] mb-6 leading-relaxed line-clamp-3">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#19FF00] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#629960]">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-auto">
                  <Button 
                    className="w-full bg-[#1C5D15] text-white hover:bg-[#1C5D15]/90 group-hover:bg-[#19FF00] group-hover:text-[#1C5D15] transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Solicitar Información
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-[#1C5D15] text-[#1C5D15] hover:bg-[#1C5D15] hover:text-white"
          >
            Ver Catálogo Completo
          </Button>
        </div>
      </div>
    </section>
  );
}