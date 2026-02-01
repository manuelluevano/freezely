import Image from "next/image";
import vrfImage from "@/app/productos/WhatsApp Image 2026-01-31 at 21.20.36.jpeg";

export function VrfSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center">
        <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
          Sistemas VRF de Alta Eficiencia
        </h2>
        <p className="mt-3 text-base font-medium text-slate-700">
          Tecnología VRF para Proyectos de Climatización
        </p>
        <p className="mt-3 max-w-3xl text-base leading-6 text-slate-600 md:text-lg">
          Los sistemas VRF (Variable Refrigerant Flow) optimizan el flujo de
          refrigerante de acuerdo con la carga térmica real, logrando un
          desempeño eficiente y confiable.
        </p>
        <p className="mt-4 text-base font-semibold text-slate-700">
          Edificios corporativos · Hospitales · Hoteles · Centros comerciales ·
          Proyectos de gran escala
        </p>
        <div className="mt-10 w-full">
          <div className="relative h-[420px] w-full">
            <Image
              src={vrfImage}
              alt="Sistemas VRF"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
