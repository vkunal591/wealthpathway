import type { Metadata } from "next";
import "./globals.css";
import { Rethink_Sans } from "next/font/google";
import Navbar2 from "@/Components/theam/components/Navbar2";
import TopHeader from "@/Components/theam/components/TopHeader";
import AnimatedCursor from "react-animated-cursor";
import Footer from "@/Components/theam/components/Footer";

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
        <Footer />
        <AnimatedCursor
          innerSize={20}
          outerSize={75}
          color="255, 171, 0"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={2}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
      </body>
    </html>
  );
}
