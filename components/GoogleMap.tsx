"use client";
import { motion } from "framer-motion";
import { HiLocationMarker, HiPhone, HiMail, HiClock } from "react-icons/hi";

export default function GoogleMap() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="ubicacion"
      className="max-w-6xl mx-auto px-4 py-12"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          ¿Dónde{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Encontrarnos
          </span>
          ?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Visítanos en nuestra tienda física o contáctanos para más información
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Mapa */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-xl border border-gray-200"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.836155051856!2d-68.1902381!3d-16.483832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf00555e28a5%3A0xe629d551286c6e12!2sLA%20HORMIGUITA%20AZUL%20UPEA!5e0!3m2!1ses-419!2sbo!4v1754937488820!5m2!1ses-419!2sbo"
            width="100%"
            height="400"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-80 lg:h-96 border-0"
            title="Ubicación de La Hormiguita"
          ></iframe>
        </motion.div>

        {/* Información de Contacto */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Información</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiLocationMarker className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Dirección</h4>
                  <p className="text-gray-600">Av. Sucre, a una cuadra de la plaza Hormiguita, El Alto, La Paz - Bolivia</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiMail className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600">---</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiClock className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Horarios</h4>
                  <p className="text-gray-600">Lunes - Sábado: 8:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white text-center">
            <h4 className="text-lg font-semibold mb-2">¿Necesitas ayuda?</h4>
            <p className="text-blue-100 mb-4">Nuestro equipo está listo para ayudarte</p>
            <a
              href="https://wa.me/59160605780?text=Hola!%20Necesito%20ayuda%20con%20la%20ubicación"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
