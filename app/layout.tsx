import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Lukman Hakim",
  description: "Website Portofolio Lukman Hakim",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} antialiased`}>
        <Navbar />
        {children}
        <footer className="py-6 text-center bg-[#0d1117] border-t border-zinc-800">
          <p className="text-zinc-500 text-sm">
            © 2025 Lukman Hakim. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
