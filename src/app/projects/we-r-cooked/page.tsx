'use client';

import { Box, Button, Text, VStack, HStack } from '@chakra-ui/react';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';
import ResizableWindow from '../../components/ResizableWindow';

export default function WeRCookedPage() {

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
        title="We R Cooked"
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
                  We R Cooked
                </Text>
                
                <Text fontSize="12px" color="#000" lineHeight="1.6">
                  Implemented a creative simulation of Don Pollo incoming calls using ElevenLabs AI conversation widget integration. Integrated a Google T-rex replica game into application. Won Memenome Best Don Pollo Integration Hack, winning grand prize of 1k at jia.seed brainrot hackathon(1k+ participants).
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
                    onClick={() => window.open("https://github.com/yuyi444/we-r-cooked", "_blank")}
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
                    onClick={(e) => { e.stopPropagation(); e.preventDefault(); window.location.href = '/'; }}
                    onPointerDown={(e) => e.stopPropagation()}
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