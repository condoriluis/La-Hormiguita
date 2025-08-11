"use client";
import { motion } from "framer-motion";
import { HiMail, HiLocationMarker, HiClock } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Productos",
      links: [
        { name: "Accesorios", href: "/products" },
        { name: "Categorías", href: "/categories" },
        { name: "Ofertas", href: "/ofertas" },
        { name: "Novedades", href: "/novedades" },
      ]
    },
    {
      title: "Soporte",
      links: [
        { name: "Centro de Ayuda", href: "/ayuda" },
        { name: "Garantía", href: "/garantia" },
        { name: "Devoluciones", href: "/devoluciones" },
        { name: "Contacto", href: "/contacto" },
      ]
    },
    {
      title: "Empresa",
      links: [
        { name: "Sobre Nosotros", href: "/nosotros" },
        { name: "Política de Privacidad", href: "/privacidad" },
        { name: "Términos y Condiciones", href: "/terminos" },
        { name: "Blog", href: "/blog" },
      ]
    }
  ];

  const socialLinks = [
    { icon: FaTiktok, href: "https://www.tiktok.com/@hormiguitaelalto?_t=ZM-8yn78JvxVBw&_r=1", label: "Tiktok" },
    { icon: FaWhatsapp, href: "https://wa.me/59160605780?text=Hola!%20Me%20interesa%20conocer%20más%20sobre%20sus%20productos", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 mb-6"
            >
              <Logo size="lg" />
              <div>
                <h3 className="text-2xl font-bold text-white">La Hormiguita</h3>
                <p className="text-gray-300 text-sm">Accesorios Tecnológicos</p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 mb-6 max-w-md"
            >
              Somos tu tienda de confianza para accesorios tecnológicos de alta calidad.
              Ofrecemos productos seleccionados con garantía y el mejor servicio al cliente.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 text-gray-300">
                <HiMail className="w-5 h-5 text-blue-400" />
                <span>contacto@lahormiguita.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <HiLocationMarker className="w-5 h-5 text-blue-400" />
                <span>El Alto, Bolivia</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <HiClock className="w-5 h-5 text-blue-400" />
                <span>Lun - Sáb: 8:00 - 14:00</span>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} La Hormiguita. Todos los derechos reservados.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
