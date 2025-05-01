interface CardProps {
  title: string;
  time: {
    created: string;
  };
}

export const BlogCard = ({ title, time }: CardProps) => {
  const formattedDate = new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
  }).format(new Date(time.created));

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 w-full items-left sm:items-center">
      <span className="font-semibold text-neutral-700 my-0">{title}</span>
      <span className="hidden sm:flex flex-1 bg-neutral-300 h-[1px]"></span>  
      <span className="text-neutral-400 my-0"> {formattedDate}</span>
    </div>
  );
};
