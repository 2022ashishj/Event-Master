import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    blue: {
      500: '#3182ce',
    },
  },
  fonts: {
    heading: 'Avenir Next, sans-serif',
    body: 'Avenir Next, sans-serif',
  },
});

export default theme;
