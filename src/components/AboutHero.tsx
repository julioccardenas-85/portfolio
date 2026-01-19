"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutHero() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="
                    sticky top-0 z-20 bg-neutral-950 text-white
                    h-[280px] md:h-[35vh]
                    flex items-center border-b border-neutral-800
                    "
        >
            <div className="max-w-5xl mx-auto w-full px-6">
                <Link
                    href="/"
                    className="text-sm text-neutral-400 hover:text-white transition inline-block"
                >
                    ← Home
                </Link>

                {/* CONTENT */}
                <div className="grid md:grid-cols-[1fr_240px] gap-10 items-center">
                    {/* TEXT */}
                    <div className="text-left">
                        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                            About me
                        </h1>

                        <p className="text-neutral-400 max-w-xl">
                            Julio Cárdenas - Master&apos;s Degree in Information Technologies by Universidad de Guadalajara.
                        </p>
                    </div>

                    {/* PHOTO */}
                    <div className="relative w-40 h-50 rounded-2xl overflow-hidden bg-neutral-200 justify-self-end">
                        <img
                            src="/img/profile.jpg"
                            alt="Julio Cárdenas"
                            className="w-full h-full object-cover grayscale"
                        />
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
