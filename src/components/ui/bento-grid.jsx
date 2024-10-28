import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
  props
}) => {
  return (
    (<div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )} {...props} >
      {children}
    </div>)
  );
};

export const BentoGridItem = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col ",
        className
      )}>
      {children}
    </div>)
  );
};
