import React from "react";
import { NavbarItemProps } from "@/data/navLinksBlog";

function NavbarItem({ navItems, linkItems, ariaCurrent }: NavbarItemProps) {
  return (
    <span className="block">
      <a
        className={`blog-nav-list-link ${ariaCurrent ? "active" : ""}`}
        role="tab"
        href={linkItems}
        rel="noopener follow"
        aria-current={ariaCurrent ? "true" : undefined}
      >
        <p className="nav-text">{navItems}</p>
      </a>
    </span>
  );
}

export default NavbarItem;
