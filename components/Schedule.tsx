"use client";
import { motion } from "framer-motion";
import { HiClock, HiCalendar, HiPhone, HiMail } from "react-icons/hi";

export default function Schedule() {
  const scheduleData = [
    {
      day: "Lunes - Viernes",
      hours: "8:00 AM - 2:00 PM",
      icon: HiClock,
      color: "from-blue-500 to-blue-600"
    },
    {
      day: "Sábados",
      hours: "9:00 AM - 2:00 PM",
      icon: HiCalendar,
      color: "from-green-500 to-green-600"
    },
    {
      day: "Domingos",
      hours: "Cerrado",
      icon: HiClock,
      color: "from-gray-500 to-gray-600"
    }
  ];

  const contactInfo = [
    {
      icon: HiPhone,
      text: "+591 606 057 80",
      href: "tel:+59160605780",
      color: "text-green-600"
    },
    {
      icon: HiMail,
      text: "contacto@lahormiguita.com",
      href: "mailto:contacto@lahormiguita.com",
      color: "text-blue-600"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-4 py-12"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Horarios de{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Atención
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Estamos aquí para ayudarte en los horarios que mejor te convengan
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Horarios */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {scheduleData.map((item, index) => (
            <motion.div
              key={item.day}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-white`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg">{item.day}</h3>
                  <p className={`text-lg font-medium ${item.day === "Domingos" ? "text-gray-500" : "text-gray-700"
                    }`}>
                    {item.hours}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Información Adicional */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          {/* Horario Especial */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-3">¡Horario Especial!</h3>
            <p className="text-orange-100 mb-4">
              Los martes y jueves extendemos nuestro horario hasta las 7:00 PM para tu comodidad.
            </p>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-sm font-medium">Martes y Jueves: 8:00 AM - 7:00 PM</p>
            </div>
          </div>

          {/* Nota Importante */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <h4 className="font-semibold text-blue-900 mb-2">📝 Nota Importante</h4>
            <p className="text-blue-800 text-sm">
              Para consultas urgentes fuera de horario, puedes contactarnos por WhatsApp
              y te responderemos lo antes posible.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
