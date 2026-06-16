import { View, type ViewProps } from "react-native";
import { Text } from "./Text";
import { cn } from "../utils/cn";

/** Color preset for {@link Badge}. */
export type BadgeVariant =
  | "default"
  | "pink"
  | "yellow"
  | "green"
  | "red"
  | "outline";

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-brutal-black",
  pink: "bg-brutal-pink",
  yellow: "bg-brutal-yellow",
  green: "bg-brutal-green",
  red: "bg-brutal-red",
  outline: "bg-brutal-white",
};

const textColorMap: Record<BadgeVariant, "inverse" | "default"> = {
  default: "inverse",
  pink: "default",
  yellow: "default",
  green: "inverse",
  red: "inverse",
  outline: "default",
};

/**
 * Props for {@link Badge}.
 *
 * Extends React Native `ViewProps`. Requires a short `label` string.
 */
export interface BadgeProps extends ViewProps {
  /** Color and fill preset. @defaultValue `"default"` */
  variant?: BadgeVariant;
  /** Badge label text. */
  label: string;
  /** Additional NativeWind classes. */
  className?: string;
}

/**
 * Compact status pill with brutal border and accent color presets.
 *
 * @example
 * ```tsx
 * <Badge label="New" variant="pink" />
 * ```
 */
export function Badge({
  variant = "default",
  label,
  className,
  ...props
}: BadgeProps) {
  return (
    <View
      className={cn(
        "self-start rounded-brutal-sm border-brutal border-brutal-black px-2.5 py-1",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      <Text size="sm" weight="semibold" color={textColorMap[variant]}>
        {label}
      </Text>
    </View>
  );
}
