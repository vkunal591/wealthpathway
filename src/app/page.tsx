// app/page.tsx (or pages/index.tsx if using the `pages` directory)
'use client'

import { useState, useEffect } from "react";
import HeroSection from "@/Components/Common/HeroSection";
import OurClients from "@/Components/Common/OurClients";
import Loader from "@/Components/Common/Loader"; // Assuming you have a Loader component
import ColorChangeText from "./components/ColorChangeText";
import DoesDifferect from "./components/DoesDifferect";
import CanHelp from "./components/CanHelp";
import OurExpert from "@/Components/Common/OurExpert";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (replace with actual data fetching if needed)
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 1 second
    }, 200);

    // Cleanup timeout on unmount
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; // Display loader while loading
  }

  return (
    <div>
      <HeroSection />
      <OurClients />
      <ColorChangeText text="Traditional wealth management is broken & you need a better way to manage your money. Using unbiased data driven decisions, we ensure your investment journey is successful so you can focus on what matters most to you" />

      <DoesDifferect />

      <CanHelp />
      <OurExpert />
      <div className="h-screen">
        .

      </div>
    </div>
  );
}
