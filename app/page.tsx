import Link from 'next/link';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Schedule from '../components/Schedule';
import GoogleMap from '../components/GoogleMap';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProductGrid />
      <Schedule />
      <GoogleMap />
      <ContactSection />

      {/* Botón de ejemplo para el modal */}
      <div className="fixed bottom-6 right-6 z-40">
        <Link
          href="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <span>Ver Catálogo</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
