import { ReactNode } from "react";

type Img = {
  imageUrl: string;
  imageSet: string;
  width: string;
  height: string;
};

export type Item = {
  title: string;
  description: string;
  image: Img;
  // image: string;
  // imageSet: string;
  link: {
    text: string;
    href: string;
  };
  icon: ReactNode;
  // showSvg: boolean;
  iconAfter?: ReactNode;
};

export const itemsData1: Item[] = [
  {
    title: "Collections",
    description:
      "Group related bookmarks within the same context. Thousands of predefined icons.",
    image: {
      imageUrl: "/images/collections-1056-bc265944ca9b9cda52c809eb2a85e233.png",
      imageSet:
        "/images/collections-1056-bc265944ca9b9cda52c809eb2a85e233.png 1056w,/images/collections-2112-13f25535979d75ed8588c66b6d5ea01b.png 2112w",
      width: "1056",
      height: "500",
    },
    link: { text: "Learn more", href: "https://help.raindrop.io/collections" },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M18 18a1 1 0 0 1-1-1V6H9.828A4 4 0 0 1 7 4.828L6.172 4H3v12h15a1 1 0 0 1 0 2H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.172a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 4H17a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1z"></path>
      </svg>
    ),
  },
  {
    title: "Tags & filters",
    description:
      "Add tags to classify items. Search efficiently by type, tags, or domain.",
    image: {
      imageUrl: "/images/tags-1056-867f09d12043fa86b6ea515184a8430b.png",
      imageSet:
        "/images/tags-1056-867f09d12043fa86b6ea515184a8430b.png 1056w,/images/tags-2112-ed8e6754be9ad4d522394abb39e1e662.png 2112w",
      width: "1056",
      height: "500",
    },
    link: { text: "Learn more", href: "https://help.raindrop.io/tags" },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M6.815 16.961a1 1 0 0 1-1.97-.347l.388-2.2H3a1 1 0 1 1 0-2h2.585l.706-4H3a1 1 0 1 1 0-2h3.643l.633-3.587a1 1 0 0 1 1.97.347l-.572 3.24h4.062l.45-2.546a1 1 0 0 1 1.969.348l-.389 2.198H17a1 1 0 0 1 0 2h-2.586l-.706 4H17a1 1 0 0 1 0 2h-3.644l-.632 3.589a1 1 0 0 1-1.97-.347l.571-3.242H7.263l-.448 2.547zm.801-4.547h4.062l.705-4H8.321l-.705 4z"
          opacity=".9"
        ></path>
      </svg>
    ),
    // showSvg: false,
  },
  {
    title: "Duplicates and broken links",
    description:
      "Keep it clean. We help you find duplicates and pages that are no longer accessible.",
    image: {
      imageUrl: "/images/duplicates-1056-4d34a04c491d958d35959cf4725efd0f.png",
      imageSet:
        "/images/duplicates-1056-4d34a04c491d958d35959cf4725efd0f.png 1056w,/images/duplicates-2112-9e536142e72e5c4809864d0f7202d0ca.png 2112w",
      width: "1056",
      height: "500",
    },
    link: {
      text: "Learn more",
      href: "https://help.raindrop.io/using-search#broken-links",
    },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 2a8 8 0 0 1 8 8v8l-4.364-2.91L10 18l-.001-.001-3.635-2.908L2 17.999 2 18v-8a8 8 0 0 1 8-8zM6.364 7.818a1.455 1.455 0 1 0 0 2.91 1.455 1.455 0 0 0 0-2.91zm5.818 0a1.455 1.455 0 1 0 0 2.91 1.455 1.455 0 0 0 0-2.91z"
          opacity=".9"
        ></path>
      </svg>
    ),
    iconAfter: (
      <svg
        className="money"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 1a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 3a1 1 0 0 0-1 1v.092l-.263.057a4.435 4.435 0 0 0-1.413.605C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941l-.161-.058c-.31-.123-.543-.286-.682-.446l-.088-.09a1 1 0 0 0-1.423 1.4c.563.649 1.414 1.076 2.354 1.253V15l.007.117A1 1 0 0 0 11 15v-.092l.263-.057a4.436 4.436 0 0 0 1.413-.605C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0 0 11 9.092V7.151l.161.058c.31.123.543.286.682.446l.088.09a1 1 0 0 0 1.423-1.4c-.563-.649-1.413-1.076-2.354-1.253V5l-.007-.117A1 1 0 0 0 10 4zm1 7.151l.16.057c.154.061.29.132.407.21.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 0 1-.567.267v-1.698zm-2-4v1.698l-.16-.057a2.178 2.178 0 0 1-.407-.21C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582.155-.103.346-.196.567-.267z"
        ></path>
      </svg>
    ),
    // showSvg: true,
  },
];

