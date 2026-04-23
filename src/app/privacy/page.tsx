import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Button } from '@/components/ui/button'
import { Shield } from 'lucide-react'

const sections = [
  {
    title: 'What we collect',
    body: 'Account details you provide, technical logs needed to keep the service reliable, and content metadata associated with imagery you upload or browse.',
  },
  {
    title: 'How we use information',
    body: 'To operate the gallery, personalize safe defaults, prevent abuse, and improve performance. We do not sell personal data.',
  },
  {
    title: 'Storage & retention',
    body: 'We retain account and gallery data while your workspace is active. You may request deletion subject to legal holds or billing obligations.',
  },
  {
    title: 'Your controls',
    body: 'Manage marketing preferences, export copies of your profile data, and delete your account from settings where available.',
  },
  {
    title: 'International transfers',
    body: 'Infrastructure may span regions—we use contractual safeguards consistent with applicable privacy regulations.',
  },
]

export default function PrivacyPage() {
  return (
    <PageShell
      title="Privacy Policy"
      description="How we handle personal information for visitors, creators, and partners on this photography-first platform."
      actions={
        <Button className="rounded-full bg-[#FF4B1E] text-white hover:bg-[#e63d14]" asChild>
          <Link href="/contact">Privacy request</Link>
        </Button>
      }
    >
      <div className="overflow-hidden rounded-[1.75rem] border border-black/6 bg-black text-white">
        <div className="flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="max-w-xl">
            <Shield className="h-8 w-8 text-[#FF4B1E]" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/50">Summary</p>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              We collect the minimum needed to run a visual platform: identity for accounts, telemetry to keep latency low, and licensing context tied to media. You stay in control of exports and deletion where the product allows it.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/70">
            <p className="font-semibold text-white">Last updated</p>
            <p className="mt-1 text-2xl font-semibold tracking-tight">April 23, 2026</p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {sections.map((section) => (
          <div key={section.title} className="rounded-[1.5rem] border border-black/6 bg-white p-6 shadow-[0_14px_40px_rgba(0,0,0,0.04)] sm:p-7">
            <h3 className="text-base font-semibold text-neutral-950">{section.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">{section.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-[1.5rem] border border-black/6 bg-[#F2F2F2] p-6 text-center sm:p-8">
        <p className="text-sm text-neutral-700">
          Questions about this policy?{' '}
          <Link href="/contact" className="font-semibold text-[#FF4B1E] hover:underline">
            Contact us
          </Link>{' '}
          or review{' '}
          <Link href="/cookies" className="font-semibold text-neutral-900 hover:underline">
            cookie details
          </Link>
          .
        </p>
      </div>
    </PageShell>
  )
}
