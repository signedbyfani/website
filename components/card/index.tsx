interface CardProps {
  title: string;
  body?: string;
  imageSrc: string;
  cardClassName?: string;
}

export const Card = ({ title, body = "", imageSrc, cardClassName }: CardProps) => (
  <div className={`group relative flex h-auto flex-col gap-y-4 overflow-hidden ${cardClassName}`}>
    <div className="relative w-full flex-1">
      <img src={imageSrc} alt={title} loading="lazy" className="aspect-[16/9] w-full object-cover" />
    </div>

    <div className="relative z-10 flex w-full flex-col items-start justify-center gap-1">
      <h2 className="w-full text-start text-black text-lg hover:decoration-none">{title}</h2>
      <p className="-mt-0 w-full text-start text-muted2 hover:decoration-none">{body}</p>
    </div>
  </div>
);
