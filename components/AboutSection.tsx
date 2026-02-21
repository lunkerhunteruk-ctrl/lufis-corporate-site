"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="ink-texture relative overflow-hidden bg-primary pt-16 pb-32 text-secondary" style={{ transform: "scaleY(0.9)", transformOrigin: "top", marginBottom: "-10%" }}
    >
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
                ロンドン芸術大学セントラル・セント・マーチンズ（CSM）MA Fashion卒。バレンシアガ等での経験を経て自身のブランドを展開し、VOGUE掲載やLADY GAGAの衣装提供など世界基準の実績を残す。現在は英国を拠点に、ハイファッションで培った美意識とテクノロジーを融合させ、日本企業のデジタルプロダクト開発を最速で支援。
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold">Strength</h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-gray-400">
                UI/UXデザインからVertex AI統合、Stripe決済システム、45以上のCloud Functions構築まで一人で完結するフルスタック開発力。200以上の機能を持つSaaSプラットフォームを設計・実装した実績。ハイファッションで培った審美眼とエンジニアリングの精度をビジネスプロダクトに注ぎ込みます。
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
                className="border border-gray-700 px-4 py-2 font-body text-xs tracking-wide text-gray-400 transition-all duration-200 hover:border-gray-400 hover:text-gray-100 cursor-default"
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
