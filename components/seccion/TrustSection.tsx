import Image from "next/image";
import trustImage from "@/app/productos/WhatsApp Image 2026-02-04 at 10.44.09.jpeg";

export function TrustSection() {
  return (
    <section className="bg-slate-100 py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-blue-500  bg-white px-6 py-6 text-base text-slate-700 shadow-md">
            Confíe en nosotros para mantener su ambiente laboral siempre a la
            temperatura ideal.
          </div>
          <div className="rounded-2xl border border-blue-500 bg-white px-6 py-16 text-center shadow-md">
            <p className="text-base font-medium text-slate-700">
              Soluciones técnicas diseñadas para cumplir los más altos
              estándares.
            </p>
            <a
              href="https://wa.me/523315350444"
              className="mt-5 inline-flex rounded-full bg-blue-600 px-6 py-2 text-base font-semibold text-white shadow-md transition hover:bg-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contactar
            </a>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl shadow-lg">
          <div className="relative h-[420px] w-full">
            <Image src={trustImage} alt="Proyecto Lunah" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
