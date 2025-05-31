// src/theme/index.js
import { extendTheme } from '@chakra-ui/react'

// Custom theme overrides
const customTheme = extendTheme({
  direction: 'rtl',  // set default direction in theme as well
  fonts: {
    heading: `'Estedad', sans-serif`,
    body: `'Estedad', sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold', // Default font weight
      },
      defaultProps: {
        colorScheme: 'teal', // Default color scheme for all buttons
        variant: 'solid',    // Default variant
        size: 'md',          // Default size
      },
      sizes: {
        md: {
          h: 10,
          px: 6,
          fontSize: 'md',
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      },
    },
  },
})

export default customTheme
