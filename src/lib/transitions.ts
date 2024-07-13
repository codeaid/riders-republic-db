import type { TransitionConfig } from 'svelte/transition';
import type { TransitionParams } from '@/types/transitions';

/**
 * Transition handler for flying an element down
 *
 * @param node Target node
 * @param params Transition params
 */
export const flyDown = (
  node: HTMLDivElement,
  { delay, duration, easing }: TransitionParams,
): TransitionConfig => ({
  delay,
  duration,
  css: t => {
    // Tweak current time to create a non-linear transition
    const cubic = easing ? easing(t) : t;
    const value = 100 - cubic * 100;

    return `
      opacity: ${t};
      transform: translateY(${value}%)`;
  },
});

/**
 * Transition handler for scaling an element horizontally
 *
 * @param node Target node
 * @param params Transition params
 */
export const scaleX = (
  node: HTMLDivElement,
  { delay, duration, easing }: TransitionParams,
): TransitionConfig => ({
  delay,
  duration,
  css: t => {
    const eased = easing ? easing(t) : t;
    return `transform: scaleX(${eased})`;
  },
});
