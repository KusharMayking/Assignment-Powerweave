import type { SVGProps } from 'react'

// Icons inherit the surrounding text color; their buttons and links provide accessible labels.

type IconProps = SVGProps<SVGSVGElement>

const base: IconProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

export const MenuIcon = (p: IconProps) => (
  <svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
)

export const CloseIcon = (p: IconProps) => (
  <svg {...base} {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>
)

export const SearchIcon = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
)

export const CartIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 4h2l2.4 11.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 8H6" />
    <circle cx="9" cy="20" r="1.2" /><circle cx="17" cy="20" r="1.2" />
  </svg>
)

export const HeartIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 20.5s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 8a4.3 4.3 0 0 1 7.5 2.5c0 5.4-7.5 10-7.5 10z" />
  </svg>
)

export const UserIcon = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>
)

export const ChevronDownIcon = (p: IconProps) => (
  <svg {...base} {...p}><path d="m6 9 6 6 6-6" /></svg>
)

export const ArrowLeftIcon = (p: IconProps) => (
  <svg {...base} {...p}><path d="M19 12H5m7-7-7 7 7 7" /></svg>
)

export const ArrowRightIcon = (p: IconProps) => (
  <svg {...base} {...p}><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
)

export const FacebookIcon = (p: IconProps) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.3c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.3v2.3H7.4V14h2.8v8z" />
  </svg>
)

export const XIcon = (p: IconProps) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M17.5 3h3l-7 8 8.2 10h-6.4l-5-6.5L4.6 21h-3l7.5-8.6L1.3 3h6.6l4.5 6z" />
  </svg>
)

export const InstagramIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
)

export const LinkedinIcon = (p: IconProps) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M6.5 9H3v12h3.5zM4.8 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM21 13.6c0-3.3-1.8-4.9-4.2-4.9-1.9 0-2.8 1-3.3 1.8V9H10v12h3.5v-6.3c0-1.7.3-3.3 2.4-3.3 2 0 2 1.9 2 3.4V21H21z" />
  </svg>
)

export const MailIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
  </svg>
)
