'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface DecryptedTextProps {
    text: string;
    speed?: number;
    maxIterations?: number;
    sequential?: boolean;
    revealDirection?: 'start' | 'end' | 'center';
    useOriginalCharsOnly?: boolean;
    characters?: string;
    className?: string;
    parentClassName?: string;
    encryptedClassName?: string;
    animateOn?: 'view' | 'hover';
}

export default function DecryptedText({
    text,
    speed = 50,
    maxIterations = 10,
    sequential = false,
    revealDirection = 'start',
    useOriginalCharsOnly = false,
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
    className = '',
    parentClassName = '',
    encryptedClassName = '',
    animateOn = 'hover',
}: DecryptedTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const [isHovering, setIsHovering] = useState(false);
    const [isScrambling, setIsScrambling] = useState(false);
    const revealedIndices = useRef(new Set<number>());
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isHovering) {
            setIsScrambling(true);
            interval = setInterval(() => {
                setDisplayText((currentText) => {
                    if (sequential) {
                        if (revealedIndices.current.size < text.length) {
                            const nextIndex = getNextIndex(revealedIndices.current);
                            revealedIndices.current.add(nextIndex);
                            const newText = text
                                .split('')
                                .map((char, i) =>
                                    revealedIndices.current.has(i)
                                        ? char
                                        : characters[Math.floor(Math.random() * characters.length)]
                                )
                                .join('');
                            return newText;
                        } else {
                            clearInterval(interval);
                            setIsScrambling(false);
                            return text;
                        }
                    } else {
                        return text
                            .split('')
                            .map((char, i) => {
                                if (char === ' ') return ' ';
                                if (revealedIndices.current.has(i)) return char;
                                return Math.random() > 0.1
                                    ? characters[Math.floor(Math.random() * characters.length)]
                                    : char;
                            })
                            .join('');
                    }
                });
            }, speed);
        } else {
            setDisplayText(text);
            revealedIndices.current.clear();
            setIsScrambling(false);
        }

        return () => clearInterval(interval);
    }, [isHovering, text, speed, sequential, characters]);

    const getNextIndex = (revealedSet: Set<number>) => {
        const textLength = text.length;
        switch (revealDirection) {
            case 'start':
                return revealedSet.size;
            case 'end':
                return textLength - 1 - revealedSet.size;
            case 'center':
                const middle = Math.floor(textLength / 2);
                const offset = Math.floor(revealedSet.size / 2);
                return revealedSet.size % 2 === 0
                    ? middle + offset
                    : middle - offset - 1;
            default:
                return revealedSet.size;
        }
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    // For 'view' trigger, we might want to use IntersectionObserver, 
    // but 'hover' is user requested for "pop". 
    // For this implementation, let's keep it simple with hover 
    // or auto-trigger on mount if we prefer.
    // Actually, let's make it trigger on view *and* replay on hover.

    // Simplified version:
    // 1. Always show final text initially? No, we want the effect.
    // 2. Simplest is pure hover for "interactive" feel.

    return (
        <span
            className={parentClassName}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className={className}>
                {displayText.split('').map((char, index) => {
                    const isEncrypted = !revealedIndices.current.has(index) && isScrambling && char !== ' ';
                    return (
                        <span
                            key={index}
                            className={isEncrypted ? encryptedClassName : className}
                        >
                            {char}
                        </span>
                    )
                })}
            </span>
        </span>
    );
}
