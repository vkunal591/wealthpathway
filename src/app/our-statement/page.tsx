"use client";

import React, { useEffect, useState } from "react";

export default function Page() {  // Renamed from `page` to `Page`
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Replace with your loader component if needed
  }

  return (
    <div>
      <h1>Our Statement</h1>
      <p>This is the content of the &quot;Our Statement&quot; page.</p>
    </div>
  );
}
