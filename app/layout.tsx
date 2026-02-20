import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
    title: "SoloRush MdB",
    description: "A NextJS mini-game by Laurent Sandalman Durup",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
