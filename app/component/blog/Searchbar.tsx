import React from "react";

function Searchbar() {
  return (
    <div className="ml-[24px] hidden 552px:block">
      <div className="bg-[#F9F9F9] w-[240px] rounded-[20px] border-none items-center flex font-[400]">
        <div
          className="inline-block"
          aria-hidden="false"
          aria-describedby="searchResults"
          aria-labelledby="searchResults"
        ></div>
        <div className="mx-[12px] flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="rgb(107, 107, 107)"
              fillRule="evenodd"
              d="M4.092 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0m6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73A8.05 8.05 0 0 0 11.042 3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          role="combobox"
          aria-controls="searchResults"
          aria-expanded="false"
          aria-label="search"
          data-testid="headerSearchInput"
          tabIndex={0}
          className="p-[10px_20px_10px_0] text-[14px] leading-[20px] w-full"
          style={{ color: "#6B6B6B" }}
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default Searchbar;
