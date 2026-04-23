import { NavbarOverride as NavbarOverrideClient } from '@/overrides/navbar-override-client'

export const NAVBAR_OVERRIDE_ENABLED = true

export function NavbarOverride() {
  return <NavbarOverrideClient />
}
