"use client";

import { useLanguage } from "./LanguageProvider";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex rounded-md border border-white/30 p-1">
      {(["th", "en"] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLanguage(item)}
          className={`rounded px-2.5 py-1 text-xs font-bold transition ${
            language === item
              ? "bg-[#f2c36b] text-[#17352f]"
              : "text-white hover:bg-white/10"
          }`}
          aria-pressed={language === item}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
