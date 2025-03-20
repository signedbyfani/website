export type Post = {
  title: string;
  slug: string;
  content: string;
  tags?: string[];
  summary?: string;

  time: {
    created: string;
  };

  media?: {
    thumbnail?: string;
    image?: string;
    video?: string;
    audio?: string;
  };


};
