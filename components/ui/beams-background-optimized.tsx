"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedGradientBackgroundProps {
    className?: string;
    children?: React.ReactNode;
    intensity?: "subtle" | "medium" | "strong";
}

interface Beam {
    x: number;
    y: number;
    width: number;
    length: number;
    angle: number;
    speed: number;
    opacity: number;
    hue: number;
    pulse: number;
    pulseSpeed: number;
}

function createBeam(width: number, height: number): Beam {
    const angle = -35 + Math.random() * 10;
    return {
        x: Math.random() * width * 1.5 - width * 0.25,
        y: Math.random() * height * 1.5 - height * 0.25,
        width: 40 + Math.random() * 80, // Wider beams for more intensity
        length: height * 2.5,
        angle: angle,
        speed: 0.4 + Math.random() * 0.6, // Faster movement
        opacity: 0.15 + Math.random() * 0.12, // Higher base opacity
        hue: 190 + Math.random() * 70,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.03 + Math.random() * 0.04, // Faster pulse
    };
}

export function BeamsBackground({
    className,
    intensity = "strong",
}: AnimatedGradientBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const beamsRef = useRef<Beam[]>([]);
    const animationFrameRef = useRef<number>(0);
    const MINIMUM_BEAMS = 15; // More beams for intensity

    const opacityMap = {
        subtle: 0.4,
        medium: 0.7,
        strong: 1.2, // Higher multiplier for strong intensity
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const updateCanvasSize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2); // Limit DPR for performance
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);

            const totalBeams = MINIMUM_BEAMS;
            beamsRef.current = Array.from({ length: totalBeams }, () =>
                createBeam(canvas.width, canvas.height)
            );
        };

        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize, { passive: true });

        function resetBeam(beam: Beam, index: number, totalBeams: number) {
            if (!canvas) return beam;
            
            const column = index % 5; // More columns for better distribution
            const spacing = canvas.width / 5;

            beam.y = canvas.height + 100;
            beam.x =
                column * spacing +
                spacing / 2 +
                (Math.random() - 0.5) * spacing * 0.6;
            beam.width = 60 + Math.random() * 60; // Wider beams
            beam.speed = 0.3 + Math.random() * 0.4; // Faster speed
            beam.hue = 190 + (index * 70) / totalBeams;
            beam.opacity = 0.12 + Math.random() * 0.08; // Higher opacity
            return beam;
        }

        function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
            ctx.save();
            ctx.translate(beam.x, beam.y);
            ctx.rotate((beam.angle * Math.PI) / 180);

            const pulsingOpacity =
                beam.opacity *
                (0.7 + Math.sin(beam.pulse) * 0.3) * // More dramatic pulsing
                opacityMap[intensity];

            const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);

            // Enhanced gradient with more color stops for intensity
            gradient.addColorStop(0, `hsla(${beam.hue}, 90%, 70%, 0)`);
            gradient.addColorStop(
                0.1,
                `hsla(${beam.hue}, 90%, 70%, ${pulsingOpacity * 0.3})`
            );
            gradient.addColorStop(
                0.2,
                `hsla(${beam.hue}, 90%, 70%, ${pulsingOpacity * 0.8})`
            );
            gradient.addColorStop(
                0.5,
                `hsla(${beam.hue}, 90%, 70%, ${pulsingOpacity})`
            );
            gradient.addColorStop(
                0.8,
                `hsla(${beam.hue}, 90%, 70%, ${pulsingOpacity * 0.8})`
            );
            gradient.addColorStop(
                0.9,
                `hsla(${beam.hue}, 90%, 70%, ${pulsingOpacity * 0.3})`
            );
            gradient.addColorStop(1, `hsla(${beam.hue}, 90%, 70%, 0)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
            ctx.restore();
        }

        function animate() {
            if (!canvas || !ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.filter = "blur(22px)"; // More blur for intensity

            const totalBeams = beamsRef.current.length;
            beamsRef.current.forEach((beam, index) => {
                beam.y -= beam.speed;
                beam.pulse += beam.pulseSpeed;

                if (beam.y + beam.length < -100) {
                    resetBeam(beam, index, totalBeams);
                }

                drawBeam(ctx, beam);
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [intensity]);

    return (
        <div
            className={cn(
                "relative min-h-screen w-full overflow-hidden bg-neutral-950",
                className
            )}
            style={{
                contain: "layout style paint", // Performance optimization
            }}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none"
                style={{ 
                    filter: "blur(10px)", // Additional blur layer
                    transform: "translateZ(0)" // GPU acceleration
                }}
            />

            <motion.div
                className="absolute inset-0 bg-neutral-950/2 pointer-events-none" // Less overlay for more beam visibility
                animate={{
                    opacity: [0.02, 0.08, 0.02], // More subtle overlay animation
                }}
                transition={{
                    duration: 6, // Faster pulse
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                }}
                style={{
                    backdropFilter: "blur(20px)",
                    transform: "translateZ(0)"
                }}
            />

            <div className="relative z-10 flex h-screen w-full items-center justify-center pointer-events-none">
                {/* Content can go here */}
            </div>
        </div>
    );
}