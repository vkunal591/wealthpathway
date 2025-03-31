"use client"
import HeroSection from '@/Components/Common/HeroSection'
import React, { useEffect, useState } from 'react'
import TeamSection from './components/TeamSection'
import Loader from '@/Components/Common/Loader';
import Footer from '@/Components/Common/Footer';

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
    <div className='bg-white text-gray-800'>
        <HeroSection />
        <TeamSection />
        <Footer />
    </div>
  )
}
