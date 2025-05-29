import React from "react";

function Footer() {
  return (
    <footer className="footerSy6B">
      <div className="contentoxL5 layout2ACP">
        <menu>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/pro/buy">Pricing</a>
          </li>
          <li>
            <a href="/download">Download</a>
          </li>
          <li>
            <a href="https://help.raindrop.io/about">About</a>
          </li>
        </menu>
        <menu>
          <li>
            <a href="https://blog.raindrop.io/">Blog</a>
          </li>
          <li>
            <a href="https://raindropio.canny.io">Suggest feature</a>
          </li>
          <li>
            <a href="https://help.raindrop.io">Help &amp; support</a>
          </li>
          <li>
            <a href="https://developer.raindrop.io/">API</a>
          </li>
        </menu>
        <div className="copy2CzI">
          <div className="logo1Thp">
            <img
              src="/images/logotype-30-e945fa61f37ace825a8ee2586bf481f6.png"
              srcSet="/images/logotype-30-e945fa61f37ace825a8ee2586bf481f6.png 30w,/images/logotype-60-73ba67bc4d66d42ef20d908a2e0c5322.png 60w"
              width="30"
              height="30"
            />
          </div>
          <div className="about1uw1">
            <h5>Raindrop.io</h5>
            <p className="mb-[10px] mt-0">All in one bookmark manager</p>
            {/* © 2013 - &lt;!-- --&gt;2025&lt;!-- --&gt; SP Rustem Mussabekov */}
            © 2013 - 2025 SP Rustem Mussabekov
            <br></br>
            {/* ini aku tambahin sendiri */}
            <div className="flex">
              <svg
                className="twitterIcon1g61 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="currentColor"
              >
                <path d="M6.285 4.358a3.42 3.42 0 0 1 5.852-2.341c.496-.004.919.122 1.863-.45-.234 1.144-.349 1.64-.847 2.324 0 5.334-3.279 7.927-6.605 8.591-2.28.455-5.597-.292-6.548-1.285.484-.037 2.453-.249 3.59-1.082-.962-.634-4.793-2.888-2.276-8.95 1.182 1.38 2.38 2.32 3.595 2.818.808.332 1.006.325 1.377.376h-.001z"></path>
              </svg>{" "}
              <a href="https://twitter.com/raindrop_io">Twitter</a>
              <a href="https://help.raindrop.io/terms">Terms</a>
              <a href="https://help.raindrop.io/privacy">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>

    // <footer className="py-10">
    //   <div className="mx-auto max-w-[1060px] px-[30px] grid grid-cols-[auto_1fr_auto] grid-rows-[auto] gap-x-[70px]">
    //     <menu>
    //       <li className="cursor-pointer hover:underline">Features</li>
    //       <li className="cursor-pointer hover:underline">Pricing</li>
    //       <li className="cursor-pointer hover:underline">Download</li>
    //       <li className="cursor-pointer hover:underline">About</li>
    //     </menu>
    //     <menu>
    //       <li className="cursor-pointer hover:underline">Blog</li>
    //       <li className="cursor-pointer hover:underline">Suggest feature</li>
    //       <li className="cursor-pointer hover:underline">Help & support</li>
    //       <li className="cursor-pointer hover:underline">API</li>
    //     </menu>

    //     <div className="text-[0.875rem] leading-[140%] text-[#808080] flex">
    //       <div className="mr-[16px]">
    //         <img
    //           src="/images/logo-bg.png"
    //           //   srcSet="/_next/static/images/logotype-30-e945fa61f37ace825a8ee2586bf481f6.png 30w, /_next/static/images/logotype-60-73ba67bc4d66d42ef20d908a2e0c5322.png 60w"
    //           width="30"
    //           height="30"
    //           alt="Raindrop.io logo"
    //         />
    //       </div>
    //       <div className="flex-1 basis-0">
    //         <h5>Raindrop.io</h5>
    //         <p>All in one bookmark manager</p>
    //         <p>© 2013 - 2025 SP Rustem Mussabekov</p>

    //         <div className="flex items-center space-x-3 mt-2">
    //           <a
    //             href="https://twitter.com/raindrop_io"
    //             className="flex items-center gap-1 underline"
    //           >
    //             <svg
    //               className="twitterIcon1g61 fill-[#808080]"
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="14"
    //               height="14"
    //               viewBox="0 0 14 14"
    //             >
    //               <path d="M6.285 4.358a3.42 3.42 0 0 1 5.852-2.341c.496-.004.919.122 1.863-.45-.234 1.144-.349 1.64-.847 2.324 0 5.334-3.279 7.927-6.605 8.591-2.28.455-5.597-.292-6.548-1.285.484-.037 2.453-.249 3.59-1.082-.962-.634-4.793-2.888-2.276-8.95 1.182 1.38 2.38 2.32 3.595 2.818.808.332 1.006.325 1.377.376h-.001z" />
    //             </svg>
    //             Twitter
    //           </a>
    //           <a href="https://help.raindrop.io/terms" className="underline">
    //             Terms
    //           </a>
    //           <a href="https://help.raindrop.io/privacy" className="underline">
    //             Privacy
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
}

export default Footer;
