import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Tag } from "lucide-react";
import type { BlogPost } from "@/lib/blog-posts";

type Props = {
  post: BlogPost;
};

export function BlogPostHero({ post }: Props) {
  return (
    <header className="relative">
      {/* Hero image */}
      <div className="relative h-64 w-full overflow-hidden sm:h-80 lg:h-[28rem]">
        <Image
          src={post.heroImage}
          alt={post.heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background" />
      </div>

      {/* Meta row */}
      <div className="section-x mx-auto max-w-screen-xl">
        <div className="-mt-16 relative z-10 max-w-3xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/blog/"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/60">{post.category}</li>
            </ol>
          </nav>

          {/* Category badge */}
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 font-mono text-xs text-red-400">
              <Tag size={11} />
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <span className="font-medium text-white/80">{post.author}</span>
              <span className="text-white/30">·</span>
              <span>{post.authorRole}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              <time dateTime={post.datePublished}>
                {new Date(post.datePublished).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>{post.readingMinutes} min read</span>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
