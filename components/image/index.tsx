"use client";

import type { ImageProps } from "next/image";
import { motion } from "framer-motion";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import React from "react";

interface MDXImageProps extends ImageProps {
  alt: string;
  caption?: string;
}

export default function MDXImage({ caption, alt, ...props }: MDXImageProps) {
  const [isImageLoading, setImageLoading] = React.useState(true);

  return (
    <motion.div
      className="mt-4 mb-16 flex flex-col justify-end gap-2"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} // Ensures animation triggers when 30% in view
    >
      <div className="relative w-full overflow-hidden rounded-large">
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ImageZoom
            {...props}
            alt={alt}
            className="object-contain"
            onLoad={() => setImageLoading(false)}
            style={{
              WebkitFilter: isImageLoading ? "blur(8px)" : "none",
              transition: "all 0.5s ease",
            }}
          />
        </motion.div>
      </div>
      {caption && (
        <sub className="pt-2 text-center">
          {caption}
        </sub>
      )}
    </motion.div>
  );
}