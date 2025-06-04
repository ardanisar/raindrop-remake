"use client";

import React from "react";
import { useState } from "react";
import { Item } from "@/data/itemsData";
import ImageCardItem from "./ImageCardItem";
import ImageCardImage from "./ImageCardImage";

type ImageCardProps = {
  title: string;
  text: string;
  sections: Item[];
  clname: string;
};

function ImageCard({ title, text, sections, clname }: ImageCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className={`blob ${clname}`}>
        <div className="grid-container">
          {/* title */}
          <div className="imgcard">
            <h2 className="text-black text-[2.25rem] leading-[1.4] font-[600] mb-[10px] my-[0.83em]">
              {title}
            </h2>
            <blockquote className=" text-black text-[1.125rem] leading-[1.45]">
              {text}
            </blockquote>
            {/* list */}
            {/* List of Items */}
            <div className="sections">
              {sections.map((section, index) => (
                <ImageCardItem
                  key={index}
                  section={section}
                  index={index}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              ))}
            </div>
          </div>
          {/* image for big screen */}
          <div className="heroImages">
            {sections.map((section, index) => (
              <ImageCardImage
                key={index}
                section={section}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageCard;
