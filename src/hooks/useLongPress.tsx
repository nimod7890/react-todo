import { useEffect, useRef } from "react";
import TIME from "src/constants/time";

export const useLongPress = (onLongPress: (event: Event) => void, ms = TIME.SECOND) => {
  let timer: number;
  const ref = useRef<HTMLDivElement | null>(null);
  const start = (event: Event) => {
    timer = setTimeout(() => {
        onLongPress(event)
    }, ms);
  };

  const stop = () => {
    clearTimeout(timer);
  };
  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }
    el.addEventListener("mousedown", start);
    el.addEventListener("mouseup", stop);
    return () => {
      el.removeEventListener("mousedown", start);
      el.removeEventListener("mouseup", stop);
    };
  },[]);
  return ref;
};