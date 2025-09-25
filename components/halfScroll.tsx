import React, { useEffect, useState } from "react";

const HalfSpeedScroll = ({ children }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const style = {
    transform: `translateY(${offset}px)`,
    willChange: "transform",
  };

  return <div style={style}>{children}</div>;
};

export default HalfSpeedScroll;
