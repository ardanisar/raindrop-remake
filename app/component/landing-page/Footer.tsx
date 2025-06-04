import React from "react";
import { defaultMenus, defaultLinks, FooterProps } from "@/data/footerLp";

const Footer = ({
  logoSrc = "images/logotype-30-e945fa61f37ace825a8ee2586bf481f6.png",
  logoSrcSet = "/images/logotype-30-e945fa61f37ace825a8ee2586bf481f6.png 30w,/images/logotype-60-73ba67bc4d66d42ef20d908a2e0c5322.png 60w",
  logoAlt = "Logo",
  menus = defaultMenus,
  description = "All in one bookmark manager",
  copyright = "© 2013 - 2025 SP Rustem Mussabekov",
  links = defaultLinks,
}: FooterProps) => {
  // function Footer() {
  return (
    <footer className="footer">
      <div className="content layout">
        {/* Menu Section */}
        {menus.map((menu, idx) => (
          <menu key={idx}>
            {menu.map((item, i) => (
              <li key={i}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </menu>
        ))}
        {/* Footer Copy Section */}
        <div className="copy">
          <div className="logo">
            <img
              src={logoSrc}
              srcSet={logoSrcSet}
              alt={logoAlt}
              width="30"
              height="30"
              loading="lazy"
            />
          </div>
          <div className="about">
            <h5>Raindrop.io</h5>
            <p className="mb-[10px] mt-0">{description}</p>
            {copyright}
            <br></br>
            <div className="flex">
              {links.map((link, idx) => (
                <a key={idx} href={link.href} className="flex">
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
