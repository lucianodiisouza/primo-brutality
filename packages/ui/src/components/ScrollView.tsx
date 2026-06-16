import {
  ScrollView as RNScrollView,
  type ScrollViewProps as RNScrollViewProps,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import { cn } from "../utils/cn";

/** Content padding preset for {@link ScrollView}. */
export type ScrollViewPadding = "none" | "sm" | "md" | "lg";

const paddingClasses: Record<ScrollViewPadding, string> = {
  none: "p-0",
  sm: "p-3",
  md: "p-4",
  lg: "p-6",
};

/**
 * Props for {@link ScrollView}.
 *
 * Extends React Native `ScrollViewProps` with content padding presets.
 */
export interface ScrollViewProps extends RNScrollViewProps {
  /** Padding applied to the scroll content container. @defaultValue `"md"` */
  contentPadding?: ScrollViewPadding;
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
 * <ScrollView contentPadding="md" className="flex-1">
 *   {items.map((item) => <Card key={item.id}>...</Card>)}
 * </ScrollView>
 * ```
 */
export function ScrollView({
  contentPadding = "md",
  className,
  contentContainerClassName,
  contentContainerStyle,
  keyboardShouldPersistTaps = "handled",
  showsVerticalScrollIndicator = false,
  ...props
}: ScrollViewProps) {
  return (
    <RNScrollView
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
