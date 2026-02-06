export function Leadership() {
  const team = [
    {
      name: "Ana Elisa Casas Botero",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1754715203698-70c7ad3a879d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXRpbmElMjBidXNpbmVzc3dvbWFuJTIwc2NpZW50aXN0fGVufDF8fHx8MTc3MDM5MTY0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Tatiana G. Pineda Vasquez",
      role: "Gerente de proyectos, Co-Founder",
      image: "https://images.unsplash.com/photo-1727299781147-c7ab897883a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXRpbmElMjB3b21hbiUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NzAzOTE2NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Juan Pablo Barrera Rúa",
      role: "Ingeniero I+D",
      image: "https://images.unsplash.com/photo-1740485863716-8e1851b6d474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXRpbm8lMjBlbmdpbmVlciUyMG1hbGV8ZW58MXx8fHwxNzcwMzkxNjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#19FF00] text-[#1C5D15] rounded-full mb-3 sm:mb-4 text-sm">
            Liderazgo Femenino
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 text-[#1C5D15]">
            Nuestro Equipo
          </h2>
          <p className="text-base sm:text-xl text-[#629960] max-w-3xl mx-auto">
            Fundada por dos mujeres visionarias comprometidas con la Agenda 2030
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 sm:gap-10">
          {team.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="relative inline-block mb-4">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-[#19FF00] shadow-lg group-hover:scale-105 transition-transform">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl mb-2 text-[#1C5D15]">{member.name}</h3>
              <p className="text-[#629960] text-sm sm:text-base">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
