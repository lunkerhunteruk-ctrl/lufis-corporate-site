"use client";

interface InkBlotProps {
  className?: string;
  variant?: "top-right" | "bottom-left" | "center" | "top-left";
}

export default function InkBlot({
  className = "",
  variant = "top-right",
}: InkBlotProps) {
  const variants = {
    "top-right": "top-0 right-0 translate-x-1/3 -translate-y-1/4",
    "bottom-left": "bottom-0 left-0 -translate-x-1/3 translate-y-1/4",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "top-left": "top-0 left-0 -translate-x-1/4 -translate-y-1/4",
  };

  return (
    <svg
      className={`absolute pointer-events-none opacity-[0.04] mix-blend-multiply ${variants[variant]} ${className}`}
      width="600"
      height="600"
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <filter id={`blur-${variant}`}>
        <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
      </filter>
      <ellipse
        cx="300"
        cy="280"
        rx="250"
        ry="200"
        fill="#2d2d2d"
        filter={`url(#blur-${variant})`}
      />
      <ellipse
        cx="350"
        cy="350"
        rx="180"
        ry="150"
        fill="#1a1a1a"
        filter={`url(#blur-${variant})`}
      />
      <circle
        cx="200"
        cy="200"
        r="120"
        fill="#2d2d2d"
        filter={`url(#blur-${variant})`}
      />
    </svg>
  );
}
