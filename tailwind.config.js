/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary                 : "var(--theme-primary)",
        secondary               : "var(--theme-secondary)",
        textPrimary             : 'var(--theme-text-primary)',
        textSecondary           : 'var(--theme-text-secondary)',
        iconPrimary             : 'var(--theme-icon-primary)',
        iconSecondary           : 'var(--theme-icon-secondary)',
        transparent             : 'var(--theme-transparent)',
        hoverBackground         : 'var(--theme-hover-background)',
        selectedLogoBg          : 'var(--theme-selected-logo-background)',
        logoBg                  : 'var(--theme-logo-background)',
        selectedBg              : "var(--theme-selected-background)",
        borderColor             : 'var(--theme-border-color)',
      },
      animation: {
        "fade": "fadeOut .9s ease-in-out",
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
  },
  plugins: [],
}
