"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiStar, HiEye, HiChat } from "react-icons/hi";
import ProductModal from "./ProductModal";
import { Product } from "../lib/productsData";
import { generateWhatsAppMessageSimple, generateWhatsAppUrl } from "../lib/config";

interface ProductCardProps {
  id: number;
  title: string;
  image: string;
  price: number;
  offerPrice?: number;
  stock: number;
}

export default function ProductCard({ id, title, image, price, offerPrice, stock }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const discount = offerPrice ? Math.round(((price - offerPrice) / price) * 100) : 0;
  const isOutOfStock = stock === 0;

  // Create product object for modal
  const product: Product = {
    title,
    image,
    price,
    offerPrice,
    stock
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Función para enviar por WhatsApp
  const sendWhatsApp = () => {
    const message = generateWhatsAppMessageSimple({ title, price, offerPrice, stock });
    const whatsappUrl = generateWhatsAppUrl(message);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
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
          <Link href={`/products/${id}`}>
            <Image
              src={image}
              alt={title}
              width={400}
              height={400}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
            />
          </Link>

          {/* Overlay with actions */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={openModal}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                title="Vista rápida"
              >
                <HiEye className="w-5 h-5 text-gray-700" />
              </motion.button>
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col space-y-2">
            {offerPrice && (
              <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                -{discount}%
              </div>
            )}
            {isOutOfStock ? (
              <div className="bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                Agotado
              </div>
            ) : (
              <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                En Stock
              </div>
            )}
          </div>

          {/* Rating */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
            <HiStar className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-semibold text-gray-800">4.8</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Product Info */}
          <h3
            onClick={openModal}
            className="font-semibold text-lg text-gray-900 mb-2 cursor-pointer hover:text-blue-600 transition-colors line-clamp-2"
            title="Haz clic para ver detalles"
          >
            {title}
          </h3>

          {/* Price */}
          <div className="flex items-center space-x-2 mb-4">
            {offerPrice ? (
              <>
                <span className="text-2xl font-bold text-blue-600">Bs {offerPrice}</span>
                <span className="text-lg text-gray-500 line-through">Bs {price}</span>
              </>
            ) : (
              <span className="text-2xl font-bold text-gray-900">Bs {price}</span>
            )}
          </div>

          {/* Stock Info */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${isOutOfStock ? 'bg-gray-400' : 'bg-green-500'}`}></div>
              <span className="text-sm text-gray-600">
                {isOutOfStock ? 'Sin stock' : `${stock} disponibles`}
              </span>
            </div>

            {!isOutOfStock && stock < 5 && (
              <span className="text-xs text-orange-600 font-medium bg-orange-50 px-2 py-1 rounded-full">
                ¡Últimas unidades!
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={sendWhatsApp}
              className="flex-1 py-3 px-2 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl"
            >
              <HiChat className="w-5 h-5" />
              <span>Consultar por WhatsApp</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Product Modal */}
      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
