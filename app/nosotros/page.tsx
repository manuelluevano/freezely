import Image from "next/image";
import logo from "@/app/assets/logo.png";

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="px-6 py-6">
        <a
          href="/"
          className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-base font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
        >
          <span className="text-2xl leading-none">←</span>
          Volver al inicio
        </a>
      </header>
      <main className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 px-6 pb-16 text-center">
        <Image src={logo} alt="Freezely" className="h-20 w-20" />
        <div className="space-y-6 text-lg text-slate-700 md:text-xl">
          <p>
            En FREEZELY somos una empresa especializada en soluciones integrales
            de HVAC y refrigeración, enfocada en brindar servicios confiables,
            eficientes y de alto rendimiento para empresas, comercios, oficinas,
            residencias e industrias.
          </p>
          <p>
            Contamos con más de 10 años de experiencia en el sector, respaldados
            por un equipo técnico certificado, comprometido con la calidad, la
            seguridad y la eficiencia energética en cada proyecto que
            desarrollamos.
          </p>
          <p>
            Nuestro enfoque se basa en el análisis técnico, el diseño a la medida
            y la correcta ejecución, garantizando sistemas que cumplen con los
            estándares normativos y contribuyen a la continuidad operativa de
            nuestros clientes.
          </p>
          <p>
            En FREEZELY trabajamos como aliados estratégicos, ofreciendo atención
            personalizada, soluciones escalables y soporte constante para
            asegurar ambientes confortables y óptimos en todo momento.
          </p>
        </div>
        <a
          href="https://wa.me/523315350444"
          className="rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-blue-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hablar con un asesor
        </a>
      </main>
    </div>
  );
}
