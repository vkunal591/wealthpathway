import React from "react";
import HeaderSection from "./components/HeaderSection";
import InfoCard from "./components/InfoCard";
import DetailsCard from "./components/DetailsCard";
import Portfolio from "./components/Portfolio";
import FundInsight from "./components/FundInsight";

export default function page() {
  return (
    <div className="bg-white">
      <HeaderSection />
      <InfoCard />
      <DetailsCard />
      <Portfolio />
      <FundInsight />
    </div>
  );
}
