import { HomePageMarketing } from '@/overrides/home-page-marketing'

export const HOME_PAGE_OVERRIDE_ENABLED = true

export async function HomePageOverride() {
  return <HomePageMarketing />
}
