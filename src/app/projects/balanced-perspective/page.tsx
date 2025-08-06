'use client';

import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Tag,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function BalancedPerspectivePage() {
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
            <HStack spacing={3}>
              <Text fontSize="24px">📰</Text>
              <Text fontSize="14px" fontWeight="bold" textShadow="1px 1px #000">
                Balanced Perspective
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
                  🤖 Deep Learning for Unbiased News Summarization
                </Text>
                <Text fontSize="12px" color="#666" lineHeight="1.4">
                  The project, Balanced Perspective, aims to use deep learning for unbiased news summarization. By leveraging a CNN classifier to detect political bias and the PEGASUS transformer model for abstractive summarization, it produces summaries intended to present balanced perspectives across articles from different political spectrums.
                </Text>
              </Box>
              <Box>
                <Text fontSize="12px" fontWeight="bold" mb={2}>
                  Technologies used:
                </Text>
                <HStack spacing={2} wrap="wrap">
                  {["Deep Learning", "CNN", "PEGASUS", "NLP", "News Analysis", "Python", "TensorFlow"].map((tech, techIdx) => (
                    <Tag key={techIdx} size="sm" bg="#C0C0C0" border="2px outset #FFFFFF" color="#000" fontSize="10px">
                      {tech}
                    </Tag>
                  ))}
                </HStack>
              </Box>
            </VStack>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
} 