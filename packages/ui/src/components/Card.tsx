import { View, type ViewProps } from "react-native";
import { cn } from "../utils/cn";

/** Shadow preset for {@link Card}. */
export type CardShadow = "none" | "hard" | "soft";

/** Inner padding preset for {@link Card}. */
export type CardPadding = "none" | "sm" | "md" | "lg";

const paddingClasses: Record<CardPadding, string> = {
  none: "p-0",
  sm: "p-3",
  md: "p-4",
  lg: "p-6",
};

const shadowClasses: Record<CardShadow, string> = {
  none: "",
  hard: "shadow-brutal",
  soft: "shadow-brutal-sm",
};

/**
 * Props for {@link Card}.
 *
 * Extends React Native `ViewProps` with surface styling presets.
 */
export interface CardProps extends ViewProps {
  /** Drop shadow intensity. @defaultValue `"hard"` */
  shadow?: CardShadow;
  /** Inner padding. @defaultValue `"md"` */
  padding?: CardPadding;
  /** Background fill. @defaultValue `"white"` */
  variant?: "white" | "cream";
  /** Additional NativeWind classes. */
  className?: string;
}

/**
 * Bordered content surface with optional hard shadow and padding presets.
 *
 * @example
 * ```tsx
 * <Card shadow="hard" padding="lg">
 *   <Heading level={3}>Dashboard</Heading>
 * </Card>
 * ```
 */
export function Card({
  shadow = "hard",
  padding = "md",
  variant = "white",
  className,
  children,
  ...props
}: CardProps) {
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
