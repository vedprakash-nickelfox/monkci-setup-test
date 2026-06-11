/**
 * Framer Motion manual mock — replaces every motion.* element with a plain HTML
 * counterpart and stubs out hooks so components render without animation errors.
 */
import React from "react";

type AnyProps = Record<string, unknown> & { children?: React.ReactNode };

// Strip framer-specific props before forwarding to the DOM element
const MOTION_PROPS = new Set([
  "animate", "initial", "exit", "whileHover", "whileTap", "whileFocus",
  "whileDrag", "whileInView", "variants", "transition", "viewport",
  "layout", "layoutId", "drag", "dragConstraints", "onAnimationStart",
  "onAnimationComplete", "onUpdate",
]);

function makeElement(tag: string) {
  const El = React.forwardRef<HTMLElement, AnyProps>(
    ({ children, style, ...props }, ref) => {
      const safeProps: Record<string, unknown> = { style };
      for (const [k, v] of Object.entries(props)) {
        if (!MOTION_PROPS.has(k)) safeProps[k] = v;
      }
      return React.createElement(tag, { ...safeProps, ref }, children);
    }
  );
  El.displayName = `motion.${tag}`;
  return El;
}

const HTML_TAGS = [
  "a","article","aside","button","div","footer","form","h1","h2","h3",
  "h4","header","img","input","label","li","main","nav","ol","p","section",
  "select","span","svg","textarea","ul",
];

export const motion = Object.fromEntries(HTML_TAGS.map((t) => [t, makeElement(t)]));

export const AnimatePresence = ({ children }: { children?: React.ReactNode }) => (
  <>{children}</>
);

export const useScroll   = () => ({ scrollYProgress: { get: () => 0, on: () => () => {} } });
export const useTransform = (_v: unknown, _i: unknown, range: number[]) => range?.[0] ?? 0;
export const useInView    = () => true;
export const useAnimation = () => ({ start: jest.fn(), stop: jest.fn() });
export const useMotionValue = (initial: number) => ({ get: () => initial, set: jest.fn() });
