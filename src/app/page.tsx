"use client";

import { useState, useEffect } from "react";

import Loader from "@/Components/Common/Loader";
import HeroSection2 from "@/Components/theam/components/HeroSection2";
import InfoCard2 from "@/Components/theam/components/InfoCard2";
import WeAre from "@/Components/theam/components/WeAre";
import OurServices from "@/Components/theam/components/OurServices";
import WhyChoose2 from "@/Components/theam/components/WhyChoose2";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; // Display loader while loading
  }

  return (
    <div className="bg-white">
      <HeroSection2 />
      <InfoCard2 />
      <WeAre />
      <OurServices />
      {/* <Success /> */}
      <WhyChoose2 />
    </div>
  );
}

// <div>
//   {/* <HeroSection /> */}
//   {/* <OurClients /> */}
//   {/* <ColorChangeText
//   text={[
//     "Wealth1 leads India's Alternative Investments revolution, guiding discerning investors through their wealth creation journey with PMS and AIF solutions.",
//     "Our expertise in Portfolio Management Services (PMS) and Alternative Investment Funds (AIF) combines deep market insights with AI-driven strategies.",
//     "At Wealth1, we remain committed to delivering exceptional Alternative Investment solutions that preserve and grow wealth across generations.",
//     ]}
//     /> */}
//   {/* <DoesDifferect />
// <DedicatedPartner />
// <CanHelp />
// <GetInTouch />  */}

//   {/*
// <InsightClients />
// <OurExpert />
// */}
// </div>
