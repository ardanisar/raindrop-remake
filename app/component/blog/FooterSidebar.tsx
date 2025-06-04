import React from "react";
import { footerLinks } from "@/data/footerBlog";

function FooterSidebar() {
  return (
    <div>
      <div className="flex-row py-[24px] flex-wrap flex">
        {footerLinks.map((link, index) => (
          <div className="mr-[6px] block" key={index}>
            <a
              className="cursor-pointer"
              href={link.href}
              rel="noopener follow"
            >
              <p className="leading-[16px] text-[11px] text-[#6B6B6B] font-[400]">
                {link.item}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FooterSidebar;
