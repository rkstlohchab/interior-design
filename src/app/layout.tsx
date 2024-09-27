import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ConvexClientProvider } from "./providers/ConvexClientProvider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atom Designs",
  description: "Atom Designs is a design agency that specializes in creating beautiful places .",
};

import { Alata } from '@next/font/google';

const alata = Alata({
  subsets: ['latin'],
  weight: '400',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alata.className}>
      <body >
      <Header />
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
        <Footer />
      </body>
    </html>
  );
}
