# 🛍️ Catálogo de Productos - Next.js

Este proyecto implementa un catálogo de productos completo y funcional usando Next.js 14, TypeScript, Tailwind CSS y Framer Motion.

## ✨ Características del Catálogo

### 🔍 **Búsqueda y Filtros**
- **Búsqueda en tiempo real** por nombre de producto
- **Filtros por categoría** (audio, cables, stands, microphones)
- **Filtros por rango de precio** (mínimo y máximo)
- **Filtros por disponibilidad** (en stock, agotados)
- **Ordenamiento** por nombre, precio o stock (ascendente/descendente)

### 📱 **Responsive Design**
- Diseño adaptativo para móviles, tablets y desktop
- Grid responsive que se ajusta automáticamente
- Navegación táctil optimizada

### 🎨 **UI/UX Moderna**
- Animaciones suaves con Framer Motion
- Hover effects y transiciones
- Badges de descuento y stock
- Sistema de rating visual
- Iconos de Heroicons

### 📄 **Paginación Inteligente**
- 8 productos por página
- Navegación entre páginas
- Indicador de resultados mostrados
- Reset automático de página al cambiar filtros

## 🎯 **Funcionalidades Implementadas**

### ✅ **Completado**
- [x] **Página Principal** (`app/page.tsx`) - Hero, categorías destacadas, productos destacados
- [x] **Catálogo de Productos** (`app/products/page.tsx`) - Lista completa con filtros, búsqueda y paginación
- [x] **Páginas de Producto Individual** (`app/products/[id]/page.tsx`) - Vista detallada de cada producto
- [x] **Página de Categorías** (`app/categories/page.tsx`) - Exploración por categorías con filtros
- [x] **Componentes Reutilizables** - ProductCard, CategoryCard, ProductModal, Pagination
- [x] **Sistema de Filtros** - Por categoría, precio, stock
- [x] **Búsqueda en Tiempo Real** - Filtrado instantáneo de productos
- [x] **Paginación** - Navegación por páginas con controles
- [x] **Modal de Vista Rápida** - Información del producto sin cambiar de página
- [x] **Integración con WhatsApp** - Consultas directas con información del producto
- [x] **Diseño Responsivo** - Adaptable a todos los dispositivos
- [x] **Animaciones** - Transiciones suaves con Framer Motion
- [x] **Navegación** - Header con menú y enlaces a todas las secciones

### 🔄 **En Desarrollo**
- [ ] **Sistema de Usuarios** - Registro, login y perfiles
- [ ] **Carrito de Compras** - Gestión de productos seleccionados
- [ ] **Sistema de Pedidos** - Proceso de checkout y confirmación
- [ ] **Panel de Administración** - Gestión de productos y categorías
- [ ] **Base de Datos** - Migración de datos hardcodeados a base de datos real

---

## 📁 **Estructura del Proyecto**

### **Páginas Principales**
```
app/
├── page.tsx                 # Página principal con hero y destacados
├── products/
│   ├── page.tsx            # Catálogo completo de productos
│   └── [id]/page.tsx       # Página individual de producto
├── categories/
│   └── page.tsx            # Página de categorías con filtros
└── layout.tsx               # Layout global con header y footer
```

### **Componentes Principales**
```
components/
├── ProductCard.tsx          # Tarjeta de producto con modal y WhatsApp
├── CategoryCard.tsx         # Tarjeta de categoría con diseño atractivo
├── ProductModal.tsx         # Modal de vista rápida del producto
├── ProductGrid.tsx          # Grid responsivo de productos
├── Pagination.tsx           # Componente de paginación
├── Header.tsx               # Navegación principal
├── Footer.tsx               # Pie de página
├── ContactSection.tsx       # Sección de contacto con formulario
└── WhatsAppButton.tsx       # Botón flotante de WhatsApp
```

### **Datos y Configuración**
```
lib/
├── productsData.ts          # Datos de productos (hardcodeados)
├── categoriesData.ts        # Datos de categorías con metadatos
└── config.ts                # Configuración de empresa y WhatsApp
```

---

## 🎨 **Página de Categorías** (`/categories`)

### **Características Principales**
- **Exploración Visual**: Categorías organizadas con imágenes atractivas
- **Filtros Inteligentes**: Búsqueda por nombre y filtro por colores temáticos
- **Vistas Múltiples**: Cambio entre vista de grid y lista
- **Estadísticas**: Contador de categorías y productos totales
- **Navegación Directa**: Enlaces directos a productos de cada categoría

