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

export default function Home() {
  return (
    <>
      <div className="landing2Gps">
        <Header />
        <VideoCard />

        {/* designed for creative */}
        <div className="contentoxL5 items-center" data-center="true">
          <div className="message2nN3">
            <h2 className="text-[2.25rem] leading-[1.4] font-[600] mb-[10px]">
              {" "}
              Designed for ✐&nbsp;creatives, built for <span>{"{"}</span>
              coders<span>{"}"}</span>
            </h2>
            <h4 className="mt-0 my-[1.33em] text-[1.5rem] leading-[1.42] font-normal">
              Raindrop.io is the best place to keep all your favorite books,
              songs, articles or whatever else you come across while browsing.
            </h4>
            <blockquote className="gray1LjZ text-[#666] max-w-[630px] text-[1.125rem] leading-[1.45] my-[1em] mx-[40px]">
              We're not trying to reinvent the wheel; we're working on a tool
              that does everything you expect from a{" "}
              <b>modern bookmark manager</b>.
            </blockquote>
          </div>
        </div>

        <ImageCard
          title="Organize with ease"
          text="Raindrop.io is not just a pretty interface, it can help you untangle your bookmarks mess."
          sections={itemsData1}
          clname="left1x3n organize1xl3"
        />

        <ImageCard
          title="See the big picture"
          text="All relevant info about bookmarks visible at a glance, so you can find anything fast."
          sections={itemsData2}
          clname="right3x0m glanceKYug"
        />

        {/* linkcard */}
        <div className="contentoxL5 ">
          <div className="columns2vfz">
            <LinkCard
              title="Connect to your world"
              text="Want to automatically save your Twitter or Youtube favs? Need more complex integration?<br><br>We've covered all use-cases.<br><br>"
              link1="Integrations"
              link2="API"
              href1="https://raindrop.io/integrations"
              href2="https://developer.raindrop.io/"
              showIcon={false}
              showSvg={false}
            />
            <LinkCard
              title="Full-text search"
              text="The entire content of every web-page and PDF that you've saved is fully searchable.<br><br>Look deeper beyond titles and tags.<br><br>"
              link1="Learn more..."
              href1="https://help.raindrop.io/using-search#full-text-search"
              showIcon={true}
              showSvg={false}
            />
          </div>
        </div>

        <ImageCard
          title="We've got your backup"
          text="Raindrop automatically creates copies of all web-pages and files in your collection."
          sections={itemsData3}
          clname="right3x0m backup2aOH"
        />

        <ImageCard
          title="Designed to be personal. Great for teamwork"
          text="Enable access to your collection by coworkers, family or the entire web."
          sections={itemsData4}
          clname="left1x3n teamwork1zJz"
        />

        {/* linkcard */}
        <div className="contentoxL5 ">
          <div className="columns2vfz">
            <LinkCard
              title="Safe & secure"
              text="SSL everywhere, 100% cloud-based architecture secured behind a VPC.
              <br>
              <br>
              We keep your data safe, never sold.<br>No ads &amp; trackers.
              Open-source apps.
              <br>
              <br>"
              link1="About Raindrop.io"
              link2="Github"
              href1="https://help.raindrop.io/about"
              href2="https://github.com/raindropio"
              showIcon={false}
              showSvg={true}
            />
            <LinkCard
              title="No limits.<br>Starting from $0"
              text=" Unlimited bookmarks, collections, and devices.
              <br>
              Free to use indefinitely. Upgrade for premium features.
              <br>
              <br>"
              link1="Compare plans"
              href1="/pro/buy"
              showIcon={false}
              showSvg={false}
            />
          </div>
        </div>

        {/* access even outside */}
        <div className="devices13GI">
          <div className="contentoxL5 " data-center="true">
            <div className="message2nN3">
              <h2 className="text-[2.25rem] leading-[1.4] font-[600] mb-[10px] my-[0.83em]">
                Access even outside of the browser
              </h2>
              <blockquote>
                Raindrop.io is available as{" "}
                <a href="/r/extension/chrome">Chrome</a>,{" "}
                <a href="/r/extension/firefox">Firefox</a>,{" "}
                <a href="/r/extension/safari">Safari</a>, and{" "}
                <a href="/r/extension/edge">Edge</a> extension.<br></br>But we
                also have <a href="https://app.raindrop.io">Web</a>,{" "}
                <a href="/r/app/windows">Windows</a>,{" "}
                <a href="/r/app/macos">Mac</a>, <a href="/r/app/linux">Linux</a>
                , <a href="/r/app/ios">iPad</a>, <a href="/r/app/ios">iPhone</a>
                , and <a href="/r/app/android">Android</a> app.<br></br>
                <br></br>Access your bookmarks seamlessly{" "}
                <b>across all your devices</b>.
              </blockquote>
            </div>
            <img
              src="/images/devices-1077-e9a19500f234042e1e09a9fbc730ff3c.png"
              srcSet="/images/devices-1077-e9a19500f234042e1e09a9fbc730ff3c.png 1077w,/images/devices-2154-e823c124b9b3c47a72530fe51f472ed4.png 2154w"
              width="1077"
              height="456"
              className="devicesImage2WsX"
            />
          </div>
        </div>
        {/* but wait theres more */}
        <div className="contentoxL5 " data-center="true">
          <h2 className="text-[2.25rem] leading-[1.4] font-[600] mb-[10px] my-[0.83em]">
            But wait, there's more
          </h2>
          <div className="ferrari1vBH">
            <span className="item2omU">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path d="M3 17a.968.968 0 0 1-.712-.288A.968.968 0 0 1 2 16c0-.283.096-.52.288-.713A.968.968 0 0 1 3 15h1V8c0-1.383.417-2.612 1.25-3.688C6.083 3.237 7.167 2.534 8.5 2.2v-.7c0-.417.146-.77.438-1.063A1.447 1.447 0 0 1 10 0c.417 0 .77.146 1.063.438.291.291.437.645.437 1.062v.7c1.333.333 2.417 1.037 3.25 2.112C15.583 5.388 16 6.617 16 8v7h1c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.712A.968.968 0 0 1 17 17H3zm7 3c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 8 18h4c0 .55-.196 1.02-.588 1.413A1.926 1.926 0 0 1 10 20zm-4-5h8V8c0-1.1-.392-2.042-1.175-2.825C12.042 4.392 11.1 4 10 4s-2.042.392-2.825 1.175C6.392 5.958 6 6.9 6 8v7z"></path>
              </svg>
              <span className="info1x6k">
                <span className="title-ME6">Reminders</span>
                <p>Add reminders and notifications to your bookmarks.</p>
              </span>
            </span>
            <span className="item2omU">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  d="M3 3v14h14V3H3zm13.75-2A2.25 2.25 0 0 1 19 3.25v13.5A2.25 2.25 0 0 1 16.75 19H3.25A2.25 2.25 0 0 1 1 16.75V3.25A2.25 2.25 0 0 1 3.25 1h13.5zm-3.195 5.168a1 1 0 0 0-1.387.277L8.845 11.43l-1.138-1.137a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.54-.152l4-6a1 1 0 0 0-.278-1.387z"
                  opacity=".9"
                ></path>
              </svg>
              <span className="info1x6k">
                <span className="title-ME6">Batch processing</span>
                <p>Add tags, move or remove multiple items at once.</p>
              </span>
            </span>
            <span className="item2omU">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  d="M17 10h2a9 9 0 0 1-18 0h2a7 7 0 0 0 14 0zm-7-9a4 4 0 0 1 1 7.874l.001 8.055a7.005 7.005 0 0 0 5.928-5.928L16 11a1 1 0 0 1 0-2h2a1 1 0 0 1 .993.883L19 10a9 9 0 0 1-18 0 1 1 0 0 1 1-1h2a1 1 0 1 1 0 2l-.929.001A7.005 7.005 0 0 0 9 16.929V8.874A4.002 4.002 0 0 1 10 1zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                  opacity=".9"
                ></path>
              </svg>
              <span className="info1x6k">
                <span className="title-ME6">Manual sorting</span>
                <p>
                  Arrange items in whatever way makes sense for your project.
                </p>
              </span>
            </span>
            <span className="item2omU">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  d="M17 10a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5a1 1 0 0 1 2 0v5h12v-5a1 1 0 0 1 1-1zm-7.148 3.989l.058.007L10 14l.075-.003.126-.017.111-.03.111-.044.098-.052.104-.074.082-.073 4-4a1 1 0 1 0-1.414-1.414L11 10.586V3a1 1 0 0 0-2 0v7.586L6.707 8.293a1 1 0 0 0-1.414 1.414l4 4c.035.036.073.068.112.097l.11.071.114.054.105.035.118.025z"
                  opacity=".9"
                ></path>
              </svg>
              <span className="info1x6k">
                <span className="title-ME6">Upload media &amp; files</span>
                <p>
                  All common file types, including PDFs, images, and videos.
                </p>
              </span>
            </span>
            <span className="item2omU">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 9c.552 0 1 .497 1 1.111v4.473l1.293-1.291a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 0 1.414l-3 3A.996.996 0 0 1 10 18l.093-.004-.034.002-.028.002H10a.917.917 0 0 1-.092-.004l-.017-.003a.997.997 0 0 1-.598-.286L6.265 14.68a1 1 0 0 1 1.414-1.414L9 14.586v-4.475c0-.573.39-1.044.891-1.104zM8 2a7.003 7.003 0 0 1 6.713 5.01A4 4 0 0 1 19 11c0 2.21-.96 4-3.169 4s-1-2 0-2S17 12.105 17 11a2 2 0 0 0-2.145-1.995 2 2 0 0 1-2.06-1.427A5 5 0 0 0 3 9c0 1.636-.116 2.41 1.099 3.322.81.608.81 1.383 0 2.326C1.734 13.525 1 11.792 1 9a7 7 0 0 1 7-7z"
                  opacity=".9"
                ></path>
              </svg>
              <span className="info1x6k">
                <span className="title-ME6">Import &amp; Export</span>
                <p>
                  Move-in or move out from Raindrop.io at any time you want.
                </p>
              </span>
            </span>
            <span className="item2omU">
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
              <span className="info1x6k">
                <span className="title-ME6">Themes</span>
                <p>Light or dark, your choice.</p>
              </span>
            </span>
            <span className="item2omU">
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
              <span className="info1x6k">
                <span className="title-ME6">Merge tags</span>
                <p>Keep your tags tidy by merging similar ones.</p>
              </span>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
