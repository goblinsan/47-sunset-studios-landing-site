/**
 * Utility helpers for the 47 Sunset Studios site.
 * Add shared utility functions here as the project grows.
 */

/**
 * Combines class names, filtering out falsy values.
 * Lightweight alternative to clsx for simple use-cases.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
