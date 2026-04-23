import type { Metadata } from 'next'
import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { buildPageMetadata } from '@/lib/seo'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { mockTeamMembers } from '@/data/mock-data'
import { SITE_CONFIG } from '@/lib/site-config'
import { ContentImage } from '@/components/shared/content-image'
import { ArrowRight, Camera, HeartHandshake } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/team',
    title: `Team | ${SITE_CONFIG.name}`,
    description: `Meet the people building ${SITE_CONFIG.name}—design, engineering, and creative operations focused on gallery-grade imagery.`,
    openGraphTitle: `Team | ${SITE_CONFIG.name}`,
    openGraphDescription: `Meet the team behind ${SITE_CONFIG.name} and how we ship a calmer photography platform.`,
    image: SITE_CONFIG.defaultOgImage,
    keywords: ['team', 'photography platform', 'creative studio', SITE_CONFIG.name],
  })
}

const principles = [
  {
    title: 'Photographers in the room',
    body: 'Product decisions are reviewed with working creatives so tools never feel theoretical.',
  },
  {
    title: 'Design & engineering paired',
    body: 'The same squad ships layout, motion, and media performance—no handoff gaps.',
  },
  {
    title: 'Trust by default',
    body: 'We default to clear licensing copy, honest metadata, and conservative data practices.',
  },
]

export default function TeamPage() {
  return (
    <PageShell
      title="Team"
      description={`The people shaping ${SITE_CONFIG.name}—a small, senior group obsessed with gallery-grade presentation.`}
      actions={
        <Button className="rounded-full bg-[#FF4B1E] text-white hover:bg-[#e63d14]" asChild>
          <Link href="/careers">View open roles</Link>
        </Button>
      }
    >
      <div className="overflow-hidden rounded-[1.75rem] border border-black/6 bg-black text-white shadow-[0_28px_80px_rgba(0,0,0,0.12)]">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 sm:p-10 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF4B1E]">Studio culture</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Small team, outsized craft.</h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70">
              We are distributed across time zones with one shared bar: every release should feel as considered as a print lookbook—measured spacing, confident type, and imagery that never fights the UI.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF4B1E] px-6 py-3 text-sm font-semibold text-white hover:bg-[#e63d14]"
              >
                Partner with us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/press"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Press kit
              </Link>
            </div>
          </div>
          <div className="relative min-h-[220px] border-t border-white/10 lg:min-h-[280px] lg:border-l lg:border-t-0">
            <ContentImage
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop"
              alt="Team collaboration"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:bg-gradient-to-l" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 text-sm text-white/90">
              <Camera className="h-5 w-5 shrink-0 text-[#FF4B1E]" />
              <span>Weekly critique: real shoots, real constraints, real feedback.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {principles.map((p) => (
          <div key={p.title} className="rounded-[1.5rem] border border-black/6 bg-white p-6 shadow-[0_16px_44px_rgba(0,0,0,0.04)]">
            <HeartHandshake className="h-8 w-8 text-[#FF4B1E]" />
            <h3 className="mt-4 text-lg font-semibold text-neutral-950">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF4B1E]">Leadership & core</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950">People you will work with</h2>
          </div>
          <Link href="/contact" className="text-sm font-semibold text-neutral-900 underline-offset-4 hover:underline">
            Say hello
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {mockTeamMembers.map((member) => (
            <div
              key={member.id}
              className="rounded-[1.5rem] border border-black/6 bg-white p-6 shadow-[0_18px_48px_rgba(0,0,0,0.05)] transition hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14 border border-black/8">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-neutral-950">{member.name}</p>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">{member.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600">{member.bio}</p>
              <p className="mt-3 text-xs text-neutral-500">{member.location}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
