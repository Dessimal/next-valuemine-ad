import React from "react";

interface CardProps {
  icon?: React.ReactElement;
  content: string;
}

const Card: React.FC<CardProps> = ({ icon, content }) => {
  return (
    <div className="p-[.85px] rounded-lg bg-linear-65 from-purple-500 to-pink-500 h-full">
      <div className="dark:bg-black bg-white w-full max-w-[600px] h-full rounded-lg p-10 sm:p-6 shadow-lg flex flex-col gap-2 items-center justify-between">
        <div className="inline-block  text-neutral-900 dark:text-white">
          {icon}
        </div>
        <div className="font-bold text-center text-neutral-900 dark:text-white ">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Card;
