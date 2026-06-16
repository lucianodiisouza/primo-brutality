import { useState } from "react";
import { Pressable, View, type PressableProps } from "react-native";
import { cn } from "../utils/cn";

/** Touch target preset for {@link BrutToggle}. */
export type BrutToggleSize = "sm" | "md";

const trackSizeClasses: Record<BrutToggleSize, string> = {
  sm: "h-6 w-11",
  md: "h-8 w-14",
};

const thumbSizeClasses: Record<BrutToggleSize, string> = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
};

const thumbOnClasses: Record<BrutToggleSize, string> = {
  sm: "translate-x-5",
  md: "translate-x-6",
};

const thumbIdleClasses =
  "rounded-brutal-sm border-t-brutal border-l-brutal border-t-brutal-black border-l-brutal-black border-b-0 border-r-0 bg-brutal-white shadow-brutal-sm";

const thumbPressedClasses =
  "translate-x-px translate-y-px shadow-brutal-pressed";

/**
 * Props for {@link BrutToggle}.
 *
 * Mirrors the React Native `Switch` API with brutal track and thumb styling.
 */
export interface BrutToggleProps
  extends Omit<PressableProps, "children" | "onPress"> {
  /** Whether the switch is on. */
  value: boolean;
  /** Called with the next value when the user toggles. */
  onValueChange?: (value: boolean) => void;
  /** Track and thumb dimensions. @defaultValue `"md"` */
  size?: BrutToggleSize;
  /** Additional NativeWind classes on the track. */
  className?: string;
}

/**
 * Neo-brutalist on/off switch with a raised thumb and accent track fill.
 *
 * @example
 * ```tsx
 * const [enabled, setEnabled] = useState(false);
 *
 * <BrutToggle
 *   value={enabled}
 *   onValueChange={setEnabled}
 *   accessibilityLabel="Push notifications"
 * />
 * ```
 */
export function BrutToggle({
  value,
  onValueChange,
  size = "md",
  disabled,
  className,
  ...props
}: BrutToggleProps) {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      accessibilityRole="switch"
      accessibilityState={{ checked: value, disabled: Boolean(disabled) }}
      disabled={disabled}
      onPress={() => onValueChange?.(!value)}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      className={cn(
        "justify-center rounded-brutal-sm border-brutal border-brutal-black p-0.5",
        value ? "bg-brutal-green" : "bg-brutal-gray",
        trackSizeClasses[size],
        disabled && "opacity-50",
        className,
      )}
      {...props}
    >
      <View
        className={cn(
          thumbIdleClasses,
          thumbSizeClasses[size],
          value ? thumbOnClasses[size] : "translate-x-0",
          pressed && !disabled && thumbPressedClasses,
        )}
      />
    </Pressable>
  );
}
