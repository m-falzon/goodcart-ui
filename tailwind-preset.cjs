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
      // Only the in-between steps; Tailwind's own xs–5xl already match tokens.json
      fontSize: {
        '2xs': ['var(--text-2xs)', { lineHeight: '1rem' }],
        meta: ['var(--text-meta)', { lineHeight: '1.125rem' }],
        md: ['var(--text-md)', { lineHeight: '1.375rem' }],
      },
      colors: {
        background: role('background'),
        foreground: role('foreground'),
        canvas: role('canvas'),
        card: pair('card'),
        popover: pair('popover'),
        primary: { ...pair('primary'), hover: role('primary-hover') },
        selected: { ...pair('selected'), hover: role('selected-hover') },
        secondary: pair('secondary'),
        muted: pair('muted'),
        accent: pair('accent'),
        brand: pair('brand'),
        destructive: pair('destructive'),
        success: pair('success'),
        warning: pair('warning'),
        danger: pair('danger'),
        border: { DEFAULT: role('border'), strong: role('border-strong') },
        input: { DEFAULT: role('input'), hover: role('input-hover'), focus: role('input-focus') },
        ring: role('ring'),
        track: role('track'),
        control: { DEFAULT: role('control'), hover: role('control-hover') },
        overlay: role('overlay'),
      },
      borderRadius: {
        sm: 'calc(var(--radius) - 4px)',
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        '4xl': 'var(--radius-4xl)',
        '5xl': 'var(--radius-5xl)',
      },
      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        menu: 'var(--shadow-menu)',
        overlay: 'var(--shadow-overlay)',
        focus: 'var(--shadow-focus)',
        'focus-danger': 'var(--shadow-focus-danger)',
        toast: 'var(--shadow-toast)',
      },
      transitionTimingFunction: {
        DEFAULT: 'var(--ease-out-quart)',
        'out-quart': 'var(--ease-out-quart)',
        'out-quint': 'var(--ease-out-quint)',
        'out-expo': 'var(--ease-out-expo)',
        'out-smooth': 'var(--ease-out-smooth)',
        drawer: 'var(--ease-drawer)',
        'in-quart': 'var(--ease-in-quart)',
      },
      // Menus, popovers and dropdowns: fade, 4px rise and a slight scale in; quick fade out.
      // Uses the individual translate/scale properties so Radix's popper transform is left alone.
      keyframes: {
        'menu-in': {
          from: { opacity: '0', translate: '0 -4px', scale: '0.98' },
          to: { opacity: '1', translate: '0 0', scale: '1' },
        },
        'menu-out': { from: { opacity: '1' }, to: { opacity: '0' } },
        // Context menus spring out of their trigger's corner (set transform-origin on the element)
        'pop-in': { from: { translate: '-6px -10px', scale: '0.92' }, to: { translate: '0 0', scale: '1' } },
        'pop-out': { from: { opacity: '1', translate: '0 0', scale: '1' }, to: { opacity: '0', translate: '0 -6px', scale: '0.97' } },
        // Toasts rise from the bottom edge
        'toast-in': { from: { translate: '0 32px', scale: '0.88' }, to: { translate: '0 0', scale: '1' } },
        'toast-out': { from: { opacity: '1', translate: '0 0', scale: '1' }, to: { opacity: '0', translate: '0 12px', scale: '0.96' } },
        'fade-in': { from: { opacity: '0' }, to: { opacity: '1' } },
      },
      animation: {
        'menu-in': 'menu-in 180ms var(--ease-out-expo) both',
        'menu-out': 'menu-out 120ms ease-out both',
        // Springs where linear() is supported; the ease-out fallback keeps it smooth elsewhere
        'pop-in': 'pop-in 460ms var(--ease-spring, var(--ease-out-expo)), fade-in 140ms ease-out',
        'pop-out': 'pop-out 140ms var(--ease-in-quart) forwards',
        'toast-in': 'toast-in 560ms var(--ease-spring, var(--ease-out-expo)), fade-in 140ms ease-out',
        'toast-out': 'toast-out 180ms var(--ease-in-quart) forwards',
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
