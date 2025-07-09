'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Box,
  Button,
  Flex,
  VStack,
  HStack,
  Text,
} from '@chakra-ui/react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import TamagotchiGif from './components/TamagotchiGif';
import MinesweeperWindow from './components/MinesweeperWindow';

const blind75Questions = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/two-sum/",
  },
  {
    id: 2,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
  },
  {
    id: 3,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
  },
];

/* ---------- Device Components ---------- */

const DeviceWrapper = ({ children }) => (
  <Box
    w="420px"
    bg="#C0C0C0"
    border="2px solid #808080"
    boxShadow="inset -2px -2px 0 #808080, inset 2px 2px 0 #FFFFFF"
    fontFamily="'Microsoft Sans Serif', sans-serif"
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
      <Text
        fontSize="14px"
        fontWeight="bold"
        textShadow="1px 1px #000"
      >
        💖 Welcome to Nostalgia
      </Text>
      <Box
        bg="#FF85C1"
        border="2px outset #808080"
        color="#fff"
        px={2}
        cursor="pointer"
        fontSize="12px"
        fontWeight="bold"
        _hover={{ bg: '#FF99CC' }}
      >
        ✖
      </Box>
    </Flex>
    {children}
  </Box>
);

const DeviceScreen = ({ children }) => (
  <Box
    h="380px"
    bg="#FFF0FB"
    border="2px inset #808080"
    p={4}
    textAlign="center"
    overflowY="auto"
    fontSize="12px"
    color="#000"
  >
    {children}
  </Box>
);

const DeviceButtons = ({ setCurrentScreen, setCurrentQuestion }) => (
  <HStack spacing={2} mt={2} justify="center">
    {['feed', 'games', 'main', 'portfolio', 'stats'].map((btn) => (
      <Button
        key={btn}
        size="sm"
        bg="#E0E0E0"
        color="#000"
        border="2px outset #808080"
        borderRadius="0"
        fontFamily="'Microsoft Sans Serif', sans-serif"
        fontSize="10px"
        h="24px"
        minW="50px"
        _hover={{
          border: '2px inset #808080',
          bg: '#D0D0D0'
        }}
        onClick={() => {
          if (btn === 'portfolio') window.location.href = '/portfolio';
          else {
            setCurrentScreen(btn);
            if (btn !== 'games') setCurrentQuestion(null);
          }
        }}
      >
        {btn.toUpperCase()}
      </Button>
    ))}
  </HStack>
);

const DesktopIcon = ({ icon, label, onClick }) => (
  <motion.div
    drag
    dragMomentum={false}
    dragConstraints={{ top: -500, bottom: 500, left: -800, right: 800 }}
    style={{ display: "inline-block" }}
  >
    <VStack
      spacing={1}
      cursor="pointer"
      onClick={onClick}
      userSelect="none"
      w="60px"
      _hover={{ bg: '#FFB3D6', borderRadius: '6px' }}
    >
      {icon}
      <Text
        fontFamily="'Microsoft Sans Serif', sans-serif"
        fontSize="10px"
        color="#d72660"
        textAlign="center"
      >
        {label}
      </Text>
    </VStack>
  </motion.div>
);

const GrayTaskbar = () => (
  <Flex
    position="fixed"
    bottom={0}
    left={0}
    right={0}
    h="40px"
    bg="#C0C0C0"
    borderTop="2px solid #FFFFFF"
    borderBottom="2px solid #808080"
    boxShadow="inset 1px 1px 0 #FFFFFF, inset -1px -1px 0 #808080"
    align="center"
    px={4}
    fontFamily="'Microsoft Sans Serif', sans-serif"
    color="#000"
    userSelect="none"
    zIndex={20}
  >
    <Box
      bg="#E0E0E0"
      px={3}
      py={1}
      border="2px outset #808080"
      fontWeight="bold"
      fontSize="10px"
      cursor="pointer"
      _hover={{
        bg: '#D0D0D0'
      }}
    >
      START
    </Box>
  </Flex>
);

