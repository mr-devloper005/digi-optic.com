import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/site-config'
import { Scale } from 'lucide-react'

const sections = [
  {
    title: 'Acceptance',
    body: `By accessing ${SITE_CONFIG.name} you agree to these terms and to any supplemental policies linked from the footer.`,
  },
  {
    title: 'Accounts & security',
    body: 'You are responsible for safeguarding credentials and for activity under your account. Notify us promptly of unauthorized use.',
  },
  {
    title: 'Content & licensing',
    body: 'You retain rights to imagery you upload. You grant the platform the rights needed to host, transmit, and display that content to operate the service. Commercial use of others’ work requires appropriate licenses.',
  },
  {
    title: 'Acceptable use',
    body: 'No unlawful content, harassment, malware, or attempts to disrupt the service. We may suspend accounts that risk the community or infrastructure.',
  },
  {
    title: 'Disclaimers',
    body: 'The service is provided as-is to the extent permitted by law. We do not guarantee uninterrupted availability but work to keep galleries fast and reliable.',
  },
  {
    title: 'Changes',
    body: 'We may update these terms; material changes will be reflected with a new effective date on this page.',
  },
]

export default function TermsPage() {
  return (
    <PageShell
      title="Terms of Service"
      description={`Rules for using ${SITE_CONFIG.name}—aligned with our photography-first experience and licensing expectations.`}
      actions={
        <Button variant="outline" className="rounded-full border-black/15" asChild>
          <Link href="/contact">Legal question</Link>
        </Button>
      }
    >
      <div className="rounded-[1.75rem] border border-black/6 bg-white p-8 shadow-[0_20px_55px_rgba(0,0,0,0.06)] sm:p-10">
        <div className="flex flex-col gap-6 border-b border-black/6 pb-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FF4B1E]/12 text-[#FF4B1E]">
              <Scale className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF4B1E]">Agreement</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950">Clear terms for creators and visitors</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600">
                These terms are written to match how the product behaves: imagery forward, minimal surprise fees, and straightforward expectations for both sides.
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-[#F2F2F2] px-5 py-4 text-sm text-neutral-700">
            <p className="font-semibold text-neutral-950">Effective date</p>
            <p className="mt-1 text-lg font-semibold">April 23, 2026</p>
          </div>
        </div>
        <div className="mt-8 space-y-6">
          {sections.map((section, index) => (
            <div key={section.title} className="flex gap-4">
              <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-xs font-bold text-white">{index + 1}</span>
              <div>
                <h3 className="text-base font-semibold text-neutral-950">{section.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{section.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-[1.5rem] border border-black/6 bg-black px-6 py-8 text-center text-white sm:px-10">
        <p className="text-sm text-white/75">
          Need the full legal PDF or enterprise amendments?{' '}
          <Link href="/contact" className="font-semibold text-[#FF4B1E] hover:underline">
            Contact the team
          </Link>
          .
        </p>
      </div>
    </PageShell>
  )
}
