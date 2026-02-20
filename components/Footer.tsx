"use client";

export default function Footer() {
  return (
    <footer className="bg-primary py-16 text-secondary">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <p className="font-display text-2xl font-bold tracking-wider">
              LUFiS
            </p>
            <p className="mt-2 font-body text-xs text-gray-500">
              MVP Development Studio
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="https://github.com/lufis"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-wide text-gray-500 transition-colors hover:text-secondary"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/lufis"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-wide text-gray-500 transition-colors hover:text-secondary"
            >
              X / Twitter
            </a>
            <a
              href="https://linkedin.com/company/lufis"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-wide text-gray-500 transition-colors hover:text-secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="font-body text-xs text-gray-600">
            &copy; {new Date().getFullYear()} LUFiS Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
