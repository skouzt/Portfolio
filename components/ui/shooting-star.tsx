"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef, useCallback } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
  maxStars?: number; // New prop to control max number of stars
}

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * window.innerWidth;

  switch (side) {
    case 0:
      return { x: offset, y: 0, angle: 45 };
    case 1:
      return { x: window.innerWidth, y: offset, angle: 135 };
    case 2:
      return { x: offset, y: window.innerHeight, angle: 225 };
    case 3:
      return { x: 0, y: offset, angle: 315 };
    default:
      return { x: 0, y: 0, angle: 45 };
  }
};

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 1,
  className,
  maxStars = 50, // Default to 3 stars maximum
}) => {
  const [stars, setStars] = useState<ShootingStar[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const createStar = useCallback(() => {
    const { x, y, angle } = getRandomStartPoint();
    const newStar: ShootingStar = {
      id: Date.now() + Math.random(), // Ensure unique IDs
      x,
      y,
      angle,
      scale: 1,
      speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
      distance: 0,
    };

    setStars(prevStars => {
      // If we're at max capacity, remove the oldest star
      const updatedStars = prevStars.length >= maxStars 
        ? prevStars.slice(1) 
        : prevStars;
      return [...updatedStars, newStar];
    });

    // Schedule next star creation
    const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
    timeoutRef.current = setTimeout(createStar, randomDelay);
  }, [minSpeed, maxSpeed, minDelay, maxDelay, maxStars]);

  useEffect(() => {
    createStar();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [createStar]);

  useEffect(() => {
    const moveStars = () => {
      setStars(prevStars => {
        return prevStars
          .map(star => {
            const newX = star.x + star.speed * Math.cos((star.angle * Math.PI) / 180);
            const newY = star.y + star.speed * Math.sin((star.angle * Math.PI) / 180);
            const newDistance = star.distance + star.speed;
            const newScale = 1 + newDistance / 100;

            return {
              ...star,
              x: newX,
              y: newY,
              distance: newDistance,
              scale: newScale,
            };
          })
          .filter(star => {
            // Remove stars that have moved off screen
            return !(
              star.x < -20 ||
              star.x > window.innerWidth + 20 ||
              star.y < -20 ||
              star.y > window.innerHeight + 20
            );
          });
      });
    };

    const animationFrame = requestAnimationFrame(moveStars);
    return () => cancelAnimationFrame(animationFrame);
  }, [stars]);

  return (
    <svg
      ref={svgRef}
      className={cn("w-full h-full absolute inset-0", className)}
    >
      {stars.map(star => (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#gradient)"
          transform={`rotate(${star.angle}, ${
            star.x + (starWidth * star.scale) / 2
          }, ${star.y + starHeight / 2})`}
        />
      ))}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop
            offset="100%"
            style={{ stopColor: starColor, stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};