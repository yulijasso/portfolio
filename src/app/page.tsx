'use client'

import { useState, useEffect, useRef } from 'react'
import {
  Box,
  Button,
  Flex,
  VStack,
  HStack,
  Text,
} from '@chakra-ui/react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { motion } from 'framer-motion'
import TamagotchiGif from './components/TamagotchiGif'

// Sample questions
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
]

const DeviceWrapper = ({ children }: { children: React.ReactNode }) => (
  <Box
    w="400px"
    p={6}
    bg="#F5E1FF"
    border="5px solid #000"
    borderRadius="lg"
    boxShadow="6px 6px 0 #000"
    fontFamily="'VT323', monospace"
    position="relative"
  >
    {children}
  </Box>
)

const DeviceScreen = ({ children }: { children: React.ReactNode }) => (
  <Box
    h="400px"
    bg="#FFF0FB"
    border="3px solid #FF69B4"
    borderRadius="lg"
    p={8}
    textAlign="center"
    overflowY="auto"
  >
    {children}
  </Box>
)

const DesktopIcon = ({ emoji, label, onClick }: { emoji: string; label: string; onClick?: () => void }) => (
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
      <Box fontSize="28px" lineHeight="1" textShadow="1px 1px 0 #FF69B4">{emoji}</Box>
      <Text fontFamily="'Press Start 2P'" fontSize="10px" color="#d72660" textAlign="center">{label}</Text>
    </VStack>
  </motion.div>
)

const Taskbar = () => (
  <Flex
    position="fixed"
    bottom={0}
    left={0}
    right={0}
    h="48px"
    bg="#330033"
    borderTop="4px solid #FF66CC"
    borderBottom="4px solid #660066"
    boxShadow="inset 2px 2px 0 #FF99DD, inset -2px -2px 0 #990099"
    align="center"
    px={4}
    fontFamily="'Press Start 2P'"
    color="#FF99DD"
    userSelect="none"
    zIndex={20}
  >
    <Box
      bg="#FF66CC"
      px={4}
      py={1}
      border="2px solid #990099"
      boxShadow="2px 2px 0 #660066"
      fontWeight="bold"
      fontSize="12px"
      cursor="pointer"
      textShadow="1px 1px 0 #660066"
    >
      START
    </Box>
    <HStack spacing={6} ml={6}>
      {["💖 Pet", "📁 Files", "🎮 Games"].map((label) => (
        <Box
          key={label}
          bg="#660066"
          px={3}
          py={1}
          border="2px solid #990099"
          boxShadow="2px 2px 0 #330033"
          cursor="pointer"
          fontSize="11px"
          textShadow="1px 1px 0 #330033"
        >
          {label}
        </Box>
      ))}
    </HStack>
  </Flex>
)

