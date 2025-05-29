import React, { useState } from "react";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // onMouseEnter={() => {
      //   setIsHovered(true);
      //   console.log("onMouseEnter triggered, isHovered will be true");
      // }}
      // onMouseLeave={() => {
      //   setIsHovered(false);
      //   console.log("onMouseLeave triggered, isHovered will be false");
      // }}
    >
      {children}

      {isHovered && (
        <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 z-50">
          {/* Tooltip Box */}
          <div className="relative rounded bg-white">
            <div className="rounded-[3px] bg-[#242424] text-white">
              <div className="p-2 text-center block">
                <span className="text-[13px] leading-5 font-normal whitespace-nowrap">
                  {text}
                </span>
              </div>
            </div>

            {/* Tooltip Arrow */}
            <div className="absolute left-1/2 bottom-[-6px] -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#242424] pointer-events-none z-[-1]" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
