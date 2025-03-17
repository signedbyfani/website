interface CardProps {
  title: string;
  time: {
    created: string;
  };
}

export const BlogCard = ({ title, time }: CardProps) => {
  const formattedDate = new Intl.DateTimeFormat("en-IN").format(new Date(time.created));

  return (
    <div className="flex flex-row justify-between">
      <p>
        <span className="font-medium text-gray-12">{title}</span> - Published - {formattedDate}
      </p>
    </div>
  );
};
