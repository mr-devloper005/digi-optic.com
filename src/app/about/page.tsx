import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/site-config'

const highlights = [
  { label: 'Frames published', value: '48k+' },
  { label: 'Studios onboarded', value: '1.2k' },
  { label: 'Countries represented', value: '62' },
]

const values = [
  {
    title: 'Imagery first',
    description: 'Navigation, spacing, and typography are tuned so photos stay the hero—not competing chrome.',
  },
  {
    title: 'Honest presentation',
    description: 'Licensing, resolution, and collection context sit beside the work so buyers know what they are getting.',
  },
  {
    title: 'Calm collaboration',
    description: 'Reviewers, producers, and photographers share one refined surface with fewer distractions.',
  },
]

const milestones = [
  { year: '2022', text: 'Launched the first masonry gallery tuned for ultra-wide canvases.' },
  { year: '2024', text: 'Introduced instant download packs with transparent usage notes.' },
  { year: '2026', text: 'Refreshed the premium shell—off-white surfaces, orange CTAs, and serif headlines.' },
]

export default function AboutPage() {
  return (
    <PageShell
      title={`About ${SITE_CONFIG.name}`}
      description={`${SITE_CONFIG.name} is a photography-forward platform for studios, independents, and brands that need imagery to feel intentional.`}
      actions={
        <>
          <Button variant="outline" className="rounded-full border-black/15" asChild>
            <Link href="/team">Meet the team</Link>
          </Button>
          <Button className="rounded-full bg-[#FF4B1E] text-white hover:bg-[#e63d14]" asChild>
            <Link href="/contact">Contact us</Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[1.75rem] border border-black/6 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF4B1E]">Our story</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950">Built because great photography deserves a quieter stage.</h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600">
            We grew tired of marketplaces that bury imagery under ads, upsells, and noisy feeds. {SITE_CONFIG.name} keeps the rhythm gallery-like—large
            surfaces, generous whitespace, and typography borrowed from editorial print.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-black/6 bg-[#F2F2F2]/90 p-4">
                <div className="text-2xl font-semibold text-neutral-950">{item.value}</div>
                <div className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {values.map((value) => (
            <div key={value.title} className="rounded-[1.75rem] border border-black/6 bg-white p-6 shadow-[0_16px_44px_rgba(0,0,0,0.04)]">
              <h3 className="text-lg font-semibold text-neutral-950">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 rounded-[1.75rem] border border-black/6 bg-black px-8 py-10 text-white shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF4B1E]">Milestones</p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {milestones.map((m) => (
            <div key={m.year}>
              <p className="text-sm font-semibold text-white">{m.year}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{m.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 rounded-[1.75rem] border border-black/6 bg-[#F2F2F2] p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-neutral-950">See the gallery experience</h3>
            <p className="mt-2 max-w-xl text-sm text-neutral-600">Browse live photography, collection cards, and the same orange-accent system used across the marketing pages.</p>
          </div>
          <Button className="rounded-full bg-[#FF4B1E] text-white hover:bg-[#e63d14]" asChild>
            <Link href="/images">Open gallery</Link>
          </Button>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[1.75rem] border border-black/6 bg-white p-8 shadow-[0_16px_44px_rgba(0,0,0,0.04)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF4B1E]">Explore</p>
          <h3 className="mt-3 text-xl font-semibold text-neutral-950">Keep browsing</h3>
          <p className="mt-2 text-sm text-neutral-600">Every page uses the same off-white canvas, black contrast bands, and pill CTAs so orientation stays effortless.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { href: '/help', label: 'Help' },
              { href: '/press', label: 'Press' },
              { href: '/careers', label: 'Careers' },
              { href: '/licenses', label: 'Licenses' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-black/10 bg-[#F2F2F2] px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:border-[#FF4B1E]/40 hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center rounded-[1.75rem] border border-black/6 bg-black p-8 text-white sm:p-10">
          <p className="text-lg font-medium leading-relaxed text-white/90">&ldquo;We measure success by how little UI visitors notice—because the photography is doing the talking.&rdquo;</p>
          <p className="mt-4 text-sm font-semibold text-[#FF4B1E]">Internal design principle</p>
        </div>
      </div>
    </PageShell>
  )
}
