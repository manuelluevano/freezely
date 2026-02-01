 "use client";

import { useState } from "react";
import Image from "next/image";
import fondo from "@/app/assets/fondo.png";
import logo from "@/app/assets/logo.png";
import { ProductCarousel } from "@/components/seccion/ProductCarousel";
import { VrfCta } from "@/components/seccion/VrfCta";
import { VrfSection } from "@/components/seccion/VrfSection";
import { ServicesGrid } from "@/components/seccion/ServicesGrid";
import { WhyChoose } from "@/components/seccion/WhyChoose";
import { TrustSection } from "@/components/seccion/TrustSection";
import { ContactSection } from "@/components/seccion/ContactSection";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "/contacto" },
  { label: "Nosotros", href: "/nosotros" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="absolute top-6 z-20 w-full">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border-b border-white/70 bg-white/70 px-4 py-0 backdrop-blur-md sm:px-6">
          <div className="flex items-center gap-3">
            <div className="relative h-16 w-28 overflow-visible">
              <Image
                src={logo}
                alt="Freezely"
                className="absolute -left-4 -top-8 h-36 w-44"
              />
            </div>
          </div>
          <nav className="hidden flex-1 items-center justify-center gap-10 text-lg font-semibold md:flex md:text-xl">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="border-b-2 border-transparent pb-1 transition-all duration-200 hover:border-slate-900 hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow-sm transition hover:bg-white md:hidden"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                fill="currentColor"
                d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z"
              />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="mx-auto mt-3 w-full max-w-6xl px-6 md:hidden">
            <div className="rounded-3xl border border-white/70 bg-white/90 p-4 text-base font-semibold text-slate-800 shadow-lg backdrop-blur-md">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-2xl px-4 py-3 transition hover:bg-slate-100"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="inicio" className="relative">
          <div className="relative h-[680px] w-full">
            <Image
              src={fondo}
              alt="Instalación HVAC"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/30 to-transparent" />
            <div className="absolute inset-0 flex items-end">
              <div className="mx-auto w-full max-w-6xl px-6 pb-40">
                <h1 className="max-w-3xl text-4xl font-semibold text-white md:text-6xl">
                  Soluciones Integrales en HVAC para Empresas
                </h1>
                <a
                  href="https://wa.me/523315350444"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-md transition hover:bg-blue-700 md:text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicita tu cotizacion hoy!
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="bg-white">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-20 text-center">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-4xl">
              ¿Busca una solución confiable, eficiente y profesional para sus
              necesidades de climatización y refrigeración?
            </h2>
            <p className="mt-8 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
              En FREEZELY, ofrecemos servicios especializados en venta,
              instalación, mantenimiento y reparación de sistemas HVAC Y
              REFRIGERACIÓN para empresas, residencias, oficinas, comercios e
              industrias.
            </p>
          </div>
        </section>

        <ProductCarousel />
        <VrfCta />
        <VrfSection />
        <ServicesGrid />
        <WhyChoose />
        <TrustSection />
        <ContactSection />
      </main>

     
    </div>
  );
}
