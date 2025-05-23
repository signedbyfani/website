"use client";

import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";

import { ArrowUpRightIcon, Check, Copy } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [copyText, setCopyText] = useState("imfanindra@gmail.com");
  const { theme } = useTheme();

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText("imfanindra@gmail.com");
    setCopied(true);
    setCopyText("Email copied to clipboard");
    setTimeout(() => {
      setCopied(false);
      setCopyText("imfanindra@gmail.com");
    }, 2000);
  };

  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between">
          <div className="flex w-full flex-col">
            <h1 className="text-focus-in text-xl">Fanindra Maharana</h1>
            <h2 className="font-normal text-focus-in text-neutral-500">Interaction Designer</h2>
          </div>
          <div className="flex flex-row gap-4">
            <a href="https://www.linkedin.com/in/fanindra-m/" target="_blank" rel="noreferrer">
              <div className="flex flex-row items-center justify-center gap-1 text-muted2 text-sm hover:text-foreground hover:underline">
                LinkedIn
                <ArrowUpRightIcon className="h-4 w-4" />
              </div>
            </a>
            <a href="https://www.behance.net/imfanindra" target="_blank" rel="noreferrer">
              <div className="flex flex-row items-center justify-center gap-1 text-muted2 text-sm hover:text-foreground hover:underline">
                Behance
                <ArrowUpRightIcon className="h-4 w-4" />
              </div>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              <div className="flex flex-row items-center justify-center gap-1 text-muted2 text-sm hover:text-foreground hover:underline">
                CV
                <ArrowUpRightIcon className="h-4 w-4" />
              </div>
            </a>
            <a href="https://layers.to/fanindraaa" target="_blank" rel="noreferrer">
              <div className="flex flex-row items-center justify-center gap-1 text-muted2 text-sm hover:text-foreground hover:underline">
                Explore
                <ArrowUpRightIcon className="h-4 w-4" />
              </div>
            </a>
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <div className="flex flex-col">
          <p className="font-medium text-focus-in text-gray-12 text-lg tracking-tight">
            More than just a pixel pusher — I craft experiences that resonate. Designing for people, shaping their digital, physical, and psychological
            experiences.
          </p>
          <div className="flex flex-row gap-4 pt-6">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="flex flex-row items-center justify-center gap-1 text-muted2 text-sm hover:text-foreground hover:underline"
            >
              {copyText}
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-3 w-3" />}
            </button>
          </div>
        </div>
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="projects" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="writings" />
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
    </FadeIn.Container>
  );
}
