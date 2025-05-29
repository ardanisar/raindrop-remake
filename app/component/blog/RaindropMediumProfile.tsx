import React from "react";
import Navbar from "./Navbar";

function RaindropMediumProfile() {
  return (
    <div className="block">
      <div className="justify-center flex">
        {/* raindrop medium profile */}
        <div className="1080px:max-w-[680px] mx-[24px] min-w-0 w-full">
          <div className="mt-logo shadow-[inset_0_-1px_0_#F2F2F2] block">
            <div className="raindrop-profile flex">
              <div className="logo 904px:items-center items-start flex w-full">
                <div className="728px:mr-[16px] justify-start flex-[1_1_auto] items-center flex">
                  {/* raindrop logo & 2k followers */}
                  <div className="block">
                    <img
                      alt="Raindrop.io Blog"
                      className="raindrop-logo align-middle"
                      src="https://miro.medium.com/v2/resize:fit:626/1*bFdoWaqOYfZBY0Ny_OBlWA.png"
                      width="313"
                      height="60"
                      loading="lazy"
                      style={{
                        overflowClipMargin: "content-box",
                        overflow: "clip",
                      }}
                    />
                    <div className="904px:hidden mt-[8px]">
                      <p className="leading-[24px] text-[16px] text-[#6B6B6B] font-[400] m-0">
                        <span className="pw-follower-count as b hh hi ap">
                          <a
                            className="cursor-pointer m-0 p-0 no-underline"
                            rel="noopener follow"
                            href="/followers?source=collection_home_page----64dc68379046----------------------------------------"
                          >
                            2K followers
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* follow button */}
              <div className="follow-button w-full">
                <span>
                  <a
                    className="py-[8px] px-[16px] border-[#4d7aff] bg-[#4d7aff] text-[14px] items-center text-center no-underline inline-block box-border border-[1px] rounded-[99em] fill-white text-white leading-[20px] border-solid font-[400]"
                    href="https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fsubscribe%2Fcollection%2Fraindrop-io&amp;operation=register&amp;redirect=https%3A%2F%2Fblog.raindrop.io%2F&amp;collection=Raindrop.io+Blog&amp;collectionId=64dc68379046&amp;source=collection_home----64dc68379046----------------------follow_header------------------"
                    rel="noopener follow"
                  >
                    Follow
                  </a>
                </span>
              </div>
            </div>
            {/* navbar */}
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaindropMediumProfile;
