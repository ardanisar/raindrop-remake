import React from "react";
import MoreCardItem from "./MoreCardItem";
import { MoreCardItemProps } from "./MoreCardItem";

export type MoreCardProps = {
  title: string;
  data: MoreCardItemProps[];
};

function MoreCard({ title, data }: MoreCardProps) {
  return (
    <div className="content" data-center="true">
      <h2 className="morecard text-[2.25rem] leading-[1.4] font-[600] mb-[10px] my-[0.83em]">
        {/* But wait, there's more */}
        {title}
      </h2>
      <div className="morecard-item">
        {data.map(({ title, text, icon }, index) => (
          <MoreCardItem key={index} title={title} text={text} icon={icon} />
        ))}
      </div>
    </div>
  );
}

export default MoreCard;
