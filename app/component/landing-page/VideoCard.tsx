import React from "react";

export type Button = {
  text: string;
  href: string;
};

type VideoCardProps = {
  title: string;
  text: string;

  button: Button[];
  videoSrc: string;
  poster: string;
};

function VideoCard({
  title,
  text,

  button,
  videoSrc,
  poster,
}: VideoCardProps) {
  return (
    <div className="blob left intro">
      <div className="grid-container">
        <div>
          <h1 className="text-black">{title}</h1>
          <h4 className="text-black my-[1.33em]">{text}</h4>
          <div className="buttons1C0r">
            {button.map((button, index) => (
              <a
                key={index}
                data-appearance={index === 0 ? "primary" : ""}
                data-size="big"
                className="buttonYAU- "
                href={button.href}
              >
                {button.text}
              </a>
            ))}
          </div>
        </div>
        {/* video */}
        <div className="">
          <video
            src={videoSrc}
            width="858"
            height="484"
            autoPlay
            preload="true"
            loop
            muted
            // controls
            playsInline
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            poster={poster}
            className="w-[858px] h-[484px] aspect-[858px/484px]"
          ></video>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
