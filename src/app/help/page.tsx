import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { mockFaqs } from '@/data/mock-data'
import { BookOpen, Download, Image as ImageIcon, MessageCircle } from 'lucide-react'

const guides = [
  {
    icon: ImageIcon,
    title: 'Upload & organize',
    body: 'Name series consistently, add location and mood tags, and group frames before you publish—buyers scan metadata first.',
  },
  {
    icon: Download,
    title: 'Downloads & formats',
    body: 'Pick the right resolution tier for web, print, or social. We surface checksums so you know the file arrived intact.',
  },
  {
    icon: BookOpen,
    title: 'Licensing basics',
    body: 'Editorial vs commercial, model releases, and territory windows—each collection can carry its own usage note.',
  },
  {
    icon: MessageCircle,
    title: 'Talk to a human',
    body: 'If an answer is not here, route through contact with screenshots—we respond faster with context.',
  },
]

export default function HelpPage() {
  return (
    <PageShell
      title="Help Center"
      description="Guides for photographers, producers, and brand teams using the gallery—same calm system as the homepage."
      actions={
        <Button className="rounded-full bg-[#FF4B1E] text-white hover:bg-[#e63d14]" asChild>
          <Link href="/contact">Contact support</Link>
        </Button>
      }
    >
      <div className="overflow-hidden rounded-[1.75rem] border border-black/6 bg-black text-white shadow-[0_24px_70px_rgba(0,0,0,0.12)]">
        <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF4B1E]">Start here</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Everything you need to ship a polished gallery.</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70">
              From first upload to licensing questions, these guides mirror how our team works internally—clear steps, no jargon, and visuals that stay center stage.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80">
            <p className="font-semibold text-white">Tip</p>
            <p className="mt-2 leading-relaxed">Filter the FAQ with your role in mind: photographers care about color profiles; producers care about delivery SLAs.</p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {guides.map((g) => (
          <div key={g.title} className="rounded-[1.5rem] border border-black/6 bg-white p-6 shadow-[0_16px_44px_rgba(0,0,0,0.05)]">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF4B1E]/12 text-[#FF4B1E]">
              <g.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-neutral-950">{g.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{g.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.05fr]">
        <div className="rounded-[1.75rem] border border-black/6 bg-[#F2F2F2] p-8">
          <h3 className="text-lg font-semibold text-neutral-950">Still stuck?</h3>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600">
            Send frames, URLs, and what you expected to happen. We triage licensing separately from product bugs so you get the right specialist.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="outline" className="rounded-full border-black/15" asChild>
              <Link href="/images">Browse gallery</Link>
            </Button>
            <Button className="rounded-full bg-[#FF4B1E] text-white hover:bg-[#e63d14]" asChild>
              <Link href="/contact">Open a ticket</Link>
            </Button>
          </div>
        </div>
        <div className="rounded-[1.75rem] border border-black/6 bg-white p-6 shadow-[0_18px_48px_rgba(0,0,0,0.05)] sm:p-8">
          <h3 className="text-lg font-semibold text-neutral-950">FAQ</h3>
          <Accordion type="single" collapsible className="mt-4">
            {mockFaqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-black/8">
                <AccordionTrigger className="text-left text-sm font-medium text-neutral-900 hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-neutral-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </PageShell>
  )
}
