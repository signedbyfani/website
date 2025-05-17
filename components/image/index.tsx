"use client";

import type { ImageProps } from "next/image";

import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import React from "react";

interface MDXImageProps extends ImageProps {
  alt: string;
  caption?: string;
}

export default function MDXImage({ caption, alt, ...props }: MDXImageProps) {
  const [mounted, setMounted] = React.useState(false);
  const [isImageLoading, setImageLoading] = React.useState(true);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="mt-4 mb-16 flex flex-col justify-end gap-2">
      <div className="relative w-full overflow-hidden">
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
      </div>
      {caption && <sub className="pt-2">{caption}</sub>}
    </div>
  );
}
