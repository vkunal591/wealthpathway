import React from "react";
import HeaderSection from "./components/HeaderSection";
import InfoCard from "./components/InfoCard";
import DetailsCard from "./components/DetailsCard";
import Portfolio from "./components/Portfolio";
import FundInsight from "./components/FundInsight";
import Faq from "./components/Faq";
import WhyInvest from "./components/WhyInvest";

export default function page() {
  return (
    <div className="bg-white">
      <HeaderSection />
      <InfoCard />
      <DetailsCard />
      <Portfolio />
      <FundInsight />
      <Faq />
      <WhyInvest />
    </div>
  );
}
