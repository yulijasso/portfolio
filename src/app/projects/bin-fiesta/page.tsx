'use client';

import {
  Box,
  Button,
  Text,
  VStack,
  HStack,
  Image,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { useEffect, useState } from 'react';

import ResizableWindow from '../../components/ResizableWindow';

export default function BinFiestaPage() {

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
      <ResizableWindow
        title="Bin Fiesta"
        onClose={() => window.location.href = '/'}
        initialWidth={600}
        initialHeight={450}
        initialTop={200}
        initialLeft={250}
        zIndex={10}
      >
        <Box p={4}>
              <VStack spacing={4} align="stretch">
                <Box>
                  <Text fontSize="16px" fontWeight="bold" mb={2}>
                    1st Place Winner - Sustainability Track
                  </Text>
                  <Text fontSize="12px" color="#666" lineHeight="1.4">
                    In Bin Fiesta, I developed a Google Gemini AI-powered chatbot that provides users with personalized recycling guidance, contributing to our 1st place win in Sustainability at Frontera Hacks. The project combines real-time AI interaction with a user-friendly interface built in Next.js, encouraging eco-friendly practices through accessible recycling information.
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
                    onClick={() => window.open('https://github.com/yuyi444/binfiesta.git', '_blank')}
                  >
                    Source Code
                  </Button>
                </HStack>

                <Button
                  size="sm"
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
                  onClick={(e) => { e.stopPropagation(); e.preventDefault(); window.location.href = '/'; }}
                  onPointerDown={(e) => e.stopPropagation()}
                >
                  Back to Portfolio
                </Button>
              </VStack>
        </Box>
      </ResizableWindow>

      {/* Contest Image Window 1 - Left */}
      {showContestImage1 && (
        <ResizableWindow
          title="Frontera Hacks"
          onClose={() => setShowContestImage1(false)}
          initialWidth={300}
          initialHeight={400}
          initialTop={150}
          initialLeft={50}
          zIndex={10}
        >
          <Box p={4}
            >
              <VStack spacing={4} align="stretch">
                <Text fontSize="16px" fontWeight="bold" textAlign="center" color="#000">
                  1st Place Winner
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
                  1st Place Winner in Sustainability Category
                </Text>
                <Text fontSize="11px" color="#666" textAlign="center">
                  Frontera Hacks Competition
                </Text>
              </VStack>
            </Box>
        </ResizableWindow>
      )}

      {/* Contest Image Window 2 - Right */}
      {showContestImage2 && (
        <ResizableWindow
          title="Frontera Hacks"
          onClose={() => setShowContestImage2(false)}
          initialWidth={300}
          initialHeight={400}
          initialTop={150}
          initialLeft={900}
          zIndex={10}
        >
          <Box p={4}>
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
                                  1st Place Winner in Sustainability Category
              </Text>
              <Text fontSize="11px" color="#666" textAlign="center">
                Frontera Hacks Competition
              </Text>
            </VStack>
          </Box>
        </ResizableWindow>
      )}

      {/* Recognitions Window - Bottom Right */}
      <ResizableWindow
        title="Recognitions"
        onClose={() => window.location.href = '/'}
        initialWidth={400}
        initialHeight={420}
        initialTop={600}
        initialLeft={600}
        zIndex={11}
      >
        <Box p={4} display="flex" flexDirection="column" height="100%" alignItems="center" justifyContent="center">
          <img
            src="/images/contests/fronteradevs3.jpg"
            alt="Frontera Devs Frontera Hacks Recognitions"
            style={{ maxWidth: '100%', maxHeight: '80%', objectFit: 'contain', borderRadius: '4px', border: '2px solid #808080' }}
          />
          <Box mt={2}>
            <span style={{ fontSize: '12px', color: '#1A3CA7', textAlign: 'center', display: 'block' }}>
              Awarded 1st Place in Sustainability Track in Frontera Devs Frontera Hacks at The University of Texas Rio Grande Valley
            </span>
          </Box>
        </Box>
      </ResizableWindow>
    </Box>
  );
} 