'use client'
// SwipeAnimationLoader.tsx
import React, { useState, useEffect } from "react";
import "../../public/styles/SwipeAnimationLoader.css"; // Importieren der CSS-Datei für die Animation

const SwipeAnimationLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Beendet die Animation nach 3 Sekunden

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="swipe-animation"></div>
  );
};

export default SwipeAnimationLoader;