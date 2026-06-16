import { View, type ViewProps } from "react-native";
import { cn } from "../utils/cn";

export type BrutCardShadow = "none" | "hard" | "soft";
export type BrutCardPadding = "none" | "sm" | "md" | "lg";

const paddingClasses: Record<BrutCardPadding, string> = {
  none: "p-0",
  sm: "p-3",
  md: "p-4",
  lg: "p-6",
};

const shadowClasses: Record<BrutCardShadow, string> = {
  none: "",
  hard: "shadow-brutal",
  soft: "shadow-brutal-sm",
};

export interface BrutCardProps extends ViewProps {
  shadow?: BrutCardShadow;
  padding?: BrutCardPadding;
  variant?: "white" | "cream";
  className?: string;
}

export function BrutCard({
  shadow = "hard",
  padding = "md",
  variant = "white",
  className,
  children,
  ...props
}: BrutCardProps) {
  return (
    <View
      className={cn(
        "rounded-brutal-lg border-brutal border-brutal-black",
        variant === "white" ? "bg-brutal-white" : "bg-brutal-cream",
        paddingClasses[padding],
        shadowClasses[shadow],
        className,
      )}
      {...props}
    >
      {children}
    </View>
  );
}
