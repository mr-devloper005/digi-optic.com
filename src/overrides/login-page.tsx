import { LoginPageOverride as LoginPageOverrideClient } from '@/overrides/login-override-client'

export const LOGIN_PAGE_OVERRIDE_ENABLED = true

export function LoginPageOverride() {
  return <LoginPageOverrideClient />
}
