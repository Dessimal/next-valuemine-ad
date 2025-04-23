import React from "react";

interface CardProps {
  icon?: React.ReactElement;
  content: string;
}

const Card: React.FC<CardProps> = ({ icon, content }) => {
  return (
    <div className="p-[.85px] rounded-lg bg-linear-65 from-purple-500 to-pink-500">
      <div className="dark:bg-black w-full max-w-[600px] rounded-lg p-10 sm:p-6 shadow-lg flex flex-col gap-2 items-center justify-center">
        <div className="inline-block">{icon}</div>
        <div className="font-bold text-center ">{content}</div>
      </div>
    </div>
  );
};

export default Card;
