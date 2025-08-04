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
  SimpleGrid,
} from '@chakra-ui/react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import TamagotchiGif from './components/TamagotchiGif';
import MinesweeperWindow from './components/MinesweeperWindow';

interface Question {
  id: number;
  title: string;
  difficulty: string;
  link: string;
}

const blind75Questions: Question[] = [
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

const DeviceWrapper = ({ children }: { children: React.ReactNode }) => (
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

const DeviceScreen = ({ children }: { children: React.ReactNode }) => (
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

const DeviceButtons = ({ setCurrentScreen, setCurrentQuestion }: { setCurrentScreen: (screen: string) => void; setCurrentQuestion: (question: Question | null) => void }) => (
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

const DesktopIcon = ({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick: () => void }) => {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = iconRef.current;
    if (!element) return;

    const handleClick = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('Desktop icon clicked:', label);
      onClick();
    };

    const handleTouch = (e: TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('Desktop icon touched:', label);
      onClick();
    };

    element.addEventListener('click', handleClick);
    element.addEventListener('touchstart', handleTouch);

    return () => {
      element.removeEventListener('click', handleClick);
      element.removeEventListener('touchstart', handleTouch);
    };
  }, [label, onClick]);

  return (
    <Box
      ref={iconRef}
      display="inline-block"
      cursor="pointer"
      userSelect="none"
      _hover={{ bg: '#FFB3D6', borderRadius: '6px' }}
      p={1}
      bg="transparent"
      border="none"
      outline="none"
      fontSize="inherit"
      fontFamily="inherit"
      lineHeight="inherit"
      _focus={{
        outline: '2px solid #FF69B4',
        outlineOffset: '2px'
      }}
      style={{
        WebkitTapHighlightColor: 'transparent',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none'
      }}
    >
      <VStack spacing={1} w="60px">
        {icon}
        <Text
          fontFamily="'Microsoft Sans Serif', sans-serif"
          fontSize="10px"
          color="#FFFFFF"
          textAlign="center"
        >
          {label}
        </Text>
      </VStack>
    </Box>
  );
};

const GrayTaskbar = ({ toggleStart }: { toggleStart: () => void }) => (
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
      onClick={toggleStart}
    >
      START
    </Box>
  </Flex>
);

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [showTamagotchi, setShowTamagotchi] = useState(false);
  const [showMinesweeper, setShowMinesweeper] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('main');
  const [petHappiness, setPetHappiness] = useState(100);
  const [typed, setTyped] = useState('');
  const [typingDone, setTypingDone] = useState(false);
  const [codingTime, setCodingTime] = useState(0);
  const [points, setPoints] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [completedQuestions] = useState<number[]>([]);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [recentItems, setRecentItems] = useState<Array<{ label: string; action: () => void }>>([]);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

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

  const addRecentItem = (label: string, action: () => void) => {
    setRecentItems(prev => [
      { label, action },
      ...prev.filter(item => item.label !== label)
    ]);
  };

  const openResume = () => {
    console.log('openResume called');
    setShowResume(true);
    addRecentItem('Resume.pdf', openResume);
  };

  const openContact = () => {
    console.log('openContact called');
    setShowContact(true);
    addRecentItem('Contact', openContact);
  };

  const openTamagotchi = () => {
    console.log('openTamagotchi called');
    setShowTamagotchi(true);
    addRecentItem('Tamagotchi', openTamagotchi);
  };

  const openMinesweeper = () => {
    console.log('openMinesweeper called');
    setShowMinesweeper(true);
    addRecentItem('Minesweeper', openMinesweeper);
  };

  const openPortfolio = () => {
    console.log('openPortfolio called');
    setShowPortfolio(true);
    addRecentItem('Portfolio', openPortfolio);
  };

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
      bg="#E0218A"
      bgImage="url('/images/wallpaper.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      fontFamily="'Microsoft Sans Serif', sans-serif"
      position="relative"
      pb="80px"
    >
      <VStack spacing={8} position="fixed" top={8} left={8} zIndex={15}>
        <DesktopIcon
          icon={<Image src="/images/tamagotchi-icon.png" alt="Tamagotchi Icon" width={40} height={40} />}
          label="Tamagotchi"
          onClick={openTamagotchi}
        />
        <DesktopIcon
          icon={<Image src="/images/resume-pdf.png" alt="Resume PDF Icon" width={40} height={40} />}
          label="Resume.pdf"
          onClick={openResume}
        />
        <DesktopIcon
          icon={<Image src="/images/portfolio-icon.png" alt="Projects Icon" width={40} height={40} />}
          label="Projects"
          onClick={openPortfolio}
        />
        <DesktopIcon
          icon={<Image src="/images/contact-icon.png" alt="Contact Icon" width={40} height={40} />}
          label="Contact"
          onClick={openContact}
        />
        <DesktopIcon
          icon={<Image src="/images/minesweeper-icon.png" alt="Minesweeper Icon" width={40} height={40} />}
          label="Minesweeper"
          onClick={openMinesweeper}
        />
      </VStack>

      {showIntro && (
        <Box position="absolute" top="20%" left="50%" transform="translate(-50%, -50%)" zIndex={10}>
          <Box>
            <DeviceWrapper>
              <DeviceScreen>{renderIntro()}</DeviceScreen>
            </DeviceWrapper>
          </Box>
        </Box>
      )}

      {showTamagotchi && (
        <Box position="absolute" top="20%" left="50%" transform="translate(-50%, -50%)" zIndex={10}>
          <Box>
            <DeviceWrapper>
              <DeviceScreen>{getScreen()}</DeviceScreen>
              <DeviceButtons setCurrentScreen={setCurrentScreen} setCurrentQuestion={setCurrentQuestion} />
            </DeviceWrapper>
          </Box>
        </Box>
      )}

      {showResume && (
        <Box position="absolute" top="30%" left="50%" transform="translate(-50%, -50%)" zIndex={10}>
          <Box>
            <Box w="900px" h="700px" bg="#C0C0C0" border="2px solid #808080" boxShadow="inset -2px -2px 0 #808080, inset 2px 2px 0 #FFFFFF" display="flex" flexDirection="column">
              <Flex bg="#FF69B4" color="#fff" px={3} py={1} justify="space-between" align="center" borderBottom="2px solid #808080" boxShadow="inset 1px 1px 0 #FFFFFF, inset -1px -1px 0 #B84878">
                <Text fontSize="14px" fontWeight="bold" textShadow="1px 1px #000">💖 Resume.pdf</Text>
                <Box bg="#FF85C1" border="2px outset #808080" color="#fff" px={2} cursor="pointer" fontSize="12px" fontWeight="bold" _hover={{ bg: '#FF99CC' }} onClick={() => setShowResume(false)}>✖</Box>
              </Flex>
              <Box flex="1" bg="#FFF0FB" border="2px inset #808080" p={4} overflow="hidden">
                <Button size="sm" bg="#E0E0E0" color="#000" border="2px outset #808080" borderRadius="0" fontFamily="'Microsoft Sans Serif', sans-serif" fontSize="10px" mb={2} _hover={{ border: '2px inset #808080', bg: '#D0D0D0' }} onClick={() => window.open('/Resume.pdf', '_blank')}>View in New Tab</Button>
                <iframe src="/Resume.pdf" width="100%" height="100%" style={{ border: "none" }} />
              </Box>
            </Box>
          </Box>
        </Box>
      )}

      {showContact && (
        <Box position="absolute" top="30%" left="50%" transform="translate(-50%, -50%)" zIndex={10}>
          <Box>
            <Box w="400px" h="300px" bg="#C0C0C0" border="2px solid #808080" boxShadow="inset -2px -2px 0 #808080, inset 2px 2px 0 #FFFFFF" display="flex" flexDirection="column">
              <Flex bg="#FF69B4" color="#fff" px={3} py={1} justify="space-between" align="center" borderBottom="2px solid #808080" boxShadow="inset 1px 1px 0 #FFFFFF, inset -1px -1px 0 #B84878">
                <Text fontSize="14px" fontWeight="bold" textShadow="1px 1px #000">💌 Contact</Text>
                <Box bg="#FF85C1" border="2px outset #808080" color="#fff" px={2} cursor="pointer" fontSize="12px" fontWeight="bold" _hover={{ bg: '#FF99CC' }} onClick={() => setShowContact(false)}>✖</Box>
              </Flex>
              <Box flex="1" bg="#FFF0FB" border="2px inset #808080" p={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={4}>
                <Button size="md" bg="#E0E0E0" color="#000" border="2px outset #808080" borderRadius="0" fontFamily="'Microsoft Sans Serif', sans-serif" fontSize="12px" _hover={{ border: '2px inset #808080', bg: '#D0D0D0' }} onClick={() => window.location.href = "mailto:yulianadenissejasso@gmail.com"}>Email me!</Button>
                <Button size="md" bg="#E0E0E0" color="#000" border="2px outset #808080" borderRadius="0" fontFamily="'Microsoft Sans Serif', sans-serif" fontSize="12px" _hover={{ border: '2px inset #808080', bg: '#D0D0D0' }} onClick={() => window.open("https://www.linkedin.com/in/yuliana-jasso/", "_blank")}>Connect on LinkedIn</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      )}

      {showPortfolio && (
        <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex={10}>
          <Box>
            <Box w="800px" h="600px" bg="#C0C0C0" border="2px solid #808080" boxShadow="inset -2px -2px 0 #808080, inset 2px 2px 0 #FFFFFF" display="flex" flexDirection="column">
              <Flex bg="#FF69B4" color="#fff" px={3} py={1} justify="space-between" align="center" borderBottom="2px solid #808080" boxShadow="inset 1px 1px 0 #FFFFFF, inset -1px -1px 0 #B84878">
                <Text fontSize="14px" fontWeight="bold" textShadow="1px 1px #000">💻 Portfolio</Text>
                <Box bg="#FF85C1" border="2px outset #808080" color="#fff" px={2} cursor="pointer" fontSize="12px" fontWeight="bold" _hover={{ bg: '#FF99CC' }} onClick={() => setShowPortfolio(false)}>✖</Box>
              </Flex>
              <Box flex="1" bg="#FFF0FB" border="2px inset #808080" p={4} overflowY="auto">
                <VStack spacing={4} align="stretch">
                  <Box>
                    <Text fontSize="16px" fontWeight="bold" mb={2}>
                      Welcome to My Portfolio Desktop
                    </Text>
                    <Text fontSize="12px" color="#666" mb={4}>
                      Click on any project icon to view details
                    </Text>
                  </Box>
                  
                  <SimpleGrid columns={[1, 2, 3]} spacing={4}>
                    {[
                      { 
                        name: "AI Autotab Chrome Extension", 
                        emoji: "🔧",
                        description: "Created an AI Autotab chrome extension that autocompletes phrases and sentences, improving productivity",
                        technologies: ["Chrome Extension", "AI", "Productivity", "JavaScript"],
                        demo_link: "https://github.com/yuyi444/ai-autotab-extension",
                        source_code_link: "https://github.com/yuyi444/ai-autotab-extension"
                      },
                      { 
                        name: "AI Code Editor", 
                        emoji: "💻",
                        description: "Integrated an AI tutor that improves user productivity and promotes in-platform learning in code editor app, Judge00. Integrated key features, such as OpenRouter API key input, line explanations, and automatic changes from AI tutor to IDE",
                        technologies: ["AI Tutor", "Code Editor", "OpenRouter API", "IDE Integration"],
                        demo_link: "https://github.com/yuyi444/ai-code-editor",
                        source_code_link: "https://github.com/yuyi444/ai-code-editor"
                      },
                      { 
                        name: "AI Search Engine", 
                        emoji: "🔍",
                        description: "Created a tool that scrapes web content and provides AI-generated answers with reliable source citations. Implemented Groq LLM, web scraping with Cheerio and Puppeteer, and optimized performance with rate limiting",
                        technologies: ["Groq LLM", "Web Scraping", "Cheerio", "Puppeteer", "AI Search"],
                        demo_link: "https://github.com/yuyi444/ai-search-engine",
                        source_code_link: "https://github.com/yuyi444/ai-search-engine"
                      },
                      { 
                        name: "We R Cooked", 
                        emoji: "🍗",
                        description: "Implemented a creative simulation of Don Pollo incoming calls using ElevenLabs AI conversation widget integration. Integrated a Google T-rex replica game into application. Won Memenome Best Don Pollo Integration Hack, winning grand prize of 1k at jia.seed brainrot hackathon(1k+ participants)",
                        technologies: ["ElevenLabs AI", "Game Integration", "Hackathon Winner", "AI Conversation"],
                        demo_link: "https://github.com/yuyi444/we-r-cooked",
                        source_code_link: "https://github.com/yuyi444/we-r-cooked"
                      },
                      { 
                        name: "AI Tutoring System", 
                        emoji: "/images/project-icons/aitutor.png",
                        description: "AI Tutoring System, developed during Hack Research 2023 and took the 1st place win in AI Healthcare, is an innovative app that uses GPT-4 and advanced data extraction techniques to enhance healthcare education. By combining web scraping, embeddings, and retrieval-augmented generation, it sets a new standard for AI-driven learning tools in the medical field.",
                        technologies: ["GPT-4", "Web Scraping", "Embeddings", "RAG", "Healthcare AI"],
                        demo_link: "https://youtu.be/ReinaBoNaWo",
                        source_code_link: "https://github.com/yuyi444/hack-research-proj.git"
                      },
                      { 
                        name: "Bin Fiesta", 
                        emoji: "/images/project-icons/binfiesta.png",
                        description: "In Bin Fiesta, I developed a Google Gemini AI-powered chatbot that provides users with personalized recycling guidance, contributing to our 1st place win in Sustainability at Frontera Hacks. The project combines real-time AI interaction with a user-friendly interface built in Next.js, encouraging eco-friendly practices through accessible recycling information.",
                        technologies: ["Google Gemini AI", "Next.js", "Chatbot", "Sustainability"],
                        demo_link: "https://youtu.be/tXxWyIuusXI",
                        source_code_link: "https://github.com/yuyi444/binfiesta.git"
                      },
                      { 
                        name: "Balanced Perspective", 
                        emoji: "/images/project-icons/newspaper.png",
                        description: "The project, Balanced Perspective, aims to use deep learning for unbiased news summarization. By leveraging a CNN classifier to detect political bias and the PEGASUS transformer model for abstractive summarization, it produces summaries intended to present balanced perspectives across articles from different political spectrums.",
                        technologies: ["Deep Learning", "CNN", "PEGASUS", "NLP", "News Analysis"],
                        demo_link: "https://github.com/yuyi444/deep-learning-proj.git",
                        source_code_link: "https://github.com/yuyi444/deep-learning-proj.git"
                      },
                      { 
                        name: "Album Database", 
                        emoji: "/images/project-icons/albumdatabase.png",
                        description: "This project focuses on transferring data from an original SQLite database to a new relational schema. It involves creating tables for musicians, albums, and instruments, importing data from a CSV, and setting up relationships between these tables to support efficient data retrieval and reporting.",
                        technologies: ["SQLite", "Relational Database", "Data Migration", "CSV Import"],
                        demo_link: "https://github.com/yuyi444/album-database.git",
                        source_code_link: "https://github.com/yuyi444/album-database.git"
                      },
                      { 
                        name: "Image Analysis and Interpolation with Fourier Transforms", 
                        emoji: "/images/project-icons/ct_scan.png",
                        description: "This project utilizes Fourier transforms to analyze and process a lung CT scan, extracting magnitude and phase spectrums and downsampling the image. Linear interpolation and zero-padding techniques are then applied to upsample the image, with mean squared error calculated to evaluate the quality of the interpolated images.",
                        technologies: ["Fourier Transforms", "Image Processing", "CT Scan Analysis", "Interpolation"],
                        demo_link: "https://github.com/yuyi444/digital-image-processing-proj.git",
                        source_code_link: "https://github.com/yuyi444/digital-image-processing-proj.git"
                      },
                      { 
                        name: "Rails Book System", 
                        emoji: "/images/project-icons/booksystem.png",
                        description: "I developed a book club management app providing the organizer, with full CRUD functionality to manage book suggestions, track reading status, and approve or reject recommendations from members. The app allows members to sign up, suggest books, and view read/unread lists, while the organizer can control the visibility of suggestions to maintain a high-quality selection process.",
                        technologies: ["Ruby on Rails", "CRUD", "Book Management", "User Authentication"],
                        demo_link: "https://youtu.be/Tg-l2x3FodU",
                        source_code_link: "https://github.com/yuyi444/rails-book-system.git"
                      },

                    ].map((project, idx) => (
                      <VStack
                        key={idx}
                        spacing={2}
                        cursor="pointer"
                        onClick={() => {
                          const projectRoutes = {
                            "AI Autotab Chrome Extension": "/projects/ai-autotab-chrome-extension",
                            "AI Code Editor": "/projects/ai-code-editor",
                            "AI Search Engine": "/projects/ai-search-engine",
                            "We R Cooked": "/projects/we-r-cooked",
                            "AI Tutoring System": "/projects/ai-tutoring-system",
                            "Bin Fiesta": "/projects/bin-fiesta",
                            "Balanced Perspective": "/projects/balanced-perspective",
                            "Album Database": "/projects/album-database",
                            "Image Analysis and Interpolation with Fourier Transforms": "/projects/image-analysis",
                            "Rails Book System": "/projects/rails-book-system",
                            "Discord Bot": "/projects/discord-bot"
                          };
                          const route = projectRoutes[project.name as keyof typeof projectRoutes];
                          if (route) {
                            window.open(route, '_blank');
                          }
                        }}
                        _hover={{ transform: 'scale(1.05)' }}
                        transition="transform 0.2s"
                      >
                        {project.emoji.startsWith('/') ? (
                          <Image src={project.emoji} alt={`${project.name} Icon`} width={48} height={48} />
                        ) : (
                          <Text fontSize="48px">{project.emoji}</Text>
                        )}
                        <Text fontSize="12px" fontWeight="bold" textAlign="center" color="#000">
                          {project.name}
                        </Text>
                      </VStack>
                    ))}
                  </SimpleGrid>
                </VStack>
              </Box>
            </Box>
          </Box>
        </Box>
      )}



      {showMinesweeper && (
        <MinesweeperWindow onClose={() => setShowMinesweeper(false)} addPoints={(p) => setPoints(prev => prev + p)} />
      )}

      <GrayTaskbar toggleStart={() => setStartMenuOpen(!startMenuOpen)} />

      {startMenuOpen && (
        <Box
          position="fixed"
          bottom="40px"
          left="0"
          bg="#C0C0C0"
          w="200px"
          border="2px solid #808080"
          boxShadow="inset -2px -2px 0 #808080, inset 2px 2px 0 #FFFFFF"
          zIndex={50}
        >
          <VStack align="stretch" spacing={0}>
            {recentItems.length === 0 ? (
              <Box
                px={3}
                py={2}
                fontSize="10px"
                borderBottom="1px solid #808080"
                color="#000"
              >
                No recent items
              </Box>
            ) : recentItems.map(item => (
              <Box
                key={item.label}
                px={3}
                py={2}
                fontSize="10px"
                color="#000"
                cursor="pointer"
                _hover={{ bg: '#FFB3D6' }}
                onClick={() => {
                  item.action();
                  setStartMenuOpen(false);
                }}
              >
                {item.label}
              </Box>
            ))}
          </VStack>
        </Box>
      )}
    </Box>
  );
}
