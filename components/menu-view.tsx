'use client'

import React from 'react'
import { TwitterIcon, SendIcon, InstagramIcon, DiscIcon, XIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { ColorfulRocketIcon } from './doggo-crypto-ui'

export function MenuView() {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      {/* Close button */}
      <button 
        onClick={handleClose} 
        className="absolute top-4 right-4 z-40 text-white hover:text-gray-200 transition-colors duration-200"
      >
        <XIcon size={32} />
      </button>

      {/* Dog Logo and DOGGO text */}
      <div className="absolute top-4 left-4 z-30 flex flex-col items-center">
        <div className="logo-container">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202024-10-01%2014.45.27%20-%20A%20playful,%20cartoon-style%20dog%20logo%20featuring%20a%20cute,%20happy%20dog%20with%20large%20expressive%20eyes,%20floppy%20ears,%20and%20a%20friendly%20smile.%20The%20dog%20is%20sitting%20with%20i-g8e0uQLN2N33kDgfUpUx5If4DLDjGJ.webp" 
            alt="Doggo Logo" 
            className="w-24 h-24 rounded-full animate-pulse-glow"
          />
        </div>
        <h2 className="text-2xl font-extrabold text-white mt-2 doggo-text">DOGGO</h2>
      </div>

      <div className="flex flex-col space-y-3">
        <div className="button">
          <a href="#" className="btn-menu">
            <ColorfulRocketIcon />
            <span>LAUNCHING SOON</span>
          </a>
        </div>
        <div className="social-button">
          <a href="#" className="btn-menu" aria-label="Twitter">
            <TwitterIcon className="w-5 h-5" />
            <span>Twitter</span>
          </a>
        </div>
        <div className="social-button">
          <a href="#" className="btn-menu" aria-label="Telegram">
            <SendIcon className="w-5 h-5" />
            <span>Telegram</span>
          </a>
        </div>
        <div className="social-button">
          <a href="#" className="btn-menu" aria-label="Instagram">
            <InstagramIcon className="w-5 h-5" />
            <span>Instagram</span>
          </a>
        </div>
        <div className="social-button">
          <a href="#" className="btn-menu" aria-label="Discord">
            <DiscIcon className="w-5 h-5" />
            <span>Discord</span>
          </a>
        </div>
      </div>
      <button onClick={() => router.back()} className="mt-6 text-white underline">
        Back to Home
      </button>

      <style jsx global>{`
        .button, .social-button {
          position: relative;
          display: inline-block;
          margin: 6px;
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
          width: 200px;
          padding: 10px 20px;
          font-size: 16px;
          
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          text-shadow: 0px 1px 0px #000;
          filter: dropshadow(color=#000, offx=0px, offy=1px);
          
          -webkit-box-shadow: inset 0 1px 0 #FFE5C4, 0 8px 0 #915100;
          -moz-box-shadow: inset 0 1px 0 #FFE5C4, 0 8px 0 #915100;
          box-shadow: inset 0 1px 0 #FFE5C4, 0 8px 0 #915100;
          
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
          border-radius: 5px;
        }

        .button a {
          font-size: 18px;
        }

        .social-button a {
          background-color: #FF69B4;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 8px 0 #FF1493;
        }

        .button a:active, .social-button a:active {
          top: 8px;
          background-color: #F78900;
          
          -webkit-box-shadow: inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100;
          -moz-box-shadow: inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100;
          box-shadow: inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100;
        }

        .social-button a:active {
          background-color: #FF1493;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -3px 0 #C71585;
        }

        .button:after, .social-button:after {
          content: "";
          height: 100%;
          width: 100%;
          padding: 4px;
          position: absolute;
          bottom: -12px;
          left: -4px;
          z-index: -1;
          background-color: #2B1800;
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
          border-radius: 5px;
        }

        .button a svg, .social-button a svg {
          margin-right: 8px;
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
      `}</style>
    </div>
  )
}