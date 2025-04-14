"use client"
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

export default function LoadingComponent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; // Display loader while loading
  }
  return null;
}
