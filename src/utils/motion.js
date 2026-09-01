/**
 * Framer Motion variant factories used by section components and SectionWrapper.
 * Pure helpers — no side effects.
 */

/**
 * Vertical spring entrance for headings.
 * @param {number} [delay] - Seconds before the show transition starts.
 * @returns {{ hidden: object, show: object }} Motion variants for y/opacity.
 * @example
 * <motion.div variants={textVariant(0.2)} initial="hidden" animate="show" />
 */
export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

/**
 * Directional fade-in for cards and body copy.
 * @param {string} direction - "left" | "right" | "up" | "down" | "".
 * @param {string} type - Framer Motion transition type (e.g. "spring", "tween").
 * @param {number} delay - Seconds before the show transition starts.
 * @param {number} duration - Transition duration in seconds.
 * @returns {{ hidden: object, show: object }} Motion variants for position/opacity.
 * @example
 * fadeIn("right", "spring", 0.5, 0.75)
 */
export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

/**
 * Scale-up fade for zoom entrances.
 * @param {number} delay - Seconds before the show transition starts.
 * @param {number} duration - Transition duration in seconds.
 * @returns {{ hidden: object, show: object }} Motion variants for scale/opacity.
 * @example
 * zoomIn(0.1, 0.4)
 */
export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

/**
 * Full-axis slide-in used by the Contact form and Earth canvas panels.
 * @param {string} direction - "left" | "right" | "up" | "down". Note: "up" and
 *   "down" currently share the same hidden y (`"100%"`) — not mirrored.
 * @param {string} type - Framer Motion transition type.
 * @param {number} delay - Seconds before the show transition starts.
 * @param {number} duration - Transition duration in seconds.
 * @returns {{ hidden: object, show: object }} Motion variants for x/y.
 * @example
 * slideIn("left", "tween", 0.2, 1)
 */
export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

/**
 * Parent stagger container so children animate in sequence when in view.
 * @param {number} [staggerChildren] - Delay between each child animation.
 * @param {number} [delayChildren] - Extra delay before the first child (default 0).
 * @returns {{ hidden: object, show: object }} Container variants for SectionWrapper.
 * @example
 * staggerContainer(0.1, 0) // children stagger 100ms apart
 */
export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
