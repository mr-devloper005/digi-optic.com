import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { siteContent } from '@/config/site.content'

const quick = [
  { name: 'Home', href: '/' },
  { name: 'Gallery', href: '/images' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Help', href: '/help' },
]

const categories = [
  { name: 'Photography', href: '/images?category=photography' },
  { name: 'Travel', href: '/images?category=travel' },
  { name: 'Lifestyle', href: '/images?category=lifestyle' },
  { name: 'Arts', href: '/images?category=arts' },
  { name: 'Fashion', href: '/images?category=fashion' },
]

const company = [
  { name: 'Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Press', href: '/press' },
  { name: 'Licenses', href: '/licenses' },
]

const legal = [
  { name: 'Privacy', href: '/privacy' },
  { name: 'Terms', href: '/terms' },
  { name: 'Cookies', href: '/cookies' },
]

const social = [
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { name: 'GitHub', href: 'https://github.com', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
]

export function FooterOverrideBody() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-1.5">
                <img src="/favicon.png?v=20260401" alt={`${SITE_CONFIG.name} logo`} width="48" height="48" className="h-full w-full object-contain" />
              </div>
              <div>
                <p className="text-lg font-semibold">{SITE_CONFIG.name}</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">{siteContent.footer.tagline}</p>
              </div>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">{SITE_CONFIG.description}</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF4B1E]">Quick links</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              {quick.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF4B1E]">Categories</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              {categories.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF4B1E]">Company</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-8 space-y-2 border-t border-white/10 pt-6 text-xs text-white/50">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white/80">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/45">&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex gap-3">
            {social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 bg-white/5 p-2.5 text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                <item.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
