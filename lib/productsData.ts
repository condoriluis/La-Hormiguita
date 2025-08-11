export interface Product {
  title: string;
  image: string;
  price: number;
  offerPrice?: number;
  stock: number;
}

const products: Product[] = [
  {
    title: "Soporte para tablet universal",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80", // tablet stand
    price: 49.9,
    offerPrice: 39.9,
    stock: 100
  },
  {
    title: "Duplicador de jack 3.5mm",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // jack duplicator
    price: 29.9,
    stock: 100
  },
  {
    title: "Audífonos Sonia Pro",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", // headphones
    price: 79.9,
    offerPrice: 69.9,
    stock: 100
  },
  {
    title: "Micrófono para celular",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80", // mic celular
    price: 59.9,
    stock: 100
  },
  {
    title: "Micrófono de mesa",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", // mic mesa
    price: 99.9,
    offerPrice: 89.9,
    stock: 100
  },
  {
    title: "Cable de micrófono XLR",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // cable mic
    price: 19.9,
    stock: 100
  }
];

export default products;
