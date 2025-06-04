import React from "react";
import Searchbar from "./Searchbar";
import SearchbarIcon from "./SearchbarIcon";
import Logo from "./Logo";

function Header() {
  return (
    <>
      <div className="block bg-white/1 ">
        <div className="sticky top-0 font-[400]">
          {/* ini untuk layar yg lebih kecil */}
          <div className="904px:hidden flex justify-between items-center leading-[20px] h-[41px] border-solid border-[#F2F2F2] border-b-[1px] px-[24px]">
            {/* open in app */}
            <a
              className="904px:hidden flex h-full cursor-pointer m-0 p-0 text-[13px] text-[#6B6B6B] leading-[20px] items-center font-[400] no-underline"
              href="https://rsci.app.link/?%24canonical_url=https%3A%2F%2Fblog.raindrop.io&amp;%7Efeature=LoOpenInAppButton&amp;%7Echannel=ShowCollectionHome&amp;source=---two_column_layout_nav-----------------------------------------"
              rel="noopener follow"
            >
              Open in app
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
                className="ml-[8px]"
              >
                <path
                  fill="currentColor"
                  d="M.985 8.485a.375.375 0 1 0 .53.53zM8.75 1.25h.375A.375.375 0 0 0 8.75.875zM8.375 6.5a.375.375 0 1 0 .75 0zM3.5.875a.375.375 0 1 0 0 .75zm-1.985 8.14 7.5-7.5-.53-.53-7.5 7.5zm6.86-7.765V6.5h.75V1.25zM3.5 1.625h5.25v-.75H3.5z"
                ></path>
              </svg>
            </a>
            {/* sign up sign in */}
            <div className="flex items-center">
              <p className="leading-[20px] text-[13px] text-[#6B6B6B] font-[400] m-0">
                <span>
                  <a
                    className="rounded-[99em] no-underline items-center border-[#4d7aff] border-1 border-solid bg-[#4d7aff] text-white box-border inline-block pb-[1px] px-[8px] hover:bg-blue-600 transition-colors"
                    // data-testid="headerSignUpButton"
                    href="https://medium.com/m/signin?operation=register&amp;redirect=https%3A%2F%2Fblog.raindrop.io%2F&amp;source=collection_home---two_column_layout_nav-----------------------global_nav------------------"
                    rel="noopener follow"
                  >
                    Sign up
                  </a>
                </span>
              </p>
              <div className="ml-[16px] block">
                <p className="text-[13px] font-[400] m-0 text-[#6B6B6B] leading-[20px] hover:text-black transition-colors ">
                  <span>
                    <a
                      className="cursor-pointer leading-[20px]"
                      // data-testid="headerSignInButton"
                      href="https://medium.com/m/signin?operation=login&amp;redirect=https%3A%2F%2Fblog.raindrop.io%2F&amp;source=collection_home---two_column_layout_nav-----------------------global_nav------------------"
                      rel="noopener follow"
                    >
                      Sign in
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* header line 2 */}
          <div className="w-full justify-between h-[57px] border-b-[1px] border-[#F2F2F2] px-[24px] items-center flex font-[400]">
            {/* medium logo */}
            <div className="flex justify-start">
              <div className="flex items-center flex-[1_0_auto]">
                <Logo
                  name="medium-logo"
                  href="https://medium.com/?source=---two_column_layout_nav-----------------------------------------"
                  svg={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="719"
                      height="160"
                      fill="none"
                      aria-labelledby="wordmark-medium-desc"
                      viewBox="0 0 719 160"
                      className="w-auto h-[25px] align-middle"
                    >
                      <desc id="wordmark-medium-desc">Medium Logo</desc>
                      <path
                        fill="#242424"
                        d="m174.104 9.734.215-.047V8.02H130.39L89.6 103.89 48.81 8.021H1.472v1.666l.212.047c8.018 1.81 12.09 4.509 12.09 14.242V137.93c0 9.734-4.087 12.433-12.106 14.243l-.212.047v1.671h32.118v-1.665l-.213-.048c-8.018-1.809-12.089-4.509-12.089-14.242V30.586l52.399 123.305h2.972l53.925-126.743V140.75c-.687 7.688-4.721 10.062-11.982 11.701l-.215.05v1.652h55.948v-1.652l-.215-.05c-7.269-1.639-11.4-4.013-12.087-11.701l-.037-116.774h.037c0-9.733 4.071-12.432 12.087-14.242m25.555 75.488c.915-20.474 8.268-35.252 20.606-35.507 3.806.063 6.998 1.312 9.479 3.714 5.272 5.118 7.751 15.812 7.368 31.793zm-.553 5.77h65.573v-.275c-.186-15.656-4.721-27.834-13.466-36.196-7.559-7.227-18.751-11.203-30.507-11.203h-.263c-6.101 0-13.584 1.48-18.909 4.16-6.061 2.807-11.407 7.003-15.855 12.511-7.161 8.874-11.499 20.866-12.554 34.343q-.05.606-.092 1.212a50 50 0 0 0-.065 1.151 85.807 85.807 0 0 0-.094 5.689c.71 30.524 17.198 54.917 46.483 54.917 25.705 0 40.675-18.791 44.407-44.013l-1.886-.664c-6.557 13.556-18.334 21.771-31.738 20.769-18.297-1.369-32.314-19.922-31.042-42.395m139.722 41.359c-2.151 5.101-6.639 7.908-12.653 7.908s-11.513-4.129-15.418-11.63c-4.197-8.053-6.405-19.436-6.405-32.92 0-28.067 8.729-46.22 22.24-46.22 5.657 0 10.111 2.807 12.236 7.704zm43.499 20.008c-8.019-1.897-12.089-4.722-12.089-14.951V1.309l-48.716 14.353v1.757l.299-.024c6.72-.543 11.278.386 13.925 2.83 2.072 1.915 3.082 4.853 3.082 8.987v18.66c-4.803-3.067-10.516-4.56-17.448-4.56-14.059 0-26.909 5.92-36.176 16.672-9.66 11.205-14.767 26.518-14.767 44.278-.003 31.72 15.612 53.039 38.851 53.039 13.595 0 24.533-7.449 29.54-20.013v16.865h43.711v-1.746zM424.1 19.819c0-9.904-7.468-17.374-17.375-17.374-9.859 0-17.573 7.632-17.573 17.374s7.721 17.374 17.573 17.374c9.907 0 17.375-7.47 17.375-17.374m11.499 132.546c-8.019-1.897-12.089-4.722-12.089-14.951h-.035V43.635l-43.714 12.551v1.705l.263.024c9.458.842 12.047 4.1 12.047 15.152v81.086h43.751v-1.746zm112.013 0c-8.018-1.897-12.089-4.722-12.089-14.951V43.635l-41.621 12.137v1.71l.246.026c7.733.813 9.967 4.257 9.967 15.36v59.279c-2.578 5.102-7.415 8.131-13.274 8.336-9.503 0-14.736-6.419-14.736-18.073V43.638l-43.714 12.55v1.703l.262.024c9.459.84 12.05 4.097 12.05 15.152v50.17a56.3 56.3 0 0 0 .91 10.444l.787 3.423c3.701 13.262 13.398 20.197 28.59 20.197 12.868 0 24.147-7.966 29.115-20.43v17.311h43.714v-1.747zm169.818 1.788v-1.749l-.213-.05c-8.7-2.006-12.089-5.789-12.089-13.49v-63.79c0-19.89-11.171-31.761-29.883-31.761-13.64 0-25.141 7.882-29.569 20.16-3.517-13.01-13.639-20.16-28.606-20.16-13.146 0-23.449 6.938-27.869 18.657V43.643L545.487 55.68v1.715l.263.024c9.345.829 12.047 4.181 12.047 14.95v81.784h40.787v-1.746l-.215-.053c-6.941-1.631-9.181-4.606-9.181-12.239V66.998c1.836-4.289 5.537-9.37 12.853-9.37 9.086 0 13.692 6.296 13.692 18.697v77.828h40.797v-1.746l-.215-.053c-6.94-1.631-9.18-4.606-9.18-12.239V75.066a42 42 0 0 0-.578-7.26c1.947-4.661 5.86-10.177 13.475-10.177 9.214 0 13.691 6.114 13.691 18.696v77.828z"
                      ></path>
                    </svg>
                  }
                />
                {/* searchbar lengkap */}
                <Searchbar />
              </div>
            </div>
            {/* write */}
            <div className="flex justify-end">
              <div className="font-[400] hidden 728px:block">
                <div className="flex mr-[32px] my-[5px]">
                  <span>
                    <a
                      className="cursor-pointer m-0 p-0"
                      // data-testid="headerWriteButton"
                      href="https://medium.com/m/signin?operation=register&amp;redirect=https%3A%2F%2Fmedium.com%2Fnew-story&amp;source=---top_nav_layout_nav-----------------------new_post_topnav------------------"
                      rel="noopener follow"
                    >
                      <div className="fill-[#6B6B6B] relative text-[14px] text-[#6B6B6B] leading-[20px] items-center flex font-[400]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-label="Write"
                        >
                          <path
                            fill="currentColor"
                            d="M14 4a.5.5 0 0 0 0-1zm7 6a.5.5 0 0 0-1 0zm-7-7H4v1h10zM3 4v16h1V4zm1 17h16v-1H4zm17-1V10h-1v10zm-1 1a1 1 0 0 0 1-1h-1zM3 20a1 1 0 0 0 1 1v-1zM4 3a1 1 0 0 0-1 1h1z"
                          ></path>
                          <path
                            stroke="currentColor"
                            d="m17.5 4.5-8.458 8.458a.25.25 0 0 0-.06.098l-.824 2.47a.25.25 0 0 0 .316.316l2.47-.823a.25.25 0 0 0 .098-.06L19.5 6.5m-2-2 2.323-2.323a.25.25 0 0 1 .354 0l1.646 1.646a.25.25 0 0 1 0 .354L19.5 6.5m-2-2 2 2"
                          ></path>
                        </svg>
                        <div className="ml-[8px] block">Write</div>
                      </div>
                    </a>
                  </span>
                </div>
              </div>
              {/* searchbar icon */}
              <SearchbarIcon />
              {/* sign up sign in */}
              {/* show only on big screen */}
              <div className="hidden 904px:block mt-[1.2px]">
                <div className="flex items-center mr-[32px]">
                  <p className="leading-[20px] text-[13px] text-[#6B6B6B] font-[400] m-0">
                    <span>
                      <a
                        className="sign-up rounded-[99em] no-underline items-center border-[#4d7aff] border-1 border-solid bg-[#4d7aff] text-white box-border inline-block py-[5px] px-[12px] hover:bg-blue-600 transition-colors"
                        // data-testid="headerSignUpButton"
                        href="https://medium.com/m/signin?operation=register&amp;redirect=https%3A%2F%2Fblog.raindrop.io%2F&amp;source=collection_home---two_column_layout_nav-----------------------global_nav------------------"
                        rel="noopener follow"
                      >
                        Sign up
                      </a>
                    </span>
                  </p>
                  <div className="ml-[16px] block">
                    <p className="sign-in text-[14px] font-[400] m-0 text-[#6B6B6B] leading-[20px] hover:text-black transition-colors ">
                      <span>
                        <a
                          className="cursor-pointer leading-[20px]"
                          // data-testid="headerSignInButton"
                          href="https://medium.com/m/signin?operation=login&amp;redirect=https%3A%2F%2Fblog.raindrop.io%2F&amp;source=collection_home---two_column_layout_nav-----------------------global_nav------------------"
                          rel="noopener follow"
                        >
                          Sign in
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* profil */}
              <div className="mt-[1px] block" aria-hidden="false">
                <button
                  className="bg-transparent cursor-pointer items-center flex hover:bg-[#f5f5f5]"
                  aria-label="user options menu"
                  // data-testid="headerUserIcon"
                >
                  <div className="block relative">
                    <img
                      alt=""
                      className="bg-[#F2F2F2] w-[32px] h-[32px] box-border block rounded-[50%] align-middle"
                      src="https://miro.medium.com/v2/resize:fill:48:48/1*dmbNkD5D-u45r44go_cf0g.png"
                      width="32"
                      height="32"
                      loading="lazy"
                      role="presentation"
                    />
                    <div className="absolute w-[32px] h-[32px] top-0 block rounded-[50%]"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
