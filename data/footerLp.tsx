export type FooterLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export type FooterProps = {
  logoSrc?: string;
  logoSrcSet?: string;
  logoAlt?: string;
  menus?: FooterLink[][];
  description?: string;
  copyright?: string;
  links?: FooterLink[];
};

export const defaultMenus: FooterLink[][] = [
  [
    { label: "Features", href: "/" },
    { label: "Pricing", href: "/pro/buy" },
    { label: "Download", href: "/download" },
    { label: "About", href: "https://help.raindrop.io/about" },
  ],
  [
    { label: "Blog", href: "https://blog.raindrop.io/" },
    { label: "Suggest feature", href: "https://raindropio.canny.io" },
    { label: "Help & support", href: "https://help.raindrop.io" },
    { label: "API", href: "https://developer.raindrop.io/" },
  ],
];

export const defaultLinks: FooterLink[] = [
  {
    label: "Twitter",
    href: "https://twitter.com/raindrop_io",
    icon: (
      <svg
        className="twitterIcon"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="currentColor"
      >
        <path d="M6.285 4.358a3.42 3.42 0 0 1 5.852-2.341c.496-.004.919.122 1.863-.45-.234 1.144-.349 1.64-.847 2.324 0 5.334-3.279 7.927-6.605 8.591-2.28.455-5.597-.292-6.548-1.285.484-.037 2.453-.249 3.59-1.082-.962-.634-4.793-2.888-2.276-8.95 1.182 1.38 2.38 2.32 3.595 2.818.808.332 1.006.325 1.377.376h-.001z"></path>
      </svg>
    ),
  },
  {
    label: "Terms",
    href: "https://help.raindrop.io/terms",
  },
  {
    label: "Privacy",
    href: "https://help.raindrop.io/privacy",
  },
];
