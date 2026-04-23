import Link from 'next/link'
import { ArrowRight, Camera, Download, Globe2, Layers, Sparkles, Star } from 'lucide-react'
import { ContentImage } from '@/components/shared/content-image'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { SITE_CONFIG } from '@/lib/site-config'
import { fetchTaskPosts } from '@/lib/task-data'
import type { SitePost } from '@/lib/site-connector'

function getPostImage(post?: SitePost | null) {
  const media = Array.isArray(post?.media) ? post?.media : []
  const mediaUrl = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  const contentImage =
    typeof post?.content === 'object' && post?.content && Array.isArray((post.content as { images?: string[] }).images)
      ? (post.content as { images: string[] }).images.find((url: unknown) => typeof url === 'string' && url)
      : null
  return mediaUrl || contentImage || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop'
}

const features = [
  {
    icon: Camera,
    title: 'Ultra-HD capture',
    body: 'Showcase work in crisp detail with formats tuned for screens, print, and large canvases.',
  },
  {
    icon: Layers,
    title: 'Curated collections',
    body: 'Group shoots by mood, client, or series so visitors browse like a gallery, not a feed.',
  },
  {
    icon: Download,
    title: 'Instant delivery',
    body: 'Fast downloads and clear usage notes keep collaborators moving without friction.',
  },
  {
    icon: Globe2,
    title: 'Global licensing',
    body: 'Transparent rights and territory-friendly options for teams that publish worldwide.',
  },
]

const testimonials = [
  {
    quote: 'The layout finally matches how we pitch work—clean, confident, and image-first.',
    name: 'Maya Chen',
    role: 'Creative director',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop',
    rating: 5,
  },
  {
    quote: 'Clients understand our collections in minutes. The hero and gallery rhythm just works.',
    name: 'Jordan Ellis',
    role: 'Photographer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop',
    rating: 5,
  },
  {
    quote: 'We replaced a cluttered portal with this experience and saw faster approvals on briefs.',
    name: 'Priya Nair',
    role: 'Brand lead',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop',
    rating: 5,
  },
]

