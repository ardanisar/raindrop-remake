import React from "react";
import { mockArticles } from "@/data/mockArticles";
import FooterSidebar from "./FooterSidebar";
import Editor from "./Editor";

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
                  {/* list editor */}
                  {uniqueAuthors.map((author) => (
                    <Editor key={author.name} author={author} />
                  ))}
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
