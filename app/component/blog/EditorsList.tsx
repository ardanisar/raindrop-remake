import React from "react";
import Editor from "./Editor"; // Komponen item editor
import { mockArticles } from "@/data/mockArticles";

// ambil list editor
const uniqueAuthors = Object.values(
  mockArticles.reduce((acc, article) => {
    const key = article.author.name;
    if (!acc[key]) {
      acc[key] = article.author;
    }
    return acc;
  }, {} as Record<string, (typeof mockArticles)[0]["author"]>)
);

function EditorsList() {
  return (
    <div className="mt-[40px] border-b-none pb-0 block">
      <div className="pb-[16px] block">
        <h2 className="mt-[41px] tracking-normal font-[500] text-base text-[#242424] leading-[20px]">
          Editors
        </h2>
      </div>
      {uniqueAuthors.map((author, index) => (
        <Editor key={index} author={author} />
      ))}
    </div>
  );
}

export default EditorsList;
