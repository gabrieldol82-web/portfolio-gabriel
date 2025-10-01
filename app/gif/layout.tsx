import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "Rick Roll",
    description: "Rick Astley te pegou",
};

export default function GifLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} antialiased`}>
        <section className="flex justify-center mt-24">
          {children}
        </section>
      </body>
    </html>
  );
}