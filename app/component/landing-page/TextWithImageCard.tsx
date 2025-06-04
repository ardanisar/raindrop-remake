import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type TextWithImageCardProps = {
  title: string;
  text: string; // markdown string
  img: {
    imgSrc: string;
    imgSrcSet: string;
    width: number;
    height: number;
  };
};

export const TextWithImageCard: React.FC<TextWithImageCardProps> = ({
  title,
  text,
  img,
}) => {
  return (
    <div className="devices">
      <div className="content " data-center="true">
        <div className="message">
          <h2 className="text-black text-[2.25rem] leading-[1.4] font-[600] mb-[10px] my-[0.83em]">
            {title}
          </h2>
          <blockquote className="text-black">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                p: ({ children }) => <>{children}</>, // Hapus pembungkus <p>
              }}
            >
              {text}
            </ReactMarkdown>
          </blockquote>
        </div>
        <img
          src={img.imgSrc}
          srcSet={img.imgSrcSet}
          width={img.width}
          height={img.height}
          className="devicesImage"
        />
      </div>
    </div>
  );
};

export default TextWithImageCard;
