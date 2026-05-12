"use client";

import { useMemo, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { TaskPostCard } from "@/components/shared/task-post-card";
import { buildPostUrl } from "@/lib/task-data";
import { normalizeCategory, isValidCategory, CATEGORY_OPTIONS } from "@/lib/categories";
import type { TaskKey } from "@/lib/site-config";
import type { SitePost } from "@/lib/site-connector";
import { getLocalPostsForTask } from "@/lib/local-posts";

type Props = {
  task: TaskKey;
  initialPosts: SitePost[];
  category?: string;
};

export function TaskListClient({ task, initialPosts, category }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>(category || "all");
  const localPosts = getLocalPostsForTask(task);

  // Update URL when category changes
  const handleCategoryChange = (newCategory: string) => {
    setSelectedCategory(newCategory);
    const params = new URLSearchParams(searchParams.toString());
    if (newCategory === "all") {
      params.delete("category");
    } else {
      params.set("category", newCategory);
    }
    const newUrl = `/${task}${params.toString() ? `?${params.toString()}` : ""}`;
    router.push(newUrl);
  };

  const merged = useMemo(() => {
    const bySlug = new Set<string>();
    const combined: Array<SitePost & { localOnly?: boolean; task?: TaskKey }> = [];

    localPosts.forEach((post) => {
      if (post.slug) {
        bySlug.add(post.slug);
      }
      combined.push(post);
    });

    initialPosts.forEach((post) => {
      if (post.slug && bySlug.has(post.slug)) return;
      combined.push(post);
    });

    const normalizedCategory = category ? normalizeCategory(category) : "all";
    if (normalizedCategory === "all") {
      return combined.filter((post) => {
        const content = post.content && typeof post.content === "object" ? post.content : {};
        const value = typeof (content as any).category === "string" ? (content as any).category : "";
        return !value || isValidCategory(value);
      });
    }

    return combined.filter((post) => {
      const content = post.content && typeof post.content === "object" ? post.content : {};
      const value =
        typeof (content as any).category === "string"
          ? normalizeCategory((content as any).category)
          : "";
      return value === normalizedCategory;
    });
  }, [selectedCategory, initialPosts, localPosts]);

  const gridClassName =
    task === "image"
      ? "grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      : task === "profile"
        ? "grid gap-6 lg:grid-cols-2"
        : "grid gap-6 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <>
      {/* Category Filter - Always visible */}
      <div className="sticky top-4 z-10 mb-8 flex flex-wrap gap-3 rounded-2xl border border-black/6 bg-white/95 p-4 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-sm">
        <button
          onClick={() => handleCategoryChange("all")}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
            selectedCategory === "all"
              ? "border-[#FF4B1E] bg-[#FF4B1E] text-white"
              : "border-black/10 bg-white text-neutral-700 hover:border-[#FF4B1E]/50"
          }`}
        >
          All
        </button>
        {task === "image" 
          ? [
              { name: "Photography", slug: "photography" },
              { name: "Travel", slug: "travel" },
              { name: "Lifestyle", slug: "lifestyle" },
              { name: "Arts", slug: "arts" },
              { name: "Fashion", slug: "fashion" },
              { name: "Business", slug: "business" },
              { name: "Nature", slug: "nature" },
              { name: "Food", slug: "food" },
              { name: "Technology", slug: "technology" },
              { name: "Sports", slug: "sports" },
              { name: "Music", slug: "music" },
            ].map((cat) => (
              <button
                key={cat.slug}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  selectedCategory === cat.slug
                    ? "border-[#FF4B1E] bg-[#FF4B1E] text-white"
                    : "border-black/10 bg-white text-neutral-700 hover:border-[#FF4B1E]/50"
                }`}
              >
                {cat.name}
              </button>
            ))
          : CATEGORY_OPTIONS.slice(0, 8).map((cat) => (
              <button
                key={cat.slug}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  selectedCategory === cat.slug
                    ? "border-[#FF4B1E] bg-[#FF4B1E] text-white"
                    : "border-black/10 bg-white text-neutral-700 hover:border-[#FF4B1E]/50"
                }`}
              >
                {cat.name}
              </button>
            ))
        }
      </div>

      {merged.length > 0 ? (
        <div className={gridClassName}>
          {merged.map((post) => {
            const localOnly = (post as any).localOnly;
            const href = localOnly
              ? `/local/${task}/${post.slug}`
              : buildPostUrl(task, post.slug);
            return <TaskPostCard key={post.id} post={post} href={href} taskKey={task} />;
          })}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
          No posts yet for this section.
        </div>
      )}
    </>
  );
}
