import React from "react";

interface CardProps {
  icon?: React.ReactElement;
  content: string;
}

const Card: React.Fc<CardProps> = ({ icon, content }) => {
  return (
    <div className="dark:bg-black w-full max-w-[600px] rounded-lg p-10 sm:p-6 shadow-lg border-1 flex flex-col gap-2 items-center justify-center">
      <div className="dark:text-white">{icon}</div>
      <div className="font-bold text-center">{content}</div>
    </div>
  );
};

export default Card;