export default function Home() {
  const [showTamagotchi, setShowTamagotchi] = useState(true)
  const [currentScreen, setCurrentScreen] = useState<'main' | 'feed' | 'games' | 'portfolio' | 'stats'>('main')
  const [petHappiness, setPetHappiness] = useState(100)
  const [showIntro, setShowIntro] = useState(true)
  const [typed, setTyped] = useState('')
  const [typingDone, setTypingDone] = useState(false)
  const [codingTime, setCodingTime] = useState(0)
  const [points, setPoints] = useState(0)
  const [timerRunning, setTimerRunning] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState<typeof blind75Questions[0] | null>(null)
  const [completedQuestions, setCompletedQuestions] = useState<number[]>([])
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const typewriterText = `Welcome to My Portfolio\n\nI’m Yuli — Full‑Stack/AI Developer & Creative Coder\n\nI'm a passionate software engineer who loves building innovative web applications. This portfolio showcases my journey through a unique Tamagotchi-style interface.`

  useEffect(() => {
    let i = 0
    const type = () => {
      if (i <= typewriterText.length) {
        setTyped(typewriterText.slice(0, i))
        i++
        setTimeout(type, 20)
      } else {
        setTypingDone(true)
      }
    }
    if (showIntro) type()
  }, [showIntro])

  useEffect(() => {
    if (currentScreen === 'feed' && timerRunning) {
      if (!timerRef.current) {
        timerRef.current = setInterval(() => {
          setCodingTime((time) => {
            const newTime = time + 1
            if (newTime % 60 === 0) {
              setPoints((p) => p + 60)
              setPetHappiness((h) => Math.min(100, h + 5))
            }
            return newTime
          })
        }, 1000)
      }
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
      if (currentScreen !== 'feed') {
        setCodingTime(0)
        setPoints(0)
        setTimerRunning(false)
      }
    }
  }, [currentScreen, timerRunning])

  useEffect(() => {
    const decay = setInterval(() => {
      setPetHappiness((h) => Math.max(0, h - 1))
    }, 30000)
    return () => clearInterval(decay)
  }, [])

  useEffect(() => {
    if (currentScreen === 'games' && !currentQuestion) {
      const unanswered = blind75Questions.filter(q => !completedQuestions.includes(q.id))
      const random = unanswered[Math.floor(Math.random() * unanswered.length)]
      setCurrentQuestion(random || null)
    }
  }, [currentScreen, currentQuestion, completedQuestions])

  const pastelColors = ['#FFB3BA', '#BAE1FF', '#BAFFC9', '#FFFFBA', '#FFCBA4']

  const renderHearts = () => {
    const heartsCount = 5
    const filled = Math.round((petHappiness / 100) * heartsCount)
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
    )
  }

  const DeviceButtons = () => (
    <HStack spacing={3} mt={5} justify="center">
      {['feed', 'games', 'main', 'portfolio', 'stats'].map((btn) => (
        <Button
          key={btn}
          size="sm"
          bg="#FFB3D6"
          color="white"
          border="2px solid #000"
          fontFamily="'Press Start 2P'"
          fontSize="10px"
          boxShadow="2px 2px 0 #000"
          _hover={{ bg: '#FF85C1' }}
          onClick={() => {
            if (btn === 'portfolio') window.location.href = '/portfolio'
            else {
              setCurrentScreen(btn as any)
              if (btn !== 'games') setCurrentQuestion(null)
            }
          }}
        >
          {btn === 'feed' ? '🍽' : btn === 'games' ? '🎮' : btn === 'main' ? '🏠' : btn === 'portfolio' ? '📁' : '💌'}
        </Button>
      ))}
    </HStack>
  )

  const renderIntro = () => (
    <VStack spacing={4} h="100%" justify="center">
      <Text fontSize="4xl" color="#FF69B4">💖</Text>
      <Box whiteSpace="pre-line" fontSize="md" color="#d72660" maxW="300px" mx="auto">
        {typed}
      </Box>
      {typingDone && (
        <Button
          size="sm"
          bg="#FFB3D6"
          color="white"
          border="2px solid #000"
          fontFamily="'Press Start 2P'"
          fontSize="12px"
          boxShadow="2px 2px 0 #000"
          _hover={{ bg: '#FF85C1' }}
          onClick={() => setShowIntro(false)}
        >
          ENTER 2000s
        </Button>
      )}
    </VStack>
  )

  const getScreen = () => {
    if (currentScreen === 'main') {
      return (
        <VStack spacing={4}>
          <TamagotchiGif postId="24127301" width="200px" height="200px" />
          {renderHearts()}
        </VStack>
      )
    }
    if (currentScreen === 'feed') {
      return (
        <VStack spacing={4}>
          <Text>Start Coding! ⏳</Text>
          <Text>{new Date(codingTime * 1000).toISOString().substr(14, 5)}</Text>
          <Text>Points: {points}</Text>
          <Button onClick={() => setTimerRunning(!timerRunning)}>{timerRunning ? 'STOP' : 'START'}</Button>
        </VStack>
      )
    }
    if (currentScreen === 'games') return <Text>🎮 Games screen</Text>
    if (currentScreen === 'stats') return <Text>📬 Contact screen</Text>
    return <Text>🚧 Coming soon...</Text>
  }

  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-b, #FFB3D6, #FF85C1)"
      fontFamily="'Press Start 2P', monospace"
      position="relative"
      pb="80px"
    >
      {/* Desktop Icons */}
      <HStack spacing={8} position="fixed" top={8} left={8} zIndex={15}>
        <DesktopIcon emoji="🐣" label="Tamagotchi" onClick={() => setShowTamagotchi(true)} />
        <DesktopIcon emoji="🎮" label="Games" onClick={() => setCurrentScreen('games')} />
        <DesktopIcon emoji="📁" label="Portfolio" onClick={() => setCurrentScreen('portfolio')} />
        <DesktopIcon emoji="💌" label="Contact" onClick={() => setCurrentScreen('stats')} />
      </HStack>

      {/* Tamagotchi Window */}
      {showTamagotchi && (
        <Box position="absolute" top="20%" left="40%" transform="translate(-50%, -50%)" zIndex={10}>
          <motion.div drag dragConstraints={{ top: -1000, bottom: 1000, left: -1000, right: 1000 }}>
            <Box position="relative">
              <Button
                onClick={() => setShowTamagotchi(false)}
                size="xs"
                position="absolute"
                top="-12px"
                right="-12px"
                bg="#FF69B4"
                color="white"
                border="2px solid #000"
                borderRadius="full"
                fontSize="10px"
                w="24px"
                h="24px"
                boxShadow="2px 2px 0 #000"
                _hover={{ bg: '#E0488B' }}
                zIndex={20}
              >
                ✖
              </Button>
              <DeviceWrapper>
                <DeviceScreen>{showIntro ? renderIntro() : getScreen()}</DeviceScreen>
                <DeviceButtons />
              </DeviceWrapper>
            </Box>
          </motion.div>
        </Box>
      )}

      <Taskbar />
    </Box>
  )
}
