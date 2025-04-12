import DetailsCard from "./components/DetailsCard2";
import Faq from "@/app/pms/invassest/components/Faq";
import FundInsight from "@/app/pms/invassest/components/FundInsight";
import HeaderSection from "@/app/pms/invassest/components/HeaderSection";
import InfoCard from "@/app/pms/invassest/components/InfoCard";
import Invest from "@/app/pms/invassest/components/Invest";
import LegalInfo from "@/app/pms/invassest/components/LegalInfo";
import Portfolio from "@/app/pms/invassest/components/Portfolio";
import ReadyToStart from "@/app/pms/invassest/components/ReadyToStart";
import WhyInvest from "@/app/pms/invassest/components/WhyInvest";
import { getData } from "@/utils/server";
import React from "react";

export default async function page(ctx: any) {
  const { company } = await ctx.params;
  const fetchPageData = await getData(`/api/section/?slug=${company}`);
  const getInitialsFromTitle = (title: any) => {
    if (!title) return "";

    return title
      .split(" ")
      .map((word: any) => word[0])
      .join("")
      .toUpperCase();
  };
  if (!fetchPageData) return <div className="mt-[9.6rem]">Not Found</div>;
  // console.log(company);
  return (
    <div className="bg-white">
      <div className="bg-white">
        <div className="bg-gradient-to-r from-[#B28C3D]/30 via-[#B28C3D]/20 to-[#B28C3D]/10">
          {fetchPageData && (
            <HeaderSection
              tagline={fetchPageData[0]?.subtitle}
              title={
                fetchPageData[0]?.title ||
                `ICICI Prudential PMS Contra Strategy`
              }
              subtitle={
                fetchPageData[0]?.description ||
                "A contrarian investing approach targeting temporarily out-of-favor but fundamentally strong companies with strong potential for future growth."
              }
              buttonLink="/icici"
              showFactsheet={false}
              factsheetLink="/factsheet.pdf"
              containerClassName=""
              className="pt-32"
              textClassName="text-primary"
            />
          )}
        </div>{" "}
        {fetchPageData && (
          <InfoCard
            className="bg-white"
            cardClassName="hover:shadow-md transition-all"
            data={[
              {
                icon: "calendar",
                label: "Launch Date",
                value: "September 14, 2018",
              },
              {
                icon: "graph",
                label: "Strategy",
                value: "Contrarian | Multi-Cap",
              },
              {
                icon: "briefcase",
                label: "Fund Manager",
                value: "Anand Shah & Chockalingam Narayanan",
              },
              { icon: "chartPie", label: "Benchmark", value: "BSE 500 TRI" },
            ]}
            contentData={fetchPageData[1].contents}
          />
        )}
        {fetchPageData && <DetailsCard data={fetchPageData} />}
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
        {fetchPageData && fetchPageData[5] && (
          <FundInsight
            data={[
              {
                icon: "briefcase",
                value:
                  fetchPageData[5]?.contents[0]?.title ||
                  "Investment Philosophy",
                label:
                  fetchPageData[5]?.contents[0]?.description ||
                  "Anand Shah and Chockalingam Narayanan bring decades of investing experience, applying disciplined contrarian thinking across the portfolio. Their objective is to identify value where the market is overly pessimistic and capitalize when mean reversion kicks in.",
              },
              {
                icon: "calendar",
                value:
                  fetchPageData[5]?.contents[1]?.title || "Research Approach",
                label:
                  fetchPageData[5]?.contents[1]?.description ||
                  "The fund managers are supported by a research team covering 620 companies across 20+ sectors, ensuring deep coverage and conviction in each portfolio holding.",
              },
            ]}
            teamMember={{
              initials:
                getInitialsFromTitle(fetchPageData[5]?.contents[2]?.title) ||
                "AG",
              name: fetchPageData[5]?.contents[2]?.title || "Anand Shah",
              role:
                fetchPageData[5]?.contents[2]?.description ||
                "Fund Manager, ICICI Prudential Asset Management",
            }}
          />
        )}
        <Invest
          title={`How to ${company.toUpperCase()} in ICICI Prudential PMS Contra Strategy`}
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
          containerClass=" p-4 lg:p-16 max-w-7xl m-auto"
        />
        <Faq
          title={
            fetchPageData[6]?.subTtitle ||
            "Frequently Asked Questions about ICICI Prudential PMS Contra Strategy"
          }
          subtitle={
            fetchPageData[6]?.subTtitle ||
            "Get answers to commonly asked questions about ICICI Prudential PMS Contra Strategy."
          }
          faqs={fetchPageData && fetchPageData[6]?.contents}
          allowMultiple={false} // Set to true if you want multiple open at once
          containerClass=" px-4 lg:px-16 max-w-7xl m-auto"
        />
        <div className="bg-gradient-to-r from-[#B28C3D]/10 via-[#B28C3D]/10 to-[#B28C3D]/10">
          {fetchPageData && fetchPageData[7] && (
            <LegalInfo legalPoints={fetchPageData[7].contents} downloads={[]} />
          )}
        </div>
        <WhyInvest
          heading={`Why Invest in ${company.toUpperCase()} Prudential PMS Contra Strategy with Wealth1`}
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
          containerClass=" p-4 lg:p-16 max-w-7xl m-auto"
        />
        <ReadyToStart
          title={`Ready to Invest in ${company.toUpperCase()} Prudential PMS Contra Strategy?`}
          description={`Take the first step towards your wealth creation journey with ${company.toUpperCase()} Prudential PMS Contra Strategy through Wealth1's guided investment process.`}
          primaryCTA={{
            label: "Schedule a consultation with Wealth1",
          }}
          secondaryCTA={{
            label: "Download Brochure",
            visible: false,
          }}
        />
      </div>
    </div>
  );
}
