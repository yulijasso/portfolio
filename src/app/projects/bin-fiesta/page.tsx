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
import { FaGithub, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BinFiestaPage() {
  const router = useRouter();
  const [showContestImage1, setShowContestImage1] = useState(false);
  const [showContestImage2, setShowContestImage2] = useState(false);

  // Automatically show the contest image windows when the page loads
  useEffect(() => {
    setShowContestImage1(true);
    setShowContestImage2(true);
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
      {/* Main Project Window - Center */}
      <motion.div drag style={{ position: 'absolute', top: 80, left: 80, zIndex: 10 }}>
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
                <Text fontSize="24px">♻️</Text>
                <Text fontSize="14px" fontWeight="bold" textShadow="1px 1px #000">
                  Bin Fiesta
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
                    🏆 1st Place Winner - Sustainability Track
                  </Text>
                  <Text fontSize="12px" color="#666" lineHeight="1.4">
                    In Bin Fiesta, I developed a Google Gemini AI-powered chatbot that provides users with personalized recycling guidance, contributing to our 1st place win in Sustainability at Frontera Hacks. The project combines real-time AI interaction with a user-friendly interface built in Next.js, encouraging eco-friendly practices through accessible recycling information.
                  </Text>
                </Box>
                
                <Box>
                  <Text fontSize="12px" fontWeight="bold" mb={2}>
                    Technologies used:
                  </Text>
                  <HStack spacing={2} wrap="wrap">
                    {["Google Gemini AI", "Next.js", "Chatbot", "Sustainability", "React", "TypeScript"].map((tech, techIdx) => (
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
                    <Text fontSize="11px" color="#666">• Google Gemini AI-powered chatbot for recycling guidance</Text>
                    <Text fontSize="11px" color="#666">• Personalized recycling recommendations based on user input</Text>
                    <Text fontSize="11px" color="#666">• Real-time AI interaction with natural language processing</Text>
                    <Text fontSize="11px" color="#666">• User-friendly Next.js interface for seamless experience</Text>
                    <Text fontSize="11px" color="#666">• Eco-friendly practices promotion through accessible information</Text>
                    <Text fontSize="11px" color="#666">• Sustainability-focused design and functionality</Text>
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
                    onClick={() => window.open('https://youtu.be/tXxWyIuusXI', '_blank')}
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
                    onClick={() => window.open('https://github.com/yuyi444/binfiesta.git', '_blank')}
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

      {/* Contest Image Window 1 - Left */}
      {showContestImage1 && (
        <motion.div drag style={{ position: 'absolute', top: 200, left: 40, zIndex: 10 }}>
          <Box
            w="350px"
            h="450px"
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
                  Frontera Hacks
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
                onClick={() => setShowContestImage1(false)}
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
                  Sustainability Track
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
                    src="/images/contests/fronteradevs3.jpg"
                    alt="Frontera Hacks Contest"
                    maxW="100%"
                    maxH="100%"
                    objectFit="contain"
                  />
                </Box>
                
                <Text fontSize="12px" color="#666" textAlign="center">
                  🏆 1st Place Winner in Sustainability Category
                </Text>
                <Text fontSize="11px" color="#666" textAlign="center">
                  Frontera Hacks Competition
                </Text>
              </VStack>
            </Box>
          </Box>
        </motion.div>
      )}

      {/* Contest Image Window 2 - Right */}
      {showContestImage2 && (
        <motion.div drag style={{ position: 'absolute', top: 200, right: 40, zIndex: 10 }}>
          <Box
            w="350px"
            h="450px"
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
                  Frontera Hacks
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
                onClick={() => setShowContestImage2(false)}
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
                  Sustainability Track
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
                    src="/images/contests/fronteradevsall.jpg"
                    alt="Frontera Hacks Contest"
                    maxW="100%"
                    maxH="100%"
                    objectFit="contain"
                  />
                </Box>
                
                <Text fontSize="12px" color="#666" textAlign="center">
                  🏆 1st Place Winner in Sustainability Category
                </Text>
                <Text fontSize="11px" color="#666" textAlign="center">
                  Frontera Hacks Competition
                </Text>
              </VStack>
            </Box>
          </Box>
        </motion.div>
      )}
    </Box>
  );
} 