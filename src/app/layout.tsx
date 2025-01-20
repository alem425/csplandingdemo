import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Montserrat,
  Inter,
  Albert_Sans,
} from "next/font/google";
import { LucideProps } from "lucide-react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const albert_sans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Code Super Powers Landing Demo",
  description: "Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${albert_sans.className} ${montserrat.className} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
