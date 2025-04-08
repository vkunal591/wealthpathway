import React from "react";
import HeaderSection from "./components/HeaderSection";
import InfoCard from "./components/InfoCard";
import DetailsCard from "./components/DetailsCard";
import Portfolio from "./components/Portfolio";
import FundInsight from "./components/FundInsight";
import Faq from "./components/Faq";
import WhyInvest from "./components/WhyInvest";
import Invest from "./components/Invest";
import LegalInfo from "./components/LegalInfo";
import ReadyToStart from "./components/ReadyToStart";

export default function page() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-r from-[#B28C3D]/10 via-[#B28C3D]/10 to-[#B28C3D]/10">
        <HeaderSection
          title="INVasset Growth Fund PMS – Quant Driven Portfolio Management Strategy"
          buttonLink="/invest"
          showFactsheet={false}
          factsheetLink="/factsheet.pdf"
          containerClassName="bg-white"
          className="pt-32"
          textClassName="text-primary"
        />
      </div>{" "}
      <InfoCard
        className="bg-white"
        cardClassName="hover:shadow-md transition-all"
        data={[
          { icon: "calendar", label: "Launch Date", value: "Jan 2023" },
          { icon: "graph", label: "Strategy", value: "Long-Term Growth" },
          { icon: "briefcase", label: "Manager", value: "Jane Doe" },
          { icon: "chartPie", label: "Benchmark", value: "Nifty 500" },
        ]}
      />
      <DetailsCard />
      <Portfolio
        compositionContent={[
          { label: "Core Holdings", value: "40-60%" },
          { label: "Opportunistic Bets", value: "40-60%" },
          { label: "Defensive Shields", value: "Remaining %" },
        ]}
        sectorContent={[
          { icon: "briefcase", value: "Financials" },
          { icon: "calendar", value: "Capital Goods" },
          { icon: "graph", value: "Pharma & Healthcare" },
          { icon: "graph", value: "Digital/Tech Disruptors" },
        ]}
      />
      <FundInsight
        data={[
          {
            icon: "briefcase",
            value: "Investment Philosophy",
            label:
              "Avoid drawdowns. Stick to logic. Let the data lead. INVasset PMS prepares for market cycles in advance using real-time data.",
          },
          {
            icon: "calendar",
            value: "Selection Criteria",
            label:
              "170+ filters covering technicals, fundamentals, sentiment, and insider activity to pick high-potential investments.",
          },
        ]}
        teamMember={{
          initials: "AG",
          name: "Anirudh Garg",
          role: "Fund Manager, INVasset PMS",
        }}
      />
      <Invest
        eligibilityItems={[
          "Resident Individuals",
          "HUFs",
          "Body Corporates",
          "Trusts",
          "NRIs",
          "Partnership Firms",
        ]}
        steps={[
          {
            title: "Complete Documentation",
            description:
              "Fill in the application form and complete KYC requirements.",
          },
          {
            title: "Portfolio Access",
            description:
              "Receive onboarding confirmation and access to track your portfolio.",
          },
          {
            title: "Fund Your Account",
            description:
              "Transfer the minimum investment of ₹50 Lakhs to begin the investment process.",
          },
          {
            title: "Start Investing",
            description:
              "INVasset will start managing your investments algorithmically.",
          },
        ]}
        contactEmail="contact@wealth1.com"
      />
      <Faq
        faqs={[
          {
            question: "Is INVasset PMS suitable for conservative investors?",
            answer:
              "INVasset PMS is best suited for investors with moderate-to-aggressive risk profiles who seek long-term wealth creation with active downside risk control.",
          },
          {
            question: "How is INVasset PMS different from traditional PMS?",
            answer:
              "INVasset PMS is data-driven and rules-based. Unlike traditional discretionary PMS, it eliminates human bias and runs on real-time quant signals.",
          },
          {
            question: "Can NRIs invest in INVasset PMS?",
            answer:
              "Yes, NRIs can invest via NRE/NRO accounts in compliance with FEMA and RBI guidelines.",
          },
          {
            question: "Is there any lock-in period?",
            answer:
              "There is no formal lock-in, but a 3–5 year holding period is recommended for optimal results.",
          },
          {
            question: "How often is the portfolio rebalanced?",
            answer:
              "The algorithm scans daily, but changes are made only when key signals are triggered—ensuring minimal churn and tax efficiency.",
          },
        ]}
        allowMultiple={false} // Set to true if you want multiple open at once
      />
      <div className="bg-gradient-to-r from-[#B28C3D]/10 via-[#B28C3D]/10 to-[#B28C3D]/10">
        <LegalInfo
          legalPoints={[
            {
              title: "Regulatory Compliance",
              description:
                "INVasset is registered with SEBI as a Portfolio Management Service provider (INP000006907).",
            },
            {
              title: "Risk Disclaimer",
              description:
                "Investments in securities are subject to market risks. Past performance is not indicative of future returns.",
            },
          ]}
          downloads={[]}
        />
        ;
      </div>
      <WhyInvest
        items={[
          {
            title: "Exclusive Access to Top PMS & AIFs",
            description: "Gain access to India's leading investment products.",
          },
          {
            title: "Expert Guidance & Support",
            description:
              "Our team helps investors navigate their PMS investment journey.",
          },
          {
            title: "Comprehensive Product Comparisons",
            description:
              "Compare multiple PMS strategies, including INVasset PMS, before making an investment.",
          },
          {
            title: "Seamless Investment Process",
            description:
              "Wealth1 ensures a hassle-free experience in investing with INVasset PMS.",
          },
          {
            title: "Regular Portfolio Updates & Insights",
            description:
              "Stay updated with performance reports and fund manager insights.",
          },
          {
            title: "Dedicated Relationship Manager",
            description:
              "Get personalized support throughout your investment journey.",
          },
        ]}
      />
      <ReadyToStart
        primaryCTA={{
          label: "Schedule a consultation with Wealth1",
        }}
        secondaryCTA={{
          label: "Download Brochure",
          visible: false,
        }}
      />
    </div>
  );
}
