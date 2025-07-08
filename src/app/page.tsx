'use client'

import { useState, useEffect, useRef } from 'react'
import TamagotchiGif from './components/TamagotchiGif'
import { useRouter } from 'next/navigation'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

interface Project {
  id: number
  name: string
  description: string
  technologies: string[]
  experience: number
}

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<'main' | 'feed' | 'games' | 'portfolio' | 'stats'>('main')
  const [petExperience, setPetExperience] = useState(0)
  const [petHappiness, setPetHappiness] = useState(100)
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
  ])
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')
  const [interactionCooldown, setInteractionCooldown] = useState(0)
  const [showPetMessage, setShowPetMessage] = useState(false)
  const [currentPetMessage, setCurrentPetMessage] = useState('')
  const router = useRouter()
  const [petDead, setPetDead] = useState(false)
  const [lastFed, setLastFed] = useState(Date.now())
  const [leetQuestionName, setLeetQuestionName] = useState('')
  const [showIntro, setShowIntro] = useState(true)

  // Typewriter effect state
  const typewriterText = `Welcome to My Portfolio!\nSoftware/AI Engineer & Creative Coder\nHi! I'm a passionate software engineer who loves building innovative web applications. This portfolio showcases my journey through a unique Tamagotchi-style interface.`
  const [typed, setTyped] = useState('')
  const [typingDone, setTypingDone] = useState(false)

  const totalExperience = projects.reduce((sum, project) => sum + project.experience, 0)

  useEffect(() => {
    // Decrease happiness over time
    const interval = setInterval(() => {
      setPetHappiness(prev => Math.max(0, prev - 0.5))
    }, 30000) // Every 30 seconds

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!petDead) {
      const interval = setInterval(() => {
        if (Date.now() - lastFed > 24 * 60 * 60 * 1000) {
          setPetDead(true)
        }
      }, 60000) // check every minute
      return () => clearInterval(interval)
    }
  }, [lastFed, petDead])

  useEffect(() => {
    if (!showIntro) return
    setTyped('')
    setTypingDone(false)
    let i = 0
    const type = () => {
      if (i <= typewriterText.length) {
        setTyped(typewriterText.slice(0, i))
        i++
        setTimeout(type, 18)
      } else {
        setTypingDone(true)
      }
    }
    type()
    // eslint-disable-next-line
  }, [showIntro])

  const feedProject = () => {
    if (newProject.trim()) {
      const baseExp = Math.floor(newProject.length / 2) + 10
      const randomBonus = Math.floor(Math.random() * 15)
      const experience = Math.min(50, baseExp + randomBonus)

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
      setPetHappiness(prev => Math.min(100, prev + 15))
      setNewProject('')

      setShowNotification(true)
      setNotificationMessage(`Fed ${project.name} to your pet! +${project.experience} XP`)
    }
  }

  const showNotificationMessage = (message: string) => {
    setNotificationMessage(message)
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
  }

  const interactWithPet = () => {
    if (petDead || interactionCooldown > 0) return

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

    setTimeout(() => setShowPetMessage(false), 2000)
    setTimeout(() => {
      setInteractionCooldown(0)
    }, 2000)
  }

  const revivePet = () => {
    setPetHappiness(100)
    setPetDead(false)
    setLastFed(Date.now())
  }

  const submitLeetQuestion = () => {
    if (leetQuestionName.trim()) {
      setPetHappiness(prev => Math.min(100, prev + 10))
      setShowNotification(true)
      setNotificationMessage(`LeetCode: +10 Happiness for "${leetQuestionName.trim()}"!`)
      setLeetQuestionName('')
    }
  }

  const pastelColors = [
    '#FFB3BA', // pastel pink
    '#BAE1FF', // pastel blue
    '#BAFFC9', // pastel green
    '#FFFFBA', // pastel yellow
    '#FFCBA4', // pastel peach
  ]

  const renderHearts = () => {
    const heartsCount = 5
    const heartsFilled = Math.round((petHappiness / 100) * heartsCount)

    return (
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 18 }}>
        {[...Array(heartsCount)].map((_, idx) => {
          const color = pastelColors[idx % pastelColors.length]
          const filled = idx < heartsFilled

          return filled ? (
            <FaHeart
              key={idx}
              color={color}
              size={32}
              style={{
                filter: `drop-shadow(0 0 3px ${color})`,
                imageRendering: 'pixelated',
                stroke: '#fff',
                strokeWidth: 1,
                transition: 'color 0.3s ease',
              }}
              className="pixel-heart"
            />
          ) : (
            <FaRegHeart
              key={idx}
              color={color}
              size={32}
              style={{
                filter: `drop-shadow(0 0 2px ${color})`,
                imageRendering: 'pixelated',
                transition: 'color 0.3s ease',
              }}
              className="pixel-heart-outline"
            />
          )
        })}
        <style jsx>{`
          .pixel-heart, .pixel-heart-outline {
            user-select: none;
            cursor: default;
            image-rendering: crisp-edges;
            image-rendering: pixelated;
            text-shadow:
              -1px -1px 0 #fff,
              1px -1px 0 #fff,
              -1px 1px 0 #fff,
              1px 1px 0 #fff;
          }
        `}</style>
      </div>
    )
  }

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

      {/* Only Happiness Hearts Status */}
      {renderHearts()}

      {/* Removed Experience display */}

      <div style={{ textAlign: 'center', marginTop: '15px', fontFamily: "'Press Start 2P', cursive" }}>
        <div style={{ fontSize: '10px', color: '#666' }}>
          Projects: {projects.length} | Total XP: {totalExperience}
        </div>
      </div>
    </div>
  )

  const renderFeedScreen = () => (
    <div className="screen-content">
      <div className="portfolio-title">Coding Timer</div>
      {/* ...keep your existing feed screen here */}
    </div>
  )

  const renderGamesScreen = () => (
    <div className="screen-content">
      <div className="portfolio-title">Games</div>
      {/* ...keep your existing games screen here */}
    </div>
  )

  const renderPortfolioScreen = () => (
    <div className="screen-content">
      <div className="portfolio-title">Portfolio</div>
      {/* ...keep your existing portfolio screen here */}
    </div>
  )

  const renderStatsScreen = () => (
    <div className="screen-content">
      <div className="portfolio-title">Statistics</div>
      {/* ...keep your existing stats screen here */}
    </div>
  )

  const renderIntroScreen = () => {
    const lines = typed.split('\n')
    return (
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        height: '100%', minHeight: 520, width: '100%', background: '#fff0fa', borderRadius: 24, border: '2px solid #ffb3d6', boxShadow: 'none', position: 'relative', padding: 0, fontFamily: 'VT323, monospace',
      }}>
        <div style={{ fontSize: 44, marginBottom: 16, color: '#ff69b4', textShadow: 'none' }}>💖</div>
        <div style={{
          fontSize: 15,
          color: '#d72660',
          marginBottom: 18,
          textAlign: 'center',
          maxWidth: 340,
          fontFamily: 'inherit',
          whiteSpace: 'pre-line',
          minHeight: 120,
          letterSpacing: 1
        }}>
          <div style={{ fontSize: 20, color: '#ff69b4', fontWeight: 700, marginBottom: 14, textAlign: 'center' }}>{lines[0]}</div>
          {lines.length > 1 && <div style={{ fontSize: 14, color: '#00bcd4', fontWeight: 700, marginBottom: 16, textAlign: 'center' }}>{lines[1]}</div>}
          {lines.length > 2 && <div style={{ fontSize: 11, color: '#d72660', fontWeight: 400, marginTop: 8, textAlign: 'center' }}>{lines.slice(2).join('\n')}</div>}
        </div>
        {typingDone && (
          <button
            className="tamagotchi-button"
            style={{ fontSize: 15, padding: '10px 28px', background: '#ff69b4', color: '#fff', borderRadius: 12, boxShadow: 'none', marginTop: 8, fontFamily: 'inherit', border: 'none' }}
            onClick={() => setShowIntro(false)}
          >
            Start
          </button>
        )}
        <div style={{ position: 'absolute', bottom: 12, right: 0, left: 0, textAlign: 'center', fontSize: 9, color: '#bbb', letterSpacing: 1, fontFamily: 'inherit' }}>
          © 2024 Yuli's Portfolio
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-4" style={{ fontFamily: "'Press Start 2P', cursive" }}>
      {/* Notification */}
      <div className={`notification ${showNotification ? 'show' : ''}`}>
        {notificationMessage}
      </div>

      {/* Tamagotchi Device */}
      <div className="tamagotchi-device">
        {/* Screen */}
        <div className="tamagotchi-screen">
          {showIntro ? renderIntroScreen() : (
            <>
              {currentScreen === 'main' && renderMainScreen()}
              {currentScreen === 'feed' && renderFeedScreen()}
              {currentScreen === 'games' && renderGamesScreen()}
              {currentScreen === 'portfolio' && renderPortfolioScreen()}
              {currentScreen === 'stats' && renderStatsScreen()}
            </>
          )}
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
            😊
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
            onClick={() => router.push('/portfolio')}
            title="Portfolio"
          >
            📁
          </button>
          <button
            className="tamagotchi-button"
            onClick={() => setCurrentScreen('stats')}
            title="Stats"
          >
            ✉️
          </button>
        </div>
      </div>

      {/* Instructions */}
      <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '12px', color: '#666' }}>
        <div>🎮 Use the buttons to navigate and interact with your career pet!</div>
        <div>🍽️ Feed it projects to help it grow and evolve</div>
        <div>📁 View Yuli's portfolio and skills</div>
        <div>📊 Check your career statistics</div>
      </div>
    </div>
  )
}
