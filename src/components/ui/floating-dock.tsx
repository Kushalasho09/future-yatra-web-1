"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon?: React.ReactNode; href?: string; content?: React.ReactNode; isHighlighted?: boolean }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <FloatingDockDesktop items={items} className={desktopClassName} />
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon?: React.ReactNode; href?: string; content?: React.ReactNode; isHighlighted?: boolean }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex h-16 items-center justify-center gap-2.5 sm:gap-3.5 rounded-full bg-slate-900/80 backdrop-blur-xl border border-teal-500/30 px-4 sm:px-6 shadow-[0_0_50px_rgba(13,148,136,0.2)] flex-nowrap whitespace-nowrap overflow-x-auto sm:overflow-x-visible no-scrollbar max-w-full",
        className
      )}
    >
      {items.map((item) => (
        <DockPillContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function DockPillContainer({
  mouseX,
  title,
  content,
  isHighlighted,
  href,
}: {
  mouseX: MotionValue<number>;
  title: string;
  content?: React.ReactNode;
  isHighlighted?: boolean;
  href?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [130, 175, 130]);
  const scaleTransform = useTransform(distance, [-150, 0, 150], [1, 1.12, 1]);

  const scale = useSpring(scaleTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  const PillWrapper = href ? "a" : "div";

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex-shrink-0 cursor-default"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 2, x: "-50%" }}
            className="absolute -top-9 left-1/2 -translate-x-1/2 w-fit rounded-full border border-teal-500/40 bg-slate-900/95 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#38BDF8] shadow-lg pointer-events-none z-30 whitespace-nowrap"
          >
            {isHighlighted ? "Global HQ • IST" : title}
          </motion.div>
        )}
      </AnimatePresence>

      <PillWrapper
        {...(href ? { href } : {})}
        className={cn(
          "flex items-center space-x-2 rounded-full px-4 py-2 text-xs sm:text-small transition-colors duration-200",
          isHighlighted
            ? "bg-gradient-to-r from-[#0D9488] via-[#0284C7] to-[#1E40AF] text-white border-2 border-[#2DD4BF] shadow-lg shadow-teal-500/30"
            : "bg-white/[0.06] hover:bg-white/[0.14] border border-white/15 hover:border-[#2DD4BF]/50 text-slate-200"
        )}
      >
        {content}
      </PillWrapper>
    </motion.div>
  );
}
