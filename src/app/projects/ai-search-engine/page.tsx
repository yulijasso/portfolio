'use client';

import { Box, Button, Flex, Text, VStack, HStack, Tag } from '@chakra-ui/react';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function AISearchEngine() {
  const router = useRouter();

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
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex={10}
      >
        <motion.div drag>
          <Box
            w="800px"
            h="600px"
            bg="#C0C0C0"
            border="2px solid #808080"
            boxShadow="inset -2px -2px 0 #808080, inset 2px 2px 0 #FFFFFF"
            display="flex"
            flexDirection="column"
          >
            <Flex
              bg="#FF69B4"
              color="#fff"
              px={3}
              py={1}
              justify="space-between"
              align="center"
              borderBottom="2px solid #808080"
              boxShadow="inset 1px 1px 0 #FFFFFF, inset -1px -1px 0 #B84878"
            >
              <HStack spacing={2}>
                <Text fontSize="24px">🔍</Text>
                <Text fontSize="14px" fontWeight="bold" textShadow="1px 1px #000">
                  AI Search Engine
                </Text>
              </HStack>
              <Box
                bg="#C0C0C0"
                border="2px outset #fff"
                color="#000"
                px={2}
                cursor="pointer"
                fontSize="12px"
                fontWeight="bold"
                onClick={() => router.push('/')}
                _hover={{ bg: '#D0D0D0' }}
              >
                ✖
              </Box>
            </Flex>
            <Box
              flex="1"
              bg="#FFF0FB"
              border="2px inset #808080"
              p={4}
              overflowY="auto"
            >
              <VStack spacing={4} align="stretch">
                <Text fontSize="16px" fontWeight="bold" color="#000">
                  AI Search Engine
                </Text>
                
                <Text fontSize="12px" color="#000" lineHeight="1.6">
                  Created a tool that scrapes web content and provides AI-generated answers with reliable source citations. Implemented Groq LLM, web scraping with Cheerio and Puppeteer, and optimized performance with rate limiting.
                </Text>

                <Box>
                  <Text fontSize="12px" fontWeight="bold" color="#000" mb={2}>
                    Technologies Used:
                  </Text>
                  <HStack spacing={2} wrap="wrap">
                    {["Groq LLM", "Web Scraping", "Cheerio", "Puppeteer", "AI Search"].map((tech, idx) => (
                      <Tag key={idx} size="sm" bg="#E0E0E0" color="#000" borderRadius="0">
                        {tech}
                      </Tag>
                    ))}
                  </HStack>
                </Box>

                <Box>
                  <Text fontSize="12px" fontWeight="bold" color="#000" mb={2}>
                    Key Features:
                  </Text>
                  <VStack spacing={1} align="stretch">
                    <Text fontSize="11px" color="#000">• Web content scraping capabilities</Text>
                    <Text fontSize="11px" color="#000">• AI-generated answers with citations</Text>
                    <Text fontSize="11px" color="#000">• Groq LLM integration</Text>
                    <Text fontSize="11px" color="#000">• Cheerio and Puppeteer web scraping</Text>
                    <Text fontSize="11px" color="#000">• Performance optimization with rate limiting</Text>
                  </VStack>
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
                    onClick={() => router.push('/')}
                  >
                    Back to Portfolio
                  </Button>
                </HStack>
              </VStack>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
} 