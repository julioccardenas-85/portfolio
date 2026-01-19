"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
    images: string[];
    startIndex: number;
    alt: string;
};

export default function ImageThumbnail({
    images,
    startIndex,
    alt,
}: Props) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(startIndex);

    const total = images.length;

    const next = () => setIndex((i) => (i + 1) % total);
    const prev = () => setIndex((i) => (i - 1 + total) % total);

    // Close on ESC and navigate with arrows
    useEffect(() => {
        if (!open) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <>
            {/* Miniature */}
            <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                    setIndex(startIndex);
                    setOpen(true);
                }}
                className="relative h-[260px] md:h-[300px] bg-white rounded-xl cursor-pointer flex items-center justify-center overflow-hidden"
            >
                <Image
                    src={images[startIndex]}
                    alt={alt}
                    fill
                    className="object-contain"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition" />
            </motion.div>

            {/* Modal + Carrousel */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
                        onClick={() => setOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center"
                        >
                            {/* Active image */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.25 }}
                                    className="relative w-full h-full"
                                >
                                    <Image
                                        src={images[index]}
                                        alt={alt}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Left arrow */}
                            {total > 1 && (
                                <button
                                    onClick={prev}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl px-3 py-1 hover:opacity-80"
                                >
                                    ‹
                                </button>
                            )}

                            {/* Right arrow */}
                            {total > 1 && (
                                <button
                                    onClick={next}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl px-3 py-1 hover:opacity-80"
                                >
                                    ›
                                </button>
                            )}

                            {/* Indicator */}
                            <div className="absolute bottom-4 right-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                                {index + 1} / {total}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
