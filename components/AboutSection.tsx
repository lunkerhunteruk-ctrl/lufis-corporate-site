"use client";

import { motion } from "framer-motion";
import InkBlot from "./InkBlot";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="ink-texture relative overflow-hidden bg-primary py-32 text-secondary"
    >
      <InkBlot variant="top-left" className="w-[500px] h-[500px] opacity-[0.08]" />

      <div className="section-content mx-auto max-w-4xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="font-display text-sm uppercase tracking-[0.3em] text-muted"
          >
            About
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mt-4 font-display text-3xl font-bold leading-snug md:text-5xl"
          >
            Design meets
            <br />
            Engineering.
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mt-12 grid gap-12 md:grid-cols-2"
          >
            <div>
              <h3 className="font-display text-lg font-semibold">Background</h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-gray-400">
                ロンドン芸術大学セントラル・セント・マーチンズ（CSM）卒。
                バレンシアガをはじめとするラグジュアリーブランドでの経験を経て、
                テクノロジーとデザインの融合を追求。
                英国を拠点に、日本企業のデジタルプロダクト開発を支援。
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold">Strength</h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-gray-400">
                UI/UXデザインからAI統合、決済システム、バックエンド構築まで
                一人で完結できるフルスタック開発力。
                ハイファッションで培った審美眼とエンジニアリングの精度を
                ビジネスプロダクトに注ぎ込みます。
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mt-16 flex flex-wrap gap-4"
          >
            {[
              "UI/UX Design",
              "Next.js / React",
              "AI Integration",
              "Payment Systems",
              "Full-Stack Development",
            ].map((skill) => (
              <span
                key={skill}
                className="border border-gray-700 px-4 py-2 font-body text-xs tracking-wide text-gray-400"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
