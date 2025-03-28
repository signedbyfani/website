import { motion } from "framer-motion";

interface CardProps {
  title: string;
  body?: string;
  imageSrc: string;
  cardClassName?: string;
}

export const Card = ({
  title,
  body = "",
  imageSrc,
  cardClassName,
}: CardProps) => (
  <motion.div
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
    viewport={{ once: true }}
    className={
      "group relative flex h-auto flex-col gap-y-4 overflow-hidden ${cardClassName}"
    }
  >
    <div className="relative w-full flex-1">
      <img
        src={imageSrc}
        alt={title}
        className="aspect-[16/9] w-full rounded-lg object-cover"
      />
    </div>

    <div className="relative z-10 flex w-full flex-col items-start justify-center gap-1">
      <h3 className="w-full text-start text-default hover:decoration-none">
        {title}
      </h3>
      <p className="-mt-0 w-full text-start text-muted2 hover:decoration-none">
        {body}
      </p>
    </div>
  </motion.div>
);
