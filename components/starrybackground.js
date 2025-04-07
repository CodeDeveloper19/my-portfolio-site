"use client";
import React from "react";

const StarsBackground = React.memo(() => {
  const stars = React.useMemo(() => {
    return Array.from({ length: 100 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 2}s`,
    }));
  }, []);

  return (
    <div className="twinkling-stars">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            position: "absolute",
            width: "2px",
            height: "2px",
            backgroundColor: "white",
            borderRadius: "50%",
            left: star.left,
            top: star.top,
            animation: "twinkle 2s infinite",
            animationDelay: star.animationDelay,
          }}
        />
      ))}
    </div>
  );
});

export default StarsBackground;
