import React from "react";

type GuideCardProps = {
  title: string;
  topic: string;
  tag: string;
  icon: React.ReactNode;
  style: {
    backgroundColor: string;
    borderRadius: string;
    top: string;
    left?: string;
    right?: string;
    width: string;
    height: string;
  };
};

const GuideCard: React.FC<GuideCardProps> = ({
  title,
  topic,
  tag,
  icon,
  style,
}) => {
  return (
    <div className="relative bg-white !border border-gray-200  shadow-md rounded-xl p-10 w-full space-y-4 overflow-hidden">
      {/* Colored shape */}
      <div
        className="absolute  !z-0"
        style={{
          ...style,
          position: "absolute",
        }}
      ></div>

      {/* Content */}
      <div className="text-black mb-10 relative">{icon}</div>
      <h3 className="!font-bold !text-[22px] md:!text-[18px] relative !mb-5">{title}</h3>
      <p className="text-gray-500 text-sm !mb-4">{topic}</p>

      <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
        {tag}
      </span>
    </div>
  );
};

export default GuideCard;
