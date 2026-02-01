"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import { productImages } from "@/lib/products";

const CARD_WIDTH = 380;
const CARD_GAP = 32;

export function ProductCarousel() {
  const [activeImage, setActiveImage] = useState<StaticImageData | null>(null);
  const [index, setIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateIsDesktop = () => setIsDesktop(mediaQuery.matches);
    updateIsDesktop();
    mediaQuery.addEventListener("change", updateIsDesktop);
    return () => mediaQuery.removeEventListener("change", updateIsDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % productImages.length);
    }, 60000);
    return () => clearInterval(timer);
  }, [isDesktop]);

  useEffect(() => {
    if (!trackRef.current) return;
    trackRef.current.scrollTo({
      left: index * (CARD_WIDTH + CARD_GAP),
      behavior: "smooth",
    });
  }, [index]);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory items-center gap-6 overflow-x-auto pb-2 md:gap-8"
          >
            {productImages.map((item) => (
              <button
                key={item.alt}
                type="button"
                className="relative h-60 w-[280px] flex-shrink-0 snap-start overflow-hidden rounded-3xl shadow-lg sm:h-64 sm:w-[320px] md:h-72 md:w-[380px]"
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
