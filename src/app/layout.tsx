import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../providers";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import WhatsAppButton from "../components/Button/WhatsAppButton";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solaris Nord Energia | Energia Solar no Nordeste",
  description:
    "Reduza sua conta de energia em até 95% com a Solaris Nord Energia. Soluções personalizadas em energia solar para residências e empresas em todo o Nordeste. Solicite seu estudo de viabilidade!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <Navbar />
          {children}
          <WhatsAppButton />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
