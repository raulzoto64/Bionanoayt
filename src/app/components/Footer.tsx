import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado! Nos pondremos en contacto pronto.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer className="bg-[#1C5D15] text-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl sm:text-3xl mb-4 sm:mb-6">Contáctanos</h3>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 text-sm sm:text-base"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 text-sm sm:text-base"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Mensaje"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 text-sm sm:text-base"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-[#19FF00] text-[#1C5D15] hover:bg-[#19FF00]/90 text-sm sm:text-base py-2.5 sm:py-3"
              >
                Enviar Mensaje
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl sm:text-3xl mb-4 sm:mb-6">Información</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-[#19FF00]/20 rounded-lg">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#19FF00]" />
                </div>
                <div>
                  <h4 className="mb-1 text-sm sm:text-base">Teléfono</h4>
                  <p className="text-white/80 text-xs sm:text-sm">+57 305 460 22 46</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-[#19FF00]/20 rounded-lg">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#19FF00]" />
                </div>
                <div>
                  <h4 className="mb-1 text-sm sm:text-base">Email</h4>
                  <p className="text-white/80 text-xs sm:text-sm">aytbionano@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-[#19FF00]/20 rounded-lg">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#19FF00]" />
                </div>
                <div>
                  <h4 className="mb-1 text-sm sm:text-base">Ubicación</h4>
                  <p className="text-white/80 text-xs sm:text-sm">Colombia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20 text-center text-white/60">
          <p className="text-xs sm:text-sm">&copy; {new Date().getFullYear()} Bionanoaxus. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
