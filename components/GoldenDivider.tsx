"use client";

export default function GoldenDivider() {
  return (
    <div className="relative h-2 w-full overflow-hidden bg-gradient-to-r from-transparent via-[hsl(var(--golden))] to-transparent">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
    </div>
  );
}
