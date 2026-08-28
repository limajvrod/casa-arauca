import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://casa-arauca-portfolio.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Casa Araucá — Hospedagem entre a natureza e o silêncio",
    template: "%s — Casa Araucá",
  },
  description:
    "Casa Araucá é uma hospedagem boutique cercada pela natureza, pensada para quem busca descanso, privacidade e experiências autênticas. Projeto conceitual de portfólio assinado pela NORTE 34.",
  keywords: [
    "pousada boutique",
    "hospedagem de alto padrão",
    "hotel na natureza",
    "descanso",
    "Casa Araucá",
  ],
  openGraph: {
    title: "Casa Araucá — Hospedagem entre a natureza e o silêncio",
    description:
      "Uma experiência de hospedagem entre a natureza, o silêncio e o essencial. Projeto conceitual de portfólio.",
    url: siteUrl,
    siteName: "Casa Araucá",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#233426",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="bg-paper font-body text-ink antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-forest focus:px-4 focus:py-2 focus:text-sm focus:text-cream"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
