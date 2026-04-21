"use client";

import { useEffect, useRef, useState } from "react";

const TOTAL_FRAMES = 120;
const FPS = 24;
const FRAME_DURATION = 1000 / FPS;

export function SequenceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const lastDrawTimeRef = useRef<number>(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let isActive = true;

    const preloadImages = async () => {
      const promises: Promise<void>[] = [];
      const imagesArray: HTMLImageElement[] = new Array(TOTAL_FRAMES);

      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        const frameString = i.toString().padStart(3, "0");
        const src = `${window.location.origin}/hero-sequence-watermark-free/frame_${frameString}.jpg`;

        const promise = new Promise<void>((resolve) => {
          img.onload = () => {
            imagesArray[i - 1] = img;
            resolve();
          };
          img.onerror = (err) => {
            console.error(`[Canvas Error] Failed to load frame: ${src}`, err);
            // Assign anyway to maintain strict index sizing, though drawing will skip it
            imagesArray[i - 1] = img;
            resolve();
          };
          // Start loading the image
          img.src = src;
        });

        promises.push(promise);
      }

      // Wait for all images to settle (load or error)
      await Promise.all(promises);

      if (isActive) {
        imagesRef.current = imagesArray;
        setLoaded(true);
      }
    };

    preloadImages();

    // Cleanup
    return () => {
      isActive = false;
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = (time: number) => {
      if (time - lastDrawTimeRef.current >= FRAME_DURATION) {
        const frameIndex = currentFrameRef.current;
        const img = imagesRef.current[frameIndex];

        // Ensure image exists, is complete, and has dimensions before attempting drawImage
        if (img && img.complete && img.naturalWidth !== 0 && img.naturalHeight !== 0) {
          const { width, height } = canvas.getBoundingClientRect();
          const dpr = window.devicePixelRatio || 1;
          
          if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
            canvas.width = width * dpr;
            canvas.height = height * dpr;
          }

          const cW = canvas.width;
          const cH = canvas.height;
          const iW = img.naturalWidth;
          const iH = img.naturalHeight;

          // Mimic 'object-fit: cover' behavior exactly
          const scale = Math.max(cW / iW, cH / iH);
          const drawW = iW * scale;
          const drawH = iH * scale;
          
          // Center the image
          const x = (cW - drawW) / 2;
          const y = (cH - drawH) / 2;

          ctx.clearRect(0, 0, cW, cH);
          ctx.drawImage(img, x, y, drawW, drawH);
        }

        currentFrameRef.current = (frameIndex + 1) % TOTAL_FRAMES;
        lastDrawTimeRef.current = time;
      }
      requestRef.current = requestAnimationFrame(render);
    };

    requestRef.current = requestAnimationFrame(render);

    return () => cancelAnimationFrame(requestRef.current);
  }, [loaded]);

  return (
    <div className="absolute inset-0 z-0 bg-black pointer-events-none overflow-hidden">
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", opacity: loaded ? 1 : 0 }}
        className="absolute inset-0 block transition-opacity duration-1000"
      />
      
      {/* Fallback loading spinner */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
           <div className="w-10 h-10 rounded-full border-4 border-t-[#FCD000] border-[#333333] animate-spin"/>
        </div>
      )}

      {/* Subdued overlay to guarantee text readability from the 50% opacity requirement plus a bottom fade block for section transitioning smoothly */}
      <div className="absolute inset-0 z-10 bg-black/50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
    </div>
  );
}
