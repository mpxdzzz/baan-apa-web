"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryImages } from "../_lib/site-content";
import { useLanguage } from "./LanguageProvider";

export function GalleryGrid() {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : galleryImages[activeIndex];

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {galleryImages.map((item, index) => {
          const alt = language === "th" ? item.altTh : item.altEn;

          return (
            <button
              key={item.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group overflow-hidden rounded-lg border border-[#e2d4bd] bg-[#fbf7ef] text-left shadow-sm"
            >
              <div className="relative h-44 overflow-hidden sm:h-64 lg:h-72">
                <Image
                  src={item.src}
                  alt={alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <span className="block p-3 text-sm font-bold text-[#17352f] sm:p-4 sm:text-base">
                {alt}
              </span>
            </button>
          );
        })}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 rounded-md bg-white px-4 py-2 text-sm font-bold text-[#17352f]"
          >
            Close
          </button>
          <div
            className="relative h-[78vh] w-full max-w-6xl overflow-hidden rounded-lg bg-black shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={language === "th" ? activeImage.altTh : activeImage.altEn}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
