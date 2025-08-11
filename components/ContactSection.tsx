"use client";
import { motion } from "framer-motion";
import { HiPhone, HiMail, HiLocationMarker, HiClock, HiChat } from "react-icons/hi";
import { companyConfig } from "../lib/config";

export default function ContactSection() {
    const contactInfo = [
        {
            icon: HiPhone,
            title: "Teléfono",
            value: companyConfig.phone,
            href: `tel:${companyConfig.phone}`,
            color: "blue"
        },
        {
            icon: HiMail,
            title: "Email",
            value: companyConfig.email,
            href: `mailto:${companyConfig.email}`,
            color: "green"
        },
        {
            icon: HiLocationMarker,
            title: "Dirección",
            value: companyConfig.address,
            href: `https://maps.google.com/?q=${encodeURIComponent(companyConfig.address)}`,
            color: "red"
        },
        {
            icon: HiClock,
            title: "Horario",
            value: "Lun - Vie: 9:00 - 18:00",
            href: "#",
            color: "purple"
        }
    ];

    const handleWhatsAppClick = () => {
        const message = `¡Hola! Me gustaría obtener más información sobre sus productos y servicios.`;
        const whatsappUrl = `https://wa.me/${companyConfig.whatsapp}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contacto" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Contáctanos
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        ¿Tienes alguna pregunta o necesitas información? ¡Contáctanos por WhatsApp!
                        Es la forma más rápida y directa de comunicarte con nosotros.
                    </p>
                </motion.div>

                {/* WhatsApp CTA Principal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center mb-16"
                >
                    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-12 text-white max-w-2xl mx-auto">
                        <div className="text-6xl mb-6">📱</div>
                        <h3 className="text-3xl font-bold mb-4">
                            ¡Chatea con nosotros!
                        </h3>
                        <p className="text-green-100 text-lg mb-8">
                            Resolvemos todas tus dudas en tiempo real.
                            Consultas sobre productos, precios, stock y más.
                        </p>
                        <motion.button
                            onClick={handleWhatsAppClick}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-green-600 py-4 px-8 rounded-xl font-semibold text-xl hover:bg-gray-50 transition-colors flex items-center justify-center space-x-3 mx-auto shadow-lg hover:shadow-xl"
                        >
                            <HiChat className="w-7 h-7" />
                            <span>Contactar por WhatsApp</span>
                        </motion.button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
