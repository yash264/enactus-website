import { cn } from "../../../lib/utils";


export const BentoGrid = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-8xl mx-auto ",
        className
      )}>
      {children}
    </div>)
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon
}) => {
  return (
    (<div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input bg-white border-[1px] border-gray-500/55 justify-between flex flex-col space-y-4",
        className
      )}>
      {header}
      <div className=" group-hover/bento:translate-x-2 transition duration-200 p-3">
        {icon}
        <div
          className="font-sans font-bold text-neutral-600  mb-2 mt-2">
          {title}
        </div>
        <div
          className="font-sans font-normal text-neutral-600 text-xs">
          {description}
        </div>
      </div>
    </div>)
  );
};
