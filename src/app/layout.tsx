import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md. Shahidul Islam - Fullstack Developer",
  description: "Portfolio of Md. Shahidul Islam - Fullstack React & .NET Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-secondary text-white font-sans">
        {children}
      </body>
    </html>
  );
}
