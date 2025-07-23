import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextAnimateProps {
  children: string;
  className?: string;
  animation?: "blurInUp" | "fadeInUp" | "slideInUp";
  by?: "word" | "character";
  once?: boolean;
}

const animations: Record<string, Variants> = {
  blurInUp: {
    initial: {
      filter: "blur(20px)",
      opacity: 0,
      y: 20,
    },
    animate: {
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
    },
  },
  fadeInUp: {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  },
  slideInUp: {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  },
};

export const TextAnimate = ({
  children,
  className,
  animation = "blurInUp",
  by = "word",
  once = true,
}: TextAnimateProps) => {
  const words = children.split(" ");
  const characters = children.split("");
  const items = by === "word" ? words : characters;
  const selectedAnimation = animations[animation];

  return (
    <motion.div
      className={cn("flex flex-wrap", className)}
      initial="initial"
      whileInView="animate"
      viewport={{ once }}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          className={by === "word" ? "mr-2" : ""}
          variants={selectedAnimation}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut",
          }}
        >
          {item}
          {by === "word" && index < items.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.div>
  );
};