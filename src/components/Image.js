import React, { useState } from "react";

const Image = ({ image }) => {
  const [isMagnified, setIsMagnified] = useState(false);

  const handleClick = () => {
    setIsMagnified(!isMagnified);
  };

  return (
    <div>
      <img 
      src={image} class="img-fluid" alt="{image}" 
      onClick={handleClick} style={{ cursor: "zoom-in" }} 
      />
      {isMagnified && (
        <div 
        onClick={handleClick} 
        style={{ position: "fixed", top: 0, left: 0, width: "100%", 
        height: "100%", background: "rgba(0, 0, 0, 0.2)", 
        textAlign: "center", zIndex: 1000, overflow: "auto"}}>
          <img src={image} class="bg-neutral" alt="Magnified {image}" 
          style={{ Width: "100%", Height: "100%", cursor: "zoom-out" }} />
        </div>
      )}
    </div>
  );
};

export default Image;
