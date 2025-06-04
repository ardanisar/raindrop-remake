import React from "react";
import Header from "../component/blog/Header";
import RaindropMediumProfile from "../component/blog/RaindropMediumProfile";
import { mockArticles } from "@/data/mockArticles";
import ArticleCard from "../component/blog/ArticleCard";
import Sidebar from "../component/blog/Sidebar";
import "../styles/blog.css";

function page() {
  return (
    <div>
      <script src="https://unpkg.com/react-popper/dist/index.umd.js"></script>
      <Header />
      <div className="block">
        <div className="flex-[0_0_auto] z-[500]" style={{ width: "0px" }}>
          {" "}
        </div>
        {/* raindrop medium profile */}
        <div
          className="flex-[1_1_auto] w-full"
          style={{ width: "calc(100% + 0px)" }}
        >
          <div className="justify-evenly max-w[1336px] m-auto flex font-[400]">
            <main className="main block flex-[1_1_auto]">
              <div className="flex flex-col min-h-[100vh]">
                <RaindropMediumProfile
                  logoSrc="https://miro.medium.com/v2/resize:fit:626/1*bFdoWaqOYfZBY0Ny_OBlWA.png"
                  logoAlt="Raindrop.io Blog"
                  followerCount="2K followers"
                  followerLink="/followers?source=collection_home_page"
                  followUrl="https://medium.com/m/signin?..."
                  followLabel="Follow"
                />

                {/* article */}
                <div className="py-[8px] block">
                  {/* <div className="flex justify-center">
                    <div className="728px:max-w-[680px] mx-[24px]"> */}
                  {mockArticles.map((article, index) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      className={index === 0 ? "" : "mt-[32px]"}
                    />
                  ))}
                  {/* </div>
                  </div> */}
                </div>
              </div>
            </main>
            {/* sidebar */}
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
