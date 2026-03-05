import { useCallback, useEffect, useState } from "react";

export function useScreenBreakpoint(breakpoint: number) {
  const [isMounted, setIsMounted] = useState(false);
  const [width, setWidth] = useState<boolean>(false);

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth < breakpoint);
  }, [breakpoint]);

  useEffect(() => {
    setIsMounted(true);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  // Return false during SSR to prevent hydration mismatch
  return isMounted ? width : false;
}
