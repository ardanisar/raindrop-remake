import React from "react";
import NavbarItem from "./NavbarItem";
import { navLinks } from "@/data/navLinksLp";

function Navbar() {
  return (
    <menu className="nav">
      {navLinks.map((item) => (
        <NavbarItem key={item.linkItems} {...item} />
      ))}
    </menu>
  );
}

export default Navbar;
