import React from "react";

function Navbar() {
  return (
    <nav className="blog-nav">
      <div className="blog-nav-box">
        {/* home */}
        <span className="block">
          <div className="blog-nav-list" aria-current="true">
            <a
              className="cursor-pointer"
              role="tab"
              href="https://blog.raindrop.io/?source=collection_home_page----64dc68379046----------------------------------------"
              rel="noopener follow"
            >
              <p className="text-[#242424] text-[14px] leading-[20px] font-[400]">
                <span className="cm ia">Home</span>
              </p>
            </a>
          </div>
        </span>
        {/* about */}
        <span className="block">
          <div
            className="border-b-[1px] border-solid border-[#F2F2F2] pb-[16px] mr-[32px] block min-w-max"
            aria-current="false"
          >
            <a
              className="cursor-pointer hover:text-[#242424]"
              role="tab"
              href="https://blog.raindrop.io/about?source=collection_home_page----64dc68379046----------------------------------------"
              rel="noopener follow"
            >
              <p className="text-[14px] text-[#6B6B6B] leading-[20px] font-[400]">
                <span className="hover:text-[#242424]">About</span>
              </p>
            </a>
          </div>
        </span>
        {/* updates */}
        <span className="block">
          <div
            className="border-b-[1px] border-solid border-[#F2F2F2] pb-[16px] mr-[32px] block min-w-max"
            aria-current="false"
          >
            <a
              className="cursor-pointer"
              role="tab"
              href="https://blog.raindrop.io/about?source=collection_home_page----64dc68379046----------------------------------------"
              rel="noopener follow"
            >
              <p className="text-[14px] text-[#6B6B6B] leading-[20px] font-[400]">
                <span className="hover:text-[#242424]">Updates</span>
              </p>
            </a>
          </div>
        </span>
        {/* Go to App */}
        <span className="block">
          <div
            className="border-b-[1px] border-solid border-[#F2F2F2] pb-[16px] mr-[32px] block min-w-max"
            aria-current="false"
          >
            <a
              className="cursor-pointer"
              role="tab"
              href="https://blog.raindrop.io/about?source=collection_home_page----64dc68379046----------------------------------------"
              rel="noopener follow"
            >
              <p className="text-[14px] text-[#6B6B6B] leading-[20px] font-[400]">
                <span className="hover:text-[#242424]">Go to App</span>
              </p>
            </a>
          </div>
        </span>
        <div className="368px:hidden flex items-center top-0 absolute right-0 b-[12px] pl-[44px] bg-fade-gradient opacity-[1]">
          <button
            className="bg-transparent overflow-visible cursor-pointer border-none m-[2px] pointer-events-none"
            aria-label="next sections"
            tabIndex={0}
          >
            <svg
              width="26px"
              height="26px"
              className="svgIcon-use rotate-180 fill-[#6B6B6B]"
              viewBox="0 0 19 19"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M11.47 13.969 6.986 9.484 11.47 5l.553.492L8.03 9.484l3.993 3.993z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
