import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Check } from "lucide-react";
import { classNames } from "@/utility/classNames";

const languages = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLanguage =
    languages.find((lang) => lang.code === locale) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    router.push({ pathname, query }, asPath, { locale: langCode });
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={classNames(
          "flex items-center gap-2 rounded-full p-2 transition-colors duration-200",
          "hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent/50",
        )}
        aria-label="Switch language"
        aria-expanded={isOpen}
      >
        <Globe className="h-5 w-5 text-foreground" />
        <span className="hidden text-sm font-medium text-foreground sm:inline">
          {currentLanguage.label}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={classNames(
              "absolute right-0 mt-2 min-w-[140px] rounded-xl border border-zinc-200",
              "bg-white p-1 shadow-lg dark:border-accent/30 dark:bg-zinc-900",
              "z-50",
            )}
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={classNames(
                  "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2",
                  "text-sm transition-colors duration-150",
                  locale === language.code
                    ? "bg-accent/10 text-accent dark:bg-accent/20"
                    : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800",
                )}
              >
                <span className="flex items-center gap-2">
                  <span className="text-base">{language.flag}</span>
                  <span className="font-medium">{language.label}</span>
                </span>
                {locale === language.code && (
                  <Check className="h-4 w-4 text-accent" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
