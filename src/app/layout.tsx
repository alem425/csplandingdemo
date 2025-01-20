import type { Metadata } from "next";
import { Montserrat, Inter, Albert_Sans } from "next/font/google";
import "./globals.css";

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
      className={` ${albert_sans.className}  ${inter.className} ${montserrat.className} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
