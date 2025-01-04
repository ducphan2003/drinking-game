import type { Metadata } from "next";
import { Montserrat, Denk_One, Gluten, Handjet, Ruge_Boogie } from "next/font/google";
import "@/styles/globals.css";
import { JSX } from "react";

const montserrat = Montserrat({
  subsets: ["vietnamese", "latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
});

const gluten = Gluten({
  subsets: ["vietnamese", "latin"],
  variable: "--font-gluten",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
});

const handjet = Handjet({
  subsets: ["vietnamese", "latin"],
  variable: "--font-handjet",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
});

const rugeBoogie = Ruge_Boogie({
  subsets: ["vietnamese", "latin"],
  variable: "--font-rugeBoogie",
  weight: ["400"],
  style: ["normal"],
});

const denkOne = Denk_One({
  subsets: ["vietnamese", "latin"],
  variable: "--font-denkOne",
  weight: ["400"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "HeBe Beauty",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body
        id="portal-root"
        className={`${montserrat.variable} ${denkOne.variable} ${gluten.variable} ${handjet.variable} ${rugeBoogie.variable} font-montserrat flex flex-col`}
      >
        <div className="relative w-full max-w-[2200px]">{children}</div>
      </body>
    </html>
  );
}
