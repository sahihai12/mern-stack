import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './_lib/assets/theme/globals.scss';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie | Online Watch",
  description: "For Learning purpose",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.className}>layout{children}</body>
    </html>
  );
}
