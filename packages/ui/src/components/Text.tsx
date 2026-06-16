import { Text as RNText, type TextProps as RNTextProps } from "react-native";
import { cn } from "../utils/cn";

/** Body text size preset for {@link Text}. */
export type TextSize = "xs" | "sm" | "base" | "lg" | "xl";

/** Font weight preset for {@link Text}. */
export type TextWeight = "normal" | "medium" | "semibold" | "bold";

/** Semantic text color for {@link Text}. */
export type TextColor =
  | "default"
  | "muted"
  | "inverse"
  | "pink"
  | "yellow"
  | "green"
  | "red";

const sizeClasses: Record<TextSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const weightClasses: Record<TextWeight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const colorClasses: Record<TextColor, string> = {
  default: "text-brutal-black",
  muted: "text-neutral-600",
  inverse: "text-brutal-white",
  pink: "text-brutal-pink",
  yellow: "text-brutal-yellow",
  green: "text-brutal-green",
  red: "text-brutal-red",
};

/**
 * Props for {@link Text}.
 *
 * Extends React Native `TextProps` with brutal typography presets.
 */
export interface TextProps extends RNTextProps {
  /** Font size preset. @defaultValue `"base"` */
  size?: TextSize;
  /** Font weight preset. @defaultValue `"normal"` */
  weight?: TextWeight;
  /** Semantic color preset. @defaultValue `"default"` */
  color?: TextColor;
  /** Additional NativeWind classes. */
  className?: string;
}

/**
 * Body text with brutal font family, size, weight, and color presets.
 *
 * @example
 * ```tsx
 * <Text size="sm" color="muted">Secondary copy</Text>
 * ```
 */
export function Text({
  size = "base",
  weight = "normal",
  color = "default",
  className,
  ...props
}: TextProps) {
  return (
    <RNText
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

/** Heading level for {@link Heading}. */
export type HeadingLevel = 1 | 2 | 3 | 4;

const headingSizeClasses: Record<HeadingLevel, string> = {
  1: "text-4xl font-bold tracking-tight",
  2: "text-3xl font-bold tracking-tight",
  3: "text-2xl font-semibold tracking-tight",
  4: "text-xl font-semibold",
};

/**
 * Props for {@link Heading}.
 *
 * Omits `size` and `weight` from {@link TextProps} — heading scale is
 * controlled by `level`.
 */
export interface HeadingProps extends Omit<TextProps, "size" | "weight"> {
  /** Visual heading level (maps to size/weight). @defaultValue `2` */
  level?: HeadingLevel;
}

/**
 * Display heading with brutal typography and `accessibilityRole="header"`.
 *
 * @example
 * ```tsx
 * <Heading level={1}>Page title</Heading>
 * ```
 */
export function Heading({
  level = 2,
  color = "default",
  className,
  ...props
}: HeadingProps) {
  return (
    <RNText
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
