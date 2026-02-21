"use client";

import { motion } from "framer-motion";
import InfinityBrush from "./InfinityBrush";

export default function HeroSection() {
  return (
    <section className="ink-texture relative flex min-h-screen items-center justify-center overflow-hidden bg-cream px-6">
      <InfinityBrush />

      <div className="section-content text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.6 }}
          className="font-display text-4xl font-bold leading-tight tracking-tight text-primary md:text-6xl lg:text-7xl"
        >
          Where <span className="italic">Logic</span>
          <br />
          meets <span className="italic">Aesthetic.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9, ease: "easeOut" }}
          className="mx-auto mt-8 max-w-xl font-body text-base leading-relaxed text-primary md:text-lg"
        >
          妥協なきデザインが、ビジネスの解像度を塗り替える。
          <br className="hidden sm:block" />
          複雑なバックエンドから至高のUIまで、一気通貫で最速のMVP開発を。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
          className="mt-12"
        >
          <a
            href="#contact"
            className="group relative inline-block overflow-hidden border-2 border-primary px-10 py-4 font-body text-sm font-medium tracking-widest text-primary uppercase transition-colors duration-300 hover:text-secondary"
          >
            <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-300 group-hover:translate-x-0" />
            <span className="relative">お問い合わせ</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
