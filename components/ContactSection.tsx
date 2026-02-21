"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import CircleBrush from "./CircleBrush";
export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xnjbbwev", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="ink-texture relative overflow-hidden bg-cream py-32"
    >
      <CircleBrush />
      <div className="section-content mx-auto max-w-2xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-sm uppercase tracking-[0.3em] text-primary/70"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 font-display text-3xl font-bold text-primary md:text-5xl"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 font-body text-sm leading-relaxed text-primary/70"
        >
          プロジェクトのご相談、お見積もりなどお気軽にお問い合わせください。
        </motion.p>

        {status === "sent" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 border border-primary/10 p-12 text-center"
          >
            <p className="font-display text-xl font-semibold text-primary">
              Thank you.
            </p>
            <p className="mt-2 font-body text-sm text-muted">
              お問い合わせを受け付けました。3営業日以内にご連絡いたします。
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="mt-12 space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="font-body text-xs uppercase tracking-widest text-primary/70"
              >
                お名前
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-2 w-full border-b border-primary/20 bg-transparent px-0 py-3 font-body text-sm text-primary outline-none transition-colors focus:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="font-body text-xs uppercase tracking-widest text-primary/70"
              >
                会社名
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="mt-2 w-full border-b border-primary/20 bg-transparent px-0 py-3 font-body text-sm text-primary outline-none transition-colors focus:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="font-body text-xs uppercase tracking-widest text-primary/70"
              >
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-2 w-full border-b border-primary/20 bg-transparent px-0 py-3 font-body text-sm text-primary outline-none transition-colors focus:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="font-body text-xs uppercase tracking-widest text-primary/70"
              >
                ご相談内容
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-2 w-full resize-none border-b border-primary/20 bg-transparent px-0 py-3 font-body text-sm text-primary outline-none transition-colors focus:border-primary"
              />
            </div>

            {status === "error" && (
              <p className="font-body text-sm text-red-600">
                送信に失敗しました。時間をおいて再度お試しください。
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="group relative mt-4 inline-block overflow-hidden border-2 border-primary px-10 py-4 font-body text-sm font-medium tracking-widest text-primary uppercase transition-colors duration-300 hover:text-secondary disabled:opacity-50"
            >
              <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-300 group-hover:translate-x-0" />
              <span className="relative">
                {status === "sending" ? "送信中..." : "送信する"}
              </span>
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
