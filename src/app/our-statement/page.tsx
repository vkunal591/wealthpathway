"use client";

import React, { useEffect, useState } from "react";
import WhyChooseUs from "./components/OurMission";
import Loader from "@/Components/Common/Loader";
import OurStatement from "./components/OurStatement";
import ChangeTextColor from "../components/ChangeTextColor";
import OurPromise from "./components/OurPromise";
import OurApproach from "./components/OurApproach";
import OurStandard from "./components/OurStandard";
import OurVision from "./components/OurVision";

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
    <div className="bg-white text-[#0A2B58] pt-20 ">
      <OurStatement />
      <div className="max-w-7xl m-auto flex flex-col items-center justify-center p-4 lg:p-0">
        <ChangeTextColor
          className="mb-4 text-xl "
          text="At Wealth1, we believe that alternative investments like Portfolio Management Services (PMS) and Alternative Investment Funds (AIFs) are not just products — they are powerful tools that, when curated right, can shape long-term wealth. <br> As a next-generation distributor, we exist to simplify, personalize, and humanize the process of investing in PMS and AIFs for investors across India and the world."
        />
      </div>
      <WhyChooseUs />
      <OurPromise />
      <OurApproach />
      <OurStandard />
      <OurVision />
    </div>
  );
}
