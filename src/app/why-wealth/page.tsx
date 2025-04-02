"use client";
import React, { useEffect, useState } from "react";
import WhyCard from "./components/WhyCard";
import Loader from "@/Components/Common/Loader";
import HeroSection from "@/Components/Common/HeroSection";
import InvestmentJourney from "./components/InvestmentJourney";
import Performance from "./components/Performance";
import Advantage from "./components/Advantage";
import ReadyForManage from "./components/ReadyForManage";

// const dummyData = {
//   founders: [
//     {
//       name: "John Doe",
//       position: "Co-Founder & CEO",
//       image: "/user.png",
//     },
//     {
//       name: "Jane Smith",
//       position: "Co-Founder & CTO",
//       image: "/user.png",
//     },
//     {
//       name: "Mike Johnson",
//       position: "Co-Founder & COO",
//       image: "/user.png",
//     },
//   ],
//   investors: [
//     {
//       name: "Alice Brown",
//       position: "Investor",
//       image: "/user.png",
//     },
//     {
//       name: "Robert Wilson",
//       position: "Investor",
//       image: "/user.png",
//     },
//     {
//       name: "Emily Davis",
//       position: "Investor",
//       image: "/user.png",
//     },
//   ],
//   technology: [
//     {
//       name: "React.js",
//       position: "Frontend Framework",
//       image: "/user.png",
//     },
//     {
//       name: "Next.js",
//       position: "Full-stack Framework",
//       image: "/user.png",
//     },
//     {
//       name: "Node.js",
//       position: "Backend Runtime",
//       image: "/user.png",
//     },
//   ],
//   clientPartners: [
//     {
//       name: "Tech Corp",
//       position: "Partner Company",
//       image: "/user.png",
//     },
//     {
//       name: "Innovate Ltd.",
//       position: "Partner Company",
//       image: "/user.png",
//     },
//     {
//       name: "Future Solutions",
//       position: "Partner Company",
//       image: "/user.png",
//     },
//   ],
// };

export default function Page() {
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
      <HeroSection
        subtitle={"Why choose us?"}
        title={"Why Choose Wealth1 for Your Investment Journey?"}
        description={
          "Experience the perfect blend of human expertise and artificial intelligence, delivering superior investment solutions tailored to your needs."
        }
        image={"/why.png"}
      />
      <WhyCard />
      <InvestmentJourney />
      <Performance />
      <Advantage />
      <ReadyForManage />
      {/* <OurFounders title={"Founders"} data={dummyData?.founders} />
      <OurFounders title={"Investments"} data={dummyData?.investors} />
      <OurFounders title={"Techoly Experrs"} data={dummyData?.technology} />
      <OurFounders title={"Client Partners"} data={dummyData?.clientPartners} /> */}
    </div>
  );
}
