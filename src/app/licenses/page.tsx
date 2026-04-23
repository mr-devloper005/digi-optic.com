import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Button } from '@/components/ui/button'
import { Code2, FileCode, Package } from 'lucide-react'

const stack = [
  { name: 'Next.js', detail: 'MIT License · App Router runtime' },
  { name: 'React', detail: 'MIT License · UI rendering' },
  { name: 'Tailwind CSS', detail: 'MIT License · utility styling' },
  { name: 'Radix UI', detail: 'MIT License · accessible primitives' },
  { name: 'Lucide', detail: 'ISC License · iconography' },
]

const notes = [
  'This page lists core dependencies shipped with the public site shell. Your deployment may include additional packages—see your lockfile for the authoritative tree.',
  'Trademarks belong to their respective owners. Digi Optic branding is © its owners; do not imply endorsement without written permission.',
]

export default function LicensesPage() {
  return (
    <PageShell
      title="Licenses"
      description="Open-source acknowledgements and high-level attribution for the technology behind this experience."
      actions={
        <Button variant="outline" className="rounded-full border-black/15" asChild>
          <Link href="/contact">Compliance question</Link>
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <div className="rounded-[1.75rem] border border-black/6 bg-white p-8 shadow-[0_20px_55px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF4B1E]/12 text-[#FF4B1E]">
              <Package className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-neutral-950">Core stack</h2>
              <p className="text-xs text-neutral-500">Frequently redistributed libraries</p>
            </div>
          </div>
          <ul className="mt-8 space-y-4">
            {stack.map((row) => (
              <li key={row.name} className="rounded-2xl border border-black/6 bg-[#F2F2F2]/80 px-4 py-4">
                <p className="text-sm font-semibold text-neutral-950">{row.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-neutral-600">{row.detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-5">
          <div className="rounded-[1.5rem] border border-black/6 bg-black p-6 text-white sm:p-8">
            <FileCode className="h-7 w-7 text-[#FF4B1E]" />
            <h3 className="mt-4 text-lg font-semibold">Developer notice</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Source code may be subject to additional license terms inside vendor packages. Always review the LICENSE file bundled with each dependency before redistribution.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-black/6 bg-white p-6 shadow-[0_14px_40px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-2 text-[#FF4B1E]">
              <Code2 className="h-5 w-5" />
              <p className="text-sm font-semibold text-neutral-950">Contributing back</p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              We benefit immensely from open maintainers. If you spot a compliance gap on this page, please reach out so we can correct it quickly.
            </p>
          </div>
          {notes.map((n, i) => (
            <p key={i} className="text-xs leading-relaxed text-neutral-500">
              {n}
            </p>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
