import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ConvexClientProvider } from "./providers/ConvexClientProvider";

import localFont from 'next/font/local'
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atom Designs",
  description: "Atom Designs is a design agency that specializes in creating beautiful places .",
};

const myFont = localFont({
  src: '../../public/futura/FuturaLight.ttf',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myFont.className}>
      <body >
      <Header />
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
