// Configuración de la empresa
export const companyConfig = {
    name: "La Hormiguita",
    description: "Accesorios Tecnológicos",
    phone: "59160605780", // Número de WhatsApp (formato internacional)
    whatsapp: "59160605780", // Mismo número para WhatsApp
    email: "info@lahormiguita.com",
    address: "El Alto, La Paz - Bolivia",
    website: "https://lahormiguita.com",

    // Configuración de envío
    shipping: {
        freeThreshold: 100, // Envío gratis a partir de Bs 100
        freeThresholdText: "Bs 100"
    },

    // Configuración de garantía
    warranty: {
        duration: "1 año",
        description: "Garantía completa"
    }
};

// Función para generar mensaje de WhatsApp con emojis básicos
export const generateWhatsAppMessage = (product: {
    title: string;
    price: number;
    offerPrice?: number;
    stock: number;
    quantity?: number;
}) => {
    const { title, price, offerPrice, stock, quantity = 1 } = product;

    return `¡Hola! Me interesa este producto:

*${title}*
Precio: Bs ${offerPrice || price}${offerPrice ? ` (antes Bs ${price})` : ''}
Stock: ${stock > 0 ? `${stock} disponibles` : 'Agotado'}
Cantidad: ${quantity}
${companyConfig.name} - ${companyConfig.description}

¿Podrías darme más información?`;
};

// Función para generar mensaje de WhatsApp SIN emojis (máxima compatibilidad)
export const generateWhatsAppMessageSimple = (product: {
    title: string;
    price: number;
    offerPrice?: number;
    stock: number;
    quantity?: number;
}) => {
    const { title, price, offerPrice, stock, quantity = 1 } = product;

    return `¡Hola! Me interesa este producto:

*${title}*
Precio: Bs ${offerPrice || price}${offerPrice ? ` (antes Bs ${price})` : ''}
Stock: ${stock > 0 ? `${stock} disponibles` : 'Agotado'}
Cantidad: ${quantity}
${companyConfig.name} - ${companyConfig.description}

¿Podrías darme más información?`;
};

// Función para generar URL de WhatsApp
export const generateWhatsAppUrl = (message: string) => {
    return `https://wa.me/${companyConfig.whatsapp}?text=${encodeURIComponent(message)}`;
};
