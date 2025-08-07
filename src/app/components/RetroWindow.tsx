import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

interface RetroWindowProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  headerBg?: string;
}

const RetroWindow: React.FC<RetroWindowProps> = ({ title, onClose, children, headerBg = "#1A3CA7" }) => (
  <Box
    bg="#C0C0C0"
    border="2px solid #808080"
    boxShadow="inset -2px -2px 0 #808080, inset 2px 2px 0 #FFFFFF"
    borderRadius="0"
    w="100%"
    h="100%"
    display="flex"
    flexDirection="column"
    fontFamily="'Microsoft Sans Serif', 'Press Start 2P', 'VT323', monospace, Arial, sans-serif"
    overflow="hidden"
  >
    <Flex
      bg={headerBg}
      color="#fff"
      px={3}
      py={1}
      justify="space-between"
      align="center"
      borderBottom="2px solid #808080"
      boxShadow="inset 1px 1px 0 #FFFFFF, inset -1px -1px 0 #B84878"
      userSelect="none"
    >
      <Text fontSize="14px" fontWeight="bold" textShadow="1px 1px #000">{title}</Text>
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
      overflow="auto"
      className="retro-scrollbar"
    >
      {children}
    </Box>
  </Box>
);

export default RetroWindow;