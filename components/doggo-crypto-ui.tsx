'use client'

import React, { useState, useEffect } from 'react'
import { TwitterIcon, SendIcon, InstagramIcon, DiscIcon, InfoIcon, MenuIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

// Custom colorful rocket icon with animation
export const ColorfulRocketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-rocket">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" fill="#FF6B6B" stroke="#FF4757"/>
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" fill="#5352ED" stroke="#3742FA"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" fill="#FF9FF3" stroke="#F368E0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" fill="#FECA57" stroke="#FF9F43"/>
    <circle cx="7" cy="17" r="1" fill="#FFFFFF" />
  </svg>
)

// Custom Play Square Icon
const PlaySquareIcon = ({ size = 100 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="10" fill="url(#pinkGradient)" stroke="white" strokeWidth="4"/>
    <path d="M65 50L42.5 64.952V35.048L65 50Z" fill="white"/>
    <defs>
      <linearGradient id="pinkGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF69B4"/>
        <stop offset="1" stopColor="#FF1493"/>
      </linearGradient>
    </defs>
  </svg>
)

export function DoggoCryptoUi() {
  const [isBlinking, setIsBlinking] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    const timer = setTimeout(() => {
      setIsBlinking(false);
    }, 5000);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      clearTimeout(timer);
    };
  }, []);

  const handleHamburgerClick = () => {
    router.push('/menu');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202024-10-01%2014.21.59%20-%20A%20cartoon%20image%20of%20a%20wealthy%20dog%20trading%20cryptocurrency%20on%20SOL%20(Solana)%20coin.%20The%20dog%20is%20sitting%20in%20front%20of%20multiple%20computer%20screens%20filled%20with%20gra-ElFC6SnwU9GC7AMTjNnfK9Y1icQCIx.webp" 
          alt="Cartoon dog trading cryptocurrency" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

      {/* Logo and Website Name */}
      <div className={`absolute top-4 left-4 z-30 flex ${isMobile ? 'flex-row items-center' : 'flex-col items-center'}`}>
        <div className={`logo-container ${isMobile ? 'mr-3' : 'mb-3'}`}>
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202024-10-01%2014.45.27%20-%20A%20playful,%20cartoon-style%20dog%20logo%20featuring%20a%20cute,%20happy%20dog%20with%20large%20expressive%20eyes,%20floppy%20ears,%20and%20a%20friendly%20smile.%20The%20dog%20is%20sitting%20with%20i-g8e0uQLN2N33kDgfUpUx5If4DLDjGJ.webp" 
            alt="Doggo Logo" 
            className={`rounded-full animate-pulse-glow ${isMobile ? 'w-16 h-16' : 'w-40 h-40'}`}
          />
        </div>
        <h1 className={`font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x doggo-text ${isMobile ? 'text-2xl' : 'text-5xl'}`} style={{
          fontFamily: "'Russo One', sans-serif",
        }}>
          DOGGO
        </h1>
      </div>

      {/* Top right buttons or Hamburger */}
      <div className="absolute top-4 right-4 z-30">
        {isMobile ? (
          <button onClick={handleHamburgerClick} className="text-white">
            <MenuIcon size={32} />
          </button>
        ) : (
          <div className="flex space-x-5">
            <div className="button" onTouchStart={() => {}}>
              <a href="#" className={isBlinking ? 'animate-blink' : ''}>
                <ColorfulRocketIcon />
                <span>LAUNCHING SOON</span>
              </a>
            </div>
            <div className="social-button" onTouchStart={() => {}}>
              <a href="#" aria-label="Twitter">
                <TwitterIcon className="w-6 h-6" />
              </a>
            </div>
            <div className="social-button" onTouchStart={() => {}}>
              <a href="#" aria-label="Telegram">
                <SendIcon className="w-6 h-6" />
              </a>
            </div>
            <div className="social-button" onTouchStart={() => {}}>
              <a href="#" aria-label="Instagram">
                <InstagramIcon className="w-6 h-6" />
              </a>
            </div>
            <div className="social-button" onTouchStart={() => {}}>
              <a href="#" aria-label="Discord">
                <DiscIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Info button */}
      <div className="absolute bottom-4 right-4 z-30">
        <div className="social-button info-button" onTouchStart={() => {}}>
          <a href="#" aria-label="Info">
            <InfoIcon className="w-8 h-8" />
          </a>
        </div>
      </div>

      {/* Play Button */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40">
        <button className="play-button">
          <PlaySquareIcon size={isMobile ? 60 : 100} />
        </button>
      </div>

      {/* Custom styles */}
      <style jsx global>{`
        .button, .social-button {
          position: relative;
          display: inline-block;
          margin: 10px;
        }

        .button a, .social-button a {
          color: white;
          font-family: Helvetica, sans-serif;
          font-weight: bold;
          text-align: center;
          text-decoration: none;
          background-color: #FFA12B;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          text-shadow: 0px 1px 0px #000;
          filter: dropshadow(color=#000, offx=0px, offy=1px);
          
          -webkit-box-shadow: inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
          -moz-box-shadow: inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
          box-shadow: inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
          
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
          border-radius: 5px;
        }

        .button a {
          font-size: 24px;
          padding: 15px 30px;
        }

        .social-button a {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #FF69B4;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 10px 0 #FF1493;
        }

        .social-button a:active {
          background-color: #FF1493;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -3px 0 #C71585;
        }

        .social-button::before {
          content: '';
          position: absolute;
          top: -2px;
          right: -2px;
          bottom: -2px;
          left: -2px;
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
          border-radius: 50%;
          box-shadow: 0 0 0 3px #FF69B4;
          opacity: 0.75;
        }

        .button a:active, .social-button a:active {
          top: 10px;
          background-color: #F78900;
          
          -webkit-box-shadow: inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100;
          -moz-box-shadow: inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100;
          box-shadow: inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100;
        }

        .button:after, .social-button:after {
          content: "";
          height: 100%;
          width: 100%;
          padding: 4px;
          position: absolute;
          bottom: -15px;
          left: -4px;
          z-index: -1;
          background-color: #2B1800;
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
          border-radius: 5px;
        }

        .social-button:after {
          border-radius: 50%;
        }

        .button a svg {
          margin-right: 10px;
        }

        @keyframes rocket-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(5deg); }
        }
        .animate-rocket {
          animation: rocket-float 2s ease-in-out infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-blink {
          animation: blink 1s ease-in-out 5;
        }

        .social-button.info-button a {
          width: 80px;
          height: 80px;
          background-color: #FF69B4;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 12px 0 #FF1493;
        }

        .social-button.info-button a:active {
          background-color: #FF1493;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -3px 0 #C71585;
        }

        .social-button.info-button::before {
          content: '';
          position: absolute;
          top: -2px;
          right: -2px;
          bottom: -2px;
          left: -2px;
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
          border-radius: 50%;
          box-shadow: 0 0 0 3px #FF69B4;
          opacity: 0.75;
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }

        .social-button.info-button::before {
          content: '';
          position: absolute;
          top: -2px;
          right: -2px;
          bottom: -2px;
          left: -2px;
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
          border-radius: 50%;
          box-shadow: 0 0 0 3px #FF69B4;
          opacity: 0.75;
        }

        .logo-container {
          position: relative;
          border-radius: 50%;
          padding: 4px;
          background: linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff);
          background-size: 200% 200%;
          animation: gradient-animation 5s ease infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s infinite;
        }

        @keyframes pulse-glow {
          0% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.9);
          }
          100% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
          }
        }

        @keyframes gradient-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-text-shadow {
          animation: text-shadow-animation 3s infinite;
        }

        @keyframes text-shadow-animation {
          0% {
            text-shadow: 2px 2px 4px rgba(255, 105, 180, 0.7);
          }
          50% {
            text-shadow: 2px 2px 4px rgba(0, 191, 255, 0.7);
          }
          100% {
            text-shadow: 2px 2px 4px rgba(255, 105, 180, 0.7);
          }
        }

        .doggo-text {
          position: relative;
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.5);
          filter: drop-shadow(0 0 10px rgba(255, 105, 180, 0.7));
        }

        .doggo-text::before {
          content: 'DOGGO';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: shine 3s linear infinite;
        }

        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .play-button {
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          animation: float 3s ease-in-out infinite, pulse 2s ease-in-out infinite;
          position: relative;
        }

        .play-button::before {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border-radius: 15px;
          background: linear-gradient(45deg, #FF69B4, #FF1493, #FF69B4);
          opacity: 0.5;
          z-index: -1;
          filter: blur(10px);
          animation: glow 3s linear infinite;
        }

        .play-button:hover {
          transform: scale(1.1) rotate(5deg);
        }

        .play-button:hover::before {
          animation: glow 1.5s linear infinite;
        }

        .play-button:active {
          transform: scale(0.95);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes glow {
          0% { opacity: 0.5; }
          50% { opacity: 0.8; }
          100% { opacity: 0.5; }
        }

        @media (max-width: 767px) {
          .logo-container {
            padding: 2px;
          }

          .animate-pulse-glow {
            animation: pulse-glow 2s infinite;
          }

          @keyframes pulse-glow {
            0% {
              box-shadow: 0 0 3px rgba(255, 255, 255, 0.7);
            }
            50% {
              box-shadow: 0 0 10px rgba(255, 255, 255, 0.9);
            }
            100% {
              box-shadow: 0 0 3px rgba(255, 255, 255, 0.7);
            }
          }

          .play-button::before {
            top: -6px;
            left: -6px;
            right: -6px;
            bottom: -6px;
            border-radius: 10px;
          }
        }
      `}</style>
    </div>
  )
}