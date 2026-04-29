"use client";

import Image from "next/image";

interface PhotoBannerProps {
  src: string;
  alt: string;
}

export default function PhotoBanner({ src, alt }: PhotoBannerProps) {
  return (
    <div
      style={{
        height: "300px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        loading="lazy"
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(to right, rgba(90, 143, 60, 0.1), rgba(90, 143, 60, 0.05))`,
        }}
      />
    </div>
  );
}
