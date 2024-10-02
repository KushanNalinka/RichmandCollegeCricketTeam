// "use client";

// import {
//   KeyframeOptions,
//   animate,
//   useInView,
//   useIsomorphicLayoutEffect,
// } from "framer-motion";
// import { useRef } from "react";

// type AnimatedCounterProps = {
//   from: number;
//   to: number;
//   animationOptions?: KeyframeOptions;
// };

// const AnimatedCounter = ({
//   from,
//   to,
//   animationOptions,
// }: AnimatedCounterProps) => {
//   const ref = useRef(null); // No HTMLSpanElement type, just use 'null'
//   const inView = useInView(ref, { once: true });

//   useIsomorphicLayoutEffect(() => {
//     const element = ref.current;

//     if (!element) return;
//     if (!inView) return;

//     // Set initial value
//     element.textContent = String(from);

//     // If reduced motion is enabled in system's preferences
//     if (window.matchMedia("(prefers-reduced-motion)").matches) {
//       element.textContent = String(to);
//       return;
//     }

//     const controls = animate(from, to, {
//       duration: 4,
//       ease: "easeOut",
//       ...animationOptions,
//       onUpdate(value) {
//         element.textContent = value.toFixed(0);
//       },
//     });

//     // Cancel on unmount
//     return () => {
//       controls.stop();
//     };
//   }, [ref, inView, from, to, animationOptions]);

//   return <span ref={ref} />; // Attach ref directly here
// };

// export default AnimatedCounter;


"use client";

import { KeyframeOptions, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

type AnimatedCounterProps = {
  from: number;
  to: number;
  animationOptions?: KeyframeOptions;
};

const AnimatedCounter = ({ from, to, animationOptions }: AnimatedCounterProps) => {
  const ref = useRef(null); // Ref for the span element
  const inView = useInView(ref, { once: true }); // Trigger animation only once when in view

  useEffect(() => {
    const element = ref.current;

    if (!element || !inView) return;

    // Set the initial value
    element.textContent = String(from);

    const controls = animate(from, to, {
      duration: 4,
      ease: "easeOut",
      ...animationOptions,
      onUpdate(value) {
        element.textContent = value.toFixed(0); // Display value as integer
      },
    });

    // Stop animation on unmount
    return () => controls.stop();
  }, [inView, from, to, animationOptions]);

  return <span ref={ref} />; // Attach ref directly here
};

export default AnimatedCounter;
