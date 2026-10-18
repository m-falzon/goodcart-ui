// GoodCart Tailwind preset. In a consumer's tailwind.config:
//   presets: [require('@goodcart/ui/tailwind-preset')]
// and import '@goodcart/ui/tokens.css' once in your global CSS.
const role = (name) => `hsl(var(--${name}) / <alpha-value>)`;
const pair = (name) => ({ DEFAULT: role(name), foreground: role(`${name}-foreground`) });

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        background: role('background'),
        foreground: role('foreground'),
        canvas: role('canvas'),
        card: pair('card'),
        popover: pair('popover'),
        primary: pair('primary'),
        secondary: pair('secondary'),
        muted: pair('muted'),
        accent: pair('accent'),
        brand: pair('brand'),
        destructive: pair('destructive'),
        success: pair('success'),
        warning: pair('warning'),
        danger: pair('danger'),
        border: { DEFAULT: role('border'), strong: role('border-strong') },
        input: { DEFAULT: role('input'), focus: role('input-focus') },
        ring: role('ring'),
        track: role('track'),
        overlay: role('overlay'),
      },
      borderRadius: {
        sm: 'calc(var(--radius) - 4px)',
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
      },
      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
      transitionTimingFunction: {
        DEFAULT: 'var(--ease-out-quart)',
        'out-quart': 'var(--ease-out-quart)',
        'out-quint': 'var(--ease-out-quint)',
        'out-expo': 'var(--ease-out-expo)',
      },
      transitionDuration: {
        DEFAULT: 'var(--duration-base)',
        fast: 'var(--duration-fast)',
        base: 'var(--duration-base)',
        slow: 'var(--duration-slow)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
