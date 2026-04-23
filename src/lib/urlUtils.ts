// Helper for normalizing image URLs from common providers (Google Drive, raw URLs)
export const PLACEHOLDER_IMAGE = '/placeholder.svg';

export function normalizeImageUrl(value: unknown): string {
  if (!value) return PLACEHOLDER_IMAGE;
  const s = String(value).trim();
  if (!s) return PLACEHOLDER_IMAGE;

  // Already absolute http(s)
  if (/^https?:\/\//i.test(s)) {
    // If it's a Google Drive preview page, try to extract file id
    const driveMatch = s.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([a-zA-Z0-9_-]{10,})/);
    if (driveMatch && driveMatch[1]) {
      return `https://drive.google.com/uc?export=view&id=${driveMatch[1]}`;
    }

    // If it's a googleusercontent direct link or uc link, return as-is
    if (/googleusercontent\.com|drive\.google\.com|uc\?export=/.test(s)) return s;

    // Otherwise return as-is
    return s;
  }

  // If it's a drive file id only
  const idOnly = s.match(/^[a-zA-Z0-9_-]{10,}$/);
  if (idOnly) return `https://drive.google.com/uc?export=view&id=${s}`;

  // Fallback: return placeholder
  return PLACEHOLDER_IMAGE;
}
