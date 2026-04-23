import { RegisterPageOverride as RegisterPageOverrideClient } from '@/overrides/register-override-client'

export const REGISTER_PAGE_OVERRIDE_ENABLED = true

export function RegisterPageOverride() {
  return <RegisterPageOverrideClient />
}
