'use client';

import {
  Box,
  Button,
  Flex,
  Text,
  VStack,
  HStack,
  Tag,
  Image,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AITutoringSystemPage() {
  const router = useRouter();
  const [showContestImage, setShowContestImage] = useState(false);

  // Automatically show the contest image window when the page loads
  useEffect(() => {
    setShowContestImage(true);
  }, []);

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
      {/* Main Project Window */}
      <Box
        position="absolute"
        top="50%"
        left="30%"
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
              <HStack spacing={3}>
                <Image src="/images/project-icons/aitutor.png" alt="AI Tutor Icon" width="24px" height="24px" />
                <Text fontSize="14px" fontWeight="bold" textShadow="1px 1px #000">
                  AI Tutoring System
                </Text>
              </HStack>
              <Box
                bg="#FF85C1"
                border="2px outset #808080"
                color="#fff"
                px={2}
                cursor="pointer"
                fontSize="12px"
                fontWeight="bold"
                _hover={{ bg: '#FF99CC' }}
                onClick={() => router.push('/')}
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
                <Box>
                  <Text fontSize="16px" fontWeight="bold" mb={2}>
                    🏆 1st Place Winner - AI Healthcare Track
                  </Text>
                  <Text fontSize="12px" color="#666" lineHeight="1.4">
                    AI Tutoring System, developed during Hack Research 2023 and took the 1st place win in AI Healthcare, is an innovative app that uses GPT-4 and advanced data extraction techniques to enhance healthcare education. By combining web scraping, embeddings, and retrieval-augmented generation, it sets a new standard for AI-driven learning tools in the medical field.
                  </Text>
                </Box>
                
                <Box>
                  <Text fontSize="12px" fontWeight="bold" mb={2}>
                    Technologies used:
                  </Text>
                  <HStack spacing={2} wrap="wrap">
                    {["GPT-4", "Web Scraping", "Embeddings", "RAG", "Healthcare AI", "Python", "Next.js"].map((tech, techIdx) => (
                      <Tag key={techIdx} size="sm" bg="#C0C0C0" border="2px outset #FFFFFF" color="#000" fontSize="10px">
                        {tech}
                      </Tag>
                    ))}
                  </HStack>
                </Box>

                <Box>
                  <Text fontSize="12px" fontWeight="bold" mb={2}>
                    Key Features:
                  </Text>
                  <VStack spacing={2} align="stretch">
                    <Text fontSize="11px" color="#666">• Advanced data extraction techniques for healthcare content</Text>
                    <Text fontSize="11px" color="#666">• GPT-4 integration for intelligent tutoring</Text>
                    <Text fontSize="11px" color="#666">• Web scraping for comprehensive medical information</Text>
                    <Text fontSize="11px" color="#666">• Embeddings for semantic search and retrieval</Text>
                    <Text fontSize="11px" color="#666">• Retrieval-augmented generation (RAG) for accurate responses</Text>
                    <Text fontSize="11px" color="#666">• Healthcare-specific AI training and validation</Text>
                  </VStack>
                </Box>

                <HStack spacing={3} mt={4}>
                  <Button
                    size="sm"
                    bg="#C0C0C0"
                    color="#000"
                    border="2px outset #FFFFFF"
                    fontSize="10px"
                    fontFamily="'Microsoft Sans Serif', sans-serif"
                    _hover={{
                      border: '2px inset #FFFFFF',
                      bg: '#D0D0D0'
                    }}
                    onClick={() => window.open('https://youtu.be/ReinaBoNaWo', '_blank')}
                  >
                    ▶️ Live Demo
                  </Button>
                  <Button
                    size="sm"
                    leftIcon={<FaGithub />}
                    bg="#000"
                    color="#FFF"
                    fontSize="10px"
                    fontFamily="'Microsoft Sans Serif', sans-serif"
                    _hover={{ bg: "#333" }}
                    onClick={() => window.open('https://github.com/yuyi444/hack-research-proj.git', '_blank')}
                  >
                    View Code
                  </Button>
                </HStack>

                <Button
                  size="sm"
                  leftIcon={<FaArrowLeft />}
                  bg="#E0E0E0"
                  color="#000"
                  border="2px outset #808080"
                  borderRadius="0"
                  fontFamily="'Microsoft Sans Serif', sans-serif"
                  fontSize="10px"
                  _hover={{
                    border: '2px inset #808080',
                    bg: '#D0D0D0'
                  }}
                  onClick={() => router.push('/')}
                >
                  Back to Portfolio
                </Button>
              </VStack>
            </Box>
          </Box>
        </motion.div>
      </Box>

      {/* Contest Image Window */}
      {showContestImage && (
        <Box
          position="absolute"
          top="50%"
          right="20%"
          transform="translate(50%, -50%)"
          zIndex={10}
        >
          <motion.div drag>
            <Box
              w="400px"
              h="500px"
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
                <HStack spacing={3}>
                  <Text fontSize="20px">🏆</Text>
                  <Text fontSize="14px" fontWeight="bold" textShadow="1px 1px #000">
                    Hack Research 2023
                  </Text>
                </HStack>
                <Box
                  bg="#FF85C1"
                  border="2px outset #808080"
                  color="#fff"
                  px={2}
                  cursor="pointer"
                  fontSize="12px"
                  fontWeight="bold"
                  _hover={{ bg: '#FF99CC' }}
                  onClick={() => setShowContestImage(false)}
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
                  <Text fontSize="16px" fontWeight="bold" textAlign="center" color="#000">
                    🏆 1st Place Winner
                  </Text>
                  <Text fontSize="14px" fontWeight="bold" textAlign="center" color="#000">
                    AI Healthcare Track
                  </Text>
                  
                  <Box
                    border="2px solid #808080"
                    borderRadius="4px"
                    overflow="hidden"
                    boxShadow="inset -2px -2px 0 #808080, inset 2px 2px 0 #FFFFFF"
                    flex="1"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Image
                      src="/images/contests/hackresearch2023.jpg"
                      alt="Hack Research 2023 Contest"
                      maxW="100%"
                      maxH="100%"
                      objectFit="contain"
                    />
                  </Box>
                  
                  <Text fontSize="12px" color="#666" textAlign="center">
                    🏆 1st Place Winner in AI Healthcare Category
                  </Text>
                  <Text fontSize="11px" color="#666" textAlign="center">
                    Hack Research 2023 Competition
                  </Text>
                </VStack>
              </Box>
            </Box>
          </motion.div>
        </Box>
      )}
    </Box>
  );
} 