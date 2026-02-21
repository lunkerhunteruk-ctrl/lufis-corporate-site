"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CRIMSON = "#FA003F";
const GREEN = "#B9B0A4";

export default function CircleBrush() {
  const [isVisible, setIsVisible] = useState(false);
  const [showGreen, setShowOrange] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("contact");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // isVisible になってから 1.2秒後にオレンジに切り替え
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowOrange(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // 左から右へのウェーブライン（5本）- 均一で強めのウェーブパターン
  const waveLines = [
    {
      path: `M -100,50 C 0,110 100,-10 200,50 C 300,110 400,-10 500,50 C 600,110 700,-10 800,50 C 900,110 1000,-10 1100,50`,
      delay: 0,
    },
    {
      path: `M -100,220 C 0,280 100,160 200,220 C 300,280 400,160 500,220 C 600,280 700,160 800,220 C 900,280 1000,160 1100,220`,
      delay: 0.25,
    },
    {
      path: `M -100,390 C 0,450 100,330 200,390 C 300,450 400,330 500,390 C 600,450 700,330 800,390 C 900,450 1000,330 1100,390`,
      delay: 0.5,
    },
    {
      path: `M -100,560 C 0,620 100,500 200,560 C 300,620 400,500 500,560 C 600,620 700,500 800,560 C 900,620 1000,500 1100,560`,
      delay: 0.75,
    },
    {
      path: `M -100,730 C 0,790 100,670 200,730 C 300,790 400,670 500,730 C 600,790 700,670 800,730 C 900,790 1000,670 1100,730`,
      delay: 1.0,
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* ブルーレイヤー */}
      <motion.svg
        viewBox="0 0 1000 800"
        className="absolute top-1/2 left-1/2 w-full h-full"
        style={{ x: "-50%", y: "-50%" }}
        preserveAspectRatio="xMidYMid slice"
        initial={{ opacity: 0 }}
        animate={{ opacity: showGreen ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {waveLines.map((line, i) => (
          <motion.path
            key={i}
            d={line.path}
            fill="none"
            stroke={CRIMSON}
            strokeWidth="90"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={isVisible ? { pathLength: 1 } : {}}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
              delay: line.delay,
            }}
          />
        ))}
      </motion.svg>

      {/* オレンジレイヤー */}
      <motion.svg
        viewBox="0 0 1000 800"
        className="absolute top-1/2 left-1/2 w-full h-full"
        style={{ x: "-50%", y: "-50%" }}
        preserveAspectRatio="xMidYMid slice"
        initial={{ opacity: 0 }}
        animate={{ opacity: showGreen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {waveLines.map((line, i) => (
          <motion.path
            key={i}
            d={line.path}
            fill="none"
            stroke={GREEN}
            strokeWidth="90"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={isVisible ? { pathLength: 1 } : {}}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
              delay: line.delay,
            }}
          />
        ))}
      </motion.svg>

      {/* 白いオーバーレイ - フォームエリアのみ */}
      {isVisible && (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 bg-white"
          style={{
            top: "5%",
            bottom: "3%",
            width: "min(672px, calc(100% - 3rem))",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 1.0,
          }}
        />
      )}
    </div>
  );
}
