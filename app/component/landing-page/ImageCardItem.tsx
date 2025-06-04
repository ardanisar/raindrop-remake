import React from "react";
import { Item } from "@/data/itemsData";

export type ImageCardItemProps = {
  section: Item;
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

const ImageCardItem = ({
  section,
  index,
  activeIndex,
  setActiveIndex,
}: ImageCardItemProps) => {
  return (
    <div
      key={index}
      className={`item ${activeIndex === index ? "active" : ""}`}
      data-active={activeIndex === index}
      tabIndex={0}
      onMouseEnter={() => setActiveIndex(index)}
    >
      <div className="about">
        {section.icon}
        <div className="info ">
          <div className="imgcarditem title flex">
            {section.title} {section.iconAfter}
          </div>
          <p className="imgcarditem-desc">
            <span>
              {section.description}{" "}
              <a
                href={section.link.href}
                // target="_blank"
                rel="noreferrer"
              >
                {section.link.text}
              </a>
            </span>
          </p>
        </div>
      </div>
      <img
        src={section.image.imageUrl}
        srcSet={section.image.imageSet}
        width={section.image.width}
        height={section.image.height}
        className="preview"
        alt={section.title}
      />
    </div>
  );
};

export default ImageCardItem;
