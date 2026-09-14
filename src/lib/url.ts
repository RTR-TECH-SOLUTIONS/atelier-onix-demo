// Demo-ul stă pe GitHub Pages sub un subdirector, iar în producție va sta în rădăcină.
// `u()` lipește prefixul corect o singură dată, ca link-urile să meargă în ambele cazuri.
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, "");
export const u = (path: string) => (path.startsWith("/") ? BASE + path : path);
