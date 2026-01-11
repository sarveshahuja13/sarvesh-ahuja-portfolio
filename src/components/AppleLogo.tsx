
'use client';

import React, { useState, useEffect } from 'react';
import MetallicPaint, { parseLogoImage } from './MetallicPaint';

export function AppleLogo() {
    const [imageData, setImageData] = useState<ImageData | null>(null);

    useEffect(() => {
        async function loadDefaultImage() {
            try {
                const response = await fetch('/sa-logo.png');
                const blob = await response.blob();
                const file = new File([blob], "default.png", { type: blob.type });

                const parsedData = await parseLogoImage(file);
                setImageData(parsedData?.imageData ?? null);

            } catch (err) {
                console.error("Error loading default image:", err);
            }
        }

        loadDefaultImage();
    }, []);

    return (
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative">
            {imageData && (
                <MetallicPaint
                    imageData={imageData}
                    params={{
                        edge: 0.5,
                        patternBlur: 0.005,
                        patternScale: 3,
                        refraction: 0.02,
                        speed: 0.2,
                        liquid: 0.1
                    }}
                    className="w-full h-full"
                />
            )}
        </div>
    );
}
