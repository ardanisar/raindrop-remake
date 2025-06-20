import React from "react";

function SearchbarIcon() {
  return (
    <div className="block 552px:hidden">
      <div className="mr-[32px] flex">
        <a
          className="cursor-pointer m-0 p-0 no-underline"
          data-testid="headerSearchButton"
          href="https://medium.com/search?source=---two_column_layout_nav-----------------------------------------"
          rel="noopener follow"
        >
          <div className="fill-[#6B6B6B] text-[14px] text-[#6B6B6B] leading-[20px] items-center flex font-[400] relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              aria-label="Search"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M4.092 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0m6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73A8.05 8.05 0 0 0 11.042 3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}

export default SearchbarIcon;
