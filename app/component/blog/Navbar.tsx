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
      </div>
    </nav>
  );
}

export default Navbar;
