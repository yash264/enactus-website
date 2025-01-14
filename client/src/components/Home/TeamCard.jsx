"use client";
import { cn } from "../../lib/utils.js";

function TeamCard({ title, description }) {
  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-80 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://i.pinimg.com/736x/8c/f0/e3/8cf0e31f6dc86beafefbffc4ea8000dd.jpg)] bg-cover",
          "before:bg-[url(https://i.pinimg.com/originals/c6/d0/7c/c6d07c8e5fd5eabee04c96694e370432.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://i.pinimg.com/originals/c6/d0/7c/c6d07c8e5fd5eabee04c96694e370432.gif)] hover:bg-center hover:bg-cover",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            {title}
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
