// app/theme.ts or src/theme.ts
import { extendTheme } from '@chakra-ui/react';
//import { extendTheme, type ThemeConfig } from '@chakra-ui/react';


const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgGradient: 'linear(to-br, #ffe4f0, #b8c6ff)',
        animation: 'bgMove 8s ease-in-out infinite',
        fontFamily: `'Press Start 2P', 'VT323', monospace`,
        margin: 0,
        padding: 0,
      },
      '@keyframes bgMove': {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' },
      },
    },
  },
  fonts: {
    heading: `'Press Start 2P', monospace`,
    body: `'VT323', monospace`,
  },
  colors: {
    neon: {
      pink: '#ff00ff',
      blue: '#00ffff',
      green: '#00ff00',
      yellow: '#ffff00',
      purple: '#8000ff',
    },
    tamagotchi: {
      bg: '#f0f0f0',
      screen: '#e6d6ff',
      border: '#333',
      button: '#666',
      text: '#2d5016',
      pixel: '#1a3d0f',
    },
  },
});

export default theme;
