"use client";

import React from "react";
import LikesComments from "./LikesComments";
import LikesComments1 from "./LikesComments1";
import HoverProfile from "./HoverProfile";
import { Article } from "@/data/mockArticles";

type ArticleCardProps = {
  article: Article;
  className?: string;
};

function ArticleCard({ article, className }: ArticleCardProps) {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    // mulai dari class o q
    <div className="flex justify-center">
      <div className="904px:max-w-[680px] mx-[24px] min-w-0 w-full">
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
                        <div className="flex">
                          <div className="mb-[16px] items-center flex">
                            <HoverProfile
                              profileData={{
                                name: "Rustem Mussabekov",
                                avatar:
                                  "https://miro.medium.com/v2/resize:fill:30:30/1*VFTN-MPKg_EG0tXiyQPG0g.jpeg",
                                bio: "Founder of https://raindrop.io",
                                followers: "1.8k",
                              }}
                            >
                              <div className="mr-[8px] block">
                                <div>
                                  {/* profil pict */}

                                  <div
                                    className="block"
                                    aria-hidden="false"
                                    aria-describedby="1"
                                    aria-labelledby="1"
                                  >
                                    <div tabIndex={-1} className="outline-none">
                                      <a
                                        tabIndex={-1}
                                        href="https://medium.com/@exentrich?source=collection_home_page----64dc68379046-----0-----------------------------------"
                                        rel="noopener follow"
                                        className="relative z-2"
                                      >
                                        <div className="block relative">
                                          <img
                                            alt={article.author.name}
                                            className="profil-img-article"
                                            src={article.author.avatar}
                                            width="20"
                                            height="20"
                                            loading="lazy"
                                          />
                                          <div className="profile-pict-article"></div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </HoverProfile>
                            {/* profil name */}
                            <HoverProfile
                              profileData={{
                                name: "Rustem Mussabekov",
                                avatar:
                                  "https://miro.medium.com/v2/resize:fill:30:30/1*VFTN-MPKg_EG0tXiyQPG0g.jpeg",
                                bio: "Founder of https://raindrop.io",
                                followers: "1.8k",
                              }}
                            >
                              <div>
                                <div
                                  className="y"
                                  aria-hidden="false"
                                  aria-describedby="2"
                                  aria-labelledby="2"
                                >
                                  <div tabIndex={-1} className="dd">
                                    <a
                                      className="cm aq cn co cp at cq au av aw ax ay az jf o p"
                                      href="https://medium.com/@exentrich?source=collection_home_page----64dc68379046-----0-----------------------------------"
                                      rel="noopener follow"
                                    >
                                      <p className="text-[#242424] text-[13px] text-ellipsis break-all max-h-[20px] overflow-hidden font-normal hover:underline">
                                        {article.author.name}
                                      </p>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </HoverProfile>
                          </div>
                        </div>
                        {/* article and image */}
                        <div className="flex">
                          {/* article*/}
                          <div className="break-words block flex-[1_1_0%] min-w-0 max-w-[464px]">
                            {/* article */}
                            <div className="break-words">
                              <a
                                className="flex-col flex static cursor-pointer m-0 p-0 z-2"
                                rel="noopener follow"
                                // href="/ai-suggestions-5a85762ae176?source=collection_home_page----64dc68379046-----0-----------------------------------"
                              >
                                <h2
                                  className="leading-[30px] text-[24px] font-[700] text-ellipsis overflow-hidden text-[#242424] m-0"
                                  style={{ letterSpacing: "-0.016em" }}
                                >
                                  {article.title}
                                </h2>
                                <div className="pt-[8px]">
                                  <h3 className="max-h-[40px] 904px:max-h-none text-ellipsis overflow-hidden text-[16px] text-[#6B6B6B] leading-[20px] font-[400]">
                                    {article.excerpt}
                                  </h3>
                                </div>
                              </a>
                            </div>
                            {/* likes, comment, small screen */}
                            <LikesComments1
                              publishedAt={formatDate(article.publishedAt)}
                              likes={article.stats.likes}
                              comments={article.stats.comments}
                            />
                          </div>
                          {/* image */}
                          <div className="ml-[24px] 728px:ml-[56px] block">
                            <div aria-label={article.title}>
                              <div className="728px:hidden">
                                <img
                                  alt={article.title}
                                  className="rounded-[2px] bg-[#F9F9F9] align-middle w-[80px] h-[53px] object-cover"
                                  src={article.coverImage}
                                  width="80"
                                  height="53"
                                  loading="lazy"
                                />
                              </div>
                              <div className="hidden 728px:block">
                                <img
                                  alt={article.title}
                                  className="rounded-[2px] bg-[#F9F9F9] align-middle w-[160px] h-[107px] object-cover"
                                  src={article.coverImage}
                                  width="160"
                                  height="107"
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* like, comment, etc small screen*/}
                        <LikesComments
                          publishedAt={formatDate(article.publishedAt)}
                          likes={article.stats.likes}
                          comments={article.stats.comments}
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
