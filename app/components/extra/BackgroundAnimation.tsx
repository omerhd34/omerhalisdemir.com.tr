"use client";
import { useEffect, useState } from "react";
import "../../styles/backgroundAnimation.css";
import {
  codeCommands,
  data,
  symbols,
} from "../../data/data/BackgroundAnimation";

interface Position {
  x: number;
  y: number;
  width: number;
  height: number;
}

const BackgroundAnimation = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Çarpışma kontrolü
  const checkCollision = (
    newPos: Position,
    existingPositions: Position[],
    minDistance: number = 15
  ): boolean => {
    return existingPositions.some((pos) => {
      const distanceX = Math.abs(newPos.x - pos.x);
      const distanceY = Math.abs(newPos.y - pos.y);
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      return distance < minDistance;
    });
  };

  // Güvenli pozisyon oluşturma
  const generateSafePositions = (
    count: number,
    elementType: "code" | "tech" | "symbol"
  ): Position[] => {
    const positions: Position[] = [];
    const maxAttempts = 100;

    // Element boyutları
    const dimensions = {
      code: { width: 25, height: 4 },
      tech: { width: 20, height: 4 },
      symbol: { width: 3, height: 3 },
    };

    const { width, height } = dimensions[elementType];
    const minDistance = elementType === "symbol" ? 8 : 15;

    for (let i = 0; i < count; i++) {
      let attempts = 0;
      let validPosition = false;
      let newPos: Position;

      while (!validPosition && attempts < maxAttempts) {
        const margin = 5;
        newPos = {
          x: Math.random() * (95 - margin * 2) + margin,
          y: Math.random() * (65 - margin * 2) + margin + 15,
          width,
          height,
        };

        validPosition = !checkCollision(newPos, positions, minDistance);
        attempts++;
      }

      if (validPosition) {
        positions.push(newPos!);
      } else {
        const gridCols = 4;
        const gridRows = 3;
        const sector = i % (gridCols * gridRows);
        const sectorX = (sector % gridCols) * (90 / gridCols) + 30;
        const sectorY = Math.floor(sector / gridCols) * (60 / gridRows) + 30;

        positions.push({
          x: sectorX + Math.random() * (90 / gridCols - 10),
          y: sectorY + Math.random() * (60 / gridRows - 10) + 15,
          width,
          height,
        });
      }
    }

    return positions;
  };

  // Pozisyonları önceden hesapla
  const codePositions = generateSafePositions(codeCommands.length, "code");
  const techPositions = generateSafePositions(data.length, "tech");
  const symbolPositions = generateSafePositions(symbols.length, "symbol");

  if (!mounted) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 md:opacity-30 sm:opacity-20 opacity-15">
        <div className="neural-grid w-full h-full" />
      </div>

      {/* Floating Code Blocks */}
      {codeCommands.map((command, index) => {
        const position = codePositions[index];
        if (!position) return null;

        return (
          <div
            key={`command-${index}`}
            className="floating-code absolute border rounded-lg z-[11] min-w-[80px] bg-slate-900/8 border-cyan-400/20 px-3 py-1.5 backdrop-blur-sm md:opacity-100 opacity-30 sm:opacity-50"
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              animationDuration: `${3 + index * 0.15}s`,
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div className="text-xs font-mono text-green-400/50 sm:text-green-400/30 overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="text-yellow-400/50 sm:text-yellow-400/30">
                $
              </span>{" "}
              {command}
            </div>
          </div>
        );
      })}

      {/* Tech Tags */}
      {data.map((tech, index) => {
        const position = techPositions[index];
        if (!position) return null;

        return (
          <div
            key={`tech-${index}`}
            className="tech-tag absolute flex items-center gap-2 rounded-full py-1 px-[0.625rem] z-[12] min-w-[80px] max-w-[min(240px,20vw)] border border-[rgba(52,211,153,0.25)] sm:border-[rgba(52,211,153,0.15)] md:opacity-100 sm:opacity-60 opacity-40"
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              animationDuration: `${3.5 + index * 0.1}s`,
              animationDelay: `${index * 0.12}s`,
            }}
          >
            <div className="relative shrink-0">
              <div className="w-2.5 h-2.5 from-emerald-400/30 to-cyan-400/30 sm:from-emerald-400/20 sm:to-cyan-400/20 rounded-full border border-emerald-400/40 sm:border-emerald-400/25"></div>
              <div className="tech-icon-ripple absolute bg-emerald-400/20 sm:bg-emerald-400/10 rounded-full inset-0"></div>
            </div>
            <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-xs font-mono text-emerald-400/40 sm:text-emerald-400/25 font-medium">
              {tech}
            </div>
          </div>
        );
      })}

      {/* Quantum Particles */}
      {symbolPositions.map((position, index) => {
        return (
          <div
            key={`quantum-${index}`}
            className="quantum-particle absolute text-sm font-mono font-bold select-none z-[13] md:opacity-100 sm:opacity-50 opacity-25"
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              color: `rgba(${120 + Math.random() * 135}, ${
                160 + Math.random() * 95
              }, ${210 + Math.random() * 45}, ${
                typeof window !== "undefined" && window.innerWidth < 640
                  ? 0.15
                  : typeof window !== "undefined" && window.innerWidth < 768
                  ? 0.2
                  : 0.3
              })`,
              animationDuration: `${2.5 + index * 0.15}s`,
              animationDelay: `${index * 0.2}s`,
            }}
          >
            {symbols[index % symbols.length]}
          </div>
        );
      })}
    </div>
  );
};

export default BackgroundAnimation;
