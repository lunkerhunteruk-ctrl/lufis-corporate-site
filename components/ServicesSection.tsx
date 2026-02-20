"use client";

import { motion } from "framer-motion";
import InkBlot from "./InkBlot";

const services = [
  {
    title: "MVP爆速開発",
    titleEn: "Rapid MVP",
    price: "1.5M JPY〜",
    description:
      "アイデアから動くプロダクトまで最短4週間。デザイン・フロントエンド・バックエンド・決済まで一気通貫で構築。",
    features: [
      "UI/UXデザイン",
      "フロントエンド開発",
      "バックエンド・API構築",
      "決済システム統合",
      "デプロイ・運用サポート",
    ],
  },
  {
    title: "AI機能開発",
    titleEn: "AI Integration",
    price: "800K JPY〜",
    description:
      "既存サービスへのAI機能追加。GPT/Claude API統合、画像認識、レコメンドエンジンなど。",
    features: [
      "LLM API統合",
      "画像認識・生成",
      "レコメンドシステム",
      "チャットボット構築",
      "プロンプト設計",
    ],
  },
  {
    title: "デザインコンサル",
    titleEn: "Design Consulting",
    price: "500K JPY〜",
    description:
      "ハイファッションで培った審美眼で、プロダクトのUI/UXを根本から見直し。ブランディングからUIまで。",
    features: [
      "UI/UX監査",
      "デザインシステム構築",
      "ブランディング",
      "プロトタイピング",
      "ユーザビリティテスト",
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="ink-texture relative overflow-hidden bg-primary py-32 text-secondary"
    >
      <InkBlot variant="bottom-left" className="w-[600px] h-[600px] opacity-[0.06]" />

      <div className="section-content mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-sm uppercase tracking-[0.3em] text-muted"
        >
          Services
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 font-display text-3xl font-bold md:text-5xl"
        >
          What We Offer
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.15 }}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.titleEn}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="group border border-gray-800 p-8 transition-colors duration-300 hover:border-gray-600"
            >
              <p className="font-display text-xs uppercase tracking-[0.2em] text-muted">
                {service.titleEn}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold">
                {service.title}
              </h3>
              <p className="mt-1 font-display text-2xl font-bold text-secondary/80">
                {service.price}
              </p>

              <p className="mt-6 font-body text-sm leading-relaxed text-gray-400">
                {service.description}
              </p>

              <ul className="mt-6 space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 font-body text-xs text-gray-500"
                  >
                    <span className="h-px w-3 bg-gray-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
