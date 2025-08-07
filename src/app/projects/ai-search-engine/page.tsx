'use client';

import { Box, Button, Text, VStack, HStack } from '@chakra-ui/react';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';
import ResizableWindow from '../../components/ResizableWindow';

export default function AISearchEngine() {

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
    >
      <ResizableWindow
        title="AI Search Engine"
        onClose={() => window.location.href = '/'}
        initialWidth={600}
        initialHeight={450}
        initialTop={200}
        initialLeft={300}
        zIndex={10}
      >
        <Box p={4}>
              <VStack spacing={4} align="stretch">
                <Text fontSize="16px" fontWeight="bold" color="#000">
                  AI Search Engine
                </Text>
                
                <Text fontSize="12px" color="#000" lineHeight="1.6">
                  Created a tool that scrapes web content and provides AI-generated answers with reliable source citations. Implemented Groq LLM, web scraping with Cheerio and Puppeteer, and optimized performance with rate limiting.
                </Text>



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
                    onClick={() => window.open("https://github.com/yuyi444/ai-search-engine", "_blank")}
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