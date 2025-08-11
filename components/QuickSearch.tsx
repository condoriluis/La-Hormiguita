"use client";
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { HiSearch, HiX, HiShoppingBag } from 'react-icons/hi';
import products from '../lib/productsData';
import { Product } from '../lib/productsData';

interface QuickSearchProps {
    placeholder?: string;
    className?: string;
}

export default function QuickSearch({ placeholder = "Buscar productos...", className = "" }: QuickSearchProps) {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const searchRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setQuery('');
                setSelectedIndex(-1);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (query.trim() === '') {
            setFilteredProducts([]);
            setIsOpen(false);
            return;
        }

        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5); // Limitar a 5 resultados

        setFilteredProducts(filtered);
        setIsOpen(filtered.length > 0);
        setSelectedIndex(-1);
    }, [query]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!isOpen || filteredProducts.length === 0) return;

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex(prev =>
                    prev < filteredProducts.length - 1 ? prev + 1 : prev
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
                break;
            case 'Enter':
                e.preventDefault();
                if (selectedIndex >= 0) {
                    handleProductSelect(filteredProducts[selectedIndex]);
                }
                break;
            case 'Escape':
                setIsOpen(false);
                setQuery('');
                setSelectedIndex(-1);
                inputRef.current?.blur();
                break;
        }
    };

    const handleProductSelect = (product: Product) => {
        const productIndex = products.findIndex(p => p.title === product.title);
        if (productIndex !== -1) {
            router.push(`/products/${productIndex}`);
            setIsOpen(false);
            setQuery('');
            setSelectedIndex(-1);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const clearSearch = () => {
        setQuery('');
        setIsOpen(false);
        setSelectedIndex(-1);
        inputRef.current?.focus();
    };

    return (
        <div ref={searchRef} className={`relative ${className}`}>
            {/* Input de búsqueda */}
            <div className="relative">
                <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                    ref={inputRef}
                    type="text"
                    placeholder={placeholder}
                    value={query}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onFocus={() => query.trim() !== '' && filteredProducts.length > 0 && setIsOpen(true)}
                    className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                />
                {query && (
                    <button
                        onClick={clearSearch}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <HiX className="w-5 h-5" />
                    </button>
                )}
            </div>

            {/* Dropdown de resultados */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-96 overflow-y-auto">
                    {filteredProducts.map((product, index) => (
                        <div
                            key={index}
                            onClick={() => handleProductSelect(product)}
                            className={`flex items-center space-x-3 p-3 cursor-pointer transition-colors ${index === selectedIndex
                                    ? 'bg-blue-50 border-l-4 border-l-blue-500'
                                    : 'hover:bg-gray-50'
                                } ${index === 0 ? 'rounded-t-xl' : ''} ${index === filteredProducts.length - 1 ? 'rounded-b-xl' : ''
                                }`}
                        >
                            <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                                <HiShoppingBag className="w-6 h-6 text-gray-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    {product.title}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {product.offerPrice ? (
                                        <>
                                            <span className="text-blue-600 font-semibold">Bs {product.offerPrice}</span>
                                            <span className="line-through ml-2">Bs {product.price}</span>
                                        </>
                                    ) : (
                                        <span className="font-semibold">Bs {product.price}</span>
                                    )}
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <div className={`w-2 h-2 rounded-full ${product.stock === 0 ? 'bg-gray-400' : 'bg-green-500'
                                    }`}></div>
                            </div>
                        </div>
                    ))}

                    {/* Ver todos los resultados */}
                    <div className="border-t border-gray-200 p-3">
                        <button
                            onClick={() => {
                                router.push(`/products?search=${encodeURIComponent(query)}`);
                                setIsOpen(false);
                                setQuery('');
                            }}
                            className="w-full text-center text-blue-600 hover:text-blue-800 font-medium text-sm py-2 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                            Ver todos los resultados ({filteredProducts.length})
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
