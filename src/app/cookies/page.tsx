import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Button } from '@/components/ui/button'
import { Cookie } from 'lucide-react'

const sections = [
  {
    title: 'Essential cookies',
    body: 'Required for sign-in sessions, security tokens, and anti-abuse signals. These cannot be toggled off without breaking core functionality.',
  },
  {
    title: 'Preference cookies',
    body: 'Remember UI choices such as theme (where offered), gallery density, or dismissed announcements.',
  },
  {
    title: 'Analytics cookies',
    body: 'Help us understand navigation paths and performance bottlenecks. Aggregated where possible; not used to sell personal data.',
  },
  {
    title: 'Managing cookies',
    body: 'Use browser controls to block or clear cookies. Note that blocking essentials may prevent login or uploads from completing.',
  },
]

export default function CookiesPage() {
  return (
    <PageShell
      title="Cookie Policy"
      description="Transparency about cookies and similar technologies on this site—same visual language as the rest of Digi Optic."
      actions={
        <Button className="rounded-full bg-[#FF4B1E] text-white hover:bg-[#e63d14]" asChild>
          <Link href="/privacy">Read privacy policy</Link>
        </Button>
      }
    >
      <div className="rounded-[1.75rem] border border-black/6 bg-[#F2F2F2] p-8 sm:p-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#FF4B1E] shadow-sm">
            <Cookie className="h-7 w-7" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF4B1E]">At a glance</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950">Cookies that respect attention</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-600">
              We avoid noisy trackers. When we do set cookies, it is to keep sessions safe, remember thoughtful defaults, or learn where the experience slows down—never to resell browsing history.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {sections.map((section) => (
          <div key={section.title} className="rounded-[1.5rem] border border-black/6 bg-white p-6 shadow-[0_14px_40px_rgba(0,0,0,0.04)]">
            <h3 className="text-base font-semibold text-neutral-950">{section.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">{section.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-black/6 bg-black text-white">
        <div className="grid gap-6 p-8 sm:grid-cols-[1fr_auto] sm:items-center sm:p-10">
          <div>
            <p className="text-sm font-semibold">Last updated · April 23, 2026</p>
            <p className="mt-2 text-sm text-white/70">Updates appear here first; substantive changes may also be announced in-product.</p>
          </div>
          <Button variant="outline" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10" asChild>
            <Link href="/contact">Cookie question</Link>
          </Button>
        </div>
      </div>
    </PageShell>
  )
}
