'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useToast } from '@/components/ui/use-toast'
import { mockPressAssets, mockPressCoverage } from '@/data/mock-data'
import { Newspaper, Sparkles } from 'lucide-react'

export default function PressPage() {
  const { toast } = useToast()
  const [activeAssetId, setActiveAssetId] = useState<string | null>(null)
  const activeAsset = mockPressAssets.find((asset) => asset.id === activeAssetId)

  return (
    <PageShell
      title="Press"
      description="Brand story, downloadable assets, and recent coverage—styled like the rest of the Digi Optic shell."
      actions={
        <Button className="rounded-full bg-[#FF4B1E] text-white hover:bg-[#e63d14]" asChild>
          <Link href="/contact">Press inquiries</Link>
        </Button>
      }
    >
      <div className="overflow-hidden rounded-[1.75rem] border border-black/6 bg-black text-white shadow-[0_28px_80px_rgba(0,0,0,0.12)]">
        <div className="grid gap-6 p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">
              <Newspaper className="h-3.5 w-3.5 text-[#FF4B1E]" />
              Media desk
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">Narrative kit for visual storytellers.</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70">
              Use our language, logos, and product captures when you cover how teams publish photography without sacrificing taste.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/75">
            <Sparkles className="h-6 w-6 text-[#FF4B1E]" />
            <p className="mt-4 font-medium text-white">Need a quote?</p>
            <p className="mt-2 leading-relaxed">Email through contact with your deadline—we route to the right spokesperson same day when possible.</p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="rounded-[1.75rem] border border-black/6 bg-white p-6 shadow-[0_20px_55px_rgba(0,0,0,0.06)] sm:p-8">
          <h2 className="text-xl font-semibold text-neutral-950">Press kit downloads</h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">Logos, UI captures, and tonal guidelines—each asset includes suggested alt text for accessibility.</p>
          <div className="mt-6 grid gap-3">
            {mockPressAssets.map((asset) => (
              <div key={asset.id} className="rounded-2xl border border-black/6 bg-[#F2F2F2]/80 p-4">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-neutral-950">{asset.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-neutral-600">{asset.description}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="rounded-full bg-white text-neutral-800">{asset.fileType}</Badge>
                    <Button size="sm" variant="outline" className="rounded-full border-black/15" onClick={() => setActiveAssetId(asset.id)}>
                      Preview
                    </Button>
                    <Button
                      size="sm"
                      className="rounded-full bg-[#FF4B1E] text-white hover:bg-[#e63d14]"
                      onClick={() =>
                        toast({
                          title: 'Download started',
                          description: `${asset.title} is downloading.`,
                        })
                      }
                    >
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF4B1E]">Coverage</p>
          {mockPressCoverage.map((item) => (
            <div key={item.id} className="rounded-[1.5rem] border border-black/6 bg-white p-6 shadow-[0_14px_40px_rgba(0,0,0,0.04)] transition hover:-translate-y-0.5">
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">{item.outlet}</div>
              <p className="mt-2 text-sm font-medium leading-snug text-neutral-950">{item.headline}</p>
              <p className="mt-2 text-xs text-neutral-500">{item.date}</p>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={Boolean(activeAsset)} onOpenChange={() => setActiveAssetId(null)}>
        <DialogContent className="max-w-3xl rounded-2xl border-black/8">
          <DialogHeader>
            <DialogTitle>{activeAsset?.title}</DialogTitle>
          </DialogHeader>
          {activeAsset?.previewUrl && (
            <div className="relative aspect-video overflow-hidden rounded-xl border border-black/8 bg-neutral-100">
              <Image src={activeAsset.previewUrl} alt={activeAsset.title} fill className="object-cover" />
            </div>
          )}
          <p className="text-sm text-neutral-600">{activeAsset?.description}</p>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" className="rounded-full border-black/15" onClick={() => setActiveAssetId(null)}>
              Close
            </Button>
            <Button
              className="rounded-full bg-[#FF4B1E] text-white hover:bg-[#e63d14]"
              onClick={() =>
                toast({
                  title: 'Download started',
                  description: `${activeAsset?.title} is downloading.`,
                })
              }
            >
              Download {activeAsset?.fileType}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PageShell>
  )
}
