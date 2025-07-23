import React, { useEffect, useRef } from "react";

export const SmoothCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    const speed = 0.2;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = mouseX - 10 + "px";
        cursorRef.current.style.top = mouseY - 10 + "px";
      }
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * speed;
      followerY += (mouseY - followerY) * speed;
      if (followerRef.current) {
        followerRef.current.style.left = followerX - 20 + "px";
        followerRef.current.style.top = followerY - 20 + "px";
      }
      requestAnimationFrame(animateFollower);
    };

    document.addEventListener("mousemove", moveCursor);
    animateFollower();

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-5 h-5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75"
        style={{ position: "fixed" }}
      ></div>
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border-2 border-blue-400 rounded-full pointer-events-none z-[9998] transition-all duration-200"
        style={{ position: "fixed" }}
      ></div>
    </>
  );
};
