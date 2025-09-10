import type { Metadata } from "next";
import { Inter, Roboto, Manrope, Open_Sans } from "next/font/google";
import "../styles/globals.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-manrope",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "HealKap",
  description: "Современная медицина для вас и вашей семьи",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${roboto.variable} ${manrope.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
