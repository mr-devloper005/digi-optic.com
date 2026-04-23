'use client'

import { LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAuth } from '@/lib/auth-context'

export function NavbarAuthControls() {
  const { user, logout } = useAuth()

  const initial = user?.name?.charAt(0)?.toUpperCase() || 'U'

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full p-0 text-neutral-700 hover:bg-black/5"
          aria-label="Account menu"
        >
          <Avatar className="h-9 w-9 border border-black/10">
            <AvatarImage src={user?.avatar} alt={user?.name || 'Account'} />
            <AvatarFallback className="bg-[#FF4B1E] text-xs font-semibold text-white">
              {initial}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-60 rounded-2xl border-black/8 bg-white p-2 shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
      >
        <div className="flex items-center gap-3 rounded-xl px-3 py-3">
          <Avatar className="h-10 w-10 border border-black/10">
            <AvatarImage src={user?.avatar} alt={user?.name || 'Account'} />
            <AvatarFallback className="bg-[#FF4B1E] text-xs font-semibold text-white">
              {initial}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-neutral-950">
              {user?.name || 'Signed in'}
            </p>
            {user?.email ? (
              <p className="truncate text-xs text-neutral-500">{user.email}</p>
            ) : null}
          </div>
        </div>
        <DropdownMenuSeparator className="bg-black/6" />
        <DropdownMenuItem
          onClick={logout}
          className="mt-1 cursor-pointer rounded-xl px-3 py-2.5 text-sm font-semibold text-[#FF4B1E] focus:bg-[#FF4B1E]/8 focus:text-[#FF4B1E]"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
