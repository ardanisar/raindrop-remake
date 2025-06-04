import React from "react";
import NavbarItems from "./NavbarItems";
import { blogNavLinks } from "@/data/navLinksBlog";

function Navbar() {
  return (
    <nav className="blog-nav">
      <div className="blog-nav-box">
        {blogNavLinks.map((item) => (
          <NavbarItems key={item.linkItems} {...item} />
        ))}
        {/* button untuk hide navbar when small screen */}
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
