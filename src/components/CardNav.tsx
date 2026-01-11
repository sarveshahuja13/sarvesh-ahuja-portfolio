
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface NavItem {
    label: string;
    href: string;
    icon?: React.ReactNode;
}

interface CardNavProps {
    items: NavItem[];
    className?: string;
    activeItem?: string; // href
}

export const CardNav: React.FC<CardNavProps> = ({ items, className, activeItem }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // We find the index of the active item to potentially show a different state, 
    // but usually CardNav relies on hover for the "card" effect.
    // If we want a persistent active state, we can add it.

    return (
        <nav
            className={cn(
                "relative flex h-full items-center gap-2",
                className
            )}
            onMouseLeave={() => setHoveredIndex(null)}
        >
            {items.map((item, index) => {
                const isActive = activeItem === item.href;

                return (
                    <a
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "relative px-4 py-2 text-sm font-mono font-medium tracking-wider transition-colors duration-200 uppercase z-10",
                            isActive ? "text-cyan-400" : "text-gray-400 hover:text-cyan-300"
                        )}
                        onMouseEnter={() => setHoveredIndex(index)}
                    >
                        {/* The Text */}
                        <span className="relative z-10">{item.label}</span>

                        {/* The Hover Card Background */}
                        <AnimatePresence>
                            {hoveredIndex === index && (
                                <motion.div
                                    className="absolute inset-0 rounded-lg bg-cyan-500/10 border border-cyan-500/30"
                                    layoutId="card-nav-hover"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                        </AnimatePresence>

                        {/* Active Indicator (Underline or different glow) */}
                        {isActive && (
                            <motion.div
                                layoutId="card-nav-active"
                                className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                            />
                        )}
                    </a>
                );
            })}
        </nav>
    );
};

export default CardNav;
