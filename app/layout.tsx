import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raindrop.io -- All-in-one bookmark manager",
  description: "A remake of Raindrop.io",
  icons: {
    icon: "https://miro.medium.com/v2/resize:fill:132:132/1*JtxOMEcB0N7yoGiHjFf1Gg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
