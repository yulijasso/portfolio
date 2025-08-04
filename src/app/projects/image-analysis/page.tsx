'use client';

import {
  Box,
  Button,
  Flex,
  Text,
  VStack,
  HStack,
  Tag,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ImageAnalysisPage() {
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
      pb="80px"
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
              <HStack spacing={3}>
                <Text fontSize="24px">🔬</Text>
                <Text fontSize="14px" fontWeight="bold" textShadow="1px 1px #000">
                  Image Analysis & Interpolation
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
                    🔬 Fourier Transforms for Medical Image Processing
                  </Text>
                  <Text fontSize="12px" color="#666" lineHeight="1.4">
                    This project utilizes Fourier transforms to analyze and process a lung CT scan, extracting magnitude and phase spectrums and downsampling the image. Linear interpolation and zero-padding techniques are then applied to upsample the image, with mean squared error calculated to evaluate the quality of the interpolated images.
                  </Text>
                </Box>
                
                <Box>
                  <Text fontSize="12px" fontWeight="bold" mb={2}>
                    Technologies used:
                  </Text>
                  <HStack spacing={2} wrap="wrap">
                    {["Fourier Transforms", "Image Processing", "CT Scan Analysis", "Interpolation", "Python", "NumPy", "OpenCV"].map((tech, techIdx) => (
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
                    <Text fontSize="11px" color="#666">• Fourier transform analysis of medical CT scans</Text>
                    <Text fontSize="11px" color="#666">• Magnitude and phase spectrum extraction</Text>
                    <Text fontSize="11px" color="#666">• Image downsampling and upsampling techniques</Text>
                    <Text fontSize="11px" color="#666">• Linear interpolation and zero-padding methods</Text>
                    <Text fontSize="11px" color="#666">• Mean squared error calculation for quality evaluation</Text>
                    <Text fontSize="11px" color="#666">• Medical image processing and analysis</Text>
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
                    onClick={() => window.open('https://github.com/yuyi444/digital-image-processing-proj.git', '_blank')}
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
                    onClick={() => window.open('https://github.com/yuyi444/digital-image-processing-proj.git', '_blank')}
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
    </Box>
  );
} 