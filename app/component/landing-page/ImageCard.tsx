"use client";

import React from "react";
import { useState } from "react";
import { Item } from "@/data/itemsData";

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
      <div className={`blob1U5Q ${clname}`}>
        {/* <div className="blob1U5Q left1x3n organize1xl3"> */}
        <div className="grid178A">
          {/* title */}
          <div>
            <h2 className="text-[2.25rem] leading-[1.4] font-[600] mb-[10px] my-[0.83em]">
              {/* Organize with ease */}
              {title}
            </h2>
            <blockquote className="text-[1.125rem] leading-[1.45]">
              {/* Raindrop.io is not just a pretty interface, it can help you
              untangle your bookmarks mess. */}
              {text}
            </blockquote>
            {/* list */}
            <div className="sectionsmNlL">
              {sections.map((sections, index) => (
                <div
                  key={index}
                  className={`item2omU ${
                    activeIndex === index ? "active" : ""
                  }`}
                  data-active={activeIndex === index}
                  tabIndex={0}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <div className="about2J0P">
                    {sections.icon}
                    <div className="info1x6k">
                      <div className="title-ME6 flex">
                        {sections.title}{" "}
                        {sections.showSvg && (
                          <svg
                            className="money3NdV"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 1a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 3a1 1 0 0 0-1 1v.092l-.263.057a4.435 4.435 0 0 0-1.413.605C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941l-.161-.058c-.31-.123-.543-.286-.682-.446l-.088-.09a1 1 0 0 0-1.423 1.4c.563.649 1.414 1.076 2.354 1.253V15l.007.117A1 1 0 0 0 11 15v-.092l.263-.057a4.436 4.436 0 0 0 1.413-.605C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0 0 11 9.092V7.151l.161.058c.31.123.543.286.682.446l.088.09a1 1 0 0 0 1.423-1.4c-.563-.649-1.413-1.076-2.354-1.253V5l-.007-.117A1 1 0 0 0 10 4zm1 7.151l.16.057c.154.061.29.132.407.21.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 0 1-.567.267v-1.698zm-2-4v1.698l-.16-.057a2.178 2.178 0 0 1-.407-.21C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582.155-.103.346-.196.567-.267z"
                            ></path>
                          </svg>
                        )}
                      </div>
                      <p>
                        <span>
                          {sections.description}{" "}
                          <a
                            href={sections.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Learn&nbsp;more
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                  <img
                    src={sections.image}
                    srcSet={sections.imageSet}
                    width="1056"
                    height="500"
                    className="preview1Qz9"
                    alt={sections.title}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* image untuk screen besar */}
          <div className="heroImages1RTg">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`img2RPn ${activeIndex === index ? "active" : ""}`}
                data-active={activeIndex === index}
                tabIndex={0}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={section.image}
                  srcSet={section.imageSet}
                  width="1056"
                  height="500"
                />
              </div>
            ))}
          </div>
        </div>
        {/* // ))} */}
      </div>
    </>
  );
}

export default ImageCard;
