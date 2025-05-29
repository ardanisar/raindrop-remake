export type Article = {
  id: string;
  title: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
    followers: string;
  };
  publishedAt: string;
  excerpt: string;
  coverImage: string;
  stats: {
    likes: number;
    comments: number;
  };
  link: string;
};

export type Author = {
  name: string;
  avatar: string;
  bio: string;
  followers: string;
};

export type Stats = {
  likes: number;
  comments: number;
};

export const mockArticles = [
  {
    id: "1",
    title: "AI Suggestions",
    author: {
      name: "Rustem Mussabekov",
      avatar:
        "https://miro.medium.com/v2/resize:fill:30:30/1*VFTN-MPKg_EG0tXiyQPG0g.jpeg",
      bio: "Founder of https://raindrop.io",
      followers: "1.8k",
    },
    publishedAt: "2024-05-14",

    excerpt:
      "Say goodbye to the hassle of searching for the right collection or tag when you save a new bookmark — our new ✦ AI model...",
    coverImage:
      "https://miro.medium.com/v2/resize:fill:120:80/1*0ki5wk-IQYttRhPoro8EoA.png",
    stats: {
      likes: 100,
      comments: 4,
    },
    link: "https://blog.raindrop.io/ai-suggestions-5a85762ae176",
  },
  {
    id: "2",
    title: "Bookmark Notes",
    author: {
      name: "Rustem Mussabekov",
      avatar:
        "https://miro.medium.com/v2/resize:fill:30:30/1*VFTN-MPKg_EG0tXiyQPG0g.jpeg",
      bio: "Founder of https://raindrop.io",
      followers: "1.8k",
    },
    publishedAt: "2023-06-05",

    excerpt: "With Markdown support",
    coverImage:
      "https://miro.medium.com/v2/resize:fill:120:80/1*jIEHdo3ouVxVuYybuLfo4w.png",
    stats: {
      likes: 131,
      comments: 15,
    },
    link: "https://blog.raindrop.io/bookmark-notes-8057b3e2a48f",
  },
  {
    id: "3",
    title: "Export a subset of bookmarks",
    author: {
      name: "Rustem Mussabekov",
      avatar:
        "https://miro.medium.com/v2/resize:fill:30:30/1*VFTN-MPKg_EG0tXiyQPG0g.jpeg",
      bio: "Founder of https://raindrop.io",
      followers: "1.8k",
    },
    publishedAt: "2023-06-05",

    excerpt: "More granular way to download your data",
    coverImage:
      "https://miro.medium.com/v2/resize:fill:120:80/1*QDAnpN6M6Sf4k_L5yjxbYw.png",
    stats: {
      likes: 72,
      comments: 1,
    },
    link: "https://blog.raindrop.io/export-subset-of-bookmarks-c3f9993110c8",
  },
  {
    id: "4",
    title: "New Feature: Reminders",
    author: {
      name: "Rustem Mussabekov",
      avatar:
        "https://miro.medium.com/v2/resize:fill:30:30/1*VFTN-MPKg_EG0tXiyQPG0g.jpeg",
      bio: "Founder of https://raindrop.io",
      followers: "1.8k",
    },
    publishedAt: "2023-04-17",

    excerpt: "Schedule bookmarks for later",
    coverImage:
      "https://miro.medium.com/v2/resize:fill:120:80/1*8uZBdQ3OS_wCj_5mRITrGQ.png",
    stats: {
      likes: 77,
      comments: 2,
    },
    link: "https://blog.raindrop.io/new-feature-reminders-a2d260408b74",
  },
  {
    id: "5",
    title: "Two Factor Authentication (2FA)",
    author: {
      name: "Rustem Mussabekov",
      avatar:
        "https://miro.medium.com/v2/resize:fill:30:30/1*VFTN-MPKg_EG0tXiyQPG0g.jpeg",
      bio: "Founder of https://raindrop.io",
      followers: "1.8k",
    },
    publishedAt: "2023-04-06",
    excerpt: "Extra layer of security to your account",
    coverImage:
      "https://miro.medium.com/v2/resize:fill:120:80/1*iECyvJWufpHdfRMImXhqiA.png",
    stats: {
      likes: 7,
      comments: 0,
    },
    link: "https://blog.raindrop.io/two-factor-authentication-2fa-1a320fa2eed7",
  },
  {
    id: "6",
    title: "iOS/iPadOS App 5.0",
    author: {
      name: "Rustem Mussabekov",
      avatar:
        "https://miro.medium.com/v2/resize:fill:30:30/1*VFTN-MPKg_EG0tXiyQPG0g.jpeg",
      bio: "Founder of https://raindrop.io",
      followers: "1.8k",
    },
    publishedAt: "2023-03-28",
    excerpt: "Rewritten from scratch with native technology",
    coverImage:
      "https://miro.medium.com/v2/resize:fill:120:80/1*Oz9ArICid8Ayg6lSZz3C_Q.png",
    stats: {
      likes: 35,
      comments: 6,
    },
    link: "https://blog.raindrop.io/ios-ipados-app-5-0-8d5dc9c14751",
  },
  {
    id: "7",
    title: "Highlights",
    author: {
      name: "Rustem Mussabekov",
      avatar:
        "https://miro.medium.com/v2/resize:fill:30:30/1*VFTN-MPKg_EG0tXiyQPG0g.jpeg",
      bio: "Founder of https://raindrop.io",
      followers: "1.8k",
    },
    publishedAt: "2022-07-07",
    excerpt: "Annotate web and easily revisit key passages in the future",
    coverImage:
      "https://miro.medium.com/v2/resize:fill:120:80/1*-_PB4IYz43LM-RGHUcZqNg@2x.png",
    stats: {
      likes: 100,
      comments: 3,
    },
    link: "https://blog.raindrop.io/highlights-533ef2f91000",
  },
  {
    id: "8",
    title: "Automatic Backup & New CSV format",
    author: {
      name: "Rustem Mussabekov",
      avatar:
        "https://miro.medium.com/v2/resize:fill:30:30/1*VFTN-MPKg_EG0tXiyQPG0g.jpeg",
      bio: "Founder of https://raindrop.io",
      followers: "1.8k",
    },
    publishedAt: "2022-07-06",
    excerpt:
      "Back up, recover, and restore data from your account and create copies of previous versions",
    coverImage:
      "https://miro.medium.com/v2/resize:fill:120:80/1*-mgxSqeC_dZsqUpZTP6z5Q.png",
    stats: {
      likes: 19,
      comments: 0,
    },
    link: "https://blog.raindrop.io/automatic-backup-new-csv-format-95546ee1db9b",
  },
  {
    id: "9",
    title: "Search 2.0",
    author: {
      name: "Rustem Mussabekov",
      avatar:
        "https://miro.medium.com/v2/resize:fill:30:30/1*VFTN-MPKg_EG0tXiyQPG0g.jpeg",
      bio: "Founder of https://raindrop.io",
      followers: "1.8k",
    },
    publishedAt: "2021-08-23",
    excerpt: "Quick. Accurate. Flexible",
    coverImage:
      "https://miro.medium.com/v2/resize:fill:120:80/1*svvhcLSqtOXmMdEzl1Gdnw.png",
    stats: {
      likes: 193,
      comments: 9,
    },
    link: "https://blog.raindrop.io/search-2-0-6006bcc7f9a2",
  },
  {
    id: "10",
    title: "Save All Tabs",
    author: {
      name: "Rustem Mussabekov",
      avatar:
        "https://miro.medium.com/v2/resize:fill:30:30/1*VFTN-MPKg_EG0tXiyQPG0g.jpeg",
      bio: "Founder of https://raindrop.io",
      followers: "1.8k",
    },
    publishedAt: "2021-06-29",
    excerpt: "Save and organize your tabs in the way that works best for you",
    coverImage:
      "https://miro.medium.com/v2/resize:fill:120:80/1*VxTe_FcAqHZwSX99JXwOIg.jpeg",
    stats: {
      likes: 122,
      comments: 6,
    },
    link: "https://blog.raindrop.io/save-all-tabs-35e5581ab1c8",
  },
];
