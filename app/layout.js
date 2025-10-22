import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400","500","600","700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Manthan Moharana - Software Developer Portfolio",
  description: "Manthan Moharana is a software developer with six months of professional experience, specializing in building web applications with modern technologies like Next.js, React, and Tailwind CSS. Explore his portfolio of projects and get in touch.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden 
        dark:bg-darkBackground dark:text-primaryText`}
      >
        {children}
      </body>
    </html>
  );
}