### **Funcionalidades de Filtrado**
```typescript
// Filtros disponibles
- Búsqueda por texto (nombre y descripción)
- Filtro por color temático
- Vista de grid (3 columnas) o lista (1 columna)
- Ordenamiento automático por relevancia
```

### **Diseño de Tarjetas**
- **Imagen de Fondo**: Imágenes de alta calidad de Unsplash
- **Información Superpuesta**: Nombre, descripción y contador de productos
- **Iconos Temáticos**: Emojis representativos para cada categoría
- **Colores Dinámicos**: Gradientes únicos para cada categoría
- **Características**: Lista de características principales del producto

### **Integración con Productos**
```typescript
// Enlace directo a productos filtrados
<Link href={`/products?category=${category.id}`}>
  Ver Productos
</Link>
```

### **Ejemplo de Categoría**
```typescript
{
  id: "audio",
  name: "Audio y Sonido",
  description: "Audífonos, micrófonos y equipos de audio profesional",
  image: "https://images.unsplash.com/...",
  productCount: 3,
  icon: "🎧",
  color: "blue",
  features: [
    "Audífonos profesionales",
    "Micrófonos de estudio",
    "Equipos de audio",
    "Cables de audio"
  ]
}
```

## 🔧 Tecnologías Utilizadas

- **Next.js 14** - Framework de React con App Router
- **TypeScript** - Tipado estático para mejor desarrollo
- **Tailwind CSS** - Framework de CSS utility-first
- **Framer Motion** - Animaciones y transiciones
- **Heroicons** - Iconos SVG de alta calidad
- **React Hooks** - useState, useMemo, useEffect, useRef

## 📊 Estructura de Datos

```typescript
interface Product {
  title: string;        // Nombre del producto
  image: string;        // URL de la imagen
  price: number;        // Precio original
  offerPrice?: number;  // Precio con descuento (opcional)
  stock: number;        // Cantidad disponible
}
```

## 🆕 **Modal de Vista Rápida - Nueva Funcionalidad**

### ✨ **Características del Modal**
- **Apertura instantánea** al hacer clic en el icono del ojo
- **Sin navegación** - mantiene al usuario en la página actual
- **Información completa** del producto en un solo lugar
- **Selector de cantidad** para agregar al carrito
- **Botones de acción** (carrito, favoritos)
- **Características y beneficios** del producto
- **Cierre múltiple**: ESC, clic en backdrop, botón X

### 🎨 **Experiencia de Usuario**
- **Animaciones suaves** con Framer Motion
- **Backdrop con blur** para mejor enfoque
- **Scroll interno** si el contenido es muy largo
- **Responsive design** para móviles y desktop
- **Prevención de scroll** del fondo cuando está abierto

## 📱 **Integración con WhatsApp - Nueva Funcionalidad**

### ✨ **Características de WhatsApp**
- **Botón verde de WhatsApp** en lugar del carrito
- **Mensaje preformateado** con información del producto
- **Incluye cantidad seleccionada** en el modal
- **Información completa**: título, precio, stock, descuentos
- **Apertura directa** de WhatsApp Web/App
- **Configuración centralizada** del número de contacto

### 🔧 **Configuración Centralizada**
```typescript
// lib/config.ts
export const companyConfig = {
  name: "La Hormiguita",
  phone: "59170000000", // Cambiar por tu número real
  whatsapp: "59170000000"
};
```

### 📝 **Formato del Mensaje**
```
¡Hola! Me interesa este producto:

*Nombre del Producto*
Precio: Bs 79.9 (antes Bs 89.9)
Stock: 5 disponibles
Cantidad: 2
La Hormiguita - Accesorios Profesionales

¿Podrías darme más información?
```

### 🔧 **Solución de Compatibilidad de Emojis**
- **Problema**: Los emojis complejos pueden no mostrarse correctamente en WhatsApp
- **Solución**: Se usa formato de texto simple con negritas (*texto*)
- **Beneficio**: Máxima compatibilidad en todos los dispositivos y versiones de WhatsApp
- **Formato**: Solo se usan asteriscos para negritas, sin emojis especiales

### 🎯 **Beneficios para el Negocio**
- **Captura de leads** directa
- **Comunicación personalizada** con clientes
- **Información estructurada** del producto
- **Facilita la venta** por WhatsApp
- **Sin necesidad de carrito** complejo

