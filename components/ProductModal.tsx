"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { HiX, HiHeart, HiStar, HiTruck, HiShieldCheck, HiChat, HiCamera } from 'react-icons/hi';
import { Product } from '../lib/productsData';
import { generateWhatsAppMessageSimple, generateWhatsAppUrl, companyConfig } from '../lib/config';
import html2canvas from 'html2canvas';

interface ProductModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
    const [quantity, setQuantity] = useState(1);
    const [isCapturing, setIsCapturing] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    // Reset quantity when product changes
    useEffect(() => {
        setQuantity(1);
    }, [product]);

    // Close modal on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!product) return null;

    const discount = product.offerPrice ? Math.round(((product.price - product.offerPrice) / product.price) * 100) : 0;
    const isOutOfStock = product.stock === 0;

    // Función para enviar por WhatsApp
    const sendWhatsApp = () => {
        const message = generateWhatsAppMessageSimple({
            title: product.title,
            price: product.price,
            offerPrice: product.offerPrice,
            stock: product.stock,
            quantity
        });
        const whatsappUrl = generateWhatsAppUrl(message);
        window.open(whatsappUrl, '_blank');
    };

    // Función para capturar pantalla
    const captureScreenshot = async () => {
        if (!modalRef.current) return;

        setIsCapturing(true);

        try {
            // Configuración para la captura
            const canvas = await html2canvas(modalRef.current, {
                backgroundColor: '#ffffff',
                scale: 2, // Mayor calidad
                useCORS: true,
                allowTaint: true,
                logging: false,
                width: modalRef.current.scrollWidth,
                height: modalRef.current.scrollHeight
            });

            // Convertir a blob y descargar
            canvas.toBlob((blob) => {
                if (blob) {
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = `${product.title.replace(/\s+/g, '_')}_captura.png`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    URL.revokeObjectURL(url);
                }
            }, 'image/png', 0.9);

        } catch (error) {
            console.error('Error al capturar pantalla:', error);
        } finally {
            setIsCapturing(false);
        }
    };


    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <div
                            ref={modalRef}
                            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-200">
                                <h2 className="text-2xl font-bold text-gray-900">Vista Rápida del Producto</h2>
                                <div className="flex items-center space-x-2">
                                    {/* Botón de captura */}
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={captureScreenshot}
                                        disabled={isCapturing}
                                        className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors disabled:opacity-50"
                                        title="Capturar pantalla"
                                    >
                                        <HiCamera className="w-5 h-5" />
                                    </motion.button>

                                    {/* Botón de cerrar */}
                                    <button
                                        onClick={onClose}
                                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                    >
                                        <HiX className="w-6 h-6 text-gray-500" />
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {/* Image Section */}
                                    <div className="space-y-4">
                                        <div className="relative overflow-hidden rounded-xl bg-gray-100">
                                            <Image
                                                src={product.image}
                                                alt={product.title}
                                                width={500}
                                                height={500}
                                                className="w-full h-80 lg:h-96 object-cover"
                                            />

                                            {/* Badges */}
                                            <div className="absolute top-4 left-4 flex flex-col space-y-2">
                                                {product.offerPrice && (
                                                    <div className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                                                        -{discount}%
                                                    </div>
                                                )}
                                                {isOutOfStock ? (
                                                    <div className="bg-gray-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                                                        Agotado
                                                    </div>
                                                ) : (
                                                    <div className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                                                        En Stock
                                                    </div>
                                                )}
                                            </div>

                                            {/* Rating */}
                                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                                                <HiStar className="w-4 h-4 text-yellow-500 fill-current" />
                                                <span className="text-sm font-semibold text-gray-800">4.8</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Product Info */}
                                    <div className="space-y-6">
                                        <div>
                                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                                {product.title}
                                            </h1>
                                            <p className="text-gray-600">
                                                Producto de alta calidad con las mejores especificaciones del mercado
                                            </p>
                                        </div>

                                        {/* Price */}
                                        <div className="space-y-2">
                                            {product.offerPrice ? (
                                                <div className="flex items-center space-x-3">
                                                    <span className="text-3xl font-bold text-blue-600">Bs {product.offerPrice}</span>
                                                    <span className="text-2xl text-gray-500 line-through">Bs {product.price}</span>
                                                    <span className="bg-red-100 text-red-800 text-sm font-semibold px-2 py-1 rounded-full">
                                                        Ahorras Bs {product.price - product.offerPrice}
                                                    </span>
                                                </div>
                                            ) : (
                                                <span className="text-3xl font-bold text-gray-900">Bs {product.price}</span>
                                            )}
                                        </div>

                                        {/* Stock */}
                                        <div className="flex items-center space-x-2">
                                            <div className={`w-3 h-3 rounded-full ${isOutOfStock ? 'bg-gray-400' : 'bg-green-500'}`}></div>
                                            <span className="text-gray-700">
                                                {isOutOfStock ? 'Sin stock' : `${product.stock} unidades disponibles`}
                                            </span>
                                            {!isOutOfStock && product.stock < 5 && (
                                                <span className="text-orange-600 text-sm font-medium bg-orange-50 px-2 py-1 rounded-full">
                                                    ¡Últimas unidades!
                                                </span>
                                            )}
                                        </div>

                                        {/* Quantity */}
                                        {!isOutOfStock && (
                                            <div className="space-y-2">
                                                <label className="block text-sm font-medium text-gray-700">Cantidad</label>
                                                <div className="flex items-center space-x-3">
                                                    <button
                                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                                        className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="w-16 text-center text-lg font-semibold">{quantity}</span>
                                                    <button
                                                        onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                                                        className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {/* Action Buttons */}
                                        <div className="space-y-3">
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={sendWhatsApp}
                                                className="w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl"
                                            >
                                                <HiChat className="w-6 h-6" />
                                                <span>Consultar por WhatsApp</span>
                                            </motion.button>
                                        </div>

                                        {/* Features */}
                                        <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                                            <h3 className="font-semibold text-gray-900">Características principales</h3>
                                            <ul className="space-y-1 text-sm text-gray-700">
                                                <li>• Alta calidad y durabilidad</li>
                                                <li>• Garantía de 1 año</li>
                                                <li>• Envío gratuito en pedidos superiores a Bs 100</li>
                                            </ul>
                                        </div>

                                        {/* Additional Info */}
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
                                                <HiTruck className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                                                <p className="text-xs font-medium text-gray-900">Envío Gratis</p>
                                                <p className="text-xs text-gray-600">+Bs 100</p>
                                            </div>
                                            <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
                                                <HiShieldCheck className="w-6 h-6 text-green-600 mx-auto mb-1" />
                                                <p className="text-xs font-medium text-gray-900">Garantía</p>
                                                <p className="text-xs text-gray-600">1 año</p>
                                            </div>
                                            <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
                                                <HiStar className="w-6 h-6 text-yellow-600 mx-auto mb-1" />
                                                <p className="text-xs font-medium text-gray-900">Calidad</p>
                                                <p className="text-xs text-gray-600">Premium</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
