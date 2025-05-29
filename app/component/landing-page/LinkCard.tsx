import React from "react";

type LinkCardProps = {
  title: string;
  text: string;
  link1: string;
  link2?: string;
  href1: string;
  href2?: string;
  showIcon?: boolean;
  showSvg?: boolean;
};

function LinkCard({
  title,
  text,
  link1,
  link2,
  href1,
  href2,
  showIcon,
  showSvg,
}: LinkCardProps) {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
        {showIcon && (
          <svg
            className="money3NdV mt-[5px]"
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
        )}
      </div>
      <blockquote>
        <div dangerouslySetInnerHTML={{ __html: text }} />
        <div className="flex">
          <a className="link3Vpv" href={href1}>
            {link1}
          </a>
          <a href={href2} className="link3Vpv flex">
            {showSvg && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mt-0.5"
              >
                <path d="M10 1c-4.972 0-9 4.027-9 9a8.995 8.995 0 0 0 6.154 8.54c.45.077.619-.193.619-.43 0-.213-.012-.92-.012-1.675-2.261.417-2.846-.55-3.026-1.058-.102-.259-.54-1.057-.922-1.271-.315-.169-.765-.585-.012-.596.709-.012 1.215.652 1.384.922.81 1.361 2.104.979 2.62.743.08-.585.316-.978.575-1.203-2.002-.225-4.095-1.002-4.095-4.445 0-.979.348-1.788.923-2.419-.09-.225-.405-1.147.09-2.385 0 0 .753-.236 2.475.924a8.352 8.352 0 0 1 2.25-.305c.765 0 1.53.101 2.25.304 1.72-1.17 2.475-.922 2.475-.922.495 1.238.18 2.16.09 2.385.573.63.922 1.428.922 2.418 0 3.455-2.103 4.22-4.106 4.445.326.28.608.82.608 1.665 0 1.203-.012 2.17-.012 2.475 0 .235.17.516.62.426A9.014 9.014 0 0 0 19 10c0-4.973-4.027-9-9-9z"></path>
              </svg>
            )}
            {link2}
          </a>
        </div>
      </blockquote>
    </div>
  );
}

export default LinkCard;
