import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Premium image discovery',
  },
  footer: {
    tagline: 'Galleries, licensing, and calm browsing',
  },
  hero: {
    badge: 'Featured photography',
    title: ['A refined home for', 'imagery that deserves the spotlight.'],
    description:
      'Browse curated visuals, organized collections, and high-resolution photography in a layout built for creators and visual brands.',
    primaryCta: {
      label: 'Open gallery',
      href: '/images',
    },
    secondaryCta: {
      label: 'About the platform',
      href: '/about',
    },
    searchPlaceholder: 'Search photos, collections, and creators',
    focusLabel: 'Focus',
    featureCardBadge: 'Fresh drops weekly',
    featureCardTitle: 'New work shapes the visual identity of the homepage.',
    featureCardDescription:
      'Latest photography stays at the center of the experience with generous space and crisp presentation.',
  },
  home: {
    metadata: {
      title: 'Photography, galleries, and visual discovery',
      description:
        'Explore high-quality imagery, organized collections, and a gallery-first experience designed for photographers and visual teams.',
      openGraphTitle: 'Photography, galleries, and visual discovery',
      openGraphDescription:
        'Discover curated photography and visual stories through a calmer, premium browsing experience.',
      keywords: ['photography', 'image gallery', 'visual discovery', 'stock photos', 'creative media', 'Digi Optic'],
    },
    introBadge: 'Why Digi Optic',
    introTitle: 'Built for imagery first—spacious layouts, honest typography, and zero clutter.',
    introParagraphs: [
      'This platform keeps attention on photography. Large surfaces, soft cards, and navigation that never competes with your frames.',
      'Collections, downloads, and licensing notes stay connected so visitors understand how to work with your visuals.',
      'Whether someone arrives from a campaign link or organic search, the experience feels like a studio site—not a generic feed.',
    ],
    sideBadge: 'At a glance',
    sidePoints: [
      'Gallery-forward rhythm with consistent spacing and rounded panels.',
      'Search tuned for discovering photography by mood, category, or series.',
      'Account tools that stay lightweight for creators who are always on location.',
      'Performance-minded media presentation without sacrificing polish.',
    ],
    primaryLink: {
      label: 'Browse gallery',
      href: '/images',
    },
    secondaryLink: {
      label: 'Contact the team',
      href: '/contact',
    },
  },
  cta: {
    badge: 'Start publishing',
    title: 'Present photography with the confidence of a premium studio.',
    description:
      'Share collections, highlight licensing options, and guide visitors with clear calls to action that match your brand.',
    primaryCta: {
      label: 'Create free account',
      href: '/register',
    },
    secondaryCta: {
      label: 'Talk with us',
      href: '/contact',
    },
  },
  taskSectionHeading: 'Latest {label}',
  taskSectionDescriptionSuffix: 'Browse the newest posts in this section.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Stories (disabled)',
    description: 'Long-form content is not enabled for this site.',
  },
  listing: {
    title: 'Listings (disabled)',
    description: 'Structured listings are not enabled for this site.',
  },
  classified: {
    title: 'Classifieds (disabled)',
    description: 'Classified posts are not enabled for this site.',
  },
  image: {
    title: 'Images and visual posts',
    description: 'Explore image-led posts, galleries, and visual stories from across the platform.',
  },
  profile: {
    title: 'Profiles (disabled)',
    description: 'Public profiles are not enabled for this site.',
  },
  sbm: {
    title: 'Collections (disabled)',
    description: 'Bookmark collections are not enabled for this site.',
  },
  pdf: {
    title: 'Documents (disabled)',
    description: 'PDF resources are not enabled for this site.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: {
    title: 'Listings are not available here',
    paragraphs: [
      'This deployment focuses purely on photography and visual discovery.',
      'Head to the gallery to explore imagery, or contact us if you need a different product surface enabled.',
    ],
    links: [
      { label: 'Open gallery', href: '/images' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  article: {
    title: 'Articles are not available here',
    paragraphs: [
      'Editorial lanes are turned off so imagery can stay center stage.',
      'Use the gallery to explore photography, licensing notes, and collection context.',
    ],
    links: [
      { label: 'Browse images', href: '/images' },
      { label: 'Help center', href: '/help' },
    ],
  },
  classified: {
    title: 'Classifieds are not available here',
    paragraphs: [
      'Short-form listings are disabled to keep the experience gallery-first.',
      'Explore curated photography or reach out if you need a tailored deployment.',
    ],
    links: [
      { label: 'View gallery', href: '/images' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  image: {
    title: 'Image-led posts and visual stories',
    paragraphs: [
      'Photography leads every surface—galleries, hero moments, and detail views stay tuned for large media.',
      'Metadata, collections, and download cues help visitors understand how to use your work responsibly.',
      'Browse the latest uploads, then continue into related sets when you want more context.',
    ],
    links: [
      { label: 'About Digi Optic', href: '/about' },
      { label: 'Help center', href: '/help' },
      { label: 'Contact licensing', href: '/contact' },
    ],
  },
  profile: {
    title: 'Profiles are not enabled here',
    paragraphs: [
      'Identity pages are turned off so the gallery experience stays uninterrupted.',
      'Follow links to the homepage, gallery, or contact channels for more information.',
    ],
    links: [
      { label: 'Gallery', href: '/images' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  sbm: {
    title: 'Bookmarking is not enabled here',
    paragraphs: [
      'Saved-link collections are disabled for this deployment.',
      'Explore photography in the gallery or speak with us about enabling additional surfaces.',
    ],
    links: [
      { label: 'Open gallery', href: '/images' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  pdf: {
    title: 'PDF library is not enabled here',
    paragraphs: [
      'Document downloads are turned off to keep the experience focused on photography.',
      'Reach out if you need document lanes alongside your visual library.',
    ],
    links: [
      { label: 'Browse images', href: '/images' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  social: {
    title: 'Community signals',
    paragraphs: [
      'Lightweight updates can accompany visual launches when enabled.',
      'This deployment keeps the emphasis on static gallery presentation.',
    ],
    links: [
      { label: 'Gallery', href: '/images' },
      { label: 'Press', href: '/press' },
    ],
  },
  comment: {
    title: 'Comments',
    paragraphs: [
      'Discussion layers stay optional so photography remains the hero.',
      'Use contact channels when you need a direct conversation with the team.',
    ],
    links: [
      { label: 'Gallery', href: '/images' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  org: {
    title: 'Organizations',
    paragraphs: [
      'Team and studio pages can be layered on when the product recipe calls for them.',
      'Today’s experience highlights public photography and gallery discovery.',
    ],
    links: [
      { label: 'Gallery', href: '/images' },
      { label: 'Team', href: '/team' },
    ],
  },
}
