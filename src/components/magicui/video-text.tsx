import { cn } from "@/lib/utils";

interface VideoTextProps {
  children: string;
  src: string;
  className?: string;
}

export const VideoText = ({ children, src, className }: VideoTextProps) => {
  return (
    <div className={cn("relative inline-block", className)}>
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={src} type="video/webm" />
      </video>
      <div
        className="relative z-10 bg-clip-text text-transparent"
        style={{
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};