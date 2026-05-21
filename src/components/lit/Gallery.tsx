import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface GalleryProps {
  images: string[];
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export function Gallery({ images, title, isOpen, onClose }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setCurrentIndex(0);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, images.length]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6">
          <div className="text-paper">
            <h2 className="font-display text-2xl tracking-tight">{title}</h2>
            <p className="text-xs uppercase tracking-[0.2em] text-paper/50">
              {currentIndex + 1} / {images.length} Imágenes
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full bg-paper/10 p-2 text-paper transition-colors hover:bg-paper/20"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Main Content */}
        <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 md:px-20">
          <button
            onClick={handlePrev}
            className="absolute left-4 z-10 hidden rounded-full bg-paper/5 p-4 text-paper transition-all hover:bg-paper/15 md:block"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`${title} - ${currentIndex + 1}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="max-h-full max-w-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </AnimatePresence>

          <button
            onClick={handleNext}
            className="absolute right-4 z-10 hidden rounded-full bg-paper/5 p-4 text-paper transition-all hover:bg-paper/15 md:block"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>

        {/* Thumbnails (Desktop) */}
        <div className="hidden h-32 w-full items-center justify-center gap-2 overflow-x-auto border-t border-paper/10 p-4 md:flex">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`relative h-20 w-20 flex-shrink-0 overflow-hidden transition-all ${
                currentIndex === idx ? "ring-2 ring-primary scale-110 z-10" : "opacity-40 hover:opacity-100"
              }`}
            >
              <img src={img} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>

        {/* Mobile controls */}
        <div className="flex items-center justify-center gap-8 p-8 md:hidden">
           <button
            onClick={handlePrev}
            className="rounded-full bg-paper/5 p-4 text-paper transition-all"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="rounded-full bg-paper/5 p-4 text-paper transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
