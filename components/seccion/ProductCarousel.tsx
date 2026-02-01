"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { productImages } from "@/lib/products";

const CARD_WIDTH = 380;
const CARD_GAP = 32;

export function ProductCarousel() {
  const [activeImage, setActiveImage] = useState<StaticImageData | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % productImages.length);
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative overflow-hidden">
          <div
            className="flex items-center gap-8 transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${index * (CARD_WIDTH + CARD_GAP)}px)`,
            }}
          >
            {productImages.map((item) => (
              <button
                key={item.alt}
                type="button"
                className="relative h-64 w-[380px] flex-shrink-0 overflow-hidden rounded-3xl shadow-lg md:h-72"
                onClick={() => setActiveImage(item.src)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          {productImages.map((item, dotIndex) => (
            <button
              key={item.alt}
              type="button"
              aria-label={`Ver ${item.alt}`}
              onClick={() => setIndex(dotIndex)}
              className={`h-1.5 w-10 rounded-full transition ${
                dotIndex === index ? "bg-slate-900" : "bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative h-[80vh] w-full max-w-5xl">
            <Image
              src={activeImage}
              alt="Vista completa"
              fill
              className="object-contain"
            />
          </div>
        </div>
      ) : null}

      <style jsx>{``}</style>
    </section>
  );
}
