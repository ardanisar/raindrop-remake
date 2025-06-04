import React from "react";

export type MoreCardItemProps = {
  title: string;
  text: string;
  icon: React.ReactNode;
};

const MoreCardItem = ({ title, text, icon }: MoreCardItemProps) => {
  return (
    <span className="item">
      {icon}
      <span className="info">
        <span className="title">{title}</span>
        <p>{text}</p>
      </span>
    </span>
  );
};

export default MoreCardItem;
