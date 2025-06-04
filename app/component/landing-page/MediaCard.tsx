import React from "react";

export type Button = {
  text: string;
  href: string;
  className?: string; // className khusus tiap button
};

export type VideoMedia = {
  type: "video";
  src: string;
  poster?: string;
  width?: string | number;
  height?: string | number;
};

export type ImageMedia = {
  type: "image";
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
};

export type Media = VideoMedia | ImageMedia;

type MediaCardProps = {
  title: string;
  text: string;
  button: Button[];
  media: Media[];
  buttonClassName?: string; // className global untuk semua button kalau mau
};

function MediaCard({
  title,
  text,
  button,
  media,
  buttonClassName = "",
}: MediaCardProps) {
  return (
    <div className="blob left intro">
      <div className="grid-container">
        <div className="mediacard mt-[3px] mr-[2.5px]">
          <h1 className="text-black">{title}</h1>
          <h4 className="text-black my-[1.33em]">{text}</h4>
          <div className="buttons1C0r">
            {button.map((btn, index) => (
              <a
                key={index}
                data-appearance={index === 0 ? "primary" : ""}
                data-size="big"
                className={`${buttonClassName} ${
                  btn.className || ""
                } buttonYAU-`.trim()}
                href={btn.href}
              >
                {btn.text}
              </a>
            ))}
          </div>
        </div>

        <div className="media-container flex gap-4">
          {media.map((item, idx) => {
            // const width = item.width || "858px";
            // const height = item.height || "484px";
            const width = item.width;
            const height = item.height;
            const style = { width, height };

            if (item.type === "video") {
              return (
                <video
                  key={idx}
                  src={item.src}
                  autoPlay
                  preload="true"
                  loop
                  muted
                  playsInline
                  controlsList="nodownload nofullscreen noremoteplayback"
                  disablePictureInPicture
                  poster={item.poster}
                  style={style}
                  // className={`1000px:w-[${item.width}px] 1000px:h-[${item.height}px]`}
                />
              );
            } else if (item.type === "image") {
              return (
                <img
                  key={idx}
                  src={item.src}
                  alt={item.alt || "media image"}
                  // style={style}
                  className="object-cover"
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default MediaCard;
