import { Text, type TextProps } from "react-native";
import { cn } from "../utils/cn";

/** Body text size preset for {@link BrutText}. */
export type BrutTextSize = "xs" | "sm" | "base" | "lg" | "xl";

/** Font weight preset for {@link BrutText}. */
export type BrutTextWeight = "normal" | "medium" | "semibold" | "bold";

/** Semantic text color for {@link BrutText}. */
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

/**
 * Props for {@link BrutText}.
 *
 * Extends React Native `TextProps` with brutal typography presets.
 */
export interface BrutTextProps extends TextProps {
  /** Font size preset. @defaultValue `"base"` */
  size?: BrutTextSize;
  /** Font weight preset. @defaultValue `"normal"` */
  weight?: BrutTextWeight;
  /** Semantic color preset. @defaultValue `"default"` */
  color?: BrutTextColor;
  /** Additional NativeWind classes. */
  className?: string;
}

/**
 * Body text with brutal font family, size, weight, and color presets.
 *
 * @example
 * ```tsx
 * <BrutText size="sm" color="muted">Secondary copy</BrutText>
 * ```
 */
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

/** Heading level for {@link BrutHeading}. */
export type BrutHeadingLevel = 1 | 2 | 3 | 4;

const headingSizeClasses: Record<BrutHeadingLevel, string> = {
  1: "text-4xl font-bold tracking-tight",
  2: "text-3xl font-bold tracking-tight",
  3: "text-2xl font-semibold tracking-tight",
  4: "text-xl font-semibold",
};

/**
 * Props for {@link BrutHeading}.
 *
 * Omits `size` and `weight` from {@link BrutTextProps} — heading scale is
 * controlled by `level`.
 */
export interface BrutHeadingProps extends Omit<BrutTextProps, "size" | "weight"> {
  /** Visual heading level (maps to size/weight). @defaultValue `2` */
  level?: BrutHeadingLevel;
}

/**
 * Display heading with brutal typography and `accessibilityRole="header"`.
 *
 * @example
 * ```tsx
 * <BrutHeading level={1}>Page title</BrutHeading>
 * ```
 */
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
