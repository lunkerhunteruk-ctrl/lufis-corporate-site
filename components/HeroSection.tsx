"use client";

import { motion } from "framer-motion";
import InkBlot from "./InkBlot";

export default function HeroSection() {
  return (
    <section className="ink-texture relative flex min-h-screen items-center justify-center overflow-hidden bg-cream px-6">
      <InkBlot variant="top-right" className="w-[800px] h-[800px]" />
      <InkBlot variant="bottom-left" className="w-[600px] h-[600px]" />

      <div className="section-content text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-5xl font-bold leading-tight tracking-tight text-primary md:text-7xl lg:text-8xl"
        >
          Business,
          <br />
          <span className="italic">beautifully</span>
          <br />
          engineered.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mx-auto mt-8 max-w-lg font-body text-base leading-relaxed text-muted md:text-lg"
        >
          デザインとテクノロジーの交差点から、
          <br className="hidden sm:block" />
          ビジネスを美しくエンジニアリングする。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
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