export const itemsData2: Item[] = [
  {
    title: "Highlights",
    description: "Annotate web and easily revisit key passages in the future. ",
    image: {
      imageUrl: "/images/highlights-1035-62c8216b75df6762172632e2f275ec86.png",
      imageSet:
        "/images/highlights-1035-62c8216b75df6762172632e2f275ec86.png 1035w,/images/highlights-2070-37eac9b0cc45f5a7049e6cd370dbb72b.png 2070w",
      width: "1035",
      height: "528",
    },
    link: { text: "Learn more", href: "https://help.raindrop.io/highlights" },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <path d="M4 16h1.414l7.314-7.343-1.414-1.414L4 14.557V16zm13 2H3a1 1 0 0 1-1-1v-2.858a1 1 0 0 1 .293-.707L13.435 2.293a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L8.243 16H17a1 1 0 0 1 0 2zM14.142 7.243l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414z"></path>
      </svg>
    ),
    // showSvg: false,
  },
  {
    title: "Instant preview",
    description:
      "Read articles, view videos, and browse the web without ever leaving your library. ",
    image: {
      imageUrl: "/images/preview-1056-c9222c0ef24f1ba2c6864038e6735a6a.png",
      imageSet:
        "/images/preview-1056-c9222c0ef24f1ba2c6864038e6735a6a.png 1056w,/images/preview-2112-8e07f35e76f1829476c66ac9de3ae047.png 2112w",
      width: "1035",
      height: "500",
    },
    link: {
      text: "Learn more",
      href: "https://help.raindrop.io/bookmarks#preview",
    },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 3c3 0 6 2.333 9 7-3 4.667-6 7-9 7s-6-2.333-9-7c3-4.667 6-7 9-7zm0 2c-1.97 0-4.198 1.592-6.592 5C5.802 13.408 8.03 15 10 15c1.97 0 4.198-1.592 6.592-5C14.198 6.592 11.97 5 10 5zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
          opacity=".9"
        ></path>
      </svg>
    ),
    // showSvg: false,
  },
  {
    title: "Multiple views",
    description:
      "View bookmarks the way you like. We have Grid, Headlines, Masonry, or List view modes. ",
    image: {
      imageUrl: "/images/duplicates-1056-4d34a04c491d958d35959cf4725efd0f.png",
      imageSet:
        "/images/view-modes-648-e11c61bf80deda4ceaa91c2d4ff4b85f.png 648w,/images/view-modes-1296-920d1ee40167a15276283d32c533afca.png 1296w",
      width: "1056",
      height: "500",
    },
    link: {
      text: "Learn more",
      href: "https://help.raindrop.io/bookmarks#appearance",
    },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <path d="M8 11a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h5zm7 4v2h-4v-2h4zm-8-2H4v3h3v-3zm11-2v2h-7v-2h7zM8 2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5zm7 4v2h-4V6h4zM7 4H4v3h3V4zm11-2v2h-7V2h7z"></path>
      </svg>
    ),
    // showSvg: false,
  },
];

export const itemsData3: Item[] = [
  {
    title: "Permanent copies",
    description:
      "Even if a page you've saved is taken down, you'll still have a copy of it.",
    image: {
      imageUrl: "/images/copy-1056-a43c0005a2b9b954e8b460783ff819ec.png",
      imageSet:
        "/images/copy-1056-a43c0005a2b9b954e8b460783ff819ec.png 1056w, /images/copy-2112-f830465c5c3c1220e83cb240e8c96165.png 2112w",
      width: "648",
      height: "500",
    },
    link: {
      text: "Learn more",
      href: "https://help.raindrop.io/permanent-copy",
    },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <path d="M13 5h-2V3H3v8h2v2H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3zM8 7h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm1 2v8h8V9H9z"></path>
      </svg>
    ),
    iconAfter: (
      <svg
        className="money"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 1a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 3a1 1 0 0 0-1 1v.092l-.263.057a4.435 4.435 0 0 0-1.413.605C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941l-.161-.058c-.31-.123-.543-.286-.682-.446l-.088-.09a1 1 0 0 0-1.423 1.4c.563.649 1.414 1.076 2.354 1.253V15l.007.117A1 1 0 0 0 11 15v-.092l.263-.057a4.436 4.436 0 0 0 1.413-.605C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0 0 11 9.092V7.151l.161.058c.31.123.543.286.682.446l.088.09a1 1 0 0 0 1.423-1.4c-.563-.649-1.413-1.076-2.354-1.253V5l-.007-.117A1 1 0 0 0 10 4zm1 7.151l.16.057c.154.061.29.132.407.21.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 0 1-.567.267v-1.698zm-2-4v1.698l-.16-.057a2.178 2.178 0 0 1-.407-.21C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582.155-.103.346-.196.567-.267z"
        ></path>
      </svg>
    ),
    // showSvg: true,
  },
  {
    title: "Dropbox & Google Drive",
    description: "Save another backup to your cloud drive.",
    image: {
      imageUrl: "/images/backup-820-fda9e5ab41b90c201cb7fc3d7ebb585d.png",
      imageSet:
        "/images/backup-820-fda9e5ab41b90c201cb7fc3d7ebb585d.png 820w, /images/backup-1640-4f013f867d9e1988ae5253dbeef9fe82.png 1640w",
      width: "820",
      height: "500",
    },
    link: {
      text: "Learn more",
      href: "https://help.raindrop.io/backups#automatic",
    },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M12 2a8 8 0 1 1-6.105 13.17l1.468-1.363A6 6 0 1 0 6.083 9H9l-4 4-4-4h3.062A8.001 8.001 0 0 1 12 2zm0 4a1 1 0 0 1 1 1v2.785l1.662 1.193a.849.849 0 0 1 .106 1.29l-.107.107a1 1 0 0 1-1.29.105l-2.033-1.458a.849.849 0 0 1-.339-.852L11 7a1 1 0 0 1 1-1z"
          opacity=".9"
        ></path>
      </svg>
    ),
    iconAfter: (
      <svg
        className="money"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 1a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 3a1 1 0 0 0-1 1v.092l-.263.057a4.435 4.435 0 0 0-1.413.605C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941l-.161-.058c-.31-.123-.543-.286-.682-.446l-.088-.09a1 1 0 0 0-1.423 1.4c.563.649 1.414 1.076 2.354 1.253V15l.007.117A1 1 0 0 0 11 15v-.092l.263-.057a4.436 4.436 0 0 0 1.413-.605C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0 0 11 9.092V7.151l.161.058c.31.123.543.286.682.446l.088.09a1 1 0 0 0 1.423-1.4c-.563-.649-1.413-1.076-2.354-1.253V5l-.007-.117A1 1 0 0 0 10 4zm1 7.151l.16.057c.154.061.29.132.407.21.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 0 1-.567.267v-1.698zm-2-4v1.698l-.16-.057a2.178 2.178 0 0 1-.407-.21C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582.155-.103.346-.196.567-.267z"
        ></path>
      </svg>
    ),
    // showSvg: true,
  },
];

