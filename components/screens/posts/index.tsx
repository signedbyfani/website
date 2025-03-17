import type { Post } from "@/types";

import { TableOfContents } from "@/components/on-this-page";
import { PostNavigation } from "@/components/post-navigation";
import { formatter } from "@/lib/formatter";
import { getPosts } from "@/lib/mdx";
import { MDX } from "@/mdx-components";
import Image from "next/image";

import React from "react";

interface Props {
  post: Post;
  route: string;
}

export const Layout = ({ post, route }: Props) => {
  const posts = getPosts(route);

  const PublishedTime = () => {
    return <div>{formatter.date(new Date(post.time.created))}</div>;
  };

  return (
    <React.Fragment>
      <div className="flex flex-col">
        <div>
          <h1 className="mb-2 font-semibold text-xl">{post.title}</h1>
        </div>
        <div className="mt-1 flex-wrap gap-0 text-muted tabular-nums">
          <PublishedTime />
        </div>
        {post.media?.thumbnail && (
          <div className="mt-4">
            <Image src={post.media?.thumbnail} alt={post.title} width={1600} height={900} layout="responsive" className="rounded-lg" />
          </div>
        )}
      </div>

      <MDX source={post.content} />
      <PostNavigation posts={posts} />
      <TableOfContents />
    </React.Fragment>
  );
};
