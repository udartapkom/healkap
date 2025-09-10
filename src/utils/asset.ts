// Utility to prefix asset paths with the correct base path for GitHub Pages
// Uses NEXT_PUBLIC_BASE_PATH if provided, otherwise falls back to '/healkap' in production

const detectBasePath = (): string => {
  if (typeof process !== 'undefined') {
    const envBase = process.env.NEXT_PUBLIC_BASE_PATH;
    if (envBase) return envBase;
    if (process.env.NODE_ENV === 'production') return '/healkap';
  }
  return '';
};

export const BASE_PATH = detectBasePath();

export const asset = (path: string): string => {
  if (!path.startsWith('/')) return `${BASE_PATH}/${path}`;
  return `${BASE_PATH}${path}`;
};

export default asset;


