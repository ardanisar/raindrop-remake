"use client";

import { useEffect } from "react";
import React from "react";
import Navbar from "./Navbar";
import DropdownButton from "./DropdownButton";
import { OptionType } from "./DropdownButton";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const insetValue = window.scrollY > 0 ? 100 : 0;
      document.documentElement.style.setProperty(
        "--scrollview-inset-value",
        `${insetValue}`
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial value on load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dropdownOptions: OptionType[] = [
    { value: "-1", label: "Menu", href: "", disabled: true },
    { value: "0", label: "Download", href: "/download" },
    { value: "1", label: "Pricing", href: "/pro/buy" },
    { value: "2", label: "Integrations", href: "/integrations" },
    { value: "3", label: "Blog", href: "/blog" },
    { value: "4", label: "About", href: "/about" },
    { separator: true },
    { value: "6", label: "Login", href: "/account/login" },
  ];

  return (
    <header
      className="header-lp relative"
      // style={
      //   {
      //     "--scrollview-inset-value": "0",
      //   } as React.CSSProperties
      // }
    >
      <div className="content toolbar">
        {/* logo */}
        <div className="logo h-[36.6667px]">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="162"
              height="32"
              viewBox="0 0 162 32"
            >
              <defs>
                <path
                  id="a"
                  d="M9.5.917a9.5 9.5 0 0 1 9.5 9.5v9.5H9.5a9.5 9.5 0 0 1 0-19z"
                ></path>
                <path
                  id="c"
                  d="M0 19.917v-9.5l.004-.27a9.5 9.5 0 1 1 9.496 9.77H0z"
                ></path>
              </defs>
              <g fill="none" fillRule="evenodd">
                <path
                  fill="#0B7ED0"
                  d="M28.192 4.7c5.077 4.933 5.077 12.93 0 17.863-.17.165-.343.325-.519.479L19 31l-8.673-7.958c-.176-.154-.35-.314-.52-.479-5.076-4.932-5.076-12.93 0-17.863 5.077-4.933 13.309-4.933 18.385 0z"
                ></path>
                <g transform="translate(0 11.083)">
                  <mask id="b" fill="#fff">
                    <use xlinkHref="#a"></use>
                  </mask>
                  <use fill="#2CD4ED" xlinkHref="#a"></use>
                  <path
                    fill="#0DB4E2"
                    d="M28.192-6.384c5.077 4.933 5.077 12.931 0 17.864-.17.165-.343.324-.519.478L19 19.917l-8.673-7.959c-.176-.154-.35-.313-.52-.478-5.076-4.933-5.076-12.93 0-17.864 5.077-4.933 13.309-4.933 18.385 0z"
                    mask="url(#b)"
                  ></path>
                </g>
                <g transform="translate(19 11.083)">
                  <mask id="d" fill="#fff">
                    <use xlinkHref="#c"></use>
                  </mask>
                  <use fill="#3169FF" xlinkHref="#c"></use>
                  <path
                    fill="#3153FF"
                    d="M9.192-6.384c5.077 4.933 5.077 12.931 0 17.864-.17.165-.343.324-.519.478L0 19.917l-8.673-7.959c-.176-.154-.35-.313-.52-.478-5.076-4.933-5.076-12.93 0-17.864 5.077-4.933 13.309-4.933 18.385 0z"
                    mask="url(#d)"
                  ></path>
                </g>
                <path
                  fill="#000"
                  fillRule="nonzero"
                  d="M59.722 22.774l-3.071-4.936c1.507-.245 2.977-1.451 2.977-3.693 0-2.317-1.62-3.938-4.108-3.938H50v12.567h2.204v-4.691h2.186l2.788 4.69h2.544zm-7.518-6.632v-3.994h3.015c1.243 0 2.148.791 2.148 1.997s-.905 1.997-2.148 1.997h-3.015zm20.932 6.632L68.2 10.207h-2.75l-4.937 12.567h2.506l.923-2.412h5.765l.923 2.412h2.506zm-4.05-4.352h-4.522l2.26-5.992 2.262 5.992zm7.63 4.352V10.207h-2.204v12.567h2.204zm13.565 0V10.207h-2.204v8.723l-6.425-8.723h-2.26v12.567h2.204v-8.968l6.556 8.968h2.13zm7.348 0c3.919 0 6.575-2.581 6.575-6.274s-2.656-6.293-6.575-6.293h-4.672v12.567h4.672zm-2.468-1.94v-8.686h2.468c2.807 0 4.314 1.922 4.314 4.352 0 2.374-1.582 4.333-4.314 4.333h-2.468zm20.894 1.94l-3.07-4.936c1.506-.245 2.976-1.451 2.976-3.693 0-2.317-1.62-3.938-4.107-3.938h-5.52v12.567h2.204v-4.691h2.185l2.789 4.69h2.543zm-7.517-6.632v-3.994h3.014c1.244 0 2.148.791 2.148 1.997s-.904 1.997-2.148 1.997h-3.014zm21.911.358c0-3.75-2.656-6.5-6.424-6.5-3.768 0-6.425 2.75-6.425 6.5s2.657 6.5 6.425 6.5 6.424-2.75 6.424-6.5zm-10.588 0c0-2.6 1.62-4.54 4.164-4.54 2.524 0 4.163 1.94 4.163 4.54 0 2.581-1.639 4.54-4.163 4.54-2.544 0-4.164-1.959-4.164-4.54zm14.922 6.274v-4.691h3.316c2.618 0 4.107-1.81 4.107-3.938 0-2.13-1.47-3.938-4.107-3.938h-5.52v12.567h2.204zm3.014-6.632h-3.014v-3.994h3.014c1.244 0 2.148.791 2.148 1.997s-.904 1.997-2.148 1.997zM149.273 10h1.182v8.273h-1.182V10zm-4.728 2.364a1.182 1.182 0 1 0 0-2.364 1.182 1.182 0 0 0 0 2.364zm12.41 5.909a4.136 4.136 0 1 1 0-8.273 4.136 4.136 0 0 1 0 8.273zm0-1.182a2.955 2.955 0 1 0 0-5.91 2.955 2.955 0 0 0 0 5.91z"
                  opacity=".8"
                ></path>
              </g>
            </svg>
          </a>
        </div>
        <Navbar />
        {/* login icon */}
        <menu className="min-w-[161px] justify-end">
          <li data-active="false" className="cursor-pointer hover:bg-[#F5F5F5]">
            <a href="https://app.raindrop.io/account/login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                className="mr-[10px] opacity-[0.9]"
              >
                <path
                  fillRule="evenodd"
                  d="M5.392 15c1.054.635 2.288 1 3.608 1 1.32 0 2.554-.365 3.608-1A6.967 6.967 0 0 0 9 14c-1.32 0-2.554.365-3.608 1zm-1.61-1.334A8.959 8.959 0 0 1 9 12c1.945 0 3.746.617 5.218 1.666a7 7 0 1 0-10.436 0zM9 18A9 9 0 1 1 9 0a9 9 0 0 1 0 18zm0-6c-1.657 0-3-1.79-3-4s1.343-4 3-4 3 1.79 3 4-1.343 4-3 4z"
                ></path>
              </svg>
              Login
            </a>
          </li>
        </menu>
        <DropdownButton options={dropdownOptions} />
      </div>
    </header>
  );
}

export default Header;
