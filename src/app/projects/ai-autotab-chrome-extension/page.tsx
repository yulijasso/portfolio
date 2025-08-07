'use client';

import { Box, Button, VStack, HStack } from '@chakra-ui/react';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';
import ResizableWindow from '../../components/ResizableWindow';

export default function AIAutotabPage() {

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
        title="AI Autotab Chrome Extension"
        onClose={() => window.location.href = '/'}
        initialWidth={600}
        initialHeight={450}
        initialTop={200}
        initialLeft={100}
        zIndex={10}
      >
        <Box p={4}>
          <VStack spacing={4} align="stretch">
            <Box fontSize="16px" fontWeight="bold" color="#000">
              AI Autotab Chrome Extension
            </Box>
            
            <Box fontSize="12px" color="#000" lineHeight="1.6">
              Created an AI Autotab chrome extension that autocompletes phrases and sentences, improving productivity.
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
                onClick={() => window.open("https://github.com/yuyi444/ai-autotab-extension", "_blank")}
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

      <ResizableWindow
        title="Demo"
        onClose={() => window.location.href = '/'}
        initialWidth={600}
        initialHeight={450}
        initialTop={200}
        initialLeft={750}
        zIndex={10}
      >
        <Box
          p={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Box
            width="100%"
            height="400px"
            bg="#000"
            border="2px inset #808080"
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
          >
            <video
              controls
              width="100%"
              height="100%"
              style={{
                objectFit: 'contain'
              }}
              preload="metadata"
              onLoadStart={() => console.log('Video load started')}
              onCanPlay={() => console.log('Video can play')}
              onError={(e) => {
                console.error('Video loading error:', e);
                console.error('Error details:', e.currentTarget.error);
              }}
              onLoadedData={() => {
                console.log('Video loaded successfully');
              }}
            >
              <source src="/videos/demo-autotab.mp4" type="video/mp4" />
              <source src="/videos/demo autotab.mov" type="video/quicktime" />
              Your browser does not support this video format. Try MP4: /videos/demo-autotab.mp4
            </video>
          </Box>
        </Box>
      </ResizableWindow>
    </Box>
  );
} 