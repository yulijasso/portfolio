'use client'

import { useState, useEffect, useRef } from 'react'
import PetSprite from './components/PetSprite'
import TamagotchiGif from './components/TamagotchiGif'
import { useRouter } from 'next/navigation'

interface Project {
  id: number
  name: string
  description: string
  technologies: string[]
  experience: number
}

interface PetStage {
  name: string
  sprite: string
  minExperience: number
  description: string
}

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<'main' | 'feed' | 'games' | 'portfolio' | 'stats'>('main')
  const [petExperience, setPetExperience] = useState(0)
  const [petHunger, setPetHunger] = useState(100)
  const [petHappiness, setPetHappiness] = useState(100)
  const [petEnergy, setPetEnergy] = useState(100)
  const [isEvolving, setIsEvolving] = useState(false)
  const [newProject, setNewProject] = useState('')
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      name: "Grow Up",
      description: "A gamified career tracker with Tamagotchi mechanics.",
      technologies: ["React", "Next.js", "TypeScript", "Vercel", "MongoDB"],
      experience: 60
    },
    {
      id: 2,
      name: "Portfolio v2",
      description: "Personal portfolio with Y2K/retro vibes.",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      experience: 50
    },
    {
      id: 3,
      name: "DevDeck",
      description: "Flashcard app for developers.",
      technologies: ["React", "Next.js", "TypeScript", "MongoDB"],
      experience: 45
    },
    {
      id: 4,
      name: "LeetHub",
      description: "Chrome extension to sync LeetCode with GitHub.",
      technologies: ["JavaScript", "Chrome Extension", "GitHub API"],
      experience: 40
    },
    {
      id: 5,
      name: "CodeConnect",
      description: "Social platform for developers to share code.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      experience: 38
    },
    {
      id: 6,
      name: "Pixel Pets",
      description: "Virtual pet game with pixel art.",
      technologies: ["React", "Canvas", "TypeScript"],
      experience: 35
    },
    {
      id: 7,
      name: "Y2K Blog",
      description: "Blog with Y2K/retro design.",
      technologies: ["Next.js", "MDX", "Tailwind"],
      experience: 32
    },
    {
      id: 8,
      name: "OpenResume",
      description: "Free resume builder.",
      technologies: ["React", "Next.js", "Chakra UI"],
      experience: 30
    },
    {
      id: 9,
      name: "Tamagotchi CLI",
      description: "Tamagotchi game in the terminal.",
      technologies: ["Node.js", "Inquirer.js"],
      experience: 28
    },
    {
      id: 10,
      name: "Neon Notes",
      description: "Minimal note-taking app.",
      technologies: ["React", "TypeScript", "Firebase"],
      experience: 25
    },
    {
      id: 11,
      name: "Retro Weather",
      description: "Weather app with retro UI.",
      technologies: ["React", "OpenWeatherMap API"],
      experience: 22
    },
    {
      id: 12,
      name: "Synthwave Timer",
      description: "Pomodoro timer with synthwave theme.",
      technologies: ["React", "Styled Components"],
      experience: 20
    }
  ])
  const [gameScore, setGameScore] = useState(0)
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')
  const [petLevel, setPetLevel] = useState(1)
  const [petAnimation, setPetAnimation] = useState<'idle' | 'dance' | 'sleep' | 'eat' | 'play'>('idle')
  const [interactionCooldown, setInteractionCooldown] = useState(0)
  const [showPetMessage, setShowPetMessage] = useState(false)
  const [currentPetMessage, setCurrentPetMessage] = useState('')
  const [useGifPet, setUseGifPet] = useState(true)
  const [timer, setTimer] = useState(0)
  const [timerActive, setTimerActive] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const [showFeedMsg, setShowFeedMsg] = useState(false)
  const router = useRouter();
  const [petDead, setPetDead] = useState(false);
  const [lastFed, setLastFed] = useState(Date.now());

  const totalExperience = projects.reduce((sum, project) => sum + project.experience, 0)

  useEffect(() => {
    // Decrease stats over time
    const interval = setInterval(() => {
      setPetHunger(prev => Math.max(0, prev - 1))
      setPetHappiness(prev => Math.max(0, prev - 0.5))
      setPetEnergy(prev => Math.max(0, prev - 0.3))
    }, 30000) // Every 30 seconds

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!petDead) {
      const interval = setInterval(() => {
        if (Date.now() - lastFed > 24 * 60 * 60 * 1000) {
          setPetDead(true);
        }
      }, 60000); // check every minute
      return () => clearInterval(interval);
    }
  }, [lastFed, petDead]);

  const feedProject = () => {
    if (newProject.trim()) {
      // Generate random experience based on project name length and complexity
      const baseExp = Math.floor(newProject.length / 2) + 10
      const randomBonus = Math.floor(Math.random() * 15)
      const experience = Math.min(50, baseExp + randomBonus)
      
      // Generate random technologies based on common patterns
      const techOptions = [
        ["React", "TypeScript", "Tailwind"],
        ["Node.js", "Express", "MongoDB"],
        ["Python", "Django", "PostgreSQL"],
        ["Vue.js", "Vite", "Pinia"],
        ["Next.js", "Prisma", "Vercel"],
        ["Flutter", "Dart", "Firebase"]
      ]
      const randomTech = techOptions[Math.floor(Math.random() * techOptions.length)]
      
      const project: Project = {
        id: Date.now(),
        name: newProject,
        description: `A ${newProject.toLowerCase()} project!`,
        technologies: randomTech,
        experience: experience
      }
      
      setProjects([project, ...projects])
      setPetExperience(prev => prev + project.experience)
      setPetHunger(prev => Math.min(100, prev + 20))
      setPetHappiness(prev => Math.min(100, prev + 15))
      setNewProject('')
      
      setShowNotification(true)
      setNotificationMessage(`Fed ${project.name} to your pet! +${project.experience} XP`)
    }
  }

  const playGame = () => {
    const newScore = Math.floor(Math.random() * 50) + 10
    setGameScore(prev => prev + newScore)
    setPetHappiness(prev => Math.min(100, prev + 25))
    setPetEnergy(prev => Math.max(0, prev - 10))
    
    setShowNotification(true)
    setNotificationMessage(`Game score: ${newScore}! Happiness +25`)
  }

  const showNotificationMessage = (message: string) => {
    setNotificationMessage(message)
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
  }

  const interactWithPet = () => {
    if (petDead || interactionCooldown > 0) return;
    
    setInteractionCooldown(2)
    setPetHappiness(prev => Math.min(100, prev + 10))
    
    const messages = [
      'Yay! 🎉',
      'Love you! 💕',
      'Play time! 🎮',
      'So happy! 😊',
      'Best friend! 🐾'
    ]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)]
    
    setCurrentPetMessage(randomMessage)
    setShowPetMessage(true)
    
    // Change animation temporarily
    setPetAnimation('dance')
    setTimeout(() => setPetAnimation('idle'), 1000)
    
    setTimeout(() => {
      setShowPetMessage(false)
    }, 2000)
    
    setTimeout(() => {
      setInteractionCooldown(0)
    }, 2000)
  }

  const resetTimer = () => setTimer(0)

  const feedPetWithTimer = () => {
    if (timer > 0) {
      setPetExperience((xp) => xp + Math.floor(timer / 5) + 5)
      setPetHappiness((h) => Math.min(100, h + Math.floor(timer / 10) + 5))
      setPetEnergy((e) => Math.min(100, e + Math.floor(timer / 15) + 5))
      setShowFeedMsg(true)
      setTimeout(() => setShowFeedMsg(false), 2000)
      setTimer(0)
      setTimerActive(false)
      setLastFed(Date.now())
    }
  }

  const revivePet = () => {
    setPetHunger(100);
    setPetHappiness(100);
    setPetEnergy(100);
    setPetDead(false);
    setLastFed(Date.now());
  };

  const renderMainScreen = () => (
    <div className="screen-content" style={{ position: 'relative' }}>
      <div className="pet-container" style={{ opacity: petDead ? 0.3 : 1, position: 'relative' }}>
        <TamagotchiGif 
          postId="24127301" 
          width="200px" 
          height="200px"
          className="tamagotchi-pet-gif"
        />
        {showPetMessage && (
          <div className="pet-message" style={{
            position: 'absolute',
            top: '-30px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#ff69b4',
            color: '#fff',
            padding: '4px 8px',
            borderRadius: '8px',
            fontSize: '8px',
            whiteSpace: 'nowrap',
            zIndex: 10,
            animation: 'bounce 0.5s ease-in-out'
          }}>
            {currentPetMessage}
          </div>
        )}
        {petDead && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.7)',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '16px',
            textAlign: 'center',
            fontSize: 20,
            zIndex: 100
          }}>
            <div style={{ marginBottom: 16 }}>💀 Your pet has died.</div>
            <button className="tamagotchi-button" onClick={revivePet} style={{ fontSize: 16, background: '#ff00cc' }}>
              Revive Pet
            </button>
          </div>
        )}
      </div>
      
      <div className="status-bars">
        <div className="status-bar">
          <div className="status-label">Hunger</div>
          <div className="status-fill" style={{ width: `${petHunger}%` }} />
        </div>
        <div className="status-bar">
          <div className="status-label">Happiness</div>
          <div className="status-fill" style={{ width: `${petHappiness}%` }} />
        </div>
        <div className="status-bar">
          <div className="status-label">Energy</div>
          <div className="status-fill" style={{ width: `${petEnergy}%` }} />
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '15px' }}>
        <div style={{ fontSize: '12px', marginBottom: '5px' }}>
          Experience: {petExperience}
        </div>
        <div style={{ fontSize: '10px', color: '#666' }}>
          Projects: {projects.length} | Total XP: {totalExperience}
        </div>
      </div>
    </div>
  )

  const renderFeedScreen = () => (
    <div className="screen-content">
      <div className="portfolio-title">Coding Timer</div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, margin: '32px 0' }}>
        <div style={{ fontSize: 48, fontFamily: 'VT323, monospace', color: '#ff00cc', letterSpacing: 2, textShadow: '0 0 8px #ff00cc' }}>
          {`${String(Math.floor(timer / 60)).padStart(2, '0')}:${String(timer % 60).padStart(2, '0')}`}
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button className="tamagotchi-button" onClick={() => setTimerActive((a) => !a)}>
            {timerActive ? 'Pause' : 'Start'}
          </button>
          <button className="tamagotchi-button" onClick={resetTimer} disabled={timer === 0}>
            Reset
          </button>
        </div>
        <button 
          className="tamagotchi-button" 
          style={{ marginTop: 18, background: '#00eaff', color: '#fff', fontWeight: 'bold' }}
          onClick={feedPetWithTimer}
          disabled={timer === 0}
        >
          Feed Pet
        </button>
        {showFeedMsg && (
          <div style={{ color: '#00eaff', fontSize: 14, marginTop: 10, textShadow: '0 0 6px #00eaff' }}>
            Your pet is happy! +XP
          </div>
        )}
      </div>
      <div style={{ fontSize: 12, color: '#888', textAlign: 'center', marginTop: 16 }}>
        Start the timer while you code. When you finish, feed your pet based on your coding streak!
      </div>
    </div>
  )

  const renderGamesScreen = () => (
    <div className="screen-content">
      <div className="portfolio-title">Mini Games</div>
      
      <div className="mini-game">
        <div className="game-area">
          <div style={{ fontSize: '16px', marginBottom: '10px' }}>
            Skill Challenge
          </div>
          <div style={{ fontSize: '24px', marginBottom: '10px' }}>
            🎯
          </div>
          <div style={{ fontSize: '12px' }}>
            Test your coding skills!
          </div>
        </div>
        
        <div className="game-controls">
          <button 
            className="tamagotchi-button" 
            onClick={playGame}
            style={{ width: 'auto', padding: '8px 16px' }}
          >
            Play Game
          </button>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '15px' }}>
          <div style={{ fontSize: '12px' }}>High Score: {gameScore}</div>
        </div>
      </div>
    </div>
  )

  const renderPortfolioScreen = () => (
    <div className="screen-content">
      <div className="portfolio-title">Portfolio</div>
      <button 
        className="tamagotchi-button" 
        style={{ alignSelf: 'flex-end', marginBottom: 10, fontSize: 12 }}
        onClick={() => router.push('/portfolio')}
      >
        View Full Portfolio
      </button>
      {/* Professional About Section */}
      <div className="portfolio-section about-section">
        <div className="about-profile-row">
          <div className="about-profile-pic" />
          <div className="about-profile-text">
            <div className="about-name">Yuli</div>
            <div className="about-title">Full Stack Developer</div>
            <div className="about-summary">
              Hi! I'm Yuli, a full stack developer passionate about building playful, interactive web experiences. I specialize in React, Next.js, and TypeScript, and love blending creativity with code. I enjoy working on gamified apps, retro UIs, and anything that makes the web more fun and engaging. Let's build something amazing together!
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-section">
        <div className="portfolio-title">Skills</div>
        <div>
          <span className="skill-item">React</span>
          <span className="skill-item">TypeScript</span>
          <span className="skill-item">Node.js</span>
          <span className="skill-item">Python</span>
          <span className="skill-item">MongoDB</span>
          <span className="skill-item">PostgreSQL</span>
        </div>
      </div>

      <div className="portfolio-section">
        <div className="portfolio-title">Projects ({projects.length})</div>
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <div className="project-title">{project.name}</div>
            <div className="project-description">{project.description}</div>
            <div className="project-tech">XP: {project.experience} | {project.technologies.join(', ')}</div>
          </div>
        ))}
      </div>

      <div className="portfolio-section">
        <div className="portfolio-title">About</div>
        <div style={{ fontSize: '11px', lineHeight: '1.4' }}>
          Full Stack Developer with {totalExperience} years of experience.
          Specializing in React, Node.js, and modern web technologies.
          Available for hire and always learning new skills!
        </div>
      </div>
    </div>
  )

  const renderStatsScreen = () => (
    <div className="screen-content">
      <div className="portfolio-title">Statistics</div>
      
      <div className="stats-display">
        <div className="stat-item">
          <div className="stat-value">{petExperience}</div>
          <div>Total XP</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{projects.length}</div>
          <div>Projects</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{gameScore}</div>
          <div>Game Score</div>
        </div>
      </div>

      <div className="portfolio-section">
        <div className="portfolio-title">Contact</div>
        <div style={{ fontSize: '11px', lineHeight: '1.4' }}>
          📧 john.doe@email.com<br/>
          🐙 github.com/johndoe<br/>
          💼 linkedin.com/in/johndoe<br/>
          📱 (555) 123-4567
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen p-4">
      {/* Notification */}
      <div className={`notification ${showNotification ? 'show' : ''}`}>
        {notificationMessage}
      </div>

      {/* Tamagotchi Device */}
      <div className="tamagotchi-device">
        {/* Screen */}
        <div className="tamagotchi-screen">
          {currentScreen === 'main' && renderMainScreen()}
          {currentScreen === 'feed' && renderFeedScreen()}
          {currentScreen === 'games' && renderGamesScreen()}
          {currentScreen === 'portfolio' && renderPortfolioScreen()}
          {currentScreen === 'stats' && renderStatsScreen()}
        </div>

        {/* Buttons */}
        <div className="button-container">
          <button 
            className="tamagotchi-button"
            onClick={() => setCurrentScreen('feed')}
            title="Feed"
          >
            🍽️
          </button>
          <button 
            className="tamagotchi-button"
            onClick={() => setCurrentScreen('games')}
            title="Games"
          >
            🎮
          </button>
          <button 
            className="tamagotchi-button"
            onClick={() => setCurrentScreen('portfolio')}
            title="Portfolio"
          >
            📁
          </button>
          <button 
            className="tamagotchi-button"
            onClick={() => setCurrentScreen('stats')}
            title="Stats"
          >
            📊
          </button>
          <button 
            className="tamagotchi-button"
            onClick={() => setCurrentScreen('main')}
            title="Home"
          >
            🏠
          </button>
          <button 
            className="tamagotchi-button"
            onClick={() => showNotificationMessage('Pet is sleeping... Zzz')}
            title="Sleep"
          >
            😴
          </button>
        </div>
      </div>

      {/* Instructions */}
      <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '12px', color: '#666' }}>
        <div>🎮 Use the buttons to navigate and interact with your career pet!</div>
        <div>🍽️ Feed it projects to help it grow and evolve</div>
        <div>📁 View your portfolio and skills</div>
        <div>📊 Check your career statistics</div>
      </div>
    </div>
  )
}
