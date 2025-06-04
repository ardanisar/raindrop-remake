import React from "react";
import Navbar from "./Navbar";

type RaindropMediumProfileProps = {
  logoSrc: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  followerCount?: string;
  followerLink?: string;
  followUrl: string;
  followLabel?: string;
};

function RaindropMediumProfile(props: RaindropMediumProfileProps) {
  const {
    logoSrc,
    logoAlt = "Profile Logo",
    logoWidth = 313,
    logoHeight = 60,
    followerCount = "2K followers",
    followerLink = "#",
    followUrl,
    followLabel = "Follow",
  } = props;

  return (
    <div className="block">
      <div className="justify-center flex">
        <div className="728px:max-w-[680px] mx-[24px] min-w-0 w-full">
          <div className="728px:mt-[52px] 728px:mb-[48px] my-[24px] shadow-[inset_0_-1px_0_#F2F2F2] block">
            <div className="raindrop-profile flex">
              <div className="logo 904px:items-center items-start flex w-full">
                <div className="728px:mr-[16px] justify-start flex-[1_1_auto] items-center flex">
                  <div className="block">
                    <img
                      alt={logoAlt}
                      className="raindrop-logo align-middle"
                      src={logoSrc}
                      width={logoWidth}
                      height={logoHeight}
                      loading="lazy"
                      style={{
                        overflowClipMargin: "content-box",
                        overflow: "clip",
                      }}
                    />
                    <div className="904px:hidden mt-[8px]">
                      <p className="leading-[24px] text-[16px] text-[#6B6B6B] font-[400] m-0">
                        <span className="pw-follower-count">
                          <a
                            className="cursor-pointer m-0 p-0 no-underline"
                            rel="noopener follow"
                            href={followerLink}
                          >
                            {followerCount}
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="follow-button w-full justify-end flex-[0_0_content]">
                <span>
                  <a
                    className="py-[8px] px-[16px] border-[#4d7aff] bg-[#4d7aff] text-[14px] items-center text-center no-underline inline-block box-border border-[1px] rounded-[99em] fill-white text-white leading-[20px] border-solid font-[400]"
                    href={followUrl}
                    rel="noopener follow"
                    target="_blank"
                  >
                    {followLabel}
                  </a>
                </span>
              </div>
            </div>

            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaindropMediumProfile;
