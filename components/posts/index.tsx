"use client";

import type { Post } from "@/types/post";

import { Link as NextViewTransition } from "next-view-transitions";
import React, { useEffect, useState } from "react";

import { BlogCard } from "../blog-card";
import { Card } from "../card";

interface PostProps {
  category: string;
}

export const Posts = ({ category }: PostProps) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`/api/posts?category=${category}`);
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data = await response.json();
        setPosts([...data].sort((a: Post, b: Post) => new Date(b.time.created).valueOf() - new Date(a.time.created).valueOf()));
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, [category]);

  if (isLoading) return null;
  if (posts.length === 0) return null;

  const projects = posts.filter((post) => category === "projects");
  const blogs = posts.filter((post) => category !== "writings");

  return (
    <div className="mt-6 flex flex-col">
      {projects.length > 0 && (
        <section>
          <NextViewTransition href={`/${category}`} className="flex justify-between">
            <h2 className="mb-2 w-full border-border border-b py-2 capitalize">Featured Projects ({projects.length})</h2>
          </NextViewTransition>
          {projects.map((post) => (
            <React.Fragment key={post.slug}>
              <NextViewTransition href={`/${category}/${post.slug}`} className="flex w-full justify-between py-8">
                <Card
                  title={post.title}
                  body={post.summary}
                  imageSrc={post.media?.thumbnail || "/default-thumbnail.png"}
                  cardClassName="w-full rounded-large"
                />
              </NextViewTransition>
            </React.Fragment>
          ))}
        </section>
      )}

      {blogs.length > 0 && (
        <section>
          <NextViewTransition href={`/${category}`} className="flex justify-between">
            <h2 className="mb-2 w-full border-border border-b py-2 capitalize">Blog Posts ({blogs.length})</h2>
          </NextViewTransition>
          {blogs.map((post) => (
            <React.Fragment key={post.slug}>
              <NextViewTransition href={`/${category}/${post.slug}`} className="flex w-full justify-between py-2">
                <BlogCard title={post.title} time={post.time} />
              </NextViewTransition>
            </React.Fragment>
          ))}
        </section>
      )}
    </div>
  );
};
