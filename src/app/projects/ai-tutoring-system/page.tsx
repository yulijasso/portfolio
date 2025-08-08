'use client';

import {
  Box,
  Button,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';

import { FaGithub } from 'react-icons/fa';
import { useEffect } from 'react';
import ResizableWindow from '../../components/ResizableWindow';

export default function AITutoringSystemPage() {

  // Automatically show the contest image window when the page loads
  useEffect(() => {
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
    >
      {/* Main Project Window */}
      <ResizableWindow
        title="Healthcare AI RAG Tutoring System"
        onClose={() => window.location.href = '/'}
        initialWidth={600}
        initialHeight={450}
        initialTop={50}
        initialLeft={50}
        zIndex={12}
      >
        <Box p={4}>
              <VStack spacing={4} align="stretch">
                <Box>
                  <Text fontSize="16px" fontWeight="bold" mb={2}>
                    1st Place Winner - AI Healthcare Track
                  </Text>
                  <Text fontSize="12px" color="#666" lineHeight="1.4">
                    AI Tutoring System, developed during Hack Research 2023 and took the 1st place win in AI Healthcare, is an innovative app that uses GPT-4 and advanced data extraction techniques to enhance healthcare education. By combining web scraping, embeddings, and retrieval-augmented generation, it sets a new standard for AI-driven learning tools in the medical field.
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
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      window.open("https://github.com/yulijasso/hack-research-proj", "_blank");
                    }}
                    onPointerDown={(e) => e.stopPropagation()}
                  >
                    Source Code
                  </Button>
                </HStack>
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
          </VStack>
        </Box>
      </ResizableWindow>

      {/* Presentation PDF Window */}
      <ResizableWindow
        title="Presentation"
        onClose={() => window.location.href = '/'}
        initialWidth={550}
        initialHeight={450}
        initialTop={50}
        initialLeft={700}
        zIndex={11}
      >
        <Box p={4} display="flex" flexDirection="column" height="100%">
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
                window.open("/pdf/HackResearch2023-Revolutionizing Medical Education.pdf", "_blank");
              }}
              onPointerDown={(e) => e.stopPropagation()}
            >
              Open in New Tab
            </Button>
          </Box>
          <iframe
            src="/pdf/HackResearch2023-Revolutionizing Medical Education.pdf"
            width="100%"
            height="100%"
            style={{ border: 'none', borderRadius: '4px', flex: 1 }}
            title="Hack Research 2023 Presentation"
          />
        </Box>
      </ResizableWindow>

      {/* Recognitions Image Window */}
      <ResizableWindow
        title="Recognitions"
        onClose={() => window.location.href = '/'}
        initialWidth={350}
        initialHeight={400}
        initialTop={550}
        initialLeft={50}
        zIndex={10}
      >
        <Box p={4} display="flex" flexDirection="column" height="100%" alignItems="center" justifyContent="center">
          <img
            src="/images/contests/hackresearch2023.jpg"
            alt="Hack Research 2023 Contest"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '4px', border: '2px solid #808080' }}
          />
          <Box mt={2}>
            <span style={{ fontSize: '12px', color: '#1A3CA7', textAlign: 'center', display: 'block' }}>
              Awarded 1st Place in AI Healthcare Category in Hack Research 2023 at The University of Texas Rio Grande Valley
            </span>
          </Box>
        </Box>
      </ResizableWindow>

      {/* Demo Video Window */}
      <ResizableWindow
        title="Demo"
        onClose={() => window.location.href = '/'}
        initialWidth={900}
        initialHeight={600}
        initialTop={550}
        initialLeft={700}
        zIndex={9}
      >
        <Box p={4} display="flex" flexDirection="column" height="100%">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ReinaBoNaWo?si=q1HJH87Q9L60awat"
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