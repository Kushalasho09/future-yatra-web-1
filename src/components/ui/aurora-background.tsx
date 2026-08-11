"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center text-navy-deep overflow-hidden",
        className,
      )}
      {...props}
    >
      {/* Animated Flowing Aurora Light Waves */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none z-0"
        style={
          {
            "--aurora":
              "repeating-linear-gradient(100deg,#2DBDB6_10%,#3FE0D6_18%,#3A5EA8_25%,#93c5fd_32%,#2DBDB6_40%)",
            "--white-gradient":
              "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",
          } as React.CSSProperties
        }
      >
        <div
          className={cn(
            `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-70 blur-[16px] will-change-transform after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:content-[""]`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_30%,transparent_85%)]`,
          )}
        ></div>
      </div>

      {/* Rich Glowing Ambient Light Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-32 -left-20 w-[600px] h-[600px] bg-gradient-to-br from-teal-tint/80 via-teal/20 to-transparent rounded-full blur-[100px] pointer-events-none animate-orb-1" />
        <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-blue-100/90 via-teal-bright/25 to-transparent rounded-full blur-[110px] pointer-events-none animate-orb-2" />
        <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-gradient-to-tr from-teal-tint/60 via-blue-200/20 to-transparent rounded-full blur-[90px] pointer-events-none" />
      </div>

      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
