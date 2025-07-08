'use client'

import { useState, useEffect, useRef } from 'react'
import { Box, Button, Flex, VStack, HStack, Text } from '@chakra-ui/react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import TamagotchiGif from './components/TamagotchiGif'

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
  // Add more as needed
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

export default function Home() {
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

  // Timer for coding points
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

  // Decay pet happiness
  useEffect(() => {
    const decay = setInterval(() => {
      setPetHappiness((h) => Math.max(0, h - 1))
    }, 30000)
    return () => clearInterval(decay)
  }, [])

  // Load LeetCode question
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
            <FaHeart
              key={i}
              color={pastelColors[i]}
              size={32}
              style={{ filter: `drop-shadow(0 0 4px ${pastelColors[i]})` }}
            />
          ) : (
            <FaRegHeart
              key={i}
              color={pastelColors[i]}
              size={32}
              style={{ filter: `drop-shadow(0 0 4px ${pastelColors[i]})` }}
            />
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
          borderRadius="md"
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

  const renderMain = () => (
    <VStack spacing={4}>
      <TamagotchiGif postId="24127301" width="200px" height="200px" />
      {renderHearts()}
    </VStack>
  )

  const renderFeed = () => (
    <VStack spacing={4} justify="center" h="100%">
      <Text fontFamily="'Press Start 2P'" fontSize="14px" color="#FF69B4" mb={2}>
        Start Coding! ⏳
      </Text>
      <Text
        fontFamily="'VT323', monospace"
        fontSize="48px"
        color="#D72660"
        textShadow="2px 2px 0 #FF85C1"
        userSelect="none"
      >
        {new Date(codingTime * 1000).toISOString().substr(14, 5)}
      </Text>
      <Text fontFamily="'Press Start 2P'" fontSize="14px" color="#FF69B4" mt={2}>
        Points: {points}
      </Text>
      <Button
        size="sm"
        bg={timerRunning ? '#FF69B4' : '#FFB3D6'}
        color="white"
        border="2px solid #000"
        fontFamily="'Press Start 2P'"
        fontSize="12px"
        boxShadow="2px 2px 0 #000"
        _hover={{ bg: timerRunning ? '#E0488B' : '#FFA0C4' }}
        onClick={() => setTimerRunning(!timerRunning)}
      >
        {timerRunning ? 'STOP' : 'START'}
      </Button>
      <Text fontFamily="'VT323', monospace" fontSize="16px" color="#D72660" mt={6}>
        Keep coding to make your pet happier! 💖
      </Text>
    </VStack>
  )

  const renderGames = () => {
    if (!currentQuestion) {
      return (
        <VStack spacing={4} justify="center" h="100%">
          <Text fontFamily="'Press Start 2P'" fontSize="14px" color="#FF69B4">
            🎉 You completed all Blind 75 questions!
          </Text>
        </VStack>
      )
    }

    const completed = completedQuestions.includes(currentQuestion.id)

    return (
      <VStack spacing={4} justify="center" h="100%" px={4}>
        <Text fontFamily="'Press Start 2P'" fontSize="16px" color="#FF69B4" mb={2}>
          LeetCode Blind 75 Question of the Day
        </Text>
        <Box
          fontFamily="'VT323', monospace"
          fontSize="18px"
          color="#D72660"
          bg="#FFF0FB"
          p={4}
          border="2px solid #FF69B4"
          borderRadius="md"
          textAlign="center"
        >
          <a href={currentQuestion.link} target="_blank" rel="noopener noreferrer" style={{ color: '#d72660', textDecoration: 'underline' }}>
            {currentQuestion.title}
          </a>
          <Text fontSize="14px" mt={1} color="#FF85C1">Difficulty: {currentQuestion.difficulty}</Text>
        </Box>
        <Button
          size="sm"
          bg={completed ? '#AAA' : '#FF69B4'}
          color="white"
          border="2px solid #000"
          fontFamily="'Press Start 2P'"
          fontSize="12px"
          boxShadow="2px 2px 0 #000"
          _hover={{ bg: completed ? '#AAA' : '#E0488B' }}
          onClick={() => {
            if (!completed) {
              setPoints((p) => p + 25)
              setPetHappiness((h) => Math.min(100, h + 25))
              setCompletedQuestions([...completedQuestions, currentQuestion.id])
              setCurrentQuestion(null)
            }
          }}
          isDisabled={completed}
        >
          {completed ? 'COMPLETED ✅' : 'Mark as Completed'}
        </Button>
      </VStack>
    )
  }

  const renderStats = () => (
    <VStack spacing={4} justify="center" h="100%">
      <Text fontFamily="'Press Start 2P'" fontSize="16px" color="#FF69B4">
        📬 Contact Me
      </Text>
      <Box
        fontFamily="'VT323', monospace"
        fontSize="18px"
        color="#D72660"
        bg="#FFF0FB"
        p={4}
        border="2px solid #FF69B4"
        borderRadius="md"
        textAlign="left"
      >
        <Text fontSize="20px" mb={1}>Yuliana Jasso</Text>
        <Text fontSize="16px" mb={2} color="#FF85C1">Software / AI Engineer</Text>
        <Text fontSize="12px">📧 <a href="mailto:yulianadenissejasso@gmail.com" style={{ color: '#d72660', textDecoration: 'underline' }}>yulianadenissejasso@gmail.com</a></Text>
        <Text fontSize="12px" mt={2}>🎀 <a href="https://www.linkedin.com/in/yuliana-jasso/" target="_blank" style={{ color: '#d72660', textDecoration: 'underline' }}>LinkedIn</a></Text>
        <Text fontSize="12px" mt={1}>💻 <a href="https://github.com/yuyi444" target="_blank" style={{ color: '#d72660', textDecoration: 'underline' }}>GitHub</a></Text>
        <Text fontSize="12px" mt={1}>📟 <a href="https://yjasso.tech" target="_blank" style={{ color: '#d72660', textDecoration: 'underline' }}>Website</a></Text>
      </Box>
    </VStack>
  )

  const getScreen = () => {
    if (currentScreen === 'main') return renderMain()
    if (currentScreen === 'feed') return renderFeed()
    if (currentScreen === 'games') return renderGames()
    if (currentScreen === 'stats') return renderStats()
    return <Text fontSize="14px" mt="100px">🚧 Screen "{currentScreen}" coming soon...</Text>
  }

  return (
    <Flex minH="100vh" align="center" justify="center" bg="#FFF5FD" py={10}>
      <DeviceWrapper>
        <DeviceScreen>{showIntro ? renderIntro() : getScreen()}</DeviceScreen>
        <DeviceButtons />
      </DeviceWrapper>
    </Flex>
  )
}
