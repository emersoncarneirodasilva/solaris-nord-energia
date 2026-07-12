"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin } from "lucide-react";
import { links } from "@/src/Constants/links";
import logo from "../../../public/images/logo.webp";

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();

  // Garante que links de âncora funcionem de qualquer subpágina
  const getHref = (href: string) => {
    return pathname === "/" ? href : `/${href}`;
  };

  return (
    <footer className="w-full bg-footer border-t border-gray-200/10 text-slate-300">
      <div className="site-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {/* Coluna 1: Logo e Branding */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-3 h-10 hover:opacity-90 transition-opacity"
            >
              <div className="w-10 h-10 relative shrink-0">
                <Image
                  src={logo}
                  alt="Solaris Nord Energia"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-semibold text-white font-headline">
                Solaris Nord Energia
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Líderes em soluções fotovoltaicas de alta performance para
              residências e empresas no Nordeste.
            </p>
            <div className="flex gap-2 mt-2">
              {/* Facebook */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-[#1877F2] transition-colors duration-300"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-[#E1306C] transition-colors duration-300"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-[#FF0000] transition-colors duration-300"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-white h-10 flex items-center">
              Links Rápidos
            </h3>
            <nav className="flex flex-col gap-2">
              {links.map((item) => (
                <Link
                  key={item.name}
                  href={getHref(item.href)}
                  className="text-sm text-slate-400 hover:text-secondary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Coluna 3: Regiões */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-white h-10 flex items-center">
              Regiões Atendidas
            </h3>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-slate-400">Natal RN (Sede)</p>
              <p className="text-sm font-semibold text-secondary">
                Atendimento em todo o Nordeste
              </p>
            </div>
          </div>

          {/* Coluna 4: Contato */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white h-10 flex items-center">
              Contato
            </h3>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-secondary shrink-0" />
                <span className="break-all">
                  contato@solarisnordenergia.com.br
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-secondary shrink-0" />
                (84) 0000-0000
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-secondary mt-0.5 shrink-0" />
                <span>Av. Qualquer Uma, 0000, Ponta Negra, Natal - RN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-12 pt-8 border-t border-gray-200/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {year} Solaris Nord Energia. Feito no Nordeste para o mundo.</p>
          <div className="flex gap-6">
            {["Privacidade", "Termos de Uso", "Trabalhe Conosco"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-slate-300 transition-colors"
                >
                  {item}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
