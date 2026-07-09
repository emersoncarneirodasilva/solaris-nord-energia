"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Importação necessária
import { Menu, X } from "lucide-react";
import logo from "../../../public/images/logo.webp";
import { ThemeToggle } from "../ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Identifica a página atual

  const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE || "";
  const message = "Olá! Gostaria de mais informações sobre energia solar.";
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

  const links = [
    { name: "Benefícios", href: "#beneficios" },
    { name: "Processo", href: "#processo" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "FAQ", href: "#faq" },
  ];

  // Lógica para garantir que os links de âncora funcionem de qualquer página
  const getHref = (href: string) => {
    return pathname === "/" ? href : `/${href}`;
  };

  return (
    <header className="w-full bg-navbar border-b border-gray-200/10 relative z-50">
      <div className="site-container py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 shrink min-w-0">
          <div className="w-12 h-12 relative shrink-0">
            <Image
              src={logo}
              alt="Solaris Nord Energia"
              fill
              sizes="48px"
              className="object-contain"
              priority
            />
          </div>
          <span className="text-2xl lg:text-3xl font-bold text-primary tracking-wide font-headline wrap-break-word hyphens-auto leading-tight">
            Solaris Nord Energia
          </span>
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center justify-center text-sm lg:text-base gap-6 lg:gap-8 px-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={getHref(link.href)}
              className="text-foreground/80 hover:text-secondary transition-colors font-medium whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Ações Desktop */}
        <div className="hidden md:flex shrink-0 gap-6">
          <ThemeToggle />
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary-dark hover:brightness-125 text-white px-4 py-1.5 lg:px-6 lg:py-2.5 rounded-full font-semibold hover:scale-[1.02] transition-all duration-300 shadow-md text-sm lg:text-base text-center leading-tight flex items-center justify-center"
          >
            <span className="whitespace-nowrap">Fale no WhatsApp</span>
          </a>
        </div>

        {/* Botão Hamburger */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-gray-200/20 p-6 flex flex-col gap-4 md:hidden shadow-xl animate-in slide-in-from-top-5">
          <div className="flex items-center justify-between pb-2 border-b border-gray-200/10">
            <span className="text-sm font-medium text-foreground/60">
              Tema:
            </span>
            <ThemeToggle />
          </div>

          {links.map((link) => (
            <Link
              key={link.name}
              href={getHref(link.href)}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-foreground/80 py-2 border-b border-gray-200/10"
            >
              {link.name}
            </Link>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary-dark text-white px-6 py-3 rounded-full font-semibold text-center mt-2"
          >
            Fale no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