### 🔧 **Cómo Implementar**
```
```
```

## 📞 **Sección de Contacto** (`#contacto`)

### **Características Principales**
- **Información de Contacto**: Teléfono, email, dirección y horarios
- **Formulario de Contacto**: Campos para nombre, email, teléfono y mensaje
- **Enlaces Directos**: Llamadas, emails y ubicación en Google Maps
- **Botón de WhatsApp**: Acceso directo para consultas rápidas
- **Diseño Responsivo**: Adaptable a todos los dispositivos

### **Funcionalidades del Formulario**
```typescript
// Campos disponibles
- Nombre y Apellido
- Email y Teléfono
- Selector de asunto (consulta, cotización, soporte)
- Área de mensaje personalizado
- Validación de campos
```

### **Información de Contacto**
- **Teléfono**: Enlace directo para llamadas
- **Email**: Enlace para enviar emails
- **Dirección**: Enlace a Google Maps
- **Horarios**: Lunes a Viernes 9:00 - 18:00
- **WhatsApp**: Botón de chat directo

### **Integración con Configuración**
```typescript
// Usa la configuración centralizada de la empresa
import { companyConfig } from "../lib/config";

const contactInfo = [
  {
    phone: companyConfig.phone,
    email: companyConfig.email,
    address: companyConfig.address
  }
];
```

### **3. ProductModal** (`components/ProductModal.tsx`) ⭐ **NUEVO**
- **Modal de vista rápida** sin navegación
- **Información completa del producto** con imagen, precio, stock y características
- **Selector de cantidad** para consultas
- **Botón de WhatsApp** para consultas directas
- **Captura de pantalla** ⭐ **NUEVA FUNCIONALIDAD**
- **Compartir captura** para WhatsApp y redes sociales
- **Cierre con ESC** o clic en backdrop
- **Animaciones suaves** con Framer Motion

## 🆕 **Captura de Pantalla - Nueva Funcionalidad**

### **Características Principales**
- **Captura del modal completo** con información del producto
- **Alta calidad** (escala 2x para mejor resolución)
- **Descarga automática** con nombre personalizado del producto
- **Compartir directo** usando Web Share API (en dispositivos compatibles)
- **Fallback inteligente** para dispositivos no compatibles

### **Funcionalidades Implementadas**

#### **1. Botón de Captura Simple**
```typescript
// Captura y descarga la imagen
const captureScreenshot = async () => {
  const canvas = await html2canvas(modalRef.current, {
    backgroundColor: '#ffffff',
    scale: 2, // Mayor calidad
    useCORS: true
  });
  // Descarga automática
};
```

#### **2. Compartir con Captura**
```typescript
// Intenta compartir directamente, sino descarga
const shareWithScreenshot = async () => {
  // Usa Web Share API si está disponible
  if (navigator.share && navigator.canShare({ files: [file] })) {
    await navigator.share({ files: [file] });
  } else {
    // Descarga y sugiere compartir por WhatsApp
    alert('Imagen descargada. Ahora puedes compartirla por WhatsApp desde tu galería.');
  }
};
```

### **Botones Disponibles**
- **📷 Capturar Pantalla**: Descarga la imagen del modal
- **📱 Compartir Captura**: Intenta compartir directamente o descarga
- **💬 Consultar por WhatsApp**: Envía mensaje con información del producto

### **Casos de Uso**
1. **Cliente quiere compartir** el producto con amigos
2. **Guardar información** del producto para consulta posterior
3. **Compartir en redes sociales** con captura profesional
4. **Enviar por WhatsApp** con imagen incluida
5. **Crear catálogos** personalizados

### **Compatibilidad**
- ✅ **Web Share API**: Dispositivos móviles modernos
- ✅ **Descarga automática**: Todos los navegadores
- ✅ **WhatsApp Web**: Compartir desde galería
- ✅ **Redes sociales**: Subir imagen capturada

### **1. ProductCard** (`components/ProductCard.tsx`)
- **Tarjeta individual del producto** con diseño atractivo
- **Imagen del producto** con badges de descuento y stock
- **Título clickeable** ⭐ **NUEVA FUNCIONALIDAD** - abre modal al hacer clic
- **Información de precio** con descuentos y ofertas
- **Estado del stock** con indicadores visuales
- **Botón de vista rápida** (icono del ojo) para abrir modal
- **Botón de WhatsApp** para consultas directas
- **Modal integrado** para vista rápida sin navegación
- **Animaciones hover** y transiciones suaves