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

export default function MarioKartCNNPage() {

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
        title="SuperTux CNN Path Prediction"
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
              <Text fontSize="16px" fontWeight="bold" color="#000">
                SuperTux CNN Path Prediction
              </Text>
              <Text fontSize="12px" color="#666" lineHeight="1.4">
                I developed a Convolutional Neural Network that predicts a kart&apos;s driving path using visual inputs. One major limitation in this example was that they require ground truth lane boundaries as input, where the network is trained to predict the boundaries in an image space. Rather than going through segmentation and depth estimation, I predicted the lane boundaries in the vehicle&apos;s coordinate frame directly from the image! It was so satisfying to visualize how our model truly functions and successfully achieving the optimal lateral and longitudinal error!
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
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  window.location.href = '/';
                }}
                onPointerDown={(e) => e.stopPropagation()}
              >
                Back to Portfolio
              </Button>
            </HStack>
          </VStack>
        </Box>
      </ResizableWindow>
      {/* Demo Video Window */}
      <ResizableWindow
        title="Demo"
        onClose={() => window.location.href = '/'}
        initialWidth={900}
        initialHeight={600}
        initialTop={700}
        initialLeft={100}
        zIndex={9}
      >
        <Box p={4} display="flex" flexDirection="column" height="100%">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Deql7Z3c1VE?si=XBsUVG37yg_RlZZS"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ borderRadius: '4px', flex: 1, minHeight: '315px' }}
          />
        </Box>
      </ResizableWindow>
    </Box>
  );
}