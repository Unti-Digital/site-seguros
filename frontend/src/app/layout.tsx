import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./internal.css";
import "./chatbot.css";
import { Chatbot } from "@/components/chatbot/chatbot";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactModalProvider } from "@/components/contact/contact-modal";
import { MotionEnhancements } from "@/components/ui/motion-enhancements";
import { indexingEnabled, siteOrigin } from "@/lib/site-metadata";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nova Proposta Seguros | Proteção para o que mais importa",
  description:
    "Conheça seguros e soluções da Nova Proposta Seguros para sua família, saúde, veículo e empresa. Informação clara para proteger o que mais importa.",
  robots: { index: indexingEnabled, follow: indexingEnabled },
  ...(siteOrigin
    ? {
        metadataBase: new URL(siteOrigin),
        alternates: { canonical: siteOrigin },
      }
    : {}),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <ContactModalProvider>
          <a className="skip-link" href="#conteudo">
            Pular para o conteúdo
          </a>
          <SiteHeader />
          {children}
          <SiteFooter />
          <MotionEnhancements />
          <Chatbot />
        </ContactModalProvider>
      </body>
    </html>
  );
}
