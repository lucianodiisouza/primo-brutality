import {
  ScrollView,
  type ScrollViewProps,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import { cn } from "../utils/cn";

/** Content padding preset for {@link BrutScrollView}. */
export type BrutScrollViewPadding = "none" | "sm" | "md" | "lg";

const paddingClasses: Record<BrutScrollViewPadding, string> = {
  none: "p-0",
  sm: "p-3",
  md: "p-4",
  lg: "p-6",
};

/**
 * Props for {@link BrutScrollView}.
 *
 * Extends React Native `ScrollViewProps` with content padding presets.
 */
export interface BrutScrollViewProps extends ScrollViewProps {
  /** Padding applied to the scroll content container. @defaultValue `"md"` */
  contentPadding?: BrutScrollViewPadding;
  /** NativeWind classes on the outer `ScrollView`. */
  className?: string;
  /** NativeWind classes on the content container. */
  contentContainerClassName?: string;
}

/**
 * Scrollable region with brutal defaults: hidden vertical indicator and
 * `keyboardShouldPersistTaps="handled"`.
 *
 * @example
 * ```tsx
 * <BrutScrollView contentPadding="md" className="flex-1">
 *   {items.map((item) => <BrutCard key={item.id}>...</BrutCard>)}
 * </BrutScrollView>
 * ```
 */
export function BrutScrollView({
  contentPadding = "md",
  className,
  contentContainerClassName,
  contentContainerStyle,
  keyboardShouldPersistTaps = "handled",
  showsVerticalScrollIndicator = false,
  ...props
}: BrutScrollViewProps) {
  return (
    <ScrollView
      className={cn("flex-1", className)}
      contentContainerClassName={cn(
        "grow",
        paddingClasses[contentPadding],
        contentContainerClassName,
      )}
      contentContainerStyle={contentContainerStyle as StyleProp<ViewStyle>}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      {...props}
    />
  );
}
