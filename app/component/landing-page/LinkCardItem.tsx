import React from "react";
import { LinkCardItemProps } from "@/data/linkCardData";

function LinkCardItem({ title, text, linkItems }: LinkCardItemProps) {
  return (
    <div className="linkcard ">
      <div className="flex items-center space-x-2">
        <h2 className="text-black flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: title.title }} />
          {title.iconAfter}
        </h2>
      </div>
      <blockquote className="text-black">
        <div
          dangerouslySetInnerHTML={{ __html: text }}
          className="leading-[26.1px]"
        />
        <div className="flex">
          {linkItems.map((item, index) => (
            <a
              key={index}
              className="link flex items-center space-x-1 font-[500]"
              href={item.href}
            >
              {item.iconBefore && <span>{item.iconBefore}</span>}
              <span>{item.text}</span>
              {item.iconAfter && <span>{item.iconAfter}</span>}
            </a>
          ))}
        </div>
      </blockquote>
    </div>
  );
}

export default LinkCardItem;
