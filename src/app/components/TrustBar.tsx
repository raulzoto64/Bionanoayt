export function TrustBar() {
  const partners = [
    { 
      name: "MinCiencias", 
      placeholder: "MC",
      image: "https://images.unsplash.com/photo-1612165469953-69b4bc7eedbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBvZmZpY2lhbHxlbnwxfHx8fDE3NzA0MTA0NTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    { 
      name: "Ruta N", 
      placeholder: "RN",
      image: "https://images.unsplash.com/photo-1762075314732-c8abb7ea446d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc2NpZW5jZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDQxMDQ0OXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    { 
      name: "SENA", 
      placeholder: "SENA",
      image: "https://images.unsplash.com/photo-1614308457932-e16d85c5d053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwcmVzZWFyY2glMjBtaWNyb3Njb3BlfGVufDF8fHx8MTc3MDQxMDQ0OXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    { 
      name: "Tecnnova", 
      placeholder: "TN",
      image: "https://images.unsplash.com/photo-1769147555720-71fc71bfc216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaG9zcGl0YWwlMjBtb2Rlcm58ZW58MXx8fHwxNzcwMzg5MzIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    { 
      name: "Tecnova", 
      placeholder: "TV",
      image: "https://images.unsplash.com/photo-1762075314732-c8abb7ea446d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc2NpZW5jZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDQxMDQ0OXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
  ];

  return (
    <section className="bg-[#1C5D15] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-center text-white/70 mb-8 text-sm tracking-wider uppercase">
          Respaldados por
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-center w-32 h-32 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all hover:scale-105 overflow-hidden group"
            >
              <div className="w-full h-20 overflow-hidden relative">
                <img 
                  src={partner.image} 
                  alt={partner.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                />
              </div>
              <span className="text-white text-sm font-bold opacity-90 mt-2">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}