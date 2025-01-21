import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../compontents/navbar";

export const metadata: Metadata = {
  title: "Asgard Precision",
  description: "Asgard Precision, in good company",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
