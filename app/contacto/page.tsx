"use client";

import Image from "next/image";
import logo from "@/app/assets/logo.png";

function buildMailto(formData: FormData) {
  const nombre = String(formData.get("nombre") ?? "");
  const empresa = String(formData.get("empresa") ?? "");
  const correo = String(formData.get("correo") ?? "");
  const telefono = String(formData.get("telefono") ?? "");
  const mensaje = String(formData.get("mensaje") ?? "");

  const subject = "Solicitud de cotización";
  const body = [
    `Nombre: ${nombre}`,
    `Empresa: ${empresa}`,
    `Correo: ${correo}`,
    `Teléfono: ${telefono}`,
    "",
    "Mensaje:",
    mensaje,
  ]
    .join("\n")
    .trim();

  return `mailto:freeezely.hvac@outlook.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

export default function ContactoPage() {
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
      <main className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-16 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="space-y-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <Image src={logo} alt="Freezely" className="h-45 w-45" />
            <p className="max-w-lg text-lg text-slate-600">
              Nuestro equipo está listo para brindarte atención especializada y
              una solución eficiente en climatización y refrigeración,
              adaptada a las necesidades de tu empresa, comercio o industria.
            </p>
          </div>

          <div className="pt-8 space-y-2 text-lg text-slate-700">
            <p className="font-semibold">¿Prefieres atención inmediata?</p>
            <p>Tel.: 331 535 0444</p>
            <p>Correo: freeezely.hvac@outlook.com</p>
          </div>

          <p className="max-w-md pt-8 text-base text-slate-500">
            Tu información es confidencial y será utilizada únicamente para
            brindarte atención y seguimiento a tu solicitud.
          </p>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-lg">
          <h1 className="text-center text-4xl font-semibold text-slate-900">
            Solicita tu cotización
          </h1>
          <form
            className="mt-8 space-y-5"
            onSubmit={(event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              window.location.href = buildMailto(formData);
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-base font-semibold text-slate-700">
                Nombre
                <input
                  type="text"
                  name="nombre"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-lg focus:border-blue-500 focus:outline-none"
                />
              </label>
              <label className="text-base font-semibold text-slate-700">
                Empresa (opcional)
                <input
                  type="text"
                  name="empresa"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-lg focus:border-blue-500 focus:outline-none"
                />
              </label>
            </div>
            <label className="text-base font-semibold text-slate-700">
              Correo electronico
              <input
                type="email"
                name="correo"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-lg focus:border-blue-500 focus:outline-none"
              />
            </label>
            <label className="text-base font-semibold text-slate-700">
              Telefono
              <input
                type="tel"
                name="telefono"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-lg focus:border-blue-500 focus:outline-none"
              />
            </label>
            <label className="text-base font-semibold text-slate-700">
              Mensaje
              <textarea
                rows={4}
                name="mensaje"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-lg focus:border-blue-500 focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="mx-auto block rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-blue-700"
            >
              Solicitar cotización
            </button>
            <p className="text-center text-base text-slate-500">
              Sin compromiso · Respuesta rápida · Atención personalizada
            </p>
          </form>
        </section>
      </main>
    </div>
  );
}
