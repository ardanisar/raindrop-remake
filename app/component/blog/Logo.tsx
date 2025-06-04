import React from "react";

type LogoProps = {
  name: string;
  href: string;
  svg: React.ReactNode;
};

function Logo({ name, href, svg }: LogoProps) {
  return (
    <a
      className="cursor-pointer m-0 p-0 border-none flex"
      aria-label={name}
      href={href}
      // rel="noopener follow"
    >
      {svg}
    </a>
  );
}

export default Logo;
