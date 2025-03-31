import type { Metadata } from "next";
import { Cabin, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Common/Navbar";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Choose the weights you need
  variable: "--font-poppins", // Define a CSS variable for use in Tailwind
  display: "swap",
});

const cabin = Cabin({
  variable: "--font-cabin", // Custom CSS variable
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"], // Optional: include styles like italic if needed
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
      <body
        className={`${poppins.variable} ${cabin.variable} antialiased`}
      >
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
