export type NavbarItemProps = {
  navItems: string;
  linkItems: string;
  ariaCurrent: boolean;
};

export const blogNavLinks = [
  { navItems: "Home", linkItems: "/", ariaCurrent: true },
  {
    navItems: "About",
    linkItems: "https://blog.raindrop.io/about",
    ariaCurrent: false,
  },
  {
    navItems: "Updates",
    linkItems: "https://blog.raindrop.io/updates",
    ariaCurrent: false,
  },
  {
    navItems: "Go to App",
    linkItems: "https://blog.raindrop.io/",
    ariaCurrent: false,
  },
];
