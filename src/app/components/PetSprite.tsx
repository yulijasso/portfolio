import React from 'react';

interface PetSpriteProps {
  stage: number;
  animation: 'idle' | 'dance' | 'sleep' | 'eat' | 'play';
  isEvolving: boolean;
  onClick?: () => void;
  interactionCooldown: number;
}

const PetSprite: React.FC<PetSpriteProps> = ({ 
  stage, 
  animation, 
  isEvolving, 
  onClick, 
  interactionCooldown 
}) => {
  // Calculate sprite position based on stage
  const getSpriteStyle = () => {
    const spriteWidth = 32; // Assuming each sprite frame is 32px wide
    const spriteHeight = 32; // Assuming each sprite frame is 32px tall
    const framesPerRow = 4; // Assuming 4 frames per row in the sprite sheet
    
    // Map stage to sprite position (adjust based on your sprite sheet layout)
    const stagePositions = {
      1: { x: 0, y: 0 },    // Baby stage
      2: { x: 1, y: 0 },    // Child stage  
      3: { x: 2, y: 0 },    // Teen stage
      4: { x: 3, y: 0 },    // Adult stage
      5: { x: 0, y: 1 },    // Senior stage
    };
    
    const position = stagePositions[stage as keyof typeof stagePositions] || stagePositions[1];
    
    return {
      width: `${spriteWidth}px`,
      height: `${spriteHeight}px`,
      backgroundImage: 'url(/Grow%20Up.png)',
      backgroundPosition: `-${position.x * spriteWidth}px -${position.y * spriteHeight}px`,
      backgroundSize: 'auto',
      imageRendering: 'pixelated' as const,
      transform: 'scale(4)', // Scale up the sprite
      transformOrigin: 'center',
      cursor: interactionCooldown > 0 ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s ease',
      filter: isEvolving ? 'brightness(1.5) hue-rotate(180deg)' : 'none',
      animation: isEvolving ? 'evolve 1s ease-in-out' : 
                 animation === 'dance' ? 'dance 0.8s ease-in-out infinite' :
                 animation === 'sleep' ? 'sleep 2s ease-in-out infinite' :
                 animation === 'eat' ? 'eat 0.6s ease-in-out infinite' :
                 animation === 'play' ? 'play 0.7s ease-in-out infinite' :
                 'idle 2s ease-in-out infinite',
    };
  };

  return (
    <div 
      className="pet-sprite-container"
      onClick={onClick}
      style={getSpriteStyle()}
    />
  );
};

export default PetSprite; 