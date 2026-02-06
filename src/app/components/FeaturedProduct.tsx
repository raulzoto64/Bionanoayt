import { Button } from "./ui/button";
import { Leaf, Shield, Droplets } from "lucide-react";

export function FeaturedProduct() {
  return (
    <section className="py-20 bg-[#629960]/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1C5D15] to-[#629960] p-8">
              <img
                src="https://images.unsplash.com/photo-1758685734156-3c5d35bae1d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwZ3JlZW4lMjBjaGVtaXN0cnklMjBmbGFza3xlbnwxfHx8fDE3NzAzOTE2NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Producto BNX"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="inline-block px-4 py-2 bg-[#19FF00] text-[#1C5D15] rounded-full mb-4">
              Producto Estrella
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 text-[#1C5D15]">
              Bionanoaxus
            </h2>
            <p className="text-xl mb-6 text-[#629960]">
              Producto con nanotecnología antimicrobiana y fungicida
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-[#19FF00]/20 p-2 rounded-lg">
                  <Shield className="w-5 h-5 text-[#1C5D15]" />
                </div>
                <div>
                  <h4 className="text-[#1C5D15] mb-1">Protección Avanzada</h4>
                  <p className="text-[#629960]">Alternativa sostenible a químicos tradicionales</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-[#19FF00]/20 p-2 rounded-lg">
                  <Leaf className="w-5 h-5 text-[#1C5D15]" />
                </div>
                <div>
                  <h4 className="text-[#1C5D15] mb-1">Ecológico</h4>
                  <p className="text-[#629960]">Minimizando impacto en animales y personas</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-[#19FF00]/20 p-2 rounded-lg">
                  <Droplets className="w-5 h-5 text-[#1C5D15]" />
                </div>
                <div>
                  <h4 className="text-[#1C5D15] mb-1">Eficacia Comprobada</h4>
                  <p className="text-[#629960]">Tecnología patentada con resultados verificables</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-[#1C5D15] text-white hover:bg-[#1C5D15]/90"
            >
              Ver Catálogo de Productos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
