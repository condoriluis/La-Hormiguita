export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
  icon: string;
  color: string;
  features: string[];
}

export const categories: Category[] = [
  {
    id: "audio",
    name: "Audio y Sonido",
    description: "Audífonos, micrófonos y equipos de audio profesional de alta calidad",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=800&q=80",
    productCount: 3,
    icon: "🎧",
    color: "blue",
    features: [
      "Audífonos profesionales",
      "Micrófonos de estudio",
      "Equipos de audio",
      "Cables de audio"
    ]
  },
  {
    id: "cables",
    name: "Cables y Conectores",
    description: "Cables de alta calidad para todas tus necesidades de conexión",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    productCount: 1,
    icon: "🔌",
    color: "green",
    features: [
      "Cables XLR",
      "Cables USB",
      "Conectores RCA",
      "Adaptadores"
    ]
  },
  {
    id: "stands",
    name: "Soportes y Trípodes",
    description: "Soportes robustos y ajustables para tablets, celulares y equipos",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    productCount: 1,
    icon: "📱",
    color: "purple",
    features: [
      "Soportes para tablet",
      "Trípodes ajustables",
      "Brazos articulados",
      "Soportes de escritorio"
    ]
  },
  {
    id: "microphones",
    name: "Micrófonos",
    description: "Micrófonos profesionales para streaming, podcasting y grabación",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
    productCount: 2,
    icon: "🎤",
    color: "red",
    features: [
      "Micrófonos USB",
      "Micrófonos de mesa",
      "Micrófonos de solapa",
      "Accesorios para micrófonos"
    ]
  },
  {
    id: "accessories",
    name: "Accesorios",
    description: "Accesorios esenciales para complementar tu equipo tecnológico",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    productCount: 1,
    icon: "🛠️",
    color: "orange",
    features: [
      "Duplicadores de audio",
      "Hubs USB",
      "Organizadores",
      "Herramientas"
    ]
  },
  {
    id: "gaming",
    name: "Gaming",
    description: "Equipos y accesorios especializados para gamers profesionales",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    productCount: 0,
    icon: "🎮",
    color: "indigo",
    features: [
      "Audífonos gaming",
      "Micrófonos para stream",
      "Soportes para consolas",
      "Accesorios RGB"
    ]
  }
];
