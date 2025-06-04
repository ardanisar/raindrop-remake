import React from "react";
import { mockArticles } from "@/data/mockArticles";
import FooterSidebar from "./FooterSidebar";
import EditorsList from "./EditorsList";
import MediumProfile from "./MediumProfile";

function Sidebar() {
  return (
    <>
      <div className="sidebar hidden min-h-[100vh] border-l sorder-solid border-[#F2F2F2] pr-[24px] box-border">
        <div className="w-full h-full relative inline-block">
          <div className="block sticky top-[57px]">
            <div
              className="flex flex-col"
              style={{ minHeight: "calc(100vh - 57px)" }}
            >
              {/* raindrop medium & editor */}
              <div className="block flex-[1_0_auto]">
                {/* medium profile sidebar*/}
                <MediumProfile
                  logoSrc="https://miro.medium.com/v2/resize:fill:176:176/1*JtxOMEcB0N7yoGiHjFf1Gg.png"
                  logoAlt="Raindrop.io Blog"
                  description="All in one bookmarks manager"
                  buttonUrl="https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fsubscribe%2Fcollection%2Fraindrop-io"
                  connectText="Connect with Raindrop.io Blog"
                  socialLink="https://twitter.com/raindrop_io"
                  socialIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="rgba(0,0,0,0.8)"
                        d="M13.346 10.932 18.88 4.5h-1.311l-4.805 5.585L8.926 4.5H4.5l5.803 8.446L4.5 19.69h1.311l5.074-5.898 4.053 5.898h4.426zM11.55 13.02l-.588-.84-4.678-6.693h2.014l3.776 5.4.588.842 4.907 7.02h-2.014z"
                      ></path>
                    </svg>
                  }
                />
                {/* editor */}
                <EditorsList />
              </div>
              {/* footer */}
              <FooterSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
