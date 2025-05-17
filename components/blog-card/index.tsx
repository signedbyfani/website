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
    year: "2-digit",
  }).format(new Date(time.created));

  return (
    <div className="items-left flex w-full flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
      <span className="my-0 font-semibold text-neutral-700">{title}</span>
      <span className="hidden h-[1px] flex-1 bg-neutral-300 sm:flex" />
      <span className="my-0 text-neutral-400"> {formattedDate}</span>
    </div>
  );
};
