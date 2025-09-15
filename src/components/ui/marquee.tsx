import { cn } from "@/lib/utils";
import React from "react";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  pauseOnHover?: boolean;
  reverse?: boolean;
  vertical?: boolean;
}

const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  ({ className, pauseOnHover = false, reverse = false, vertical = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group flex overflow-hidden p-2 [--gap:1rem] [--duration:30s]",
           vertical ? "flex-col" : "flex-row",
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "flex w-max items-center justify-around [animation-play-state:running]",
            {
              "group-hover:[animation-play-state:paused]": pauseOnHover,
            },
            vertical ? "animate-marquee-vertical flex-col" : "animate-marquee flex-row",
            reverse && (vertical ? "animate-marquee-vertical-reverse" : "animate-marquee-reverse")
          )}
        >
          {children}
          {children}
        </div>
      </div>
    );
  }
);

Marquee.displayName = "Marquee";

export { Marquee };