export const itemsData4: Item[] = [
  {
    title: "Edit together",
    description:
      "Permissions let you control who can access each of your collections.",
    image: {
      imageUrl: "/images/collaborate-1056-03d1d5b9578e0a1e700f300799078d8d.png",
      imageSet:
        "/images/collaborate-1056-03d1d5b9578e0a1e700f300799078d8d.png 1056w, /images/collaborate-2112-01433564e17b41ff3deba7145258ebf9.png 2112w",
      width: "1056",
      height: "500",
    },

    link: {
      text: "Learn more",
      href: "https://help.raindrop.io/collaboration",
    },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <path
          d="M4 2h12H4zm12 8a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a1 1 0 0 1 2 0v5h10v-5a1 1 0 0 1 1-1zm-6-8h.02c.023 0 .046.002.07.004L10 2a1.008 1.008 0 0 1 .617.213l.008.007.082.073 4 4a1 1 0 1 1-1.414 1.414L11 5.414V13a1 1 0 0 1-2 0V5.414L6.707 7.707a1 1 0 0 1-1.414-1.414l4-4 .082-.073.008-.007-.09.08A1.008 1.008 0 0 1 9.982 2H10z"
          opacity=".9"
        ></path>
      </svg>
    ),
    // showSvg: false,
  },
  {
    title: "Public page",
    description:
      "Share individual collections with the entire web. Sign-up is not required.",
    image: {
      imageUrl: "images/public-1056-c56e4757a76d3135049c494b0cd73403.png",
      imageSet:
        "images/public-1056-c56e4757a76d3135049c494b0cd73403.png 1056w, images/public-2112-415ac6f3e4ee51436936cb707962628b.png 2112w",
      width: "1056",
      height: "571",
    },
    link: { text: "Learn more", href: "https://help.raindrop.io/public-page" },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <path d="M10 1a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm1.973 10.001H8.027c.097 1.764.446 3.366.972 4.55.266.598.556 1.039.823 1.293.116.11.17.145.179.154l.009-.009c.022-.017.075-.057.168-.145.267-.254.557-.695.823-1.292.526-1.185.875-2.787.972-4.55zm-5.949 0H3.071a7.008 7.008 0 0 0 4.123 5.414c-.637-1.412-1.066-3.303-1.17-5.414zm10.905 0h-2.953c-.104 2.11-.533 4.002-1.17 5.414a7.01 7.01 0 0 0 4.123-5.414zM7.195 3.585l-.127.057A7.008 7.008 0 0 0 3.07 9h2.953c.104-2.111.532-4.002 1.17-5.415zM10 3.002l-.01.009c-.022.017-.075.057-.168.145-.267.254-.557.695-.823 1.292C8.473 5.633 8.124 7.236 8.027 9h3.946c-.097-1.764-.446-3.367-.972-4.552-.266-.597-.556-1.038-.823-1.292-.093-.088-.146-.128-.168-.145L10 3.002zm2.806.583l.022.051c.626 1.407 1.045 3.278 1.148 5.364h2.953a7.008 7.008 0 0 0-4.123-5.415z"></path>
      </svg>
    ),
    // showSvg: false,
  },
];
