import React from "react";
import { Article } from "@/data/mockArticles";
import LikesComments1 from "./LikesComments1";
import { formatDate } from "@/app/utils/formatDate";

type ArticleItemProps = {
  article: Article;
};

function ArticleItem({ article }: ArticleItemProps) {
  return (
    <div className="flex">
      <div className="break-words block flex-1 min-w-0">
        {/* article */}
        <div className="article break-words">
          <a
            className="flex-col flex static cursor-pointer m-0 p-0 z-2 font-[600]"
            rel="noopener follow"
            href={article.link}
          >
            <h2
              className="tracking-[-0.384px] leading-[30px] text-[24px] font-[700] text-ellipsis overflow-hidden text-[#242424] m-0"
              style={{ letterSpacing: "-0.016em" }}
            >
              {article.title}
            </h2>
            <div className="pt-[8px]">
              <h3 className="max-h-[40px] 904px:max-h-none text-ellipsis overflow-hidden break-words line-clamp-2 text-[16px] text-[#6B6B6B] leading-[20px] font-[400]">
                {article.excerpt}
              </h3>
            </div>
          </a>
        </div>
        {/* likes, comment, small screen */}
        <LikesComments1
          publishedAt={formatDate(article.publishedAt)}
          stats={article.stats}
        />
      </div>
      {/* image */}
      <div className="flex-shrink-0 ml-[24px] 728px:ml-[56px] block">
        <div aria-label={article.title}>
          <div className="728px:hidden">
            <img
              alt={article.title}
              className="inline bg-[#f9f9f9] rounded-[2px] text-[rgba(0,0,0,0.8)] font-[400] align-middle overflow-clip"
              // className="rounded-[2px] bg-[#F9F9F9] align-middle w-[80px] h-[53px] object-cover"
              src={article.coverImageSmall}
              width="80"
              height="53"
              loading="lazy"
            />
          </div>
          <div className="hidden 728px:block">
            <img
              alt={article.title}
              className="rounded-[2px] bg-[#F9F9F9] align-middle w-[160px] h-[107px] object-cover"
              src={article.coverImageBig}
              // src="https://miro.medium.com/v2/resize:fill:240:161/1*0ki5wk-IQYttRhPoro8EoA.png"
              width="160"
              height="107"
              // loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleItem;
