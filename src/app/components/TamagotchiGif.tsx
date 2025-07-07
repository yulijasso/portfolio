import React, { useEffect, useRef } from 'react';

interface TamagotchiGifProps {
  postId: string;
  width?: string;
  height?: string;
  className?: string;
}

const TamagotchiGif: React.FC<TamagotchiGifProps> = ({ 
  postId, 
  width = "100%", 
  height = "auto",
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Tenor embed script
    const script = document.createElement('script');
    script.src = 'https://tenor.com/embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`tamagotchi-gif-container ${className}`}
      style={{ width, height }}
    >
      <div 
        className="tenor-gif-embed" 
        data-postid={postId} 
        data-share-method="host" 
        data-aspect-ratio="1" 
        data-width="100%"
      >
        <a href={`https://tenor.com/view/tamagotchi-bandai-gif-${postId}`}>
          Tamagotchi Bandai GIF
        </a>
        from <a href="https://tenor.com/search/tamagotchi-gifs">Tamagotchi GIFs</a>
      </div>
    </div>
  );
};

export default TamagotchiGif; 