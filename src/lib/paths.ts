const BASE_PATH = "/Portafolio";

export function assetUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}

export function isPdf(path: string): boolean {
  return path.toLowerCase().endsWith(".pdf");
}
