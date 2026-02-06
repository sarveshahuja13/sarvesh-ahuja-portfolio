'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function AttractorBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // --- Configuration ---
        const config = {
            particleCount: 60000,
            mobileParticleCount: 30000,
            color: 0x64ffda, // Muted cyan/green ("Neon Cyan" -ish, but softer)
            baseSize: 0.015,
            rotationSpeed: 0.0005, // Ultra slow drift
            cameraZ: 50,
        };

        // Detect Mobile (simple width check)
        const isMobile = window.innerWidth < 768;
        const finalParticleCount = isMobile ? config.mobileParticleCount : config.particleCount;

        // --- Scene Setup ---
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x050505, 0.02); // Distance fade

        // Orthographic might feel more "schematic/technical", but Perspective is more "cinematic".
        // Let's stick to Perspective for depth.
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = config.cameraZ;

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: "high-performance"
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio for performance
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0); // Transparent background

        containerRef.current.appendChild(renderer.domElement);

        // --- Geometry Generation (Thomas Attractor) ---
        // Equations:
        // dx/dt = -b*x + sin(y)
        // dy/dt = -b*y + sin(z)
        // dz/dt = -b*z + sin(x)

        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(finalParticleCount * 3);

        const b = 0.19; // Parameter for chaos
        let x = 0.1, y = 0.1, z = 0.1;
        const dt = 0.05; // Time step
        const scale = 4; // Visual scaling

        for (let i = 0; i < finalParticleCount; i++) {
            // Run simulation
            const dx = -b * x + Math.sin(y);
            const dy = -b * y + Math.sin(z);
            const dz = -b * z + Math.sin(x);

            x += dx * dt;
            y += dy * dt;
            z += dz * dt;

            // Store positions
            positions[i * 3] = x * scale;
            positions[i * 3 + 1] = y * scale;
            positions[i * 3 + 2] = z * scale;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        // --- Material ---
        // Using a custom texture or just a soft point
        // A generated radial gradient texture is best for "glow" without loading external assets
        const getTexture = () => {
            const size = 128;
            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext('2d');
            if (!ctx) return null;

            ctx.globalCompositeOperation = 'lighter';

            // Soft Glow
            const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
            gradient.addColorStop(0.2, 'rgba(100, 255, 218, 0.4)'); // Inner tint
            gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0)');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, size, size);

            const texture = new THREE.Texture(canvas);
            texture.needsUpdate = true;
            return texture;
        };

        const material = new THREE.PointsMaterial({
            color: config.color,
            size: 0.2, // Adjust based on preference
            map: getTexture(),
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
            depthWrite: false, // Important for additive blending overlap
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // --- Animation Loop ---
        let animationId: number;
        let isPaused = false;

        // Respect Reduced Motion
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mediaQuery.matches) {
            isPaused = true;
            // One render to show static state
            renderer.render(scene, camera);
        }

        // Visibility API
        const handleVisibilityChange = () => {
            if (document.hidden) {
                isPaused = true;
            } else {
                isPaused = mediaQuery.matches; // Only resume if reduced motion isn't on
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);

        const animate = () => {
            if (isPaused) return;

            particles.rotation.y += config.rotationSpeed;
            particles.rotation.z += config.rotationSpeed * 0.5;

            renderer.render(scene, camera);
            animationId = requestAnimationFrame(animate);
        };

        if (!isPaused) {
            animate();
        }

        // --- Resize Handler ---
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        };

        window.addEventListener('resize', handleResize);

        // --- Cleanup ---
        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            cancelAnimationFrame(animationId);

            // Three.js cleanup
            if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
                containerRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            if (material.map) material.map.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            id="attractor-bg"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1, // Behind everything
                backgroundColor: '#050505', // "Pure black or near-black"
                pointerEvents: 'none', // No interaction
            }}
        />
    );
}
