const {
  theme: { fontSize, lineHeight, spacing }
} = require('tailwindcss/defaultConfig')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      CardShadow: '0px 16px 64px rgba(0, 0, 0, 0.1)'
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1016px',
      // => @media (min-width: 1016px) { ... }

      xl: '1282px',
      // => @media (min-width: 1282px) { ... }
    },
    spacing: {
      1.5: '0.375rem',
      2.5: '0.625rem',
      4.5: '1.125rem',
      6.5: '1.625rem',
      7.5: '1.875rem',
      11.5: '2.875rem',
      18: '4.5rem',
      29: '7.25rem',
      30: '7.5rem',
      ...spacing
    },
    truncate: {
      lines: {
        2: '2',
        3: '3',
        4: '4'
      }
    },
    fontSize: {
      '2.5xl': '1.75rem',
      '3.5xl': '2rem',
      '4.5xl': '2.5rem',
      '6.5xl': '4rem',
      ...fontSize
    },
    lineHeight: {
      4.5: '1.125rem',
      5.5: '1.375rem',
      6.5: '1.5625rem',
      7.5: '1.875rem',
      7.75: '1.9375rem',
      10.5: '2.625rem',
      12: '3rem',
      12.5: '3.125rem',
      12.75: '3.25rem',
      13.5: '4.5rem',
      ...lineHeight
    },
    extend: {
      screens: {
        card: '560px',
        cardForm: '400px',
        cardLeft: '268px',
        desAbout: '867px',
        cardAuthor: '258px',
        cardDownload: '500px',
        registerInvestor: '456px',
        questionSupport: '1088px'
      },
      zIndex: {
        100: '100',
        200: '200',
        999: '999'
      },
      colors: {
        landingpage: {
          'help-center': '#0237BC',
          textMain: '#595959',
          whiteBanner: '#E9E9E9',
          inputBorder: '#EAEDEE',
          mainColor: '#EE6238',
          subscribe: '#0B132A',
          subTitle: '#4F5665'
        },
        about: {
          border1: '#C7D626',
          border2: '#C91E1E',
          border3: '#2868B4'
        },
        bgLandingPage: {
          helpCenter: '#E5F0FA',
          footer: '#F5F5F5',
          bannerColor: 'rgba(0, 0, 0, 0.1)',
          serviceBanner: 'rgba(255, 255, 255, 0.2)',
          service: '#F53838'
        }
      },
      dropShadow: {
        'shadow-banner': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }
    }
  },
  variants: {
    margin: ['responsive', 'first', 'last', 'hover', 'focus'],
    overflow: ['responsive', 'hover'],
    padding: ['responsive', 'first', 'last', 'hover', 'focus'],
    borderRadius: ['responsive', 'hover', 'focus'],
    extend: {}
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js']
  }
}
