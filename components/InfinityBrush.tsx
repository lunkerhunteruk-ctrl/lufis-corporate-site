"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ULTRAMARINE = "#120A8F";
const ORANGE = "#FF6B35";

export default function InfinityBrush() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showOrange, setShowOrange] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    // ウェーブ描画完了後にオレンジに切り替え
    const timer = setTimeout(() => {
      setShowOrange(true);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  // 上から下へのウェーブライン（5本）
  const waveLines = [
    {
      path: `M 100,-50 Q 115,80 85,180 T 110,360 T 85,540 T 110,720 T 85,900 T 110,1100`,
      delay: 0,
    },
    {
      path: `M 250,-50 Q 265,80 235,180 T 260,360 T 235,540 T 260,720 T 235,900 T 260,1100`,
      delay: 0.25,
    },
    {
      path: `M 400,-50 Q 415,80 385,180 T 410,360 T 385,540 T 410,720 T 385,900 T 410,1100`,
      delay: 0.5,
    },
    {
      path: `M 550,-50 Q 565,80 535,180 T 560,360 T 535,540 T 560,720 T 535,900 T 560,1100`,
      delay: 0.75,
    },
    {
      path: `M 700,-50 Q 715,80 685,180 T 710,360 T 685,540 T 710,720 T 685,900 T 710,1100`,
      delay: 1.0,
    },
  ];

  const currentColor = showOrange ? ORANGE : ULTRAMARINE;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.svg
        viewBox="0 0 800 1000"
        className="absolute top-1/2 left-1/2 w-full h-full"
        style={{ x: "-50%", y: "-50%" }}
        preserveAspectRatio="xMidYMid slice"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <defs>
          {waveLines.map((_, i) => (
            <linearGradient
              key={i}
              id={`fade-gradient-${i}`}
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor={currentColor} stopOpacity="0.1">
                <animate
                  attributeName="stop-color"
                  values={`${ULTRAMARINE};${ORANGE}`}
                  dur="0.2s"
                  begin="2.4s"
                  fill="freeze"
                />
              </stop>
              <stop offset="8%" stopColor={currentColor} stopOpacity="0.6">
                <animate
                  attributeName="stop-color"
                  values={`${ULTRAMARINE};${ORANGE}`}
                  dur="0.2s"
                  begin="2.4s"
                  fill="freeze"
                />
              </stop>
              <stop offset="15%" stopColor={currentColor} stopOpacity="1">
                <animate
                  attributeName="stop-color"
                  values={`${ULTRAMARINE};${ORANGE}`}
                  dur="0.2s"
                  begin="2.4s"
                  fill="freeze"
                />
              </stop>
              <stop offset="85%" stopColor={currentColor} stopOpacity="1">
                <animate
                  attributeName="stop-color"
                  values={`${ULTRAMARINE};${ORANGE}`}
                  dur="0.2s"
                  begin="2.4s"
                  fill="freeze"
                />
              </stop>
              <stop offset="92%" stopColor={currentColor} stopOpacity="0.6">
                <animate
                  attributeName="stop-color"
                  values={`${ULTRAMARINE};${ORANGE}`}
                  dur="0.2s"
                  begin="2.4s"
                  fill="freeze"
                />
              </stop>
              <stop offset="100%" stopColor={currentColor} stopOpacity="0.1">
                <animate
                  attributeName="stop-color"
                  values={`${ULTRAMARINE};${ORANGE}`}
                  dur="0.2s"
                  begin="2.4s"
                  fill="freeze"
                />
              </stop>
            </linearGradient>
          ))}
        </defs>

        {waveLines.map((line, i) => (
          <motion.path
            key={i}
            d={line.path}
            fill="none"
            stroke={`url(#fade-gradient-${i})`}
            strokeWidth="90"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={isAnimating ? { pathLength: 1 } : {}}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
              delay: line.delay,
            }}
          />
        ))}
      </motion.svg>

      {/* 白いオーバーレイ - オレンジ変化後に出現 */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 1.0,
        }}
      />
    </div>
  );
}
