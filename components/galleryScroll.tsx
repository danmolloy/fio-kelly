import React, { useEffect, useState, useRef } from "react";

const HalfSpeedScroll = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const relativeY = window.scrollY - (window.scrollY + rect.top);
        // We only apply half speed **after** the element has entered the viewport
        setOffset(relativeY * 0.1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const style = {
    transform: `translateY(${offset}px)`,
    willChange: "transform",
  };

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
};

export default HalfSpeedScroll;
