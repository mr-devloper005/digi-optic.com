import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/shared/footer";
import { NavbarShell } from "@/components/shared/navbar-shell";
import { ContentImage } from "@/components/shared/content-image";
import { RichContent } from "@/components/shared/rich-content";
import { TaskPostCard } from "@/components/shared/task-post-card";
import { Button } from "@/components/ui/button";
import { SchemaJsonLd } from "@/components/seo/schema-jsonld";
import { buildPostUrl } from "@/lib/task-data";
import { buildPostMetadata, buildTaskMetadata } from "@/lib/seo";
import { fetchTaskPostBySlug, fetchTaskPosts } from "@/lib/task-data";
import { SITE_CONFIG } from "@/lib/site-config";

export const revalidate = 3;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const sanitizeRichHtml = (html: string) =>
  html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<iframe[^>]*>[\s\S]*?<\/iframe>/gi, "")
    .replace(/<object[^>]*>[\s\S]*?<\/object>/gi, "")
    .replace(/\son[a-z]+\s*=\s*(['"]).*?\1/gi, "")
    .replace(/\shref\s*=\s*(['"])javascript:.*?\1/gi, ' href="#"');

const formatRichHtml = (raw?: string | null, fallback = "Profile details will appear here once available.") => {
  const source = typeof raw === "string" ? raw.trim() : "";
  if (!source) return `<p>${escapeHtml(fallback)}</p>`;
  if (/<[a-z][\s\S]*>/i.test(source)) return sanitizeRichHtml(source);
  return source
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${escapeHtml(paragraph.replace(/\n/g, " ").trim())}</p>`)
    .join("");
};

export async function generateStaticParams() {
  const posts = await fetchTaskPosts("profile", 50);
  if (!posts.length) {
    return [{ username: "placeholder" }];
  }
  return posts.map((post) => ({ username: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ username: string }> }) {
  const resolvedParams = await params;
  try {
    const post = await fetchTaskPostBySlug("profile", resolvedParams.username);
    return post ? await buildPostMetadata("profile", post) : await buildTaskMetadata("profile");
  } catch (error) {
    console.warn("Profile metadata lookup failed", error);
    return await buildTaskMetadata("profile");
  }
}

export default async function ProfileDetailPage({ params }: { params: Promise<{ username: string }> }) {
  const resolvedParams = await params;
  const post = await fetchTaskPostBySlug("profile", resolvedParams.username);
  if (!post) {
    notFound();
  }
  const content = (post.content || {}) as Record<string, any>;
  const logoUrl = typeof content.logo === "string" ? content.logo : undefined;
  const brandName =
    (content.brandName as string | undefined) ||
    (content.companyName as string | undefined) ||
    (content.name as string | undefined) ||
    post.title;
  const website = content.website as string | undefined;
  const domain = website ? website.replace(/^https?:\/\//, "").replace(/\/.*$/, "") : undefined;
  const description =
    (content.description as string | undefined) ||
    post.summary ||
    "Profile details will appear here once available.";
  const descriptionHtml = formatRichHtml(description);
  const suggestedArticles = await fetchTaskPosts("article", 6);
  const baseUrl = SITE_CONFIG.baseUrl.replace(/\/$/, "");
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Profiles",
        item: `${baseUrl}/profile`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: brandName,
        item: `${baseUrl}/profile/${post.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f2f2f2_0%,#faf8f5_48%,#f4f4f4_100%)]">
      <NavbarShell />
      <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <SchemaJsonLd data={breadcrumbData} />
        <section className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-[0_24px_64px_rgba(0,0,0,0.06)]">
              <div className="bg-[linear-gradient(135deg,#f7f3ee_0%,#ffffff_100%)] p-8">
                <div className="relative h-28 w-28 overflow-hidden rounded-[1.75rem] border border-black/8 bg-white shadow-sm">
                  {logoUrl ? (
                    <ContentImage src={logoUrl} alt={post.title} fill className="object-cover" sizes="112px" intrinsicWidth={144} intrinsicHeight={144} />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-3xl font-semibold text-muted-foreground">
                      {post.title.slice(0, 1).toUpperCase()}
                    </div>
                  )}
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">Profile</p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950">{brandName}</h1>
                {domain ? <p className="mt-2 text-sm text-neutral-500">{domain}</p> : null}
                <div className="mt-6 space-y-3">
                  {website ? (
                    <Button asChild className="w-full rounded-full bg-[#FF4B1E] text-white hover:bg-[#e63d14]">
                      <Link href={website} target="_blank" rel="noopener noreferrer">
                        Visit Official Site
                      </Link>
                    </Button>
                  ) : null}
                  <Button asChild variant="outline" className="w-full rounded-full border-black/10">
                    <Link href="/profile">Browse all profiles</Link>
                  </Button>
                </div>
              </div>
              <div className="grid gap-3 border-t border-black/6 p-6">
                <div className="rounded-[1.4rem] border border-black/6 bg-[#faf7f3] px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Positioning</p>
                  <p className="mt-2 text-sm leading-7 text-neutral-700">A cleaner business and creator profile surface with stronger trust cues and a clearer first impression.</p>
                </div>
                <div className="rounded-[1.4rem] border border-black/6 bg-[#faf7f3] px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Use case</p>
                  <p className="mt-2 text-sm leading-7 text-neutral-700">Best for directory discovery, collaboration checks, and brand research before outreach.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <section className="rounded-[2rem] border border-black/6 bg-white p-8 shadow-[0_24px_64px_rgba(0,0,0,0.06)] sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF4B1E]">Overview</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-neutral-950">Profile detail arranged like an editorial brief instead of a plain directory block.</h2>
              <RichContent
                html={descriptionHtml}
                className="mt-6 max-w-3xl text-neutral-700 prose-p:my-5 prose-h2:text-2xl prose-h3:text-xl"
              />
            </section>

            <section className="grid gap-4 md:grid-cols-3">
              {[
                ["Identity first", "Logo, name, and domain stay visible before the longer narrative."],
                ["Cleaner reading", "Longer descriptions now render as formatted content instead of a dense paragraph."],
                ["Faster actions", "Primary buttons sit near the profile header so users do not need to hunt for them."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-[1.7rem] border border-black/6 bg-white p-5 shadow-[0_18px_48px_rgba(0,0,0,0.05)]">
                  <p className="text-sm font-semibold text-neutral-950">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-neutral-600">{body}</p>
                </div>
              ))}
            </section>

            {suggestedArticles.length ? (
              <section className="rounded-[2rem] border border-black/6 bg-white p-8 shadow-[0_24px_64px_rgba(0,0,0,0.06)]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">Related reading</p>
                    <h2 className="mt-3 text-2xl font-semibold text-neutral-950">Suggested articles</h2>
                  </div>
                  <Link href="/articles" className="text-sm font-semibold text-[#FF4B1E] hover:underline">
                    View all
                  </Link>
                </div>
                <div className="mt-6 grid gap-6 lg:grid-cols-3">
                  {suggestedArticles.slice(0, 3).map((article) => (
                    <TaskPostCard
                      key={article.id}
                      post={article}
                      href={buildPostUrl("article", article.slug)}
                      compact
                    />
                  ))}
                </div>
                <nav className="mt-6 rounded-[1.5rem] border border-black/6 bg-[#faf7f3] p-5">
                  <p className="text-sm font-semibold text-neutral-950">Related links</p>
                  <ul className="mt-3 space-y-2 text-sm">
                    {suggestedArticles.slice(0, 3).map((article) => (
                      <li key={`related-${article.id}`}>
                        <Link
                          href={buildPostUrl("article", article.slug)}
                          className="text-[#FF4B1E] underline-offset-4 hover:underline"
                        >
                          {article.title}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link href="/profile" className="text-[#FF4B1E] underline-offset-4 hover:underline">
                        Browse all profiles
                      </Link>
                    </li>
                  </ul>
                </nav>
              </section>
            ) : null}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