export async function HomePageMarketing() {
  const posts = await fetchTaskPosts('image', 8, { allowMockFallback: true, fresh: true })
  const gallery = posts.length ? posts.slice(0, 5) : []
  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.baseUrl,
      logo: `${SITE_CONFIG.baseUrl.replace(/\/$/, '')}${SITE_CONFIG.defaultOgImage}`,
      sameAs: [],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.baseUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_CONFIG.baseUrl.replace(/\/$/, '')}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  ]

  return (
    <div className="image-site-shell min-h-screen bg-[#F2F2F2] text-neutral-950">
      <NavbarShell />
      <SchemaJsonLd data={schemaData} />

      <main>
        <section className="relative overflow-hidden border-b border-black/5 bg-[#F2F2F2]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-neutral-600">
                  <Sparkles className="h-3.5 w-3.5 text-[#FF4B1E]" />
                  Image studio
                </span>
                <h1 className="mt-8 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
                  Capturing moments, defining tomorrow.
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600">{SITE_CONFIG.description}</p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    href="/images"
                    className="inline-flex items-center gap-2 rounded-full bg-[#FF4B1E] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(255,75,30,0.35)] transition hover:bg-[#e63d14]"
                  >
                    Explore gallery
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-8 py-3.5 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-50"
                  >
                    Why Digi Optic
                  </Link>
                </div>
                <div className="mt-12 flex flex-wrap gap-3">
                  {[
                    ['24/7', 'Always-on library'],
                    ['99%', 'Client satisfaction'],
                    ['4K+', 'Ready for detail'],
                  ].map(([label, hint]) => (
                    <div key={label} className="rounded-2xl border border-black/8 bg-white px-5 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
                      <p className="text-lg font-semibold tracking-tight text-neutral-950">{label}</p>
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">{hint}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[2rem] border border-black/5 bg-white p-4 shadow-[0_28px_80px_rgba(0,0,0,0.08)]">
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                    {gallery.length ? (
                      gallery.map((post, index) => (
                        <Link
                          key={post.id}
                          href={`/images/${post.slug}`}
                          className={
                            index === 0
                              ? 'relative col-span-2 row-span-2 block overflow-hidden rounded-3xl md:col-span-2 md:row-span-2'
                              : 'relative block overflow-hidden rounded-2xl'
                          }
                        >
                          <div className={index === 0 ? 'relative aspect-[4/3] w-full' : 'relative aspect-square w-full'}>
                            <ContentImage src={getPostImage(post)} alt={post.title} fill className="object-cover transition duration-500 hover:scale-[1.03]" />
                          </div>
                        </Link>
                      ))
                    ) : (
                      [
                        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&h=800&fit=crop',
                        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=600&fit=crop',
                        'https://images.unsplash.com/photo-1501785883141-7663f64f6680?w=600&h=600&fit=crop',
                        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=600&fit=crop',
                        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=600&fit=crop',
                      ].map((src, i) => (
                        <div
                          key={src}
                          className={
                            i === 0
                              ? 'relative col-span-2 row-span-2 overflow-hidden rounded-3xl md:col-span-2 md:row-span-2'
                              : 'relative aspect-square overflow-hidden rounded-2xl'
                          }
                        >
                          <div className={i === 0 ? 'relative aspect-[4/3] w-full' : 'relative aspect-square w-full'}>
                            <ContentImage src={src} alt="Featured visual" fill className="object-cover" />
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-black/5 bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF4B1E]">Why work with us</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Built for photographers, studios, and visual brands.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                Every surface is tuned for imagery—spacious grids, soft cards, and typography that stays out of the way.
              </p>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-[1.5rem] border border-black/6 bg-[#F2F2F2]/80 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_50px_rgba(0,0,0,0.07)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FF4B1E]/12 text-[#FF4B1E]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-neutral-950">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] bg-black px-6 py-16 text-center text-white sm:px-12 lg:px-20">
              <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
                Ready to present your imagery like a premium studio?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/70">
                Launch a gallery-forward experience in minutes. No clutter—just bold visuals, clear CTAs, and room to breathe.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link href="/register" className="inline-flex items-center gap-2 rounded-full bg-[#FF4B1E] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#e63d14]">
                  Start free
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-transparent px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Talk with us
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-black/5 bg-[#F2F2F2] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF4B1E]">Voices</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">Loved by visual teams</h2>
              </div>
              <Link href="/images" className="text-sm font-semibold text-neutral-900 underline-offset-4 hover:underline">
                View featured work
              </Link>
            </div>
            <div className="mt-12 flex gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="min-w-[min(100%,320px)] shrink-0 rounded-[1.5rem] border border-black/6 bg-white p-6 shadow-[0_18px_48px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#FF4B1E] text-[#FF4B1E]" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-700">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="relative h-11 w-11 overflow-hidden rounded-full border border-black/5">
                      <ContentImage src={t.avatar} alt={t.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-950">{t.name}</p>
                      <p className="text-xs text-neutral-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] bg-black text-white">
              <div className="grid lg:grid-cols-[1fr_1fr]">
                <div className="border-b border-white/10 p-10 lg:border-b-0 lg:border-r lg:p-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF4B1E]">Contact</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight">Tell us about your next shoot or campaign.</h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">We respond within one business day. Share timing, deliverables, and the mood you are chasing.</p>
                  <div className="mt-8 grid gap-6">
                    <div>
                      <p className="text-left text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Name</p>
                      <div className="mt-2 border-b border-white/25 py-2 text-sm text-white/35">Alex Rivera</div>
                    </div>
                    <div>
                      <p className="text-left text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Email</p>
                      <div className="mt-2 border-b border-white/25 py-2 text-sm text-white/35">you@studio.com</div>
                    </div>
                    <div>
                      <p className="text-left text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Message</p>
                      <div className="mt-2 min-h-[4.5rem] border-b border-white/25 py-2 text-sm text-white/35">Project scope, locations, and references.</div>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex w-fit items-center justify-center rounded-full bg-[#FF4B1E] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#e63d14]"
                    >
                      Open full form
                    </Link>
                  </div>
                </div>
                <div className="relative min-h-[280px] lg:min-h-full">
                  <ContentImage
                    src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200&h=900&fit=crop"
                    alt="Creative workspace with camera"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-black/5 bg-[#F2F2F2] py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF4B1E]">The platform</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">A calmer home for your best frames.</h2>
              <p className="mt-5 text-sm leading-relaxed text-neutral-600">
                {SITE_CONFIG.name} keeps attention on photography—large surfaces, generous spacing, and navigation that never competes with your imagery.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF4B1E]" />
                  Masonry-friendly layouts with consistent spacing tokens.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF4B1E]" />
                  Search tuned for visual discovery, not noisy feeds.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF4B1E]" />
                  Account tools that stay lightweight for creators on the move.
                </li>
              </ul>
              <Link href="/images" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 underline-offset-4 hover:underline">
                Browse the library
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=700&fit=crop', 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=500&fit=crop', 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=500&fit=crop', 'https://images.unsplash.com/photo-1501785883141-7663f64f6680?w=600&h=700&fit=crop'].map((src, idx) => (
                <div key={src} className={`relative overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_18px_48px_rgba(0,0,0,0.06)] ${idx === 0 ? 'row-span-2 min-h-[320px]' : 'min-h-[150px]'}`}>
                  <ContentImage src={src} alt="Gallery preview" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-black/5 bg-white py-14">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF4B1E]">Keep exploring</p>
            <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">Same palette across every surface.</h2>
            <p className="max-w-xl text-sm text-neutral-600">Help, team, careers, and legal pages mirror this system—off-white, black contrast, orange actions.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: '/help', label: 'Help' },
                { href: '/team', label: 'Team' },
                { href: '/careers', label: 'Careers' },
                { href: '/press', label: 'Press' },
                { href: '/privacy', label: 'Privacy' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-black/10 bg-[#F2F2F2] px-5 py-2.5 text-sm font-semibold text-neutral-900 transition hover:border-[#FF4B1E]/50 hover:bg-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
