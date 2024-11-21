export const fadeIn = (direction, delay,) => {
  return {
    hidden: {
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 1.2,
        type: "tween",
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
