"use client";

import React, { useEffect, useState } from "react";
import TeamSection from "./components/TeamSection";
import Loader from "@/Components/Common/Loader";

export default function Page() {
  const [loading, setLoading] = useState<boolean>(true);

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
    <div className="bg-white text-blue-900 lg:pt-36">
      <TeamSection />
    </div>
  );
}
