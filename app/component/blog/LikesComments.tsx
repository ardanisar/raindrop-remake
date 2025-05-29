import React from "react";
import Tooltip from "./Tooltip";
import { Stats } from "@/data/mockArticles";

type LikesCommentsProps = {
  publishedAt: any;
  stats: Stats;
};

function LikesComments({ publishedAt, stats }: LikesCommentsProps) {
  return (
    <>
      <div className="728px:hidden pt-[12px]">
        <span className="text-[13px] text-[#6B6B6B] leading-[20px] font-400">
          <div className="justify-between h-[48px] flex-[1_0_auto] flex">
            <div className="gap-[16px] items-center flex">
              <span>{publishedAt}</span>
              <div className="hidden 368px:block">
                <div className="h-[16px] w-max-[200px] relative items-center flex">
                  <div className="flex items-center gap-4 transition-opacity duration-300 ease-out opacity-0 absolute">
                    <div className="w-[80px] h-[16px] bg-[#F2F2F2] ml-[16px] block"></div>
                  </div>
                  <a
                    className="z-2 relative flex items-center gap-[16px] transition-opacity duration-300 ease-out"
                    tabIndex={-1}
                    rel="noopener follow"
                    href="/ai-suggestions-5a85762ae176?source=collection_home_page----64dc68379046-----0-----------------------------------"
                  >
                    <Tooltip text={`${stats.likes} claps`}>
                      <div>
                        <div
                          className="flex"
                          aria-hidden="false"
                          aria-describedby="151"
                          aria-labelledby="151"
                        >
                          <div tabIndex={-1} className="no-outline">
                            <div className="gap-[4px] items-center flex">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="none"
                                aria-labelledby="clap-filled-static-desc"
                                viewBox="0 0 16 16"
                              >
                                <desc id="clap-filled-static-desc">
                                  A clap icon
                                </desc>
                                <path
                                  fill="#6B6B6B"
                                  fillRule="evenodd"
                                  d="m3.672 10.167 2.138 2.14h-.002c1.726 1.722 4.337 2.436 5.96.81 1.472-1.45 1.806-3.68.76-5.388l-1.815-3.484c-.353-.524-.849-1.22-1.337-.958-.49.261 0 1.56 0 1.56l.78 1.932L6.43 2.866c-.837-.958-1.467-1.108-1.928-.647-.33.33-.266.856.477 1.598.501.503 1.888 1.957 1.888 1.957.17.174.083.485-.093.655a.56.56 0 0 1-.34.163.43.43 0 0 1-.317-.135s-2.4-2.469-2.803-2.87c-.344-.346-.803-.54-1.194-.15-.408.406-.273 1.065.11 1.447.345.346 2.31 2.297 2.685 2.67l.062.06c.17.175.269.628.093.8-.193.188-.453.33-.678.273a.9.9 0 0 1-.446-.273S2.501 6.84 1.892 6.23c-.407-.406-.899-.333-1.229 0-.525.524.263 1.28 1.73 2.691.384.368.814.781 1.279 1.246m8.472-7.219c.372-.29.95-.28 1.303.244V3.19l1.563 3.006.036.074c.885 1.87.346 4.093-.512 5.159l-.035.044c-.211.264-.344.43-.74.61 1.382-1.855.963-3.478-.248-5.456L11.943 3.88l-.002-.037c-.017-.3-.039-.71.203-.895"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                              <span>{stats.likes}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tooltip>
                    <Tooltip text={`${stats.comments} responses`}>
                      <div>
                        <div
                          className="flex"
                          aria-hidden="false"
                          aria-describedby="5"
                          aria-labelledby="5"
                        >
                          <div tabIndex={-1} className="no-outline">
                            <div className="gap-[4px] items-center flex">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="#6B6B6B"
                                aria-labelledby="response-filled-16px-desc"
                                viewBox="0 0 16 16"
                              >
                                <desc id="response-filled-16px-desc">
                                  A response icon
                                </desc>
                                <path
                                  fill="#6B6B6B"
                                  d="M12.344 11.458A5.28 5.28 0 0 0 14 7.526C14 4.483 11.391 2 8.051 2S2 4.483 2 7.527c0 3.051 2.712 5.526 6.059 5.526a6.6 6.6 0 0 0 1.758-.236q.255.223.554.414c.784.51 1.626.768 2.512.768a.37.37 0 0 0 .355-.214.37.37 0 0 0-.03-.384 4.7 4.7 0 0 1-.857-1.958v.014z"
                                ></path>
                              </svg>
                              <span>{stats.comments}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tooltip>
                  </a>
                </div>
              </div>
            </div>
            <Tooltip text="Save">
              <div className="flex-[0_0_0] flex items-center justify-end">
                <div className="hidden 368px:block">
                  <div>
                    <div
                      className="inline-block"
                      aria-hidden="false"
                      aria-describedby="6"
                      aria-labelledby="6"
                    >
                      <div tabIndex={-1} className="no-outline">
                        <span>
                          <a
                            className="z-2 relative cursor-pointer"
                            href="https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fbookmark%2Fp%2F5a85762ae176&amp;operation=register&amp;redirect=https%3A%2F%2Fblog.raindrop.io%2Fai-suggestions-5a85762ae176&amp;source=----64dc68379046-----0-----------------bookmark_preview------------------"
                            rel="noopener follow"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              fill="none"
                              viewBox="0 0 25 25"
                              // className="p-[12px]"
                              className="hover:text-[#242424]"
                              aria-label="Add to list bookmark button"
                            >
                              <path
                                fill="currentColor"
                                d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .805.396L12.5 17l5.695 4.396A.5.5 0 0 0 19 21v-8.5a.5.5 0 0 0-1 0v7.485l-5.195-4.012a.5.5 0 0 0-.61 0L7 19.985z"
                              ></path>
                            </svg>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tooltip>
          </div>
        </span>
      </div>
    </>
  );
}

export default LikesComments;
