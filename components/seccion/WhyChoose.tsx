import Image from "next/image";
import bannerImage from "@/app/productos/WhatsApp Image 2026-02-04 at 10.45.03.jpeg";

const reasons = [
  "Servicio técnico certificado",
  "Respuesta rápida y atención personalizada",
  "Ahorro energético garantizado",
  "Cumplimiento de normativas y estándares industriales",
];

export function WhyChoose() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-6xl px-6 text-center">
        <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
          ¿Por qué elegirnos?
        </h2>
        <p className="mt-3 text-base text-slate-600 md:text-lg">
          Experiencia, eficiencia y servicio técnico certificado que respaldan
          cada proyecto.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-6 text-base font-semibold text-slate-700 shadow-sm"
            >
              <div className="mb-3 text-lg">⚡</div>
              {reason}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 w-full overflow-hidden shadow-lg">
        <div className="relative h-40 w-full md:h-48">
          <Image
            src={bannerImage}
            alt="Agenda tu servicio"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white">
            <p className="text-xl font-semibold md:text-2xl">
              Agenda tu servicio ahora
            </p>
            <a
              href="https://wa.me/523315350444"
              className="inline-flex rounded-full bg-red-600 px-6 py-2 text-base font-semibold text-white shadow-md transition hover:bg-red-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
