import React from "react";
import { Item } from "@/data/itemsData";
import { ImageCardItemProps } from "./ImageCardItem";

const ImageCardImage = ({
  section,
  index,
  activeIndex,
  setActiveIndex,
}: ImageCardItemProps) => {
  return (
    <div
      className={`image ${activeIndex === index ? "active" : ""}`}
      data-active={activeIndex === index}
      tabIndex={0}
      onClick={() => setActiveIndex(index)}
    >
      <img
        src={section.image.imageUrl}
        srcSet={section.image.imageSet}
        width={section.image.width}
        height={section.image.height}
        alt={section.title}
        style={{
          width: section.image.width + "px",
          height: section.image.height + "px",
        }}
      />
    </div>
  );
};

export default ImageCardImage;
