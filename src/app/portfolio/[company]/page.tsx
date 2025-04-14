import DetailsCard from "./components/DetailsCard2";
import Faq from "@/app/portfolio/invassest/components/Faq";
import FundInsight from "@/app/portfolio/invassest/components/FundInsight";
import HeaderSection from "@/app/portfolio/invassest/components/HeaderSection";
import InfoCard from "@/app/portfolio/invassest/components/InfoCard";
import Invest from "@/app/portfolio/invassest/components/Invest";
import LegalInfo from "@/app/portfolio/invassest/components/LegalInfo";
import Portfolio from "@/app/portfolio/invassest/components/Portfolio";
import ReadyToStart from "@/app/portfolio/invassest/components/ReadyToStart";
import WhyInvest from "@/app/portfolio/invassest/components/WhyInvest";
import React from "react";

export default async function page(ctx: any) {
  const { company } = await ctx.params;
  console.log(company);
  return (
    <div className="bg-white p-4 lg:p-16 max-w-7xl m-auto">
      <div className="bg-gradient-to-r from-[#B28C3D]/10 via-[#B28C3D]/10 to-[#B28C3D]/10">
        <HeaderSection
          title={`ICICI Prudential PMS Contra Strategy`}
          subtitle="A contrarian investing approach targeting temporarily out-of-favor but fundamentally strong companies with strong potential for future growth."
          buttonLink="/icici"
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
          {
            icon: "calendar",
            label: "Launch Date",
            value: "September 14, 2018",
          },
          { icon: "graph", label: "Strategy", value: "Contrarian | Multi-Cap" },
          {
            icon: "briefcase",
            label: "Fund Manager",
            value: "Anand Shah & Chockalingam Narayanan",
          },
          { icon: "chartPie", label: "Benchmark", value: "BSE 500 TRI" },
        ]}
      />
      <DetailsCard />
      <Portfolio
        subtitle="The ICICI Prudential Contra Strategy maintains a diversified portfolio across market capitalizations with a focus on sectors poised for turnaround."
        compositionContent={[
          { label: "Large Cap", value: "63%" },
          { label: "Mid Cap", value: "18%" },
          { label: "Small Cap", value: "19%" },
        ]}
        sectorContent={[
          { icon: "briefcase", value: "HDFC Bank Ltd" },
          { icon: "briefcase", value: "ICICI Bank Ltd" },
          { icon: "briefcase", value: "Bharti Airtel Ltd" },
          { icon: "briefcase", value: "Larsen & Toubro Ltd" },
          { icon: "briefcase", value: "State Bank of India" },
          { icon: "briefcase", value: "Vedanta Ltd" },
        ]}
        note="Note: Holdings are for illustrative purposes and may change based on market conditions."
      />
      <FundInsight
        data={[
          {
            icon: "briefcase",
            value: "Investment Philosophy",
            label:
              "Anand Shah and Chockalingam Narayanan bring decades of investing experience, applying disciplined contrarian thinking across the portfolio. Their objective is to identify value where the market is overly pessimistic and capitalize when mean reversion kicks in.",
          },
          {
            icon: "calendar",
            value: "Research Approach",
            label:
              "The fund managers are supported by a research team covering 620 companies across 20+ sectors, ensuring deep coverage and conviction in each portfolio holding.",
          },
        ]}
        teamMembers={{
          initials: "AG",
          name: "Anand Shah",
          role: "Fund Manager, ICICI Prudential Asset Management",
        }}
      />
      <Invest
        title="How to Invest in ICICI Prudential PMS Contra Strategy"
        subtitle="A simple process to begin your investment journey with ICICI Prudential PMS Contra Strategy."
        eligibilityItems={[
          "Resident Individuals",
          "HUFs",
          "NRIs / PIOs",
          "Trusts",
          "Corporates / LLPs",
          "Family Offices",
        ]}
        steps={[
          {
            title: "Complete Documentation",
            description:
              "Fill in the application form and complete KYC requirements.",
          },
          {
            title: "Sign Investment Agreement",
            description:
              "Review and sign the PMS agreement with ICICI Prudential.",
          },
          {
            title: "Fund Your Account",
            description:
              "Transfer the minimum investment of ₹50 Lakhs to begin the investment process.",
          },
          {
            title: "Portfolio Access",
            description:
              "Receive login credentials to track your portfolio performance.",
          },
        ]}
        contactEmail="contact@wealth1.com"
      />
      <Faq
        subtitle="Get answers to commonly asked questions about ICICI Prudential PMS Contra Strategy."
        faqs={[
          {
            question: "What is contrarian investing?",
            answer:
              "It is the practice of investing in stocks that are currently out of favor but are expected to deliver strong performance in the long term.",
          },
          {
            question: "What is the ideal holding period?",
            answer: "4 years and above is recommended for optimal compounding.",
          },
          {
            question: "Is the portfolio diversified across market caps?",
            answer:
              "Yes, it includes large (63%), mid (18%), and small-cap (19%) stocks for balanced growth and risk management.",
          },
          {
            question: "Is ICICI Prudential PMS available for NRIs?",
            answer:
              "Yes, NRIs can invest via NRE or NRO accounts subject to regulations.",
          },
          {
            question: "How often will I receive reports?",
            answer:
              "Monthly performance reports and quarterly reviews are shared with investors.",
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
                "ICICI Prudential Asset Management is a SEBI-registered Portfolio Manager (Reg. No.: INP000000373).",
            },
            {
              title: "Risk Disclaimer",
              description:
                "Past performance is not indicative of future results. Investment in securities is subject to market risks. Investors are advised to read all related documents carefully before investing.",
            },
          ]}
          downloads={[]}
        />
        ;
      </div>
      <WhyInvest
        heading="Why Invest in ICICI Prudential PMS Contra Strategy with Wealth1"
        subheading="Experience a seamless investment journey with personalized support and expert guidance."
        items={[
          {
            title: "Curated Advisory",
            description: "Onboarding by Wealth1's expert investment team",
          },
          {
            title: "Performance Analytics",
            description: "AI-enabled portfolio tracking and analytics",
          },
          {
            title: "Transparent Comparison",
            description: "Compare with other PMS strategies objectively",
          },
          {
            title: "Dedicated Support",
            description: "Personal Wealth1 Relationship Manager",
          },
          {
            title: "Timely Updates",
            description: "Rebalancing alerts and fund manager insights",
          },
          {
            title: "End-to-End Support",
            description: "From evaluation to execution and beyond",
          },
        ]}
      />
      <ReadyToStart
        title="Ready to Invest in ICICI Prudential PMS Contra Strategy?"
        description="Take the first step towards your wealth creation journey with ICICI Prudential PMS Contra Strategy through Wealth1's guided investment process."
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


export const revalidate = 60;