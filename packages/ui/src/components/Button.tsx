import { useState } from "react";
import { Pressable, View, type PressableProps } from "react-native";
import { Text } from "./Text";
import { cn } from "../utils/cn";
import {
  brutalFlatEdgeClasses,
  brutalRaisedEdgeClasses,
  brutalRaisedEdgePressedClasses,
} from "../utils/brutal-border";

/** Visual style preset for {@link Button}. */
export type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive";

/** Touch target and padding preset for {@link Button}. */
export type ButtonSize = "sm" | "md" | "lg";

/** Icon placement relative to the button label. */
export type ButtonIconPosition = "left" | "middle" | "right";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brutal-black",
  secondary: "bg-brutal-white",
  ghost: "bg-transparent active:bg-brutal-gray",
  destructive: "bg-brutal-red",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 min-h-[32px]",
  md: "px-4 py-2.5 min-h-[44px]",
  lg: "px-6 py-3 min-h-[52px]",
};

const iconOnlySizeClasses: Record<ButtonSize, string> = {
  sm: "p-1.5 min-h-[32px] min-w-[32px]",
  md: "p-2.5 min-h-[44px] min-w-[44px]",
  lg: "p-3 min-h-[52px] min-w-[52px]",
};

const textSizeMap: Record<ButtonSize, "sm" | "base" | "lg"> = {
  sm: "sm",
  md: "base",
  lg: "lg",
};

const textColorMap: Record<ButtonVariant, "inverse" | "default" | "red"> = {
  primary: "inverse",
  secondary: "default",
  ghost: "default",
  destructive: "inverse",
};

/**
 * Props for {@link Button}.
 *
 * Extends React Native `PressableProps` (except `children`) with brutal styling
 * presets. String children are wrapped in {@link Text}; pass custom nodes
 * for fully custom layouts without the `icon` prop.
 */
export interface ButtonProps extends Omit<PressableProps, "children"> {
  /** Color and fill preset. @defaultValue `"primary"` */
  variant?: ButtonVariant;
  /** Padding and minimum height. @defaultValue `"md"` */
  size?: ButtonSize;
  /** Hard offset shadow while idle. Removed while pressed or disabled. @defaultValue `true` */
  shadow?: boolean;
  /** Optional icon node (e.g. from your icon library). */
  icon?: React.ReactNode;
  /**
   * Icon placement relative to the label.
   * `"middle"` renders the icon alone — set `accessibilityLabel` for screen readers.
   * @defaultValue `"left"`
   */
  iconPosition?: ButtonIconPosition;
  /** Additional NativeWind classes on the outer `Pressable`. */
  className?: string;
  /** Additional NativeWind classes when children is a string (applied to inner text). */
  textClassName?: string;
  /** Label text or custom content. Optional when `iconPosition` is `"middle"`. */
  children?: React.ReactNode;
}

/**
 * Neo-brutalist pressable button with hard borders, optional drop shadow, and
 * press feedback.
 *
 * @example
 * ```tsx
 * <Button variant="primary" onPress={() => console.log("go")}>
 *   Continue
 * </Button>
 * ```
 *
 * @example
 * ```tsx
 * <Button variant="destructive" size="sm" disabled>
 *   Delete
 * </Button>
 * ```
 *
 * @example
 * ```tsx
 * <Button icon={<PlusIcon />} iconPosition="left">
 *   Add item
 * </Button>
 * ```
 *
 * @example
 * ```tsx
 * <Button
 *   icon={<SettingsIcon />}
 *   iconPosition="middle"
 *   accessibilityLabel="Settings"
 * />
 * ```
 */
export function Button({
  variant = "primary",
  size = "md",
  shadow = true,
  icon,
  iconPosition = "left",
  disabled,
  className,
  textClassName,
  children,
  ...props
}: ButtonProps) {
  const [pressed, setPressed] = useState(false);
  const isIconOnly = Boolean(icon) && iconPosition === "middle";
  const isRaised = shadow && !disabled;

  const label =
    typeof children === "string" ? (
      <Text
        size={textSizeMap[size]}
        weight="semibold"
        color={textColorMap[variant]}
        className={textClassName}
      >
        {children}
      </Text>
    ) : (
      children
    );

  const content = icon ? (
    isIconOnly ? (
      icon
    ) : (
      <View className="flex-row items-center gap-2">
        {iconPosition === "left" ? icon : null}
        {label}
        {iconPosition === "right" ? icon : null}
      </View>
    )
  ) : (
    label
  );

  return (
    <Pressable
      disabled={disabled}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      className={cn(
        "items-center justify-center rounded-brutal-sm",
        variantClasses[variant],
        isIconOnly ? iconOnlySizeClasses[size] : sizeClasses[size],
        isRaised
          ? pressed
            ? brutalRaisedEdgePressedClasses
            : brutalRaisedEdgeClasses
          : brutalFlatEdgeClasses,
        disabled && "opacity-50",
        className,
      )}
      {...props}
    >
      {content}
    </Pressable>
  );
}
