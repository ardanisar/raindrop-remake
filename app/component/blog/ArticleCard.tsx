"use client";

import React from "react";
import LikesComments from "./LikesComments";
import LikesComments1 from "./LikesComments1";
import HoverProfile from "./HoverProfile";
import { Article } from "@/data/mockArticles";
import Profile from "./Profile";
import ArticleItem from "./ArticleItem";
import { formatDate } from "@/app/utils/formatDate";

type ArticleCardProps = {
  article: Article;
  className?: string;
};

function ArticleCard({ article, className }: ArticleCardProps) {
  return (
    <div className="flex justify-center">
      <div className="728px:max-w-[680px] mx-[24px] min-w-0 w-full">
        <div className={`block w-full ${className}`}>
          <article className="block">
            <div className="box-content block">
              <div className="h-full w-full">
                <div className="block">
                  <div className="w-full block">
                    {/* box artile */}
                    <div className="relative">
                      <div className="w-full">
                        {/* profil pict and name */}
                        <Profile author={article.author} />
                        {/* article and image */}
                        <ArticleItem article={article} />
                        {/* like, comment, etc small screen*/}
                        <LikesComments
                          publishedAt={formatDate(article.publishedAt)}
                          stats={article.stats}
                        />
                        <div></div>
                      </div>
                    </div>
                    {/* spacing antar artikel */}
                    <div className="mt-[20px] h-0 border-b border-[#F2F2F2] w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
