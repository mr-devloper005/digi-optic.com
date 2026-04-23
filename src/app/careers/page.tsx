import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SITE_CONFIG } from '@/lib/site-config'
import { ArrowRight, Camera, Palette, Zap } from 'lucide-react'

const roles = [
  {
    title: 'Senior product designer',
    location: 'Remote (US / EU)',
    type: 'Full-time',
    level: 'Senior',
    focus: 'Own end-to-end flows for gallery discovery, uploads, and licensing surfaces.',
  },
  {
    title: 'Frontend engineer',
    location: 'Hybrid · New York',
    type: 'Full-time',
    level: 'Mid',
    focus: 'Ship performant image grids, accessibility, and motion that respects reduced motion.',
  },
  {
    title: 'Creative producer',
    location: 'Remote',
    type: 'Contract',
    level: 'Lead',
    focus: 'Partner with photographers on launch narratives, shot lists, and campaign drops.',
  },
]

const benefits = [
  'Remote-first with intentional on-sites for critique weeks',
  'Hardware stipend for color-calibrated displays',
  'Annual portfolio review with external mentors',
  'Transparent leveling and documented growth paths',
]

const values = [
  { icon: Camera, title: 'Imagery leads', body: 'We reject patterns that push chrome ahead of photography.' },
  { icon: Palette, title: 'Taste is a skill', body: 'We train eye for spacing, type, and pacing—not only throughput.' },
  { icon: Zap, title: 'Ship with evidence', body: 'Instrumentation on media performance is part of definition of done.' },
]

export default function CareersPage() {
  return (
    <PageShell
      title="Careers"
      description={`Build the calmest premium gallery on the web with ${SITE_CONFIG.name}—small team, high craft bar.`}
      actions={
        <Button className="rounded-full bg-[#FF4B1E] text-white hover:bg-[#e63d14]" asChild>
          <Link href="/contact">Introduce yourself</Link>
        </Button>
      }
    >
      <div className="grid gap-5 sm:grid-cols-3">
        {values.map((v) => (
          <div key={v.title} className="rounded-[1.5rem] border border-black/6 bg-white p-6 shadow-[0_14px_40px_rgba(0,0,0,0.04)]">
            <v.icon className="h-7 w-7 text-[#FF4B1E]" />
            <h3 className="mt-4 text-base font-semibold text-neutral-950">{v.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{v.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF4B1E]">Open roles</p>
          {roles.map((role) => (
            <div key={role.title} className="rounded-[1.5rem] border border-black/6 bg-white p-6 shadow-[0_18px_48px_rgba(0,0,0,0.05)]">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="rounded-full bg-[#F2F2F2] text-neutral-800 hover:bg-[#F2F2F2]">{role.level}</Badge>
                <Badge variant="outline" className="rounded-full border-black/15">
                  {role.type}
                </Badge>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-neutral-950">{role.title}</h2>
              <p className="mt-1 text-sm text-neutral-500">{role.location}</p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{role.focus}</p>
              <Button variant="outline" className="mt-5 rounded-full border-black/15" asChild>
                <Link href="/contact">Discuss this role</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="rounded-[1.5rem] border border-black/6 bg-[#F2F2F2] p-6">
            <h3 className="text-lg font-semibold text-neutral-950">Why {SITE_CONFIG.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              We are building the reference surface for photography on the web—generous grids, honest licensing, and interactions that feel as premium as the art.
            </p>
            <ul className="mt-5 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-neutral-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF4B1E]" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.5rem] border border-black/6 bg-black p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF4B1E]">Hiring note</p>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              No résumé keyword games—send work that shows restraint. Portfolios with fewer, stronger projects beat volume every time.
            </p>
            <Link href="/team" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline">
              Meet the team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
