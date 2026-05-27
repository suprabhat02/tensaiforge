import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/animate-in";
import { SectionLabel } from "@/components/ui/section-label";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { FADE_UP } from "@/lib/animations";

export function BlogIndexSection() {
  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="section-x section-y relative"
    >
      <div className="mx-auto max-w-screen-xl">
        <AnimateIn className="mb-14 text-center">
          <SectionLabel>Knowledge Hub</SectionLabel>
          <h1
            id="blog-heading"
            className="mt-4 font-display text-4xl font-extrabold tracking-tight lg:text-5xl"
          >
            The TensaiForge <span className="text-gradient-forge">Blog</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Expert guides on web development, mobile apps, AI, and cloud
            architecture — written by the engineers who build production systems
            every day.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <AnimateIn key={post.slug} variants={FADE_UP} delay={i * 0.07}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/60 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:bg-card/80">
                {/* Cover image */}
                <Link
                  href={`/blog/${post.slug}/`}
                  className="block overflow-hidden"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.heroImage}
                      alt={post.heroImageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      // First card is above the fold and the LCP element — use priority.
                      // All subsequent cards are below the fold — lazy load them.
                      {...(i === 0
                        ? { priority: true }
                        : { loading: "lazy" as const })}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/60" />
                  </div>
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-red-500/30 bg-red-500/10 px-2.5 py-0.5 font-mono text-xs text-red-400">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock size={11} />
                      {post.readingMinutes} min
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}/`}>
                    <h2 className="font-display text-lg font-bold leading-snug tracking-tight transition-colors group-hover:text-red-400">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar size={12} />
                      <time dateTime={post.datePublished}>
                        {new Date(post.datePublished).toLocaleDateString(
                          "en-US",
                          { month: "short", day: "numeric", year: "numeric" },
                        )}
                      </time>
                    </div>
                    <Link
                      href={`/blog/${post.slug}/`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-400 transition-all hover:gap-2 hover:text-red-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-red-400"
                      aria-label={`Read full article: ${post.title}`}
                    >
                      Read more
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
