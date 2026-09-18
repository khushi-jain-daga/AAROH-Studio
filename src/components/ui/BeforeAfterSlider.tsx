"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { SlidersHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeCaption?: string;
  afterCaption?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeCaption = "Initial Structure",
  afterCaption = "Completed Architecture",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  return (
    <div className="w-full space-y-3 select-none">
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        className="relative h-[360px] sm:h-[480px] md:h-[600px] w-full overflow-hidden cursor-ew-resize border border-stone-300/60 shadow-xl"
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt={afterCaption}
            fill
            className="object-cover pointer-events-none"
            priority
          />
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-charcoal-950/85 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-bronze-400 border border-bronze-400/40">
            After: {afterCaption}
          </div>
        </div>

        {/* Before Image (Clipped Overlay) */}
        <div
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full min-w-full">
            <Image
              src={beforeImage}
              alt={beforeCaption}
              fill
              className="object-cover pointer-events-none max-w-none"
              style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%" }}
            />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-charcoal-950/85 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-stone-300 border border-white/20">
              Before: {beforeCaption}
            </div>
          </div>
        </div>

        {/* Vertical Divider Handle Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-bronze-400 z-20 pointer-events-none shadow-[0_0_10px_rgba(197,160,89,0.8)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-charcoal-950 text-bronze-400 border-2 border-bronze-400 flex items-center justify-center shadow-2xl">
            <SlidersHorizontal className="w-4 h-4" />
          </div>
        </div>
      </div>

      <p className="text-center text-[10px] sm:text-xs uppercase tracking-[0.2em] text-stone-500">
        Drag slider left or right to reveal transformation
      </p>
    </div>
  );
}
