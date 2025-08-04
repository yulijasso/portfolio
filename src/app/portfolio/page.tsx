'use client';

import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
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

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Box
      bg="#E0E0E0"
      border="2px solid #808080"
      boxShadow="inset -2px -2px 0 #808080, inset 2px 2px 0 #FFFFFF"
      p={4}
      fontFamily="'Press Start 2P', monospace"
      transition="transform 0.2s"
      _hover={{
        transform: 'translateY(-3px)',
        bg: '#F0F0F0'
      }}
    >
      <Heading fontSize="md" mb={2} color="#000">
        {project.name}
      </Heading>
      <Text mb={3} fontSize="xs" color="#333">{project.description}</Text>
      <HStack spacing={2} wrap="wrap" mb={3}>
        {project.technologies.map((tech, idx) => (
          <Tag
            key={idx}
            size="sm"
            bg="#C0C0C0"
            border="2px outset #FFFFFF"
            color="#000"
            fontFamily="'Press Start 2P', monospace"
          >
            {tech}
          </Tag>
        ))}
      </HStack>
      <HStack spacing={2}>
        <Link href={project.demoUrl} isExternal>
          <Button
            size="xs"
            bg="#C0C0C0"
            color="#000"
            border="2px outset #FFFFFF"
            fontSize="10px"
            fontFamily="'Press Start 2P', monospace"
            _hover={{
              border: '2px inset #FFFFFF',
              bg: '#D0D0D0'
            }}
          >
            ▶️ Demo
          </Button>
        </Link>
        <Link href={project.githubUrl} isExternal>
          <Button
            size="xs"
            leftIcon={<FaGithub />}
            bg="#000"
            color="#FFF"
            fontSize="10px"
            fontFamily="'Press Start 2P', monospace"
            _hover={{ bg: "#333" }}
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
      bg="#BFBFBF"
      color="#000"
      fontFamily="'Press Start 2P', monospace"
      minH="100vh"
      py={8}
      px={[4, 8, 16]}
    >
      <Box
        bg="#C0C0C0"
        border="3px solid #808080"
        boxShadow="inset -3px -3px 0 #808080, inset 3px 3px 0 #FFFFFF"
        maxW="6xl"
        mx="auto"
      >
        {/* Title bar */}
        <Flex
          bg="linear-gradient(to bottom, #FF99CC, #FF69B4)"
          px={4}
          py={2}
          borderBottom="2px solid #808080"
          justify="space-between"
          align="center"
        >
          <Text color="#FFF" fontSize="md" fontStyle="italic">
            💖 Yuli.exe
          </Text>
          <Box
            bg="#FF85C1"
            border="2px outset #fff"
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

        {/* Content */}
        <Box p={8}>
          {/* Profile */}
          <Flex gap={6} wrap="wrap" mb={6}>
            <Box boxSize="100px" bg="#FFE0F0" border="2px solid #808080" />
            <Box>
              <Text fontSize="20px" fontWeight="bold" mb={1}>
                Yuli
              </Text>
              <Text fontSize="14px" mb={3}>
                Full Stack Developer
              </Text>
              <Text maxW="500px" fontSize="12px">
                👾 Hi! I&apos;m Yuli — I code fun, retro-style UIs, AI tools, and gamified apps.
                I love mixing nostalgia with next-gen tech!
              </Text>
            </Box>
          </Flex>

          {/* Skills */}
          <Box mb={6}>
            <Heading
              fontSize="14px"
              mb={2}
              borderBottom="2px solid #808080"
              display="inline-block"
              pb={1}
            >
              Skills
            </Heading>
            <HStack spacing={2} wrap="wrap">
              {["React", "TypeScript", "Node.js", "Python", "MongoDB", "PostgreSQL"].map((skill) => (
                <Tag
                  key={skill}
                  bg="#C0C0C0"
                  border="2px outset #FFFFFF"
                  color="#000"
                  fontSize="10px"
                  fontFamily="'Press Start 2P', monospace"
                >
                  {skill}
                </Tag>
              ))}
            </HStack>
          </Box>

          {/* Projects */}
          <Box>
            <Heading
              fontSize="14px"
              mb={4}
              borderBottom="2px solid #808080"
              display="inline-block"
              pb={1}
            >
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
            bg="#C0C0C0"
            color="#000"
            border="2px outset #FFFFFF"
            fontSize="10px"
            fontFamily="'Press Start 2P', monospace"
            _hover={{
              border: '2px inset #FFFFFF',
              bg: '#D0D0D0'
            }}
          >
            ← Back to Tamagotchi
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
