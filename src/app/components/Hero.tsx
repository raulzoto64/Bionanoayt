import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1676313414325-2a877a95dd10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYW5vdGVjaG5vbG9neSUyMG1pY3Jvc2NvcGUlMjBzdHJ1Y3R1cmVzJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NzAzOTE2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        }}
      >
        <div className="absolute inset-0 bg-[#1C5D15]/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
          Innovación y desarrollo de productos de base Bionanotecnológica
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-95">
          Soluciones sostenibles diseñadas y manufacturadas en Colombia para revolucionar la industria
        </p>
        <Button 
          size="lg"
          className="bg-[#19FF00] text-[#1C5D15] hover:bg-[#19FF00]/90 px-8 py-6 text-lg shadow-lg"
        >
          Conoce nuestra tecnología patentada
        </Button>
      </div>
    </section>
  );
}
