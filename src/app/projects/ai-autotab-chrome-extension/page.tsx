'use client';

import { Box, Button, VStack, HStack } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
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
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  window.open("https://github.com/yulijasso/autotab-chrome-ext", "_blank");
                }}
                onPointerDown={(e) => e.stopPropagation()}
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
        initialWidth={600}
        initialHeight={450}
        initialTop={200}
        initialLeft={750}
        zIndex={9}
      >
        <Box p={4} display="flex" flexDirection="column" height="100%">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/1GitlfGsKZU?si=g-yo8T68QYmbZMSG"
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