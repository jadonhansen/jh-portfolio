"use client";

import type { ReactNode } from "react";
import { MotionConfig, motion } from "motion/react";


const EASE_OUT_QUINT = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}


// Fades and lifts its children once they enter the viewport.
// reducedMotion="user" drops the lift for users who prefer reduced motion and keeps only the fade.
export default function Reveal({ children, className, delay = 0 }: RevealProps) {
    return (
        <MotionConfig reducedMotion="user">
            <motion.div
                className={className}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.8, ease: EASE_OUT_QUINT, delay }}
            >
                {children}
            </motion.div>
        </MotionConfig>
    );
}
