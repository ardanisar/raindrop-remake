import React from "react";
import ReactMarkdown from "react-markdown";

type TextCardProps = {
  title: React.ReactNode;
  text: string;
  blockquote: string;
};

function TextCard({ title, text, blockquote }: TextCardProps) {
  return (
    <div className="content items-center" data-center="true">
      <div className="message">
        <h2 className="text-black text-[2.25rem] leading-[1.4] font-[600] mb-[10px]">
          {title}
        </h2>
        <h4 className="text-black mt-0 my-[1.33em] text-[1.5rem] leading-[1.42] font-normal">
          <ReactMarkdown
            components={{
              p: ({ children }) => <>{children}</>, // Hapus pembungkus <p>
            }}
          >
            {text}
          </ReactMarkdown>
        </h4>
        <blockquote className="gray text-[#666] max-w-[630px] text-[1.125rem] leading-[1.45] my-[1em] mx-[40px]">
          <ReactMarkdown
            components={{
              p: ({ children }) => <>{children}</>, // Hapus pembungkus <p>
            }}
          >
            {blockquote}
          </ReactMarkdown>
        </blockquote>
      </div>
    </div>
  );
}

export default TextCard;
