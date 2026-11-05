// Optional media. Leave null to show the placeholder-free fallback.
export const MEDIA = {
  /** Path under public/ to a real screen recording (e.g. 'assets/demo.mp4'). Slide 06 shows it when set. */
  demoVideo: null as string | null,
  /** Path under public/ to the authentic thesis figure. Slide 03 shows it instead of the schematic when set. */
  thesisFigure: null as string | null,
}

export const LINKS = {
  product: 'https://triplibre.hhtdiary.org',
  /** Public App Store listing (v2.1.0). The closing slide's QR code points here; null falls back to the product site. */
  appStore: 'https://apps.apple.com/us/app/triplibre-your-trip-diary/id6826907636' as string | null,
}
