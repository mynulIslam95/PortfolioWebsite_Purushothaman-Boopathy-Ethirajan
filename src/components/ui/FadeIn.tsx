"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function FadeIn({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & MotionProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

