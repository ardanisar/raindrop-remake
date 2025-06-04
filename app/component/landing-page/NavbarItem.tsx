import React from "react";
import { NavbarItemProps } from "@/data/navLinksLp";

function NavbarItem({ navItems, linkItems, ariaCurrent }: NavbarItemProps) {
  return (
    <div>
      <li data-active={ariaCurrent}>
        <a href={linkItems}>{navItems}</a>
      </li>
    </div>
  );
}

export default NavbarItem;
