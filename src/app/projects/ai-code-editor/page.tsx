'use client';

import { Box, Button, Flex, Text, VStack, HStack, Tag } from '@chakra-ui/react';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function AICodeEditor({ onClose }: { onClose?: () => void }) {
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
    >
      <motion.div drag style={{ position: 'absolute', top: 100, left: 100, zIndex: 10 }}>
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
              <HStack spacing={2}>
                <Text fontSize="24px">💻</Text>
                <Text fontSize="14px" fontWeight="bold" textShadow="1px 1px #000">
                  AI Code Editor
                </Text>
              </HStack>
              <Box
                bg="#C0C0C0"
                border="2px outset #fff"
                color="#000"
                px={2}
                cursor="pointer"
                fontSize="12px"
                fontWeight="bold"
                onClick={onClose}
                _hover={{ bg: '#D0D0D0' }}
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
                <Text fontSize="16px" fontWeight="bold" color="#000">
                  AI Code Editor
                </Text>
                
                <Text fontSize="12px" color="#000" lineHeight="1.6">
                  Integrated an AI tutor that improves user productivity and promotes in-platform learning in code editor app, Judge00. Integrated key features, such as OpenRouter API key input, line explanations, and automatic changes from AI tutor to IDE.
                </Text>

                <Box>
                  <Text fontSize="12px" fontWeight="bold" color="#000" mb={2}>
                    Technologies Used:
                  </Text>
                  <HStack spacing={2} wrap="wrap">
                    {["AI Tutor", "Code Editor", "OpenRouter API", "IDE Integration"].map((tech, idx) => (
                      <Tag key={idx} size="sm" bg="#E0E0E0" color="#000" borderRadius="0">
                        {tech}
                      </Tag>
                    ))}
                  </HStack>
                </Box>

                <Box>
                  <Text fontSize="12px" fontWeight="bold" color="#000" mb={2}>
                    Key Features:
                  </Text>
                  <VStack spacing={1} align="stretch">
                    <Text fontSize="11px" color="#000">• AI tutor integration for enhanced learning</Text>
                    <Text fontSize="11px" color="#000">• OpenRouter API key input functionality</Text>
                    <Text fontSize="11px" color="#000">• Line-by-line code explanations</Text>
                    <Text fontSize="11px" color="#000">• Automatic AI tutor to IDE changes</Text>
                    <Text fontSize="11px" color="#000">• In-platform learning capabilities</Text>
                  </VStack>
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
                    onClick={() => window.open("https://github.com/yuyi444/ai-code-editor", "_blank")}
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
                    onClick={onClose}
                  >
                    Back to Portfolio
                  </Button>
                </HStack>
              </VStack>
            </Box>
          </Box>
        </motion.div>
    </Box>
  );
} 