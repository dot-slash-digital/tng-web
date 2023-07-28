import { useEffect, useState } from "react";

import bp from "./styles/breakpoints-for-typescript.module.scss";

export enum Breakpoint {
  MOBILE = "MOBILE",
  TABLET = "TABLET",
  SMALL_DESKTOP = "SMALL_DESKTOP",
  DESKTOP = "DESKTOP",
}

interface WindowSize {
  width: number;
  height: number;
}

const getWindowSize = () => {
  if (typeof window === "undefined") {
    return { width: 1920, height: 1080 };
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>(getWindowSize());

  useEffect(() => {
    const handleResize = () => setWindowSize(getWindowSize());

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let breakpoint;
  if (windowSize.width <= parseInt(bp.mobile)) {
    breakpoint = Breakpoint.MOBILE;
  } else if (windowSize.width <= parseInt(bp.tablet)) {
    breakpoint = Breakpoint.TABLET;
  } else if (windowSize.width <= parseInt(bp.smallDesktop)) {
    breakpoint = Breakpoint.SMALL_DESKTOP;
  } else {
    breakpoint = Breakpoint.DESKTOP;
  }

  return { breakpoint, windowSize };
};
