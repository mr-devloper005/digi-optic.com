import Link from 'next/link'
import { Clock, Image as ImageIcon, Mail, MapPin, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { CONTACT_PAGE_OVERRIDE_ENABLED, ContactPageOverride } from '@/overrides/contact-page'
import { ContentImage } from '@/components/shared/content-image'

const tone = {
  shell: 'bg-[#F2F2F2] text-neutral-950',
  panel: 'rounded-[2rem] border border-black/6 bg-white shadow-[0_24px_64px_rgba(0,0,0,0.06)]',
  soft: 'rounded-[1.5rem] border border-black/6 bg-white shadow-[0_12px_32px_rgba(0,0,0,0.04)]',
  muted: 'text-neutral-600',
  action: 'rounded-full bg-[#FF4B1E] text-white hover:bg-[#e63d14]',
}

const lanes = [
  {
    icon: ImageIcon,
    title: 'Studio & gallery support',
    body: 'Book a walkthrough, plan a campaign drop, or align on how collections should read on the public gallery.',
  },
  {
    icon: Sparkles,
    title: 'Licensing & usage',
    body: 'Ask about territory, duration, exclusivity, and model or property releases before you publish.',
  },
  {
    icon: Mail,
    title: 'Press & partnerships',
    body: 'Request hi-res selects, founder quotes, or co-marketing moments—we reply with assets, not auto-replies.',
  },
]

export default function ContactPage() {
  if (CONTACT_PAGE_OVERRIDE_ENABLED) {
    return <ContactPageOverride />
  }

  return (
    <div className={`image-site-shell min-h-screen ${tone.shell}`}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <section className="grid gap-10 lg:grid-cols-[1fr_1.02fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF4B1E]">Contact</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.25rem]">Let’s talk about your next visual launch.</h1>
            <p className={`mt-5 max-w-xl text-sm leading-relaxed sm:text-base ${tone.muted}`}>
              Share scope, timing, and references—we route studio, legal, and product questions to the right humans on our side.
            </p>
            <div className="mt-10 space-y-4">
              {lanes.map((lane) => (
                <div key={lane.title} className={`p-6 ${tone.soft}`}>
                  <lane.icon className="h-6 w-6 text-[#FF4B1E]" />
                  <h2 className="mt-4 text-lg font-semibold text-neutral-950">{lane.title}</h2>
                  <p className={`mt-2 text-sm leading-relaxed ${tone.muted}`}>{lane.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className={`flex items-start gap-3 rounded-2xl border border-black/6 bg-white p-4 ${tone.soft}`}>
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#FF4B1E]" />
                <div>
                  <p className="text-sm font-semibold text-neutral-950">Response time</p>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-600">Weekdays under 24h for licensing and gallery support. Campaign briefs may take two business days.</p>
                </div>
              </div>
              <div className={`flex items-start gap-3 rounded-2xl border border-black/6 bg-white p-4 ${tone.soft}`}>
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#FF4B1E]" />
                <div>
                  <p className="text-sm font-semibold text-neutral-950">Where we work</p>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-600">Distributed across North America and Europe with on-site shoots coordinated locally.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`p-8 sm:p-10 ${tone.panel}`}>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Send a message</h2>
            <p className="mt-2 text-sm text-neutral-600">Underline fields keep the form light—tell us what you are trying to ship.</p>
            <form className="mt-8 grid gap-6">
              <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Name
                <input
                  className="h-11 border-0 border-b border-black/15 bg-transparent text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-[#FF4B1E]"
                  placeholder="Alex Rivera"
                />
              </label>
              <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Email
                <input
                  type="email"
                  className="h-11 border-0 border-b border-black/15 bg-transparent text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-[#FF4B1E]"
                  placeholder="you@studio.com"
                />
              </label>
              <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Topic
                <input
                  className="h-11 border-0 border-b border-black/15 bg-transparent text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-[#FF4B1E]"
                  placeholder="Licensing, partnership, support…"
                />
              </label>
              <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Details
                <textarea
                  className="min-h-[140px] resize-none border-0 border-b border-black/15 bg-transparent py-2 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-[#FF4B1E]"
                  placeholder="Timeline, deliverables, links to reference imagery."
                />
              </label>
              <button type="submit" className={`inline-flex h-12 items-center justify-center px-8 text-sm font-semibold shadow-[0_14px_32px_rgba(255,75,30,0.25)] ${tone.action}`}>
                Send message
              </button>
            </form>
            <p className="mt-6 text-center text-sm text-neutral-600">
              Prefer self-serve?{' '}
              <Link href="/help" className="font-semibold text-[#FF4B1E] hover:underline">
                Visit the help center
              </Link>
            </p>
          </div>
        </section>

        <section className="mt-16 overflow-hidden rounded-[2rem] border border-black/6 bg-black">
          <div className="grid lg:grid-cols-[1fr_0.9fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF4B1E]">Visit</p>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Studio days & remote sessions</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
                We host quarterly studio reviews online and occasional in-person portfolio sessions in select cities. Ask for availability when you write in.
              </p>
              <Link href="/help" className="mt-8 inline-flex text-sm font-semibold text-white underline-offset-4 hover:underline">
                Browse FAQs
              </Link>
            </div>
            <div className="relative min-h-[220px] lg:min-h-full">
              <ContentImage
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop"
                alt="Bright studio space"
                fill
                className="object-cover opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:bg-gradient-to-l" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
