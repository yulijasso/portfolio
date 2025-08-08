'use client';

import { Box, Button, Text, VStack, HStack } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import ResizableWindow from '../../components/ResizableWindow';

export default function AICodeEditorPage() {

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
      {/* Main Project Window */}
      <ResizableWindow
        title="AI Code Editor"
        onClose={() => window.location.href = '/'}
        initialWidth={500}
        initialHeight={400}
        initialTop={50}
        initialLeft={50}
        zIndex={10}
      >
        <Box p={4}>
              <VStack spacing={4} align="stretch">
                <Text fontSize="16px" fontWeight="bold" color="#000">
                  AI Code Editor
                </Text>
                
                <Text fontSize="12px" color="#000" lineHeight="1.6">
                  Integrated an AI tutor that improves user productivity and promotes in-platform learning in code editor app, Judge00. Integrated key features, such as OpenRouter API key input, line explanations, and automatic changes from AI tutor to IDE.
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
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      window.open("https://github.com/yuyi444/ai-code-editor", "_blank");
                    }}
                    onPointerDown={(e) => e.stopPropagation()}
                  >
                    Source Code
                  </Button>
                  <button
                    style={{
                      background: '#E0E0E0',
                      color: '#000',
                      border: '2px outset #808080',
                      borderRadius: 0,
                      fontFamily: "'Microsoft Sans Serif', sans-serif",
                      fontSize: '10px',
                      padding: '6px 12px',
                      cursor: 'pointer',
                      marginTop: '8px'
                    }}
                    onClick={() => { window.location.href = '/'; }}
                  >
                    Back to Portfolio
                  </button>
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
        initialTop={500}
        initialLeft={100}
        zIndex={9}
      >
        <Box p={4} display="flex" flexDirection="column" height="100%">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ozKBfpkFnWo?si=S40jkAchfQ7iPVvs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ borderRadius: '4px', flex: 1, minHeight: '315px' }}
          />
        </Box>
      </ResizableWindow>

      {/* PowerPoint PDF Window */}
      <ResizableWindow
        title="PowerPoint"
        onClose={() => window.location.href = '/'}
        initialWidth={550}
        initialHeight={450}
        initialTop={50}
        initialLeft={600}
        zIndex={8}
      >
        <Box p={4} display="flex" flexDirection="column" height="100%">
          {/* Open in New Tab Button */}
          <Box mb={2}>
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
                window.open("/pdf/AI Code Editor Demo.pdf", "_blank");
              }}
              onPointerDown={(e) => e.stopPropagation()}
            >
              Open in New Tab
            </Button>
          </Box>
          
          <iframe
            src="/pdf/AI Code Editor Demo.pdf"
            width="100%"
            height="100%"
            style={{
              border: 'none',
              borderRadius: '4px',
              flex: 1
            }}
            title="AI Code Editor Demo PowerPoint"
          />
        </Box>
      </ResizableWindow>
    </Box>
  );
} 