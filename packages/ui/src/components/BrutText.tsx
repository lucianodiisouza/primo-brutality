import { Text, type TextProps } from "react-native";
import { cn } from "../utils/cn";

export type BrutTextSize = "xs" | "sm" | "base" | "lg" | "xl";
export type BrutTextWeight = "normal" | "medium" | "semibold" | "bold";
export type BrutTextColor =
  | "default"
  | "muted"
  | "inverse"
  | "pink"
  | "yellow"
  | "green"
  | "red";

const sizeClasses: Record<BrutTextSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const weightClasses: Record<BrutTextWeight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const colorClasses: Record<BrutTextColor, string> = {
  default: "text-brutal-black",
  muted: "text-neutral-600",
  inverse: "text-brutal-white",
  pink: "text-brutal-pink",
  yellow: "text-brutal-yellow",
  green: "text-brutal-green",
  red: "text-brutal-red",
};

export interface BrutTextProps extends TextProps {
  size?: BrutTextSize;
  weight?: BrutTextWeight;
  color?: BrutTextColor;
  className?: string;
}

export function BrutText({
  size = "base",
  weight = "normal",
  color = "default",
  className,
  ...props
}: BrutTextProps) {
  return (
    <Text
      className={cn(
        "font-brutal",
        sizeClasses[size],
        weightClasses[weight],
        colorClasses[color],
        className,
      )}
      {...props}
    />
  );
}

export type BrutHeadingLevel = 1 | 2 | 3 | 4;

const headingSizeClasses: Record<BrutHeadingLevel, string> = {
  1: "text-4xl font-bold tracking-tight",
  2: "text-3xl font-bold tracking-tight",
  3: "text-2xl font-semibold tracking-tight",
  4: "text-xl font-semibold",
};

export interface BrutHeadingProps extends Omit<BrutTextProps, "size" | "weight"> {
  level?: BrutHeadingLevel;
}

export function BrutHeading({
  level = 2,
  color = "default",
  className,
  ...props
}: BrutHeadingProps) {
  return (
    <Text
      className={cn(
        "font-brutal text-brutal-black",
        headingSizeClasses[level],
        colorClasses[color],
        className,
      )}
      accessibilityRole="header"
      {...props}
    />
  );
}
