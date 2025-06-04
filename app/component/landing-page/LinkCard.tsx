import React from "react";
import LinkCardItem from "./LinkCardItem";
import { LinkCardProps } from "@/data/linkCardData";

function LinkCard({ linkCardData }: LinkCardProps) {
  return (
    <div className="content ">
      <div className="columns">
        {linkCardData.map((data, index) => (
          <LinkCardItem
            key={index}
            title={data.title}
            text={data.text}
            linkItems={data.linkItems}
          />
        ))}
      </div>
    </div>
  );
}

export default LinkCard;
