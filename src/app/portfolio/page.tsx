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
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    name: "Pixel Pets",
    description: "Tamagotchi-style pet game w/ pixel art",
    technologies: ["React", "Canvas", "TypeScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    name: "Y2K Portfolio",
    description: "Retro-themed portfolio with custom styling",
    technologies: ["Next.js", "TypeScript", "Framer Motion"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    name: "AI Tutor",
    description: "GPT-4 RAG app for medical learning",
    technologies: ["Next.js", "Python", "LangChain"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

function ProjectCard({ project }) {
  return (
    <Box
      bg="#fff0f5"
      border="3px solid #000"
      borderRadius="xl"
      boxShadow="6px 6px 0 #000"
      p={5}
      fontFamily="'VT323', monospace"
      transition="transform 0.2s"
      _hover={{ transform: 'translateY(-4px)', bg: '#ffe6f0' }}
    >
      <Heading fontSize="lg" mb={2} fontFamily="'Press Start 2P', monospace">
        {project.name}
      </Heading>
      <Text mb={3} fontSize="sm">{project.description}</Text>
      <HStack spacing={2} wrap="wrap" mb={3}>
        {project.technologies.map((tech, idx) => (
          <Tag key={idx} size="sm" colorScheme="pink">
            {tech}
          </Tag>
        ))}
      </HStack>
      <HStack spacing={2}>
        <Link href={project.demoUrl} isExternal>
          <Button size="xs" bg="#ff69b4" color="white" _hover={{ bg: "#ff1493" }}>
            ▶️ Demo
          </Button>
        </Link>
        <Link href={project.githubUrl} isExternal>
          <Button
            size="xs"
            leftIcon={<FaGithub />}
            bg="black"
            color="white"
            _hover={{ bg: "gray.800" }}
          >
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
      bg="#fef6ff"
      color="#111"
      fontFamily="'VT323', monospace"
      minH="100vh"
      py={12}
      px={[4, 8, 16]}
    >
      {/* Window container */}
      <Box
        bg="#fff"
        border="3px solid #000"
        borderRadius="xl"
        boxShadow="8px 8px 0 #000"
        maxW="6xl"
        mx="auto"
        p={6}
      >
        {/* Header */}
        <Flex justify="space-between" align="center" mb={4}>
          <HStack spacing={2}>
            <Box w={4} h={4} bg="#ffe25b" border="2px solid #000" borderRadius="full" />
            <Box w={4} h={4} bg="#b3e5fc" border="2px solid #000" borderRadius="full" />
            <Box w={4} h={4} bg="#ff9bd6" border="2px solid #000" borderRadius="full" />
          </HStack>
          <Text fontFamily="'Press Start 2P'" fontSize="sm">Yuli.exe</Text>
          <Box fontFamily="'Press Start 2P'" fontSize="sm">✖</Box>
        </Flex>

        {/* Profile */}
        <Flex gap={6} wrap="wrap" mb={6}>
          <Box boxSize="100px" bg="#ffe0f0" border="2px solid #000" borderRadius="md" />
          <Box>
            <Text fontSize="xl" fontWeight="bold">Yuli</Text>
            <Text fontSize="lg">Full Stack Developer</Text>
            <Text maxW="500px">
              👾 Hi! I'm Yuli — I code fun, retro-style UIs, AI tools, and gamified apps.
              I love mixing nostalgia with next-gen tech!
            </Text>
          </Box>
        </Flex>

        {/* Skills */}
        <Box mb={6}>
          <Heading fontSize="md" fontFamily="'Press Start 2P'" mb={2}>
            Skills
          </Heading>
          <HStack spacing={3} wrap="wrap">
            {["React", "TypeScript", "Node.js", "Python", "MongoDB", "PostgreSQL"].map((skill) => (
              <Tag key={skill} colorScheme="purple">{skill}</Tag>
            ))}
          </HStack>
        </Box>

        {/* Projects */}
        <Box>
          <Heading fontSize="md" fontFamily="'Press Start 2P'" mb={4}>
            Projects ({projects.length})
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </SimpleGrid>
        </Box>

        <Button
          onClick={() => router.push('/')}
          mt={8}
          bg="black"
          color="white"
          _hover={{ bg: "gray.800" }}
          fontSize="sm"
        >
          ← Back to Tamagotchi
        </Button>
      </Box>
    </Box>
  );
}
