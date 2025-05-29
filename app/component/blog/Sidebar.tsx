import React from "react";
import { mockArticles } from "@/data/mockArticles";
import FooterSidebar from "./FooterSidebar";

function Sidebar() {
  // ambil list editor
  const uniqueAuthors = Object.values(
    mockArticles.reduce((acc, article) => {
      const key = article.author.name;
      if (!acc[key]) {
        acc[key] = article.author;
      }
      return acc;
    }, {} as Record<string, (typeof mockArticles)[0]["author"]>)
  );

  return (
    <>
      <div className="sidebar hidden min-h-[100vh] border-l sorder-solid border-[#F2F2F2] pr-[24px] box-border">
        <div className="w-full h-full relative inline-block">
          <div className="block sticky top-[57px]">
            <div
              className="flex flex-col"
              style={{ minHeight: "calc(100vh - 57px)" }}
            >
              {/* raindrop medium & editor */}
              <div className="block flex-[1_0_auto]">
                <div className="mt-[40px] border-b-none pb-0 block">
                  {/* raindrop logo */}
                  <div className="pb-[16px] block">
                    <div className="relative block">
                      <img
                        alt="Raindrop.io Blog"
                        className="w-[88px] h-[88px] bg-[#F2F2F2] box-border block rounded-[50%] align-middle"
                        src="https://miro.medium.com/v2/resize:fill:176:176/1*JtxOMEcB0N7yoGiHjFf1Gg.png"
                        width="88"
                        height="88"
                        loading="lazy"
                      />
                      <div className="w-[88px] h-[88px] absolute shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] border-none top-0 block rounded-full"></div>
                    </div>
                  </div>
                  {/* all in one book manager */}
                  <div className="pb-[16px] block">
                    <p className="text-sm font-sans text-[#6B6B6B] leading-[20px] font-normal">
                      <span className="break-words">
                        All in one bookmarks manager
                      </span>
                    </p>
                  </div>
                  {/* follow button */}
                  <div className="pb-[16px] block">
                    <span>
                      <a
                        className="inline-block text-sm text-white bg-[#4d7aff] border-solid border-[#4d7aff] hover:bg-blue-600 hover:border-blue-600 rounded-full px-4 py-2 text-center no-underline font-normal leading-5"
                        href="https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fsubscribe%2Fcollection%2Fraindrop-io&amp;operation=register&amp;redirect=https%3A%2F%2Fblog.raindrop.io%2F&amp;collection=Raindrop.io+Blog&amp;collectionId=64dc68379046&amp;source=collection_home---collection_sidebar-64dc68379046----------------------follow_sidebar------------------"
                        rel="noopener follow"
                      >
                        Follow
                      </a>
                    </span>
                  </div>
                  {/* connect with raindrop */}
                  <div className="flex flex-wrap items-center">
                    <div className="flex-[0_0_auto] mr-[16px] items-center flex">
                      <p className="leading-[24px] text-[16px] text-[#6B6B6B] font-400">
                        Connect with Raindrop.io Blog
                      </p>
                    </div>
                    <div className="flex flex-[0_0_auto] items-center">
                      <div className="block">
                        <a
                          className="cursor-pointer m-o p-o"
                          href="https://twitter.com/raindrop_io?source=collection_home_page---collection_sidebar-64dc68379046----------------------------------------"
                          rel="noopener follow"
                          target="_blank"
                        >
                          <span aria-label="Twitter (link opens in new tab)">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                              className="fill=[#242424]"
                            >
                              <path
                                fill="#242424"
                                d="M13.346 10.932 18.88 4.5h-1.311l-4.805 5.585L8.926 4.5H4.5l5.803 8.446L4.5 19.69h1.311l5.074-5.898 4.053 5.898h4.426zM11.55 13.02l-.588-.84-4.678-6.693h2.014l3.776 5.4.588.842 4.907 7.02h-2.014z"
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* editor */}
                <div className="mt-[40px] border-b-none pb-0 block">
                  <div className="pb-[16px] block">
                    <h2 className="tracking-normal font-medium text-base text-[#242424] font-sans leading-[20px]">
                      Editors
                    </h2>
                  </div>
                  <div className="block w-full h-full">
                    <div className="flex w-full justify-between items-start">
                      <div className="flex">
                        <a
                          tabIndex={0}
                          href="https://medium.com/@exentrich?source=collection_home_page---collection_editors-64dc68379046-----0-----------------------------------"
                          rel="noopener follow"
                        >
                          <div className="relative block">
                            <img
                              alt="Rustem Mussabekov"
                              className="bg-[#F2F2F2] box-border rounded-full align-middle"
                              src="https://miro.medium.com/v2/resize:fill:64:64/1*VFTN-MPKg_EG0tXiyQPG0g.jpeg"
                              width="32"
                              height="32"
                              loading="lazy"
                            />
                            <div className="dw t y dx dy dz ab ct ms"></div>
                          </div>
                        </a>
                        <div className="mx-[8px] block">
                          <a
                            className="cursor-pointer m-0 p-0"
                            href="https://medium.com/@exentrich?source=collection_home_page---collection_editors-64dc68379046-----0-----------------------------------"
                            rel="noopener follow"
                          >
                            <h2 className="tracking-normal max-h-[40px] font-700 break-words text-ellipsis overflow-hidden text-[16px] leading-[20px] font-sans text-[#242424]">
                              Rustem Mussabekov
                            </h2>
                          </a>
                          <a
                            className="cursor-pointer m-0 p-0"
                            href="https://medium.com/@exentrich?source=collection_home_page---collection_editors-64dc68379046-----0-----------------------------------"
                            rel="noopener follow"
                          >
                            <div className="mt-[4px] break-words block">
                              <p className="max-h-[40px] text-ellipsis overflow-hidden text-[13px] text-[#6B6B6B] font-400 break-words">
                                Founder of https://raindrop.io
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="text-right min-w-[102px] block">
                        <div className="inline-block" aria-hidden="false">
                          <button className="py-[6px] px-[12px] rounded-[24px] bg-0 xursor-pointer justify-center items-center flex border border-[#242424]">
                            <span className="text-[#242424] text-[14px] leading-[20px] w-full font-400 cursor-pointer">
                              <span className="text-[#242424] text-[14px]">
                                Follow
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* footer */}
              <FooterSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
