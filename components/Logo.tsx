import React from 'react';

interface LogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16'
    };

    return (
        <div className={`${sizeClasses[size]} ${className}`}>
            <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                {/* Cabeza de la hormiga */}
                <ellipse cx="32" cy="24" rx="16" ry="12" fill="#60A5FA" />

                {/* Ojos */}
                <circle cx="26" cy="20" r="4" fill="white" />
                <circle cx="38" cy="20" r="4" fill="white" />
                <circle cx="26" cy="20" r="2" fill="#60A5FA" />
                <circle cx="38" cy="20" r="2" fill="#60A5FA" />
                <circle cx="26" cy="20" r="1" fill="black" />
                <circle cx="38" cy="20" r="1" fill="black" />

                {/* Sonrisa */}
                <path
                    d="M 24 28 Q 32 34 40 28"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                />

                {/* Antenas */}
                <path
                    d="M 24 16 Q 20 8 18 4"
                    stroke="#60A5FA"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                />
                <path
                    d="M 40 16 Q 44 8 46 4"
                    stroke="#60A5FA"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                />

                {/* Cuerpo */}
                <ellipse cx="32" cy="40" rx="12" ry="8" fill="#3B82F6" />
                <ellipse cx="32" cy="48" rx="8" ry="6" fill="#2563EB" />

                {/* Patas */}
                <path d="M 20 36 L 16 40" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
                <path d="M 44 36 L 48 40" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
                <path d="M 22 42 L 18 46" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
                <path d="M 42 42 L 46 46" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
            </svg>
        </div>
    );
} 