'use client'

import { useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG } from '@/lib/site-config'
import { cn } from '@/lib/utils'

const NavbarAuthControls = dynamic(() => import('@/components/shared/navbar-auth-controls').then((mod) => mod.NavbarAuthControls), {
  ssr: false,
  loading: () => null,
})

const links = [
  { href: '/', label: 'Home' },
  { href: '/images', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/help', label: 'Help' },
]

export function NavbarOverride() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { isAuthenticated } = useAuth()

  const navLinks = useMemo(
    () =>
      links.map((item) => {
        const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'text-sm font-semibold tracking-wide transition',
              active ? 'text-neutral-950' : 'text-neutral-500 hover:text-neutral-900',
            )}
          >
            {item.label}
          </Link>
        )
      }),
    [pathname],
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-[#F2F2F2]/90 text-neutral-950 backdrop-blur-xl">
      <nav className="mx-auto grid h-20 max-w-7xl grid-cols-2 items-center gap-4 px-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3 justify-self-start">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-black/8 bg-white p-1 shadow-sm">
            <img src="/favicon.png?v=20260401" alt={`${SITE_CONFIG.name} logo`} width="44" height="44" className="h-full w-full object-contain" />
          </div>
          <span className="hidden truncate text-lg font-semibold tracking-tight sm:block">{SITE_CONFIG.name}</span>
        </Link>

        <div className="hidden items-center justify-center gap-8 lg:flex">{navLinks}</div>

        <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-3">
          {isAuthenticated ? (
            <NavbarAuthControls />
          ) : (
            <div className="hidden items-center gap-2 md:flex">
              <Link href="/login" className="rounded-full px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-black/5">
                Sign in
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-[#FF4B1E] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(255,75,30,0.35)] transition hover:bg-[#e63d14]"
              >
                Join free
              </Link>
            </div>
          )}

          <button type="button" className="inline-flex rounded-full border border-black/10 bg-white p-2.5 lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-black/5 bg-[#F2F2F2] px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-neutral-800 hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
            {!isAuthenticated ? (
              <div className="mt-3 flex flex-col gap-2 border-t border-black/5 pt-3">
                <Link href="/login" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-center text-sm font-semibold hover:bg-white">
                  Sign in
                </Link>
                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-[#FF4B1E] py-3 text-center text-sm font-semibold text-white"
                >
                  Join free
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
