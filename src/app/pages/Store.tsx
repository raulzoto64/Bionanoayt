import { useState } from "react";
import { ShoppingCart, Filter, Search, Star } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 mb-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? "fill-[#19FF00] text-[#19FF00]"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
      <span className="text-sm text-[#629960] ml-1">({rating}.0)</span>
    </div>
  );
}

export function Store() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "Bionanoaxus (BNX) 500ml",
      category: "antimicrobial",
      price: 45000,
      image: "https://images.unsplash.com/photo-1576834976341-53b1b975c6f9?w=400",
      stock: 25,
      rating: 5
    },
    {
      id: 2,
      name: "Bionanoaxus (BNX) 1L",
      category: "antimicrobial",
      price: 80000,
      image: "https://images.unsplash.com/photo-1576834976341-53b1b975c6f9?w=400",
      stock: 15,
      rating: 5
    },
    {
      id: 3,
      name: "Z-Klean 1L",
      category: "cleaning",
      price: 35000,
      image: "https://images.unsplash.com/photo-1580053234218-74eb4ae03a44?w=400",
      stock: 40,
      rating: 4
    },
    {
      id: 4,
      name: "Z-Klean 5L",
      category: "cleaning",
      price: 150000,
      image: "https://images.unsplash.com/photo-1580053234218-74eb4ae03a44?w=400",
      stock: 20,
      rating: 4
    },
    {
      id: 5,
      name: "BioProtect Plus 1L",
      category: "agricultural",
      price: 55000,
      image: "https://images.unsplash.com/photo-1601839215170-6ce5854968d6?w=400",
      stock: 30,
      rating: 5
    },
    {
      id: 6,
      name: "BioProtect Plus 5L",
      category: "agricultural",
      price: 240000,
      image: "https://images.unsplash.com/photo-1601839215170-6ce5854968d6?w=400",
      stock: 12,
      rating: 5
    }
  ];

  const categories = [
    { id: "all", label: "Todos los productos" },
    { id: "antimicrobial", label: "Antimicrobianos" },
    { id: "cleaning", label: "Limpieza Industrial" },
    { id: "agricultural", label: "Protección Agrícola" }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1C5D15] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl mb-4">Tienda Online</h1>
          <p className="text-xl text-[#F7F9CE]">
            Productos bionanotecnológicos de alta calidad
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 items-center">
            <Filter className="w-5 h-5 text-[#629960]" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border rounded-lg bg-white text-[#1C5D15]"
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div 
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#19FF00]"
            >
              <div className="h-64 overflow-hidden bg-gradient-to-br from-[#1C5D15] to-[#629960]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <StarRating rating={product.rating} />
                <h3 className="text-xl mb-2 text-[#1C5D15]">{product.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl text-[#1C5D15]">
                    ${product.price.toLocaleString('es-CO')}
                  </span>
                  <span className="text-sm text-[#629960]">
                    Stock: {product.stock}
                  </span>
                </div>
                <Button 
                  className="w-full bg-[#1C5D15] text-white hover:bg-[#19FF00] hover:text-[#1C5D15]"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Agregar al carrito
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-[#629960]">
              No se encontraron productos con los filtros seleccionados
            </p>
          </div>
        )}
      </div>
    </div>
  );
}