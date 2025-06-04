import React from "react";
import { Author } from "@/data/mockArticles";
import HoverProfile from "./HoverProfile";

type ProfileProps = {
  author: Author;
};

function Profile({ author }: ProfileProps) {
  return (
    <div className="flex">
      <div className="mb-[16px] items-center flex">
        <HoverProfile profileData={author}>
          <div className="mr-[8px] block">
            <div>
              {/* profil pict */}
              <div
                className="block"
                aria-hidden="false"
                aria-describedby="1"
                aria-labelledby="1"
              >
                <div tabIndex={-1} className="outline-none">
                  <a
                    tabIndex={-1}
                    href="https://medium.com/@exentrich?source=collection_home_page----64dc68379046-----0-----------------------------------"
                    rel="noopener follow"
                    className="relative z-2"
                  >
                    <div className="block relative">
                      <img
                        alt={author.name}
                        className="profil-img-article"
                        src={author.avatar}
                        width="20"
                        height="20"
                        loading="lazy"
                      />
                      <div className="profile-pict-article"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </HoverProfile>
        {/* profil name */}
        <HoverProfile profileData={author}>
          <div>
            <div
              className="y"
              aria-hidden="false"
              aria-describedby="2"
              aria-labelledby="2"
            >
              <div tabIndex={-1} className="dd">
                <a
                  className="cm aq cn co cp at cq au av aw ax ay az jf o p"
                  href="https://medium.com/@exentrich?source=collection_home_page----64dc68379046-----0-----------------------------------"
                  rel="noopener follow"
                >
                  <p className="leading-[20px] text-[#242424] text-[13px] text-ellipsis break-all max-h-[20px] overflow-hidden font-normal hover:underline">
                    {author.name}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </HoverProfile>
      </div>
    </div>
  );
}

export default Profile;
