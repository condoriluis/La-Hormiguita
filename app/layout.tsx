
import type { ReactNode } from "react";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: 'La Hormiguita - Venta de Accesorios Tecnológicos',
  description: 'Tienda online de accesorios tecnológicos de alta calidad. Audífonos, micrófonos, soportes y más.',
  keywords: 'accesorios, tecnología, audífonos, micrófonos, soportes, cables, periféricos',
  authors: [{ name: 'La Hormiguita' }],
  creator: 'La Hormiguita',
  publisher: 'La Hormiguita',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/assets/images/favicon.png",
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'La Hormiguita - Venta de Accesorios Tecnológicos',
    description: 'Tienda online de accesorios tecnológicos de alta calidad.',
    url: 'https://la-hormiguita.vercel.app',
    siteName: 'La Hormiguita',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Hormiguita - Venta de Accesorios Tecnológicos',
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
