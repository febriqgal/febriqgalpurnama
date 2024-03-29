import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import { Providers } from "../providers";
import Navbar from "../_components/Navbar";
import { AppConfig } from "../_constant/AppConfig";

const inter = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${AppConfig.title}`,
  description: `${AppConfig.description}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-primary`}>
        <Providers>
          <Navbar />
          <main className="container mx-auto">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
