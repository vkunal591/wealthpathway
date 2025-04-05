import type { Metadata } from "next";
import "./globals.css";
import { Rethink_Sans } from "next/font/google";
import Navbar2 from "@/Components/theam/components/Navbar2";
import TopHeader from "@/Components/theam/components/TopHeader";

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans", // Custom CSS variable
  subsets: ["latin"], // Optional: subsets to load
  weight: ["400", "500", "600", "700"], // Optional: specify the font weights you want
  display: "swap", // Optional: defines how the font is displayed
});

export const metadata: Metadata = {
  title: "PMS & AIF Investments",
  description: "PMS & AIF Investments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rethinkSans.variable} antialiased`}>
        <TopHeader />
        <Navbar2 />
        {children}
      </body>
    </html>
  );
}
