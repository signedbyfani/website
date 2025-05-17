import type { Metadata } from "next";

import { Layout } from "@/components/screens/posts";
import { getPosts } from "@/lib/mdx";
import { OpenGraph } from "@/lib/og";

import { notFound } from "next/navigation";

const route = "projects";

export type ParamsType = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const Posts = await getPosts(route);
  return Posts.map((post) => ({
    slug: post.slug,
  }));
}

// ✅ Generate metadata
export async function generateMetadata({
  params,
}: {
  params: ParamsType;
}): Promise<Metadata> {
  const { slug } = await params;
  const Posts = await getPosts(route);
  const post = Posts.find((post) => post.slug === slug);
  const title = post?.title ?? "";
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}api/og?title=${encodeURIComponent(title)}`;

  return {
    ...OpenGraph,
    title,
    openGraph: {
      title,
      images: [image],
    },
    twitter: {
      images: [image],
    },
  };
}

// ✅ Page component
export default async function Page({ params }: { params: ParamsType }) {
  const { slug } = await params;
  const Posts = await getPosts(route);
  const post = Posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return <Layout post={post} route={route} />;
}
