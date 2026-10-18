/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('./tailwind-preset.cjs')],
  content: ['./docs/**/*.{html,tsx,ts}', './src/**/*.{tsx,ts}'],
};
