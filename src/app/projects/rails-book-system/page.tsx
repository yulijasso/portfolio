'use client';

import {
  Box,
  Button,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';

import { FaGithub } from 'react-icons/fa';
import ResizableWindow from '../../components/ResizableWindow';

export default function RailsBookSystemPage() {


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
      <ResizableWindow
        title="Rails Book System"
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
                  <Text fontSize="16px" fontWeight="bold" mb={2}>
                    Book Club Management Application
                  </Text>
                  <Text fontSize="12px" color="#666" lineHeight="1.4">
                    I developed a book club management app providing the organizer, with full CRUD functionality to manage book suggestions, track reading status, and approve or reject recommendations from members. The app allows members to sign up, suggest books, and view read/unread lists, while the organizer can control the visibility of suggestions to maintain a high-quality selection process.
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
                    onClick={() => window.open('https://github.com/yuyi444/rails-book-system.git', '_blank')}
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
    </Box>
  );
} 