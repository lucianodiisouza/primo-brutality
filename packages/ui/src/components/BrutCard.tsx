import { View, type ViewProps } from "react-native";
import { cn } from "../utils/cn";

/** Shadow preset for {@link BrutCard}. */
export type BrutCardShadow = "none" | "hard" | "soft";

/** Inner padding preset for {@link BrutCard}. */
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

/**
 * Props for {@link BrutCard}.
 *
 * Extends React Native `ViewProps` with surface styling presets.
 */
export interface BrutCardProps extends ViewProps {
  /** Drop shadow intensity. @defaultValue `"hard"` */
  shadow?: BrutCardShadow;
  /** Inner padding. @defaultValue `"md"` */
  padding?: BrutCardPadding;
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
 * <BrutCard shadow="hard" padding="lg">
 *   <BrutHeading level={3}>Dashboard</BrutHeading>
 * </BrutCard>
 * ```
 */
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
