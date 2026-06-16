import { useState } from "react";
import { Pressable, View, type PressableProps } from "react-native";
import { BrutText } from "./BrutText";
import { cn } from "../utils/cn";

/** Visual style preset for {@link BrutButton}. */
export type BrutButtonVariant = "primary" | "secondary" | "ghost" | "destructive";

/** Touch target and padding preset for {@link BrutButton}. */
export type BrutButtonSize = "sm" | "md" | "lg";

/** Icon placement relative to the button label. */
export type BrutButtonIconPosition = "left" | "middle" | "right";

const variantClasses: Record<BrutButtonVariant, string> = {
  primary: "bg-brutal-black border-brutal border-brutal-black active:shadow-brutal-pressed",
  secondary:
    "bg-brutal-white border-brutal border-brutal-black active:shadow-brutal-pressed",
  ghost: "bg-transparent border-brutal border-transparent active:bg-brutal-gray",
  destructive:
    "bg-brutal-red border-brutal border-brutal-black active:shadow-brutal-pressed",
};

const sizeClasses: Record<BrutButtonSize, string> = {
  sm: "px-3 py-1.5 min-h-[32px]",
  md: "px-4 py-2.5 min-h-[44px]",
  lg: "px-6 py-3 min-h-[52px]",
};

const iconOnlySizeClasses: Record<BrutButtonSize, string> = {
  sm: "p-1.5 min-h-[32px] min-w-[32px]",
  md: "p-2.5 min-h-[44px] min-w-[44px]",
  lg: "p-3 min-h-[52px] min-w-[52px]",
};

const textSizeMap: Record<BrutButtonSize, "sm" | "base" | "lg"> = {
  sm: "sm",
  md: "base",
  lg: "lg",
};

const textColorMap: Record<
  BrutButtonVariant,
  "inverse" | "default" | "red"
> = {
  primary: "inverse",
  secondary: "default",
  ghost: "default",
  destructive: "inverse",
};

/**
 * Props for {@link BrutButton}.
 *
 * Extends React Native `PressableProps` (except `children`) with brutal styling
 * presets. String children are wrapped in {@link BrutText}; pass custom nodes
 * for fully custom layouts without the `icon` prop.
 */
export interface BrutButtonProps extends Omit<PressableProps, "children"> {
  /** Color and fill preset. @defaultValue `"primary"` */
  variant?: BrutButtonVariant;
  /** Padding and minimum height. @defaultValue `"md"` */
  size?: BrutButtonSize;
  /** Hard offset shadow while idle. Removed while pressed or disabled. @defaultValue `true` */
  shadow?: boolean;
  /** Optional icon node (e.g. from your icon library). */
  icon?: React.ReactNode;
  /**
   * Icon placement relative to the label.
   * `"middle"` renders the icon alone — set `accessibilityLabel` for screen readers.
   * @defaultValue `"left"`
   */
  iconPosition?: BrutButtonIconPosition;
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
 * <BrutButton variant="primary" onPress={() => console.log("go")}>
 *   Continue
 * </BrutButton>
 * ```
 *
 * @example
 * ```tsx
 * <BrutButton variant="destructive" size="sm" disabled>
 *   Delete
 * </BrutButton>
 * ```
 *
 * @example
 * ```tsx
 * <BrutButton icon={<PlusIcon />} iconPosition="left">
 *   Add item
 * </BrutButton>
 * ```
 *
 * @example
 * ```tsx
 * <BrutButton
 *   icon={<SettingsIcon />}
 *   iconPosition="middle"
 *   accessibilityLabel="Settings"
 * />
 * ```
 */
export function BrutButton({
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
}: BrutButtonProps) {
  const [pressed, setPressed] = useState(false);
  const isIconOnly = Boolean(icon) && iconPosition === "middle";

  const label =
    typeof children === "string" ? (
      <BrutText
        size={textSizeMap[size]}
        weight="semibold"
        color={textColorMap[variant]}
        className={textClassName}
      >
        {children}
      </BrutText>
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
        "items-center justify-center rounded-brutal-sm border-brutal",
        variantClasses[variant],
        isIconOnly ? iconOnlySizeClasses[size] : sizeClasses[size],
        shadow && !pressed && !disabled && "shadow-brutal",
        disabled && "opacity-50",
        className,
      )}
      {...props}
    >
      {content}
    </Pressable>
  );
}
