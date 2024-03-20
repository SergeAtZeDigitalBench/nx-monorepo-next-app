const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        gallery: "repeat(auto-fit, minmax(250px, 1fr))",
        pages: 'repeat(auto-fit, minmax(350px, 1fr))',
      },
      fontFamily: {
        arOneSans: ["var(--font-ar-one-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        albertSans: ["var(--font-albert-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.5rem", "0.75rem"],
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};
