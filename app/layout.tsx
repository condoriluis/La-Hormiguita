
import type { ReactNode } from "react";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: 'La Hormiguita - Accesorios Profesionales',
  description: 'Tienda online de accesorios tecnológicos de alta calidad. Audífonos, micrófonos, soportes y más. Envío gratis en compras mayores a Bs 350.',
  keywords: 'accesorios, tecnología, audífonos, micrófonos, soportes, cables, periféricos',
  authors: [{ name: 'La Hormiguita' }],
  creator: 'La Hormiguita',
  publisher: 'La Hormiguita',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'La Hormiguita - Accesorios Profesionales',
    description: 'Tienda online de accesorios tecnológicos de alta calidad. Envío gratis en compras mayores a Bs 350.',
    url: 'https://lahormiguita.com',
    siteName: 'La Hormiguita',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Hormiguita - Accesorios Profesionales',
    description: 'Tienda online de accesorios tecnológicos de alta calidad.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900 font-sans">
        <Header />
        <div className="pt-16 lg:pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
