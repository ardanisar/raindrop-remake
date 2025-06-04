import Image from "next/image";
import Header from "./component/landing-page/Header";
import VideoCard from "./component/landing-page/VideoCard";
import LinkCard from "./component/landing-page/LinkCard";
import Footer from "./component/landing-page/Footer";
import ImageCard from "./component/landing-page/ImageCard";
import "./styles/landing-page.css";
import {
  itemsData1,
  itemsData2,
  itemsData3,
  itemsData4,
} from "../data/itemsData";
import MoreCard from "./component/landing-page/MoreCard";
import { linkCardData1, linkCardData2 } from "@/data/linkCardData";
import { features } from "@/data/moreCard";
import TextCard from "./component/landing-page/TextCard";
import TextWithImageCard from "./component/landing-page/TextWithImageCard";
import MediaCard from "./component/landing-page/MediaCard";
import { buttons, mediaItems } from "@/data/mediaItems";

export default function Home() {
  return (
    <>
      <Header />
      <div className="landing">
        <MediaCard
          title="All-in-one bookmark manager"
          text="Intuitive. Powerful. Runs everywhere"
          button={buttons}
          media={mediaItems}
          buttonClassName="my-global-button-class"
        />

        {/* <VideoCard
          title="All-in-one bookmark manager"
          text="Intuitive. Powerful. Runs everywhere"
          button={[
            { text: "Sign up", href: "/account/signup" },
            { text: "Download app", href: "/download" },
          ]}
          videoSrc="/videos/intro.mp4"
          poster="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNzE2IDk2OCI+CiAgPGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxyZWN0IHdpZHRoPSIzMTMiIGhlaWdodD0iMjMzIiB4PSIzODEiIHk9IjEyNyIgb3BhY2l0eT0iLjEiLz4KICAgIDxyZWN0IHdpZHRoPSIxMTEzIiBoZWlnaHQ9IjM4IiB4PSI0MzQiIHk9IjE0IiBvcGFjaXR5PSIuMSIgcng9IjQiLz4KICAgIDxyZWN0IHdpZHRoPSIzOCIgaGVpZ2h0PSIzOCIgeD0iMzgxIiB5PSIxNCIgb3BhY2l0eT0iLjEiIHJ4PSIxOSIvPgogICAgPHJlY3Qgd2lkdGg9IjUzIiBoZWlnaHQ9IjM4IiB4PSIxNTYyIiB5PSIxNCIgb3BhY2l0eT0iLjA1IiByeD0iNCIvPgogICAgPHJlY3Qgd2lkdGg9IjcxIiBoZWlnaHQ9IjM4IiB4PSIxNjMwIiB5PSIxNCIgb3BhY2l0eT0iLjA1IiByeD0iNCIvPgogICAgPHJlY3Qgd2lkdGg9IjMxMyIgaGVpZ2h0PSIyMzUiIHg9IjcxNSIgeT0iMTI3IiBvcGFjaXR5PSIuMDUiLz4KICAgIDxyZWN0IHdpZHRoPSIzMTIiIGhlaWdodD0iMTYzIiB4PSIxMDQ5IiB5PSIxMjciIG9wYWNpdHk9Ii4wNSIvPgogICAgPHJlY3Qgd2lkdGg9IjMxMyIgaGVpZ2h0PSIyMzMiIHg9IjEzODIiIHk9IjEyNyIgb3BhY2l0eT0iLjEiLz4KICAgIDxyZWN0IHdpZHRoPSIzMTMiIGhlaWdodD0iMjM1IiB4PSIzODEiIHk9IjM4MSIgb3BhY2l0eT0iLjA1Ii8+CiAgICA8cmVjdCB3aWR0aD0iMzEzIiBoZWlnaHQ9IjQ0MCIgeD0iNzE1IiB5PSIzODMiIG9wYWNpdHk9Ii4wNSIvPgogICAgPHJlY3Qgd2lkdGg9IjMxMiIgaGVpZ2h0PSIyMzQiIHg9IjEwNDkiIHk9IjMxMSIgb3BhY2l0eT0iLjEiLz4KICAgIDxyZWN0IHdpZHRoPSIzMTMiIGhlaWdodD0iMzk5IiB4PSIxMzgyIiB5PSIzODEiIG9wYWNpdHk9Ii4wNSIvPgogICAgPHJlY3Qgd2lkdGg9IjMxMyIgaGVpZ2h0PSIzMzMiIHg9IjM4MSIgeT0iNjM3IiBvcGFjaXR5PSIuMSIvPgogICAgPHJlY3Qgd2lkdGg9IjMxMyIgaGVpZ2h0PSI0NDAiIHg9IjcxNSIgeT0iODQ0IiBvcGFjaXR5PSIuMDUiLz4KICAgIDxyZWN0IHdpZHRoPSIzMTIiIGhlaWdodD0iMzEyIiB4PSIxMDQ5IiB5PSI1NjciIG9wYWNpdHk9Ii4xIi8+CiAgICA8cmVjdCB3aWR0aD0iMzEyIiBoZWlnaHQ9IjI5NCIgeD0iMTA0OSIgeT0iOTAwIiBvcGFjaXR5PSIuMDUiLz4KICAgIDxyZWN0IHdpZHRoPSIzMTMiIGhlaWdodD0iMzk4IiB4PSIxMzgyIiB5PSI4MDEiIG9wYWNpdHk9Ii4xIi8+CiAgICA8cmVjdCB3aWR0aD0iMzYwIiBoZWlnaHQ9Ijk2OCIgb3BhY2l0eT0iLjA1Ii8+CiAgICA8cmVjdCB3aWR0aD0iMTM1NiIgaGVpZ2h0PSIxIiB4PSIzNjAiIHk9IjEwNSIgb3BhY2l0eT0iLjEiLz4KICA8L2c+Cjwvc3ZnPg=="
        /> */}

        <div className="messageBg"></div>

        {/* designed for creative */}
        <TextCard
          title={
            <>
              {" "}
              Designed for ✐&nbsp;creatives, built for <span>{"{"}</span>
              coders<span>{"}"}</span>
            </>
          }
          text={
            "Raindrop.io is the best place to keep all your favorite books, songs, articles or whatever else you come across while browsing."
          }
          blockquote={
            "> We're not trying to reinvent the wheel; we're working on a tool that does everything you expect from a **modern bookmark manager**."
          }
        />

        <ImageCard
          title="Organize with ease"
          text="Raindrop.io is not just a pretty interface, it can help you untangle your bookmarks mess."
          sections={itemsData1}
          clname="left organize"
        />

        <ImageCard
          title="See the big picture"
          text="All relevant info about bookmarks visible at a glance, so you can find anything fast."
          sections={itemsData2}
          clname="right glance"
        />

        {/* linkcard */}
        <LinkCard {...linkCardData1} />

        <ImageCard
          title="We've got your backup"
          text="Raindrop automatically creates copies of all web-pages and files in your collection."
          sections={itemsData3}
          clname="right backup"
        />

        <ImageCard
          title="Designed to be personal. Great for teamwork"
          text="Enable access to your collection by coworkers, family or the entire web."
          sections={itemsData4}
          clname="left teamwork"
        />

        {/* linkcard */}
        <LinkCard {...linkCardData2} />

        {/* access even outside */}
        <TextWithImageCard
          title="Access even outside of the browser"
          text={`Raindrop.io is available as [Chrome](/r/extension/chrome), [Firefox](/r/extension/firefox), [Safari](/r/extension/safari), and [Edge](/r/extension/edge) extension. But we also have [Web](https://app.raindrop.io), [Windows](/r/app/windows), [Mac](/r/app/macos), [Linux](/r/app/linux), [iPad](/r/app/ios), [iPhone](/r/app/ios), and [Android](/r/app/android) app.<br><br> Access your bookmarks seamlessly **across all your devices**.`}
          img={{
            imgSrc: "/images/devices-1077-e9a19500f234042e1e09a9fbc730ff3c.png",
            imgSrcSet:
              "/images/devices-1077-e9a19500f234042e1e09a9fbc730ff3c.png 1077w, /images/devices-2154-e823c124b9b3c47a72530fe51f472ed4.png 2154w",
            width: 1077,
            height: 456,
          }}
        />

        {/* but wait theres more */}
        <MoreCard title="But wait, there's more" data={features} />
      </div>
      <Footer />
    </>
  );
}
