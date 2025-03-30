"use client"
import HeroSection2 from '@/Components/Common/HeroSection2'
import React, { useEffect, useState } from 'react'
import WhyCard from './components/WhyCard'
import OurFounders from './components/OurFounders'
import Loader from '@/Components/Common/Loader';

const dummyData = {
  founders: [
    {
      name: "John Doe",
      position: "Co-Founder & CEO",
      image: "/clientpic.png",
    },
    {
      name: "Jane Smith",
      position: "Co-Founder & CTO",
      image: "/clientpic.png",
    },
    {
      name: "Mike Johnson",
      position: "Co-Founder & COO",
      image: "/clientpic.png",
    },
  ],
  investors: [
    {
      name: "Alice Brown",
      position: "Investor",
      image: "/clientpic.png",
    },
    {
      name: "Robert Wilson",
      position: "Investor",
      image: "/clientpic.png",
    },
    {
      name: "Emily Davis",
      position: "Investor",
      image: "/clientpic.png",
    },
  ],
  technology: [
    {
      name: "React.js",
      position: "Frontend Framework",
      image: "/clientpic.png",
    },
    {
      name: "Next.js",
      position: "Full-stack Framework",
      image: "/clientpic.png",
    },
    {
      name: "Node.js",
      position: "Backend Runtime",
      image: "/clientpic.png",
    },
  ],
  clientPartners: [
    {
      name: "Tech Corp",
      position: "Partner Company",
      image: "/clientpic.png",
    },
    {
      name: "Innovate Ltd.",
      position: "Partner Company",
      image: "/clientpic.png",
    },
    {
      name: "Future Solutions",
      position: "Partner Company",
      image: "/clientpic.png",
    },
  ],
};


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
    <div>
        <HeroSection2 />
        <WhyCard />
        <OurFounders  title={"Founders"} data={dummyData?.founders} />
        <OurFounders  title={"Investments"} data={dummyData?.investors} />
        <OurFounders  title={"Techoly Experrs"} data={dummyData?.technology} />
        <OurFounders  title={"Client Partners"} data={dummyData?.clientPartners} />

    </div>
  )
}
