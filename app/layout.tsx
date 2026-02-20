import type { Metadata } from "next";
import { Playfair_Display, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LUFiS | MVP Development Studio",
  description:
    "BtoB向けMVP爆速開発スタジオ。UI/UXデザインからAI・決済バックエンドまで一気通貫で開発。",
  openGraph: {
    title: "LUFiS | MVP Development Studio",
    description:
      "BtoB向けMVP爆速開発スタジオ。UI/UXデザインからAI・決済バックエンドまで一気通貫で開発。",
    url: "https://lufis.co.jp",
    siteName: "LUFiS",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${playfairDisplay.variable} ${notoSansJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
