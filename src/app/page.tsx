// app/page.tsx (or pages/index.tsx if using the `pages` directory)
"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/Components/Common/HeroSection";
import OurClients from "@/Components/Common/OurClients";
import Loader from "@/Components/Common/Loader"; // Assuming you have a Loader component
import ColorChangeText from "./components/ColorChangeText";
import DoesDifferect from "./components/DoesDifferect";
import CanHelp from "./components/CanHelp";
import OurExpert from "@/Components/Common/OurExpert";
import DedicatedPartner from "@/Components/Common/DedicatedPartner";
import InsightClients from "@/Components/Common/InsightClients";
import GetInTouch from "@/Components/Common/GetInTouch";
import Footer from "@/Components/Common/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (replace with actual data fetching if needed)
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 1 second
    }, 2000);

    // Cleanup timeout on unmount
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; // Display loader while loading
  }

  return (
    <div className="bg-white">
      <HeroSection />
      <OurClients />
      <ColorChangeText
        text="Wealth1 leads India's Alternative Investments revolution, guiding discerning investors through their wealth creation journey with PMS and AIF solutions.
<br>
Our expertise in Portfolio Management Services (PMS) and Alternative Investment Funds (AIF) combines deep market insights with AI-driven strategies.
<br>
At Wealth1, we remain committed to delivering exceptional Alternative Investment solutions that preserve and grow wealth across generations."
      />

      <DoesDifferect />

      <CanHelp />
      <OurExpert />
      <DedicatedPartner />
      <InsightClients />
      <GetInTouch />
      <Footer />
    </div>
  );
}
