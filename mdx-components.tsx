import type { MDXComponents } from "mdx/types";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import type { ImageProps } from "next/image";
import type { DetailedHTMLProps, ImgHTMLAttributes, VideoHTMLAttributes } from "react";
import type { PluggableList } from "unified";

import FootnoteBackReference from "@/components/footnote/back-reference";
import FootnoteForwardReference from "@/components/footnote/forward-reference";
import MDXImage from "@/components/image";
import Link from "@/components/link";
import Preview from "@/components/preview";
import MDXVideo from "@/components/video";
import Vimeo from "@/components/vimeo";
import { cn } from "@/lib/cn";

import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Card, Cards } from "fumadocs-ui/components/card";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

// First, let's define the props type for ImageZoom
interface ImageZoomProps extends Omit<ImageProps, "src"> {
  src: string;
  alt: string;
}

const components: MDXComponents = {
  Accordion: ({ children, title, ...props }) => (
    <Accordion title={title} {...props}>
      {children}
    </Accordion>
  ),
  Accordions: ({ children, ...props }) => <Accordions {...props}>{children}</Accordions>,
  img: (props: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
    if (!props.src || !props.alt) return null;
    return <ImageZoom {...(props as unknown as ImageZoomProps)} />;
  },

  PreviewExample: () => {
    return (
      <div className="min- flex h-10 w-32 items-center justify-center rounded-lg border border-yellow-6 bg-yellow-3 text-yellow-11">
        <div className="overflow-x-auto">
          <div className="min-w-full">
            <div className="min-w-full">
              <div className="min-w-full">Showcase</div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  Preview: ({ children, codeblock }) => <Preview codeblock={codeblock ? codeblock : undefined}>{children}</Preview>,
  Image: ({ caption, alt, ...props }) => <MDXImage {...props} caption={caption} alt={alt} />,
  h1: ({ children, id }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 id={id} className="mb-2 font-semibold text-xl">
      {children}
    </h1>
  ),
  h2: ({ children, id }: React.HTMLAttributes<HTMLHeadingElement>) => {
    if (id?.includes("footnote-label")) {
      return null;
    }
    return (
      <h2 id={id} className="mb-3 font-semibold text-lg">
        {children}
      </h2>
    );
  },
  h3: ({ children, id }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 id={id} className="mb-2 font-medium text-base">
      {children}
    </h3>
  ),

  a: ({ children, href }) => {
    if (href?.startsWith("#user-content-fn-")) {
      return <FootnoteForwardReference href={href}>{children}</FootnoteForwardReference>;
    }
    return (
      <Link href={href} className="inline-flex items-center gap-1 text-muted" underline>
        {children}
      </Link>
    );
  },
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote className={cn("mt-6 border-gray-4 border-l-2 pl-6 text-muted", className)} {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-hidden overflow-y-auto">
      <table className={cn("w-full overflow-hidden", className)} {...props} />
    </div>
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn("border border-border px-4 py-2 text-left font-medium [&[align=center]]:text-center [&[align=right]]:text-right", className)}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn("border border-border px-4 py-2 text-left text-muted2 [&[align=center]]:text-center [&[align=right]]:text-right", className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => {
    if (
      React.Children.toArray(props.children).some(
        (child) => React.isValidElement(child) && (child as React.ReactElement).props.id?.includes("user-content-fn-"),
      )
    ) {
      return (
        <ol data-footnotes>
          <div className="mt-6 mb-2 text-muted text-small">Footnotes</div>
          {props.children}
        </ol>
      );
    }
    return <ol className={cn("mt-2 ml-2 list-decimal", className)} {...props} />;
  },
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => <ul className={cn("mt-2 ml-2 list-disc", className)} {...props} />,
  li: ({ className, children, ...props }: React.HTMLAttributes<HTMLLIElement>) => {
    if (props.id?.includes("user-content-fn-")) {
      return (
        <li id={props.id}>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              if (child.type === "p") {
                const href = child.props.children.find((child: React.ReactNode) => {
                  if (React.isValidElement(child)) {
                    return React.isValidElement(child) && "props" in child && (child.props as { href?: string }).href?.includes("user-content-fnref-");
                  }
                  return false;
                })?.props.href;

                const filtered = child.props.children.filter((child: React.ReactNode) => {
                  if (React.isValidElement(child)) {
                    return !(React.isValidElement(child) && "props" in child && (child.props as { href?: string }).href?.includes("user-content-fnref-"));
                  }
                  return true;
                });

                return <FootnoteBackReference href={href}>{filtered}</FootnoteBackReference>;
              }
              return child;
            }
            return child;
          })}
        </li>
      );
    }
    return <li className={cn("mt-2 ml-2 list-item", className)}>{children}</li>;
  },
  Card: ({ children, icon, description, href, external, ...props }) => (
    <Card icon={icon} description={description} href={href} external={external} {...props}>
      {children}
    </Card>
  ),

  Cards: ({ children, ...props }) => <Cards {...props}>{children}</Cards>,

  video: ({ className, children, ...props }: DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>) => (
    <MDXVideo {...props}>{children}</MDXVideo>
  ),

  source: (props) => <source {...props} />,

  Vimeo: ({ videoId, caption }) => <Vimeo videoId={videoId} caption={caption} />,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}

export function MDX(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{
        ...defaultMdxComponents,
        ...components,
        ImageZoom: ImageZoom,
        img: (props: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
          if (!props.src || !props.alt) return null;
          return <ImageZoom {...(props as unknown as ImageZoomProps)} />;
        },
        video: (props: DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>) => <MDXVideo {...props}>{props.children}</MDXVideo>,
      }}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypePrettyCode,
              {
                theme: {
                  dark: "github-dark",
                  light: "github-light",
                },
                keepBackground: false,
                defaultLang: "tsx",
              },
            ],
          ] as PluggableList,
        },
      }}
    />
  );
}
