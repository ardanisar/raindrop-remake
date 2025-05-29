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
                <RaindropMediumProfile />
                {/* article */}
                <div className="py-[8px] block">
                  <div className="article-list">
                    {mockArticles.map((article, index) => (
                      <ArticleCard
                        key={article.id}
                        article={article}
                        className={index === 0 ? "" : "mt-[32px]"}
                      />
                    ))}
                  </div>
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
