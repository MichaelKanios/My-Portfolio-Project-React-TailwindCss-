import React from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function BackToTop() {
  const [parent] = useAutoAnimate();

  const visible = useScrollPosition(400);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div ref={parent}>
      {visible && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-4 z-50 
            p-3 rounded-full 
            bg-rose-700 text-white 
            shadow-lg hover:bg-gray-800
            transition-transform hover:-translate-y-1 cursor-pointer
          "
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}
