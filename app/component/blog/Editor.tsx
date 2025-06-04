import { Author } from "@/data/mockArticles";
import React from "react";

type EditorProps = {
  author: Author;
};

function Editor({ author }: EditorProps) {
  return (
    <div className="block w-full h-full">
      <div className="flex w-full justify-between items-start">
        <div className="flex">
          <a
            tabIndex={0}
            href="https://medium.com/@exentrich?source=collection_home_page---collection_editors-64dc68379046-----0-----------------------------------"
            rel="noopener follow"
          >
            <div className="mt-[-0.5px] relative block">
              <img
                alt="{author.name}"
                className="!w-[32px] bg-[#F2F2F2] box-border rounded-full align-middle"
                src={author.avatar}
                width="32"
                height="32"
                loading="lazy"
              />
              <div className="dw t y dx dy dz ab ct ms"></div>
            </div>
          </a>
          <div className="mt-[-1px] mx-[8px] block">
            <a
              className="cursor-pointer m-0 p-0"
              href="https://medium.com/@exentrich?source=collection_home_page---collection_editors-64dc68379046-----0-----------------------------------"
              rel="noopener follow"
            >
              <h2 className="tracking-normal max-h-[40px] font-[700] break-words text-ellipsis overflow-hidden text-[16px] leading-[20px] text-[#242424]">
                {author.name}
              </h2>
            </a>
            <a
              className="cursor-pointer m-0 p-0"
              href="https://medium.com/@exentrich?source=collection_home_page---collection_editors-64dc68379046-----0-----------------------------------"
              rel="noopener follow"
            >
              <div className="mt-[5px] break-words block">
                <p className="author-bio text-ellipsis overflow-hidden text-[13px] text-[#6B6B6B] font-[400] break-words">
                  {author.bio}
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="text-right min-w-[102px] block">
          <div className="mt-[-1px] inline-block" aria-hidden="false">
            <button className="py-[6px] px-[12px] rounded-[24px] bg-0 xursor-pointer justify-center items-center flex border border-[#242424]">
              <span className="text-[#242424] text-[14px] leading-[20px] w-full font-[400] cursor-pointer">
                <span className="text-[#242424] text-[14px]">Follow</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;
