import Image from "next/image";
import bgImage from "@/app/1.png";

const services = [
  "Proyectos de ingeniería, cálculo, diseño e instalación de sistemas HVAC y REFRIGERACIÓN",
  "Pólizas de mantenimiento periódico adaptadas a necesidades de empresas e industrias",
  "Optimización energética y modernización de sistemas existentes",
  "Atención urgente para empresas (servicio 24/7 disponible)",
  "Mantenimiento preventivo y correctivo",
  "Diagnóstico y reparación de equipos",
  "Venta y selección de equipos",
];

export function ServicesGrid() {
  return (
    <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={bgImage} alt="Servicios HVAC" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/45" />
        </div>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16 lg:flex-row">
        <div className="flex-1 text-white">
          <h3 className="text-3xl font-semibold italic md:text-4xl">
            Nuestros servicios incluyen:
          </h3>
          <p className="mt-5 text-lg text-white/90 md:text-xl">
            Asesoría directa con nuestro equipo
          </p>
          <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-white/25 bg-white/10 px-5 py-4 text-base text-white/85">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-xl">
              ✔
            </span>
            <span className="text-lg md:text-xl">
              Asesoría directa con nuestro equipo
            </span>
          </div>
          <a
            href="https://wa.me/523315350444"
            className="mt-10 inline-flex rounded-full bg-blue-600 px-7 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactar
          </a>
        </div>
        <div className="mt-10 flex-1 space-y-4 lg:mt-16">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-2xl bg-white px-5 py-4 text-base font-medium text-slate-900 shadow-md"
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