/* ---------- Main App ---------- */

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [showTamagotchi, setShowTamagotchi] = useState(false);
  const [showMinesweeper, setShowMinesweeper] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('main');
  const [petHappiness, setPetHappiness] = useState(100);
  const [typed, setTyped] = useState('');
  const [typingDone, setTypingDone] = useState(false);
  const [codingTime, setCodingTime] = useState(0);
  const [points, setPoints] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [completedQuestions, setCompletedQuestions] = useState([]);
  const timerRef = useRef(null);

  const typewriterText = `Welcome to My Portfolio\n\nI’m Yuli — Full‑Stack/AI Developer & Creative Coder\n\nI'm a passionate software engineer who loves building innovative web applications. This portfolio showcases my journey through a unique Tamagotchi-style interface.`;

  useEffect(() => {
    let i = 0;
    const type = () => {
      if (i <= typewriterText.length) {
        setTyped(typewriterText.slice(0, i));
        i++;
        setTimeout(type, 20);
      } else {
        setTypingDone(true);
      }
    };
    if (showIntro) type();
  }, [showIntro]);

  useEffect(() => {
    if (currentScreen === 'feed' && timerRunning) {
      if (!timerRef.current) {
        timerRef.current = setInterval(() => {
          setCodingTime((time) => {
            const newTime = time + 1;
            if (newTime % 60 === 0) {
              setPoints((p) => p + 60);
              setPetHappiness((h) => Math.min(100, h + 5));
            }
            return newTime;
          });
        }, 1000);
      }
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      if (currentScreen !== 'feed') {
        setCodingTime(0);
        setPoints(0);
        setTimerRunning(false);
      }
    }
  }, [currentScreen, timerRunning]);

  useEffect(() => {
    const decay = setInterval(() => {
      setPetHappiness((h) => Math.max(0, h - 1));
    }, 30000);
    return () => clearInterval(decay);
  }, []);

  useEffect(() => {
    if (currentScreen === 'games' && !currentQuestion) {
      const unanswered = blind75Questions.filter(q => !completedQuestions.includes(q.id));
      const random = unanswered[Math.floor(Math.random() * unanswered.length)];
      setCurrentQuestion(random || null);
    }
  }, [currentScreen, currentQuestion, completedQuestions]);

  const pastelColors = ['#FFB3BA', '#BAE1FF', '#BAFFC9', '#FFFFBA', '#FFCBA4'];

  const renderHearts = () => {
    const heartsCount = 5;
    const filled = Math.round((petHappiness / 100) * heartsCount);
    return (
      <HStack spacing={2} mt={4} justify="center">
        {Array.from({ length: heartsCount }).map((_, i) =>
          i < filled ? (
            <FaHeart key={i} color={pastelColors[i]} size={32} />
          ) : (
            <FaRegHeart key={i} color={pastelColors[i]} size={32} />
          )
        )}
      </HStack>
    );
  };

  const renderIntro = () => (
    <Box
      bg="#C0C0C0"
      border="2px inset #808080"
      boxShadow="inset -2px -2px 0 #808080, inset 2px 2px 0 #FFFFFF"
      p={4}
      w="100%"
      h="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack spacing={6} maxW="400px">
        <Text fontSize="28px" color="#FF69B4">💖</Text>
        <Box
          whiteSpace="pre-line"
          fontSize="14px"
          color="#000"
          fontFamily="'Microsoft Sans Serif', sans-serif"
          textAlign="center"
        >
          {typed}
        </Box>
        {typingDone && (
          <Button
            size="md"
            bg="#E0E0E0"
            color="#000"
            border="2px outset #808080"
            borderRadius="0"
            fontFamily="'Microsoft Sans Serif', sans-serif"
            fontSize="12px"
            px={4}
            py={2}
            _hover={{
              border: '2px inset #808080',
              bg: '#D0D0D0'
            }}
            onClick={() => setShowIntro(false)}
          >
            ENTER 2000s
          </Button>
        )}
      </VStack>
    </Box>
  );

  const getScreen = () => {
    if (currentScreen === 'main') {
      return (
        <>
          <Box display="inline-block">
            <TamagotchiGif postId="24127301" width="200px" height="200px" />
          </Box>
          <Box mt={4}>
            {renderHearts()}
          </Box>
        </>
      );
    }
    if (currentScreen === 'feed') {
      return (
        <VStack spacing={4}>
          <Text>Start Coding! ⏳</Text>
          <Text>{new Date(codingTime * 1000).toISOString().substr(14, 5)}</Text>
          <Text>Points: {points}</Text>
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
            onClick={() => setTimerRunning(!timerRunning)}
          >
            {timerRunning ? 'STOP' : 'START'}
          </Button>
        </VStack>
      );
    }
    if (currentScreen === 'games') return <Text>🎮 Games screen</Text>;
    if (currentScreen === 'stats') return <Text>📬 Contact screen</Text>;
    return <Text>🚧 Coming soon...</Text>;
  };

  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-b, #FFB3D6, #FF85C1)"
      fontFamily="'Microsoft Sans Serif', sans-serif"
      position="relative"
      pb="80px"
    >
      {/* Desktop Icons stacked vertically */}
      <VStack spacing={8} position="fixed" top={8} left={8} zIndex={15}>
        <DesktopIcon
          icon={
            <Image
              src="/images/tamagotchi-icon.png"
              alt="Tamagotchi Icon"
              width={40}
              height={40}
            />
          }
          label="Tamagotchi"
          onClick={() => setShowTamagotchi(true)}
        />
        <DesktopIcon
          icon={<Text fontSize="28px" textShadow="1px 1px 0 #FF69B4">🎮</Text>}
          label="Resume.pdf"
          onClick={() => setCurrentScreen('games')}
        />
        <DesktopIcon
          icon={<Text fontSize="28px" textShadow="1px 1px 0 #FF69B4">📁</Text>}
          label="Portfolio"
          onClick={() => window.location.href = '/portfolio'}
        />
        <DesktopIcon
          icon={<Text fontSize="28px" textShadow="1px 1px 0 #FF69B4">💌</Text>}
          label="Contact"
          onClick={() => setCurrentScreen('stats')}
        />
        <DesktopIcon
          icon={<Text fontSize="28px" textShadow="1px 1px 0 #FF69B4">💣</Text>}
          label="Minesweeper"
          onClick={() => setShowMinesweeper(true)}
        />
      </VStack>

      {/* Intro Window */}
      {showIntro && (
        <Box position="absolute" top="20%" left="50%" transform="translate(-50%, -50%)" zIndex={10}>
          <motion.div drag>
            <DeviceWrapper>
              <DeviceScreen>
                {renderIntro()}
              </DeviceScreen>
            </DeviceWrapper>
          </motion.div>
        </Box>
      )}

      {/* Tamagotchi Window */}
      {showTamagotchi && (
        <Box position="absolute" top="20%" left="50%" transform="translate(-50%, -50%)" zIndex={10}>
          <motion.div drag>
            <DeviceWrapper>
              <DeviceScreen>
                {getScreen()}
              </DeviceScreen>
              <DeviceButtons
                setCurrentScreen={setCurrentScreen}
                setCurrentQuestion={setCurrentQuestion}
              />
            </DeviceWrapper>
          </motion.div>
        </Box>
      )}

      {/* Minesweeper Window */}
      {showMinesweeper && (
        <MinesweeperWindow
          onClose={() => setShowMinesweeper(false)}
          addPoints={(p) => setPoints(prev => prev + p)}
        />
      )}

      <GrayTaskbar />
    </Box>
  );
}
