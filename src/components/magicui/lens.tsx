import React, { useRef, useState } from "react";

interface LensProps {
  children: React.ReactNode;
  zoomFactor?: number;
  lensSize?: number;
  isStatic?: boolean;
  ariaLabel?: string;
}

export const Lens: React.FC<LensProps> = ({
  children,
  zoomFactor = 2,
  lensSize = 150,
  isStatic = false,
  ariaLabel = "Zoom Lens"
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lensPos, setLensPos] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isStatic) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setLensPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseLeave = () => {
    if (!isStatic) setLensPos(null);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full"
      aria-label={ariaLabel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: isStatic ? "none" : "zoom-in" }}
    >
      {children}
      {lensPos && (
        <div
          className="pointer-events-none border-2 border-blue-400 rounded-full shadow-lg z-50"
          style={{
            position: "absolute",
            left: lensPos.x - lensSize / 2,
            top: lensPos.y - lensSize / 2,
            width: lensSize,
            height: lensSize,
            background: `rgba(255,255,255,0.15)`,
            boxShadow: "0 0 0 2px #3b82f6, 0 4px 32px rgba(59,130,246,0.2)",
            backdropFilter: `blur(${zoomFactor * 2}px)`
          }}
        />
      )}
    </div>
  );
};
