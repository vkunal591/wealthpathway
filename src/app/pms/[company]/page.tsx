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
import LoadingComponent from "@/Components/Common/LoadingComponent";
import { getData } from "@/utils/server";
import React from "react";

export default async function page(ctx: any) {
  const { company } = ctx.params;

  let fetchPageData;
  try {
    fetchPageData = await getData(`/api/section/?slug=${company}`);
  } catch (error) {
    console.error("Failed to fetch page data:", error);
    return (
      <div className="mt-[9.6rem]">
        Error loading data. Please try again later.
      </div>
    );
  }
  console.log(fetchPageData);
  if (!Array.isArray(fetchPageData) || fetchPageData.length === 0) {
    return (
      <div className="mt-[9.6rem] m-auto w-1/5 text-center ">Not Found</div>
    );
  }

  const extractRange = <T,>(
    data: T[],
    startIndex: number,
    endIndex: number
  ): T[] => {
    return data.slice(startIndex, endIndex + 1);
  };

  const headerSection = fetchPageData[0] || {};
  const infoCardContents = fetchPageData?.[1]?.contents || [];
  const detailsData = fetchPageData || [];
  const fundInsight = fetchPageData?.[5]?.contents || [];
  const teamMember = extractRange(fetchPageData?.[5]?.contents, 2, 4) || [];
  const faqSection = fetchPageData?.[6] || {};
  const legalInfoContents = fetchPageData?.[7]?.contents || [];
  console.log(extractRange(fetchPageData?.[5]?.contents, 2, 4));
  return (
    <div className="bg-white">
      <LoadingComponent />
      <div className="bg-white">
        <div className="bg-gradient-to-r from-[#B28C3D]/30 via-[#B28C3D]/20 to-[#B28C3D]/10">
          <HeaderSection
            tagline={headerSection.subtitle || ""}
            title={
              headerSection.title || "ICICI Prudential PMS Contra Strategy"
            }
            subtitle={
              headerSection.description ||
              "A contrarian investing approach targeting temporarily out-of-favor but fundamentally strong companies with strong potential for future growth."
            }
            buttonLink="/icici"
            showFactsheet={false}
            factsheetLink="/factsheet.pdf"
            containerClassName=""
            className="pt-32"
            textClassName="text-primary"
          />
        </div>

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
          contentData={infoCardContents}
        />

        <DetailsCard data={detailsData} />

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

        {fundInsight.length >= 3 && (
          <FundInsight
            data={[
              {
                icon: "briefcase",
                value: fundInsight[0]?.title || "Investment Philosophy",
                label:
                  fundInsight[0]?.description ||
                  "Anand Shah and Chockalingam Narayanan bring decades of investing experience...",
              },
              {
                icon: "calendar",
                value: fundInsight[1]?.title || "Research Approach",
                label:
                  fundInsight[1]?.description ||
                  "The fund managers are supported by a research team...",
              },
            ]}
            teamMembers={teamMember}
          />
        )}

        <Invest
          title={`How to ${(
            company || "invest"
          ).toUpperCase()} in ICICI Prudential PMS Contra Strategy`}
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

        {faqSection?.contents && (
          <Faq
            title={
              faqSection?.subTtitle ||
              "Frequently Asked Questions about ICICI Prudential PMS Contra Strategy"
            }
            subtitle={
              faqSection?.subTtitle ||
              "Get answers to commonly asked questions about ICICI Prudential PMS Contra Strategy."
            }
            faqs={faqSection.contents}
            allowMultiple={false}
            containerClass=" px-4 lg:px-16 max-w-7xl m-auto"
          />
        )}

        <div className="bg-gradient-to-r from-[#B28C3D]/10 via-[#B28C3D]/10 to-[#B28C3D]/10">
          {legalInfoContents.length > 0 && (
            <LegalInfo legalPoints={legalInfoContents} downloads={[]} />
          )}
        </div>

        <WhyInvest
          heading={`Why Invest in ${(
            company || "ICICI"
          ).toUpperCase()} Prudential PMS Contra Strategy with Wealth1`}
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
          title={`Ready to Invest in ${(
            company || "ICICI"
          ).toUpperCase()} Prudential PMS Contra Strategy?`}
          description={`Take the first step towards your wealth creation journey with ${(
            company || "ICICI"
          ).toUpperCase()} Prudential PMS Contra Strategy through Wealth1's guided investment process.`}
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
