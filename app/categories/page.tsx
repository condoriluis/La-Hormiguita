"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiSearch, HiFilter, HiViewBoards, HiViewList } from 'react-icons/hi';
import CategoryCard from '../../components/CategoryCard';
import { categories, Category } from '../../lib/categoriesData';

export default function CategoriesPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [selectedColor, setSelectedColor] = useState<string>('all');

    // Filtrar categorías
    const filteredCategories = categories.filter(category => {
        const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            category.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesColor = selectedColor === 'all' || category.color === selectedColor;

        return matchesSearch && matchesColor;
    });

    // Colores únicos para filtros
    const uniqueColors = ['all', ...Array.from(new Set(categories.map(cat => cat.color)))];

    // Total de productos
    const totalProducts = categories.reduce((sum, cat) => sum + cat.productCount, 0);

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Nuestras Categorías
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Explora nuestra amplia gama de productos organizados por categorías especializadas
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-8 flex justify-center space-x-8"
                    >
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600">{categories.length}</div>
                            <div className="text-sm text-gray-600">Categorías</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-600">{totalProducts}</div>
                            <div className="text-sm text-gray-600">Productos</div>
                        </div>
                    </motion.div>
                </div>

                {/* Filtros y Controles */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <div className="flex flex-col lg:flex-row gap-4 items-center">
                        {/* Búsqueda */}
                        <div className="flex-1 w-full lg:w-auto">
                            <div className="relative">
                                <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Buscar categorías..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Filtro por color */}
                        <div className="flex items-center space-x-2">
                            <HiFilter className="w-5 h-5 text-gray-500" />
                            <select
                                value={selectedColor}
                                onChange={(e) => setSelectedColor(e.target.value)}
                                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                {uniqueColors.map(color => (
                                    <option key={color} value={color}>
                                        {color === 'all' ? 'Todos los colores' : color.charAt(0).toUpperCase() + color.slice(1)}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Cambiar vista */}
                        <div className="flex items-center space-x-2 bg-gray-100 rounded-xl p-1">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-lg transition-colors ${viewMode === 'grid'
                                    ? 'bg-white text-blue-600 shadow-sm'
                                    : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                <HiViewBoards className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded-lg transition-colors ${viewMode === 'list'
                                    ? 'bg-white text-blue-600 shadow-sm'
                                    : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                <HiViewList className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Resultados */}
                <div className="mb-6">
                    <p className="text-gray-600">
                        Mostrando {filteredCategories.length} de {categories.length} categorías
                    </p>
                </div>

                {/* Grid de Categorías */}
                {filteredCategories.length > 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className={`grid gap-6 ${viewMode === 'grid'
                            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                            : 'grid-cols-1'
                            }`}
                    >
                        {filteredCategories.map((category, index) => (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                <CategoryCard category={category} />
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No se encontraron categorías</h3>
                        <p className="text-gray-600">Intenta ajustar los filtros o términos de búsqueda</p>
                    </div>
                )}

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
                        <h2 className="text-2xl font-bold mb-4">¿No encuentras lo que buscas?</h2>
                        <p className="text-blue-100 mb-6">
                            Contáctanos directamente y te ayudaremos a encontrar el producto perfecto para ti
                        </p>
                        <a
                            href={`https://wa.me/59160605780?text=${encodeURIComponent('¡Hola! Necesito ayuda para encontrar productos específicos.')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                        >
                            <span>Contactar por WhatsApp</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
