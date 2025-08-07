'use client';

import {
  Box,
  Button,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';

import ResizableWindow from '../../components/ResizableWindow';

export default function BalancedPerspectivePage() {


  return (
    <Box
      minH="100vh"
      bg="#E0218A"
      bgImage="url('/images/wallpaper.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      fontFamily="'Microsoft Sans Serif', sans-serif"
      position="relative"
      pb="80px"
    >
      <ResizableWindow
        title="Balanced Perspective"
        onClose={() => window.location.href = '/'}
        initialWidth={600}
        initialHeight={450}
        initialTop={200}
        initialLeft={300}
        zIndex={10}
      >
        <Box p={4}>
            <VStack spacing={4} align="stretch">
              <Box>
                <Text fontSize="16px" fontWeight="bold" mb={2}>
                  Deep Learning for Unbiased News Summarization
                </Text>
                <Text fontSize="12px" color="#666" lineHeight="1.4">
                  The project, Balanced Perspective, aims to use deep learning for unbiased news summarization. By leveraging a CNN classifier to detect political bias and the PEGASUS transformer model for abstractive summarization, it produces summaries intended to present balanced perspectives across articles from different political spectrums.
                </Text>
              </Box>

              <HStack spacing={4} mt={4}>
                <Button
                  size="sm"
                  bg="#E0E0E0"
                  color="#000"
                  border="2px outset #808080"
                  borderRadius="0"
                  fontFamily="'Microsoft Sans Serif', sans-serif"
                  fontSize="10px"
                  _hover={{ border: '2px inset #808080', bg: '#D0D0D0' }}
                  leftIcon={<FaGithub />}
                  onClick={() => window.open('https://github.com/yuyi444/balanced-perspective', '_blank')}
                >
                  Source Code
                </Button>
                <Button
                  size="sm"
                  bg="#E0E0E0"
                  color="#000"
                  border="2px outset #808080"
                  borderRadius="0"
                  fontFamily="'Microsoft Sans Serif', sans-serif"
                  fontSize="10px"
                  _hover={{ border: '2px inset #808080', bg: '#D0D0D0' }}
                  leftIcon={<FaArrowLeft />}
                  onClick={() => window.location.href = '/'}
                >
                  Back to Portfolio
                </Button>
              </HStack>
          </VStack>
        </Box>
      </ResizableWindow>
    </Box>
  );
} 