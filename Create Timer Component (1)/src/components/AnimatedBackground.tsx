import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
// Background images - for deployment, place in public/assets/ directory
const mountainIllustration = '/assets/mountain-illustration.png';
const forestIllustration = '/assets/forest-illustration.png';

type WhiteNoiseType = 'waves' | 'rain' | 'mountains' | 'forest';

interface AnimatedBackgroundProps {
  selectedNoise: WhiteNoiseType | null;
}

export const AnimatedBackground = ({ selectedNoise }: AnimatedBackgroundProps) => {



  if (!selectedNoise) return null;

  // Waves - rolling ocean waves
  if (selectedNoise === 'waves') {
    return (
      <>
        {/* Main wave layers - undulating wavy motion */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => {
            const waveHeight = 250 - i * 30;
            const baseDelay = i * 1.8;
            const duration = 10 + i * 2;
            
            return (
              <motion.div
                key={`wave-${i}`}
                className="absolute"
                style={{
                  width: '250%',
                  height: `${waveHeight}px`,
                  bottom: `${i * 12 - 25}%`,
                  left: '-75%',
                  background: `radial-gradient(ellipse 120% 100% at 50% 100%, 
                    rgba(59, 130, 246, ${0.25 - i * 0.03}) 0%, 
                    rgba(14, 165, 233, ${0.15 - i * 0.02}) 40%, 
                    rgba(56, 189, 248, ${0.08 - i * 0.01}) 70%,
                    transparent 100%)`,
                  borderRadius: '48% 52% 45% 55%',
                  filter: 'blur(1px)',
                }}
                animate={{
                  x: ['0%', '30%', '15%', '35%', '0%'],
                  y: [
                    0,
                    -25 - i * 6,
                    -15 - i * 4,
                    -30 - i * 6,
                    -8 - i * 2,
                    0
                  ],
                  scaleX: [1, 1.15, 0.9, 1.2, 0.95, 1],
                  scaleY: [1, 1.2, 0.85, 1.25, 0.9, 1],
                  rotate: [0, 3, -2, 4, -1, 0],
                  borderRadius: [
                    '48% 52% 45% 55%',
                    '45% 55% 50% 50%',
                    '52% 48% 55% 45%',
                    '50% 50% 48% 52%',
                    '55% 45% 52% 48%',
                    '48% 52% 45% 55%',
                  ],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  ease: [0.4, 0.0, 0.6, 1.0], // Smooth wave ease
                  delay: baseDelay,
                }}
              />
            );
          })}
        </div>

        {/* Secondary wave crests for more organic motion */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => {
            const offset = i * 25;
            
            return (
              <motion.div
                key={`crest-${i}`}
                className="absolute"
                style={{
                  width: '180%',
                  height: '200px',
                  bottom: `${30 + offset}%`,
                  left: '-40%',
                  background: `linear-gradient(to bottom, 
                    transparent 0%, 
                    rgba(147, 197, 253, ${0.15 - i * 0.03}) 50%, 
                    transparent 100%)`,
                  borderRadius: '50% 50% 45% 55%',
                  filter: 'blur(2px)',
                }}
                animate={{
                  x: ['0%', '-20%', '0%'],
                  scaleY: [1, 1.4, 1],
                  borderRadius: [
                    '50% 50% 45% 55%',
                    '45% 55% 50% 50%',
                    '50% 50% 45% 55%',
                  ],
                }}
                transition={{
                  duration: 12 + i * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 2,
                }}
              />
            );
          })}
        </div>

        {/* Foam/spray particles at wave crests */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => {
            const startX = Math.random() * 100;
            const startY = 60 + Math.random() * 30;
            
            return (
              <motion.div
                key={`foam-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${Math.random() * 6 + 3}px`,
                  height: `${Math.random() * 6 + 3}px`,
                  left: `${startX}%`,
                  bottom: `${startY}%`,
                  background: 'rgba(255, 255, 255, 0.6)',
                  boxShadow: '0 0 8px rgba(147, 197, 253, 0.4)',
                }}
                animate={{
                  y: [0, -Math.random() * 60 - 40, -Math.random() * 100 - 60],
                  x: [0, Math.random() * 40 - 20],
                  opacity: [0, 0.8, 0.6, 0],
                  scale: [0.5, 1.2, 0.8, 0.3],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: 'easeOut',
                  delay: Math.random() * 5,
                  repeatDelay: Math.random() * 3 + 2,
                }}
              />
            );
          })}
        </div>

        {/* Subtle shimmer effect on water surface */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`shimmer-${i}`}
              className="absolute rounded-full blur-sm"
              style={{
                width: `${Math.random() * 80 + 40}px`,
                height: `${Math.random() * 30 + 15}px`,
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 70 + 10}%`,
                background: 'radial-gradient(ellipse, rgba(191, 219, 254, 0.3) 0%, transparent 70%)',
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </>
    );
  }

  // Rain - falling raindrops with layered mist background
  if (selectedNoise === 'rain') {
    return (
      <>
        {/* Layered mist/fog background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`mist-layer-${i}`}
              className="absolute rounded-full blur-3xl"
              style={{
                width: `${Math.random() * 800 + 600}px`,
                height: `${Math.random() * 400 + 300}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(ellipse, 
                  rgba(100, 116, 139, ${0.15 - i * 0.02}) 0%, 
                  rgba(71, 85, 105, ${0.12 - i * 0.015}) 30%, 
                  rgba(51, 65, 85, ${0.08 - i * 0.01}) 60%,
                  transparent 80%)`,
                opacity: 0.5,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 80 - 40, Math.random() * 80 - 40, 0],
                scale: [1, 1.2, 1.1, 1],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Lower mist layers for depth */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`lower-mist-${i}`}
              className="absolute rounded-full blur-2xl"
              style={{
                width: `${Math.random() * 1000 + 700}px`,
                height: `${Math.random() * 300 + 200}px`,
                left: `${Math.random() * 100}%`,
                bottom: `${i * 15}%`,
                background: `radial-gradient(ellipse, 
                  rgba(148, 163, 184, ${0.18 - i * 0.025}) 0%, 
                  rgba(100, 116, 139, ${0.12 - i * 0.02}) 40%, 
                  rgba(71, 85, 105, ${0.08 - i * 0.015}) 60%,
                  transparent 75%)`,
                opacity: 0.6,
              }}
              animate={{
                x: ['-40%', '40%', '-40%'],
                scaleX: [1, 1.3, 1],
              }}
              transition={{
                duration: Math.random() * 25 + 20,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Subtle blue-gray fog patches */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`fog-patch-${i}`}
              className="absolute rounded-full blur-2xl"
              style={{
                width: `${Math.random() * 500 + 300}px`,
                height: `${Math.random() * 250 + 150}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(ellipse, 
                  rgba(148, 163, 184, ${0.12 - i * 0.01}) 0%, 
                  rgba(125, 143, 162, ${0.08 - i * 0.008}) 50%,
                  transparent 70%)`,
                opacity: 0.4,
              }}
              animate={{
                x: [0, Math.random() * 150 - 75],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: Math.random() * 18 + 12,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 6,
              }}
            />
          ))}
        </div>

        {/* Falling raindrops */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(80)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 bg-blue-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                height: `${Math.random() * 40 + 30}px`,
              }}
              initial={{ y: -100, opacity: 0 }}
              animate={{
                y: '110vh',
                opacity: [0, 0.8, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 0.8 + 1,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      </>
    );
  }

  // Mountains - snowy mountain with gentle falling snow
  if (selectedNoise === 'mountains') {
    return (
      <>
        {/* Mountain Illustration at bottom */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <img 
            src={mountainIllustration} 
            alt="Mountain landscape"
            className="w-full h-auto object-cover object-bottom"
            style={{
              maxHeight: '50vh',
              maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0) 100%)',
              filter: 'brightness(1.1) contrast(0.95)',
            }}
          />
        </motion.div>

        {/* Cool blue ambient atmosphere */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`mountain-glow-${i}`}
              className="absolute rounded-full blur-3xl"
              style={{
                width: `${Math.random() * 500 + 400}px`,
                height: `${Math.random() * 300 + 250}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 70}%`,
                background: `radial-gradient(ellipse, 
                  rgba(147, 197, 253, ${0.25 - i * 0.03}) 0%, 
                  rgba(59, 130, 246, ${0.18 - i * 0.025}) 40%, 
                  rgba(96, 165, 250, ${0.12 - i * 0.02}) 60%,
                  transparent 80%)`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50, 0],
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: Math.random() * 12 + 10,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Falling snowflakes - diagonal fall with wind */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(80)].map((_, i) => {
            const size = Math.random() * 6 + 3;
            const startX = Math.random() * 120 - 20; // Start some off-screen left
            const windDrift = Math.random() * 300 + 200; // Significant horizontal drift (200-500px)
            
            return (
              <motion.div
                key={`snow-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${startX}%`,
                  top: `${-10 + Math.random() * 20}%`,
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, rgba(186, 230, 253, 0.7) 100%)',
                  boxShadow: '0 0 8px rgba(147, 197, 253, 0.8), 0 0 4px rgba(255, 255, 255, 0.9)',
                }}
                animate={{
                  y: ['0vh', '110vh'],
                  x: [0, windDrift],
                  opacity: [0, 1, 0.9, 0.7, 0],
                  scale: [0.7, 1.2, 1, 0.8],
                }}
                transition={{
                  duration: Math.random() * 8 + 8,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: Math.random() * 10,
                  times: [0, 0.1, 0.5, 0.8, 1],
                }}
              />
            );
          })}
        </div>

        {/* Smaller snowflakes with gentle floating */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(40)].map((_, i) => {
            const size = Math.random() * 4 + 2;
            const startX = Math.random() * 100;
            const floatDistance = Math.random() * 30 - 15;
            
            return (
              <motion.div
                key={`small-snow-${i}`}
                className="absolute"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${startX}%`,
                  top: `${Math.random() * 100}%`,
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(186, 230, 253, 0.6) 100%)',
                  borderRadius: '50%',
                  boxShadow: '0 0 6px rgba(147, 197, 253, 0.6), 0 0 3px rgba(255, 255, 255, 0.8)',
                }}
                animate={{
                  y: [0, floatDistance, 0],
                  x: [0, floatDistance * 0.5, 0],
                  opacity: [0.7, 0.9, 0.7],
                }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: Math.random() * 3,
                }}
              />
            );
          })}
        </div>

        {/* Icy blue mist/fog layers */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`mist-${i}`}
              className="absolute rounded-full blur-2xl"
              style={{
                width: `${Math.random() * 700 + 500}px`,
                height: `${Math.random() * 250 + 200}px`,
                left: `${Math.random() * 100}%`,
                bottom: `${i * 15}%`,
                background: `radial-gradient(ellipse, 
                  rgba(186, 230, 253, ${0.18 - i * 0.03}) 0%, 
                  rgba(147, 197, 253, ${0.12 - i * 0.025}) 40%, 
                  rgba(203, 213, 225, ${0.08 - i * 0.02}) 60%,
                  transparent 80%)`,
              }}
              animate={{
                x: ['-50%', '50%', '-50%'],
                opacity: [0.4, 0.7, 0.4],
                scaleX: [1, 1.3, 1],
              }}
              transition={{
                duration: Math.random() * 18 + 15,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </>
    );
  }

  // Forest - peaceful nature with floating leaves and gentle wind
  if (selectedNoise === 'forest') {
    return (
      <>
        {/* Forest Illustration at bottom */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <img 
            src={forestIllustration} 
            alt="Forest landscape"
            className="w-full h-auto object-cover object-bottom"
            style={{
              maxHeight: '45vh',
              maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
            }}
          />
        </motion.div>

        {/* Soft green ambient glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`forest-glow-${i}`}
              className="absolute rounded-full blur-3xl"
              style={{
                width: `${Math.random() * 400 + 300}px`,
                height: `${Math.random() * 400 + 300}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, 
                  rgba(34, 197, 94, ${0.08 - i * 0.01}) 0%, 
                  rgba(22, 163, 74, ${0.06 - i * 0.01}) 40%, 
                  rgba(21, 128, 61, ${0.04 - i * 0.008}) 60%,
                  transparent 80%)`,
              }}
              animate={{
                x: [0, Math.random() * 80 - 40, 0],
                y: [0, Math.random() * 80 - 40, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: Math.random() * 12 + 10,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Floating leaves */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => {
            const startX = Math.random() * 100;
            const leafSize = Math.random() * 8 + 4;
            
            return (
              <motion.div
                key={`leaf-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${leafSize}px`,
                  height: `${leafSize * 1.4}px`,
                  left: `${startX}%`,
                  top: `${-10 + Math.random() * 20}%`,
                  background: `radial-gradient(ellipse, 
                    rgba(74, 222, 128, ${0.6 + Math.random() * 0.3}) 0%, 
                    rgba(34, 197, 94, ${0.4 + Math.random() * 0.2}) 60%, 
                    transparent 100%)`,
                  borderRadius: '50% 0% 50% 50%',
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
                animate={{
                  y: ['0vh', '110vh'],
                  x: [0, Math.random() * 150 - 75, Math.random() * 150 - 75, Math.random() * 150 - 75],
                  rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1), 720 * (Math.random() > 0.5 ? 1 : -1)],
                  opacity: [0, 0.8, 0.7, 0.5, 0],
                }}
                transition={{
                  duration: Math.random() * 8 + 10,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: Math.random() * 8,
                  times: [0, 0.1, 0.5, 0.8, 1],
                }}
              />
            );
          })}
        </div>

        {/* Gentle light rays through trees */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`light-ray-${i}`}
              className="absolute"
              style={{
                left: `${20 + i * 20}%`,
                top: '-20%',
                width: '80px',
                height: '120%',
                background: `linear-gradient(to bottom, 
                  rgba(187, 247, 208, 0.15) 0%, 
                  rgba(134, 239, 172, 0.08) 30%, 
                  transparent 70%)`,
                transform: `rotate(${-5 + Math.random() * 10}deg)`,
                filter: 'blur(20px)',
              }}
              animate={{
                opacity: [0.2, 0.4, 0.3, 0.2],
                scaleY: [1, 1.1, 0.95, 1],
              }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>

        {/* Fireflies / light particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`firefly-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: 'rgba(187, 247, 208, 0.8)',
                boxShadow: '0 0 8px rgba(134, 239, 172, 0.8), 0 0 4px rgba(74, 222, 128, 0.6)',
              }}
              animate={{
                x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
                opacity: [0.2, 0.8, 0.9, 0.3, 0.2],
                scale: [0.8, 1.3, 1.2, 0.9, 0.8],
              }}
              transition={{
                duration: Math.random() * 5 + 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 3,
                times: [0, 0.3, 0.5, 0.8, 1],
              }}
            />
          ))}
        </div>

        {/* Pollen or dust particles in wind */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`pollen-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: 'rgba(187, 247, 208, 0.4)',
              }}
              animate={{
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 50 - 25],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: Math.random() * 6 + 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>
      </>
    );
  }

  return null;
};
