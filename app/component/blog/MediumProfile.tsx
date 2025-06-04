import React from "react";

type MediumProfileProps = {
  logoSrc: string;
  logoAlt: string;
  description: string;
  buttonUrl: string;
  buttonLabel?: string;
  connectText: string;
  socialLink: string;
  socialIcon: React.ReactNode;
};

const MediumProfile = ({
  logoSrc,
  logoAlt,
  description,
  buttonUrl,
  buttonLabel = "Follow",
  connectText,
  socialLink,
  socialIcon,
}: MediumProfileProps) => {
  return (
    <div className="mt-[40px] pb-0 block">
      {/* Logo */}
      <div className="pb-[16px] block">
        <div className="relative block">
          <img
            alt={logoAlt}
            className="w-[88px] h-[88px] bg-[#F2F2F2] box-border block rounded-[50%] align-middle"
            src={logoSrc}
            width="88"
            height="88"
            loading="lazy"
          />
          <div className="w-[88px] h-[88px] absolute shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] border-none top-0 block rounded-full"></div>
        </div>
      </div>

      {/* Description */}
      <div className="pb-[16px] block">
        <p className="text-[14px] text-[#6B6B6B] leading-[20px] font-normal">
          <span className="break-words">{description}</span>
        </p>
      </div>

      {/* Follow Button */}
      {buttonUrl && (
        <div className="pb-[16px] block">
          <span>
            <a
              className="inline-block box-border text-[14px] text-white bg-[#4d7aff] border border-[#4d7aff] rounded-[1386px] px-4 py-[8px] text-center no-underline font-normal leading-[20px] cursor-pointer hover:bg-blue-600 hover:border-blue-600"
              href={buttonUrl}
              // rel="noopener noreferrer"
              target="_blank"
            >
              {buttonLabel}
            </a>
          </span>
        </div>
      )}

      {/* Connect Section */}
      {(connectText || socialLink) && (
        <div className="flex flex-wrap items-center mt-[1px]">
          {connectText && (
            <div className="flex-[0_0_auto] mr-[16px] items-center flex">
              <p className="text-[16px] text-[#6B6B6B] font-400">
                {connectText}
              </p>
            </div>
          )}
          {socialLink && socialIcon && (
            <div className="flex flex-[0_0_auto] items-center">
              <div className="block">
                <a
                  className="cursor-pointer m-0 p-0"
                  href={socialLink}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Social Link"
                >
                  {socialIcon}
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MediumProfile;
