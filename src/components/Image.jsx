import React, { useState } from "react";

const Image = ({ image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ display: "inline-block", overflow: "hidden" }}
    >
      <img
        src={image}
        className="img-fluid"
        alt="{image}"
        style={{
          cursor: "zoom-in",
          transition: "transform 0.3s ease",
          transform: isHovered ? "scale(1.15)" : "scale(1)",
        }}
      />
    </div>
  );
};

export default Image;
