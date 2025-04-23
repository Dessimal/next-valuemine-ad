import React from "react";

interface CardProps {
  icon?: React.ReactElement;
  content: string;
}

const Card: React.FC<CardProps> = ({ icon, content }) => {
  return (
    <div className="dark:bg-black w-full max-w-[600px] rounded-lg p-10 sm:p-6 shadow-lg border-1 flex flex-col gap-2 items-center justify-center">
      <div className="dark:text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        {icon}
      </div>
      <div className="font-bold text-center">{content}</div>
    </div>
  );
};

export default Card;
