import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZipJap | Learn and Practice Japanese",
  description: "App that help practice and learn Japanese in various ways",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Navbar /> */}
        <Toaster />
        <Header />
        <div className="w-1/2 mx-auto flex flex-col items-center gap-6 text-center sm:items-start sm:text-left"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
