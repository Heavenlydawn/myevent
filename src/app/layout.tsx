import type { Metadata } from "next";
import { Inter, Livvic } from "next/font/google"; 
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const livvic = Livvic({
  subsets: ["latin"],
  weight: "100"
});

export const metadata: Metadata = {
  title: "MyEvent",
  description: "The way it ought to be",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${livvic.className}`}>{children}</body>  {/* Apply both fonts */}
    </html>
  );
}
