'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowRight, Camera, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { useAuth } from '@/lib/auth-context'

export function RegisterPageOverride() {
  const { signup, isLoading } = useAuth()
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!name.trim() || !email.trim() || !password) {
      setError('Fill in every field to continue.')
      return
    }
    try {
      await signup(name.trim(), email.trim(), password)
      router.push('/')
      router.refresh()
    } catch {
      setError('Something went wrong. Try again.')
    }
  }

  return (
    <div className="min-h-screen bg-[#F2F2F2] text-neutral-950">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
          <div className="rounded-[2rem] border border-black/6 bg-white p-8 shadow-[0_24px_64px_rgba(0,0,0,0.06)]">
            <Camera className="h-8 w-8 text-[#FF4B1E]" />
            <h1 className="mt-6 text-4xl font-semibold tracking-tight">Create your creator account</h1>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">Share galleries, keep downloads organized, and present work with the same premium shell visitors see on the homepage.</p>
            <div className="mt-10 grid gap-4">
              {['Image-first onboarding', 'No clutter—just your best frames', 'Local profile storage after signup'].map((item) => (
                <div key={item} className="rounded-2xl border border-black/6 bg-[#F2F2F2]/80 px-4 py-3 text-sm text-neutral-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/6 bg-white p-8 shadow-[0_24px_64px_rgba(0,0,0,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF4B1E]">Create account</p>
            <form className="mt-6 grid gap-5" onSubmit={handleSubmit}>
              <label className="grid gap-2 text-sm font-medium text-neutral-700">
                Full name
                <input
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                  autoComplete="name"
                  className="border-0 border-b border-black/15 bg-transparent py-2 text-neutral-950 outline-none transition focus:border-[#FF4B1E]"
                  placeholder="Jordan Lee"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-neutral-700">
                Email
                <input
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  autoComplete="email"
                  className="border-0 border-b border-black/15 bg-transparent py-2 text-neutral-950 outline-none transition focus:border-[#FF4B1E]"
                  placeholder="you@studio.com"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-neutral-700">
                Password
                <input
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                  type="password"
                  autoComplete="new-password"
                  className="border-0 border-b border-black/15 bg-transparent py-2 text-neutral-950 outline-none transition focus:border-[#FF4B1E]"
                  placeholder="••••••••"
                />
              </label>
              {error ? <p className="text-sm text-red-600">{error}</p> : null}
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FF4B1E] px-6 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(255,75,30,0.35)] transition hover:bg-[#e63d14] disabled:opacity-60"
              >
                {isLoading ? 'Creating…' : 'Create account'}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            <div className={`mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-neutral-600`}>
              <span>Already have an account?</span>
              <Link href="/login" className="inline-flex items-center gap-2 font-semibold text-neutral-900 hover:underline">
                <Sparkles className="h-4 w-4 text-[#FF4B1E]" />
                Sign in
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
