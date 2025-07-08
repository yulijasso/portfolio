'use client';

import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Tag,
  Link,
  SimpleGrid,
  Image
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    name: "AI Tutoring System",
    description:
      "AI app that uses GPT-4 and RAG to enhance healthcare education. Built for Hack Research 2023.",
    technologies: ["React", "Next.js"],
    demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    githubUrl: "https://github.com/yjasso/grow-up",
  },
  {
    id: 2,
    name: "Portfolio v2",
    description: "My Y2K-styled personal portfolio website.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    githubUrl: "https://github.com/yjasso/portfolio-v2",
  },
  {
    id: 3,
    name: "Pixel Pets",
    description: "A Tamagotchi-style virtual pet game with pixel art.",
    technologies: ["React", "Canvas", "TypeScript"],
    demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    githubUrl: "https://github.com/yjasso/pixel-pets",
  },
  // Add more as needed
];

function ProjectCard({ project }) {
  return (
    <Box
      bg="#ffe6f0"
      border="3px solid #d03c7b"
      borderRadius="lg"
      p={4}
      fontFamily="'VT323', monospace"
      boxShadow="6px 6px 0 #a82f63"
      transition="0.2s ease"
      _hover={{ transform: 'scale(1.03)', bg: "#ffdef0" }}
    >
      <Heading fontSize="md" mb={2} fontFamily="'Press Start 2P', monospace">
        {project.name}
      </Heading>
      <Text fontSize="sm" mb={3}>{project.description}</Text>
      <HStack spacing={2} wrap="wrap" mb={3}>
        {project.technologies.map((tech, idx) => (
          <Tag key={idx} size="sm" colorScheme="pink">{tech}</Tag>
        ))}
      </HStack>
      <HStack spacing={2}>
        <Link href={project.demoUrl} isExternal>
          <Button size="xs" bg="#ff69b4" color="white" _hover={{ bg: "#ff1493" }}>
            ▶️ Demo
          </Button>
        </Link>
        <Link href={project.githubUrl} isExternal>
          <Button size="xs" leftIcon={<FaGithub />} bg="black" color="white" _hover={{ bg: "gray.700" }}>
            GitHub
          </Button>
        </Link>
      </HStack>
    </Box>
  );
}

export default function PortfolioPage() {
  const router = useRouter();

  return (
    <Box
      minH="100vh"
      bg="#fcd6f5"
      fontFamily="'VT323', monospace"
      color="#222"
      py={12}
      px={[4, 8, 16]}
    >
      {/* Retro Window Frame */}
      <Box
        bg="#ffd6e9"
        border="4px solid #d03c7b"
        borderRadius="xl"
        boxShadow="8px 8px 0 #a82f63"
        p={6}
        maxW="6xl"
        mx="auto"
      >
        {/* Window Header with Fake Buttons */}
        <Flex align="center" justify="space-between" mb={4}>
          <HStack spacing={2}>
            <Box w={4} h={4} bg="#ffea00" borderRadius="full" />
            <Box w={4} h={4} bg="#b5ddff" borderRadius="full" />
            <Box w={4} h={4} bg="#ffa9e7" borderRadius="full" />
          </HStack>
          <Text fontSize="lg" fontFamily="'Press Start 2P'">❤️ ENTER 2000s?</Text>
          <Box fontSize="lg" fontFamily="'Press Start 2P'">✖</Box>
        </Flex>

        {/* Profile Info */}
        <VStack align="start" spacing={6}>
          <Flex gap={6} wrap="wrap">
            <Box boxSize="100px" bg="#ffbbec" border="2px solid #000" borderRadius="md" />
            <Box>
              <Text fontSize="2xl" fontWeight="bold">Yuli</Text>
              <Text fontSize="lg">Full Stack Developer</Text>
              <Text maxW="600px">
                Hi! I'm Yuli, a full stack developer passionate about playful, interactive web experiences.
                I love retro UIs, gamified tools, and blending code with creativity.
              </Text>
            </Box>
          </Flex>

          {/* Skills */}
          <Box>
            <Heading fontSize="md" fontFamily="'Press Start 2P'" mb={2}>
              Skills
            </Heading>
            <HStack spacing={3} wrap="wrap">
              {["React", "TypeScript", "Node.js", "Python", "MongoDB", "PostgreSQL"].map(skill => (
                <Tag key={skill} colorScheme="purple">{skill}</Tag>
              ))}
            </HStack>
          </Box>

          {/* Projects */}
          <Box w="100%">
            <Heading fontSize="md" fontFamily="'Press Start 2P'" mb={4}>
              Projects ({projects.length})
            </Heading>
            <SimpleGrid columns={[1, 2, 2]} spacing={6}>
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </SimpleGrid>
          </Box>

          {/* Return Button */}
          <Button
            onClick={() => router.push('/')}
            mt={6}
            bg="black"
            color="white"
            size="sm"
            _hover={{ bg: "gray.700" }}
          >
            ← Back to Tamagotchi
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}
