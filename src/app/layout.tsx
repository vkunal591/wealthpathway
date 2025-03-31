import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Common/Navbar";

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
      <body className={` antialiased`}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
