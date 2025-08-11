"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiShoppingBag } from "react-icons/hi";
import { Category } from "../lib/categoriesData";

interface CategoryCardProps {
  category: Category;
}

const colorClasses = {
  blue: "from-blue-500 to-blue-600",
  green: "from-green-500 to-green-600",
  purple: "from-purple-500 to-purple-600",
  red: "from-red-500 to-red-600",
  orange: "from-orange-500 to-orange-600",
  indigo: "from-indigo-500 to-indigo-600"
};

export default function CategoryCard({ category }: CategoryCardProps) {
  const colorClass = colorClasses[category.color as keyof typeof colorClasses] || "from-gray-500 to-gray-600";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100">
        <Image
          src={category.image}
          alt={category.name}
          width={800}
          height={600}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Icon and Product Count */}
        <div className="absolute top-4 right-4 flex items-center space-x-2">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
            <span className="text-2xl">{category.icon}</span>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="text-sm font-semibold text-gray-800">
              {category.productCount} productos
            </span>
          </div>
        </div>

        {/* Category Name */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
          <p className="text-white/90 text-sm line-clamp-2">{category.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Características:</h4>
          <div className="grid grid-cols-2 gap-1">
            {category.features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center space-x-1 text-xs text-gray-600">
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colorClass}`}></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <Link href={`/products?category=${category.id}`}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-200 flex items-center justify-center space-x-2 bg-gradient-to-r ${colorClass} hover:shadow-lg hover:shadow-xl`}
          >
            <HiShoppingBag className="w-5 h-5" />
            <span>Ver Productos</span>
            <HiArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
