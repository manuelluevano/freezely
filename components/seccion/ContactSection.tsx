import Image from "next/image";
import logo from "@/app/assets/logo.png";

export function ContactSection() {
  return (
    <section id="contacto" className="bg-slate-900 py-14 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
          <Image src={logo} alt="Freezely" className="h-28 w-28" />
          <h3 className="text-3xl font-semibold tracking-tight">Freezely</h3>
          <p className="max-w-xl text-base text-slate-200 md:text-lg">
            Contáctenos hoy para una cotización sin compromiso:
          </p>
          <div className="space-y-1 text-base text-slate-100 md:text-lg">
            <p>Cel.: 33 1535 0444</p>
            <p>Correo electrónico: freeezely.hvac@outlook.com</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 lg:items-end">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M13.5 9H16V6h-2.5C11.6 6 10 7.6 10 9.5V12H8v3h2v6h3v-6h2.2l.5-3H13V9.5c0-.3.2-.5.5-.5Z"
                />
              </svg>
            </div>
            <a
              href="https://wa.me/523315350444"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-md transition hover:bg-green-600"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M19.11 17.79c-.27-.14-1.6-.79-1.85-.88-.25-.09-.44-.14-.62.14-.18.27-.71.88-.87 1.06-.16.18-.32.2-.6.07-.27-.14-1.16-.43-2.21-1.36-.82-.73-1.38-1.63-1.54-1.9-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.06-.22-.53-.45-.46-.62-.46h-.53c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3s.99 2.67 1.12 2.85c.14.18 1.96 2.99 4.75 4.19.66.28 1.17.45 1.57.58.66.21 1.27.18 1.75.11.53-.08 1.6-.65 1.83-1.27.23-.62.23-1.15.16-1.27-.06-.12-.23-.18-.5-.32zm-3.08-12.45c-5.48 0-9.93 4.45-9.93 9.93 0 1.75.46 3.46 1.34 4.97L6 26.66l6.55-1.73c1.46.8 3.11 1.22 4.78 1.22 5.48 0 9.93-4.45 9.93-9.93 0-5.48-4.45-9.93-9.93-9.93zm0 18.09c-1.52 0-3.01-.41-4.31-1.18l-.31-.18-3.89 1.03 1.04-3.79-.2-.33c-.82-1.34-1.26-2.88-1.26-4.45 0-4.63 3.77-8.4 8.4-8.4 4.63 0 8.4 3.77 8.4 8.4 0 4.63-3.77 8.4-8.4 8.4z"
                />
              </svg>
            </a>
            <a
              href="mailto:freeezely.hvac@outlook.com"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-md transition hover:bg-blue-600"
              aria-label="Correo electrónico"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 4-8 5L4 9V7l8 5 8-5v2Z"
                />
              </svg>
            </a>
          </div>
          <div className="text-center text-sm text-slate-300 lg:text-right">
            <p>Cel.: 33 1535 0444</p>
            <p>freeezely.hvac@outlook.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
