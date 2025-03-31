"use client";

import React, { useEffect, useState } from "react";
import ServiceHeroSection from "./components/ServiceHeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import Loader from "@/Components/Common/Loader";
import ScrollSections from "../components/ScrollerSection";

export default function Page() {
  // Renamed from `page` to `Page`
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
    <div className="bg-white text-gray-800">
      <ServiceHeroSection />
      <WhyChooseUs />
      <ScrollSections />
    </div>
  );
}
