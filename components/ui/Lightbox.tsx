"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: { src: string; alt?: string }[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

const Lightbox = ({ images, isOpen, onClose, initialIndex = 0 }: LightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const prevImage = () =>
  setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
  setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  if (!isOpen) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-black bg-opacity-80 flex items-center justify-center"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white z-50 p-2 hover:opacity-80 hover:cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X size={32} />
        </button>

        <button
          onClick={prevImage}
          className="absolute left-4 text-white z-50 p-2 hover:opacity-80 hover:cursor-pointer"
          aria-label="Previous Image"
        >
          <ChevronLeft size={48} />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-4 text-white z-50 p-2 hover:opacity-80 hover:cursor-pointer"
          aria-label="Next Image"
        >
          <ChevronRight size={48} />
        </button>

        <div className="relative w-full h-full flex items-center justify-center max-w-[90vw] max-h-[90vh]">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex].src}
              alt={images[currentIndex].alt || ""}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="max-w-full max-h-full object-contain rounded-md shadow-lg"
            />
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;