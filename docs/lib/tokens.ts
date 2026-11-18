import tokens from '../../tokens/tokens.json';

type Group = Record<string, unknown>;
const entries = <T,>(group: Group) => Object.entries(group).filter(([key]) => !key.startsWith('$')) as [string, T][];

export const palette = entries<{ $value: string; $description?: string }>(tokens.color);
export const roles = (mode: 'light' | 'dark') => entries<string>(tokens.semantic[mode]);
export const fontSizes = entries<{ $value: string; $description?: string }>(tokens.font.size);
export const fontWeights = entries<{ $value: number }>(tokens.font.weight);
export const radii = entries<{ $value: string; $description?: string }>(tokens.radius);
export const shadows = entries<{ $value: string }>(tokens.shadow);
// Cubic-bezier curves only; the spring is a linear() string and is documented separately.
export const easings = entries<{ $value: number[]; $description?: string }>(tokens.motion.easing).filter(([, t]) => Array.isArray(t.$value));
export const spring = (tokens.motion.easing as Record<string, unknown>).spring as { $value: string; $description?: string };
export const durations = entries<{ $value: string; $description?: string }>(tokens.motion.duration);

export function resolveHex(ref: string) {
  const name = ref.replace(/^\{color\.|\}$/g, '');
  return (tokens.color as unknown as Record<string, { $value: string }>)[name]!.$value;
}

function luminance(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r! + 0.7152 * g! + 0.0722 * b!;
}

export function contrast(a: string, b: string) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi! + 0.05) / (lo! + 0.05);
}
