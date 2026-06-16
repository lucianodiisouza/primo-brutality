import { View, type ViewProps } from "react-native";
import { cn } from "../utils/cn";
import {
  alignClasses,
  gapClasses,
  justifyClasses,
  type LayoutAlign,
  type LayoutGap,
  type LayoutJustify,
} from "../utils/layout";

/**
 * Props for {@link XContainer}.
 *
 * Extends React Native `ViewProps` with horizontal flex layout presets.
 */
export interface XContainerProps extends ViewProps {
  /** Spacing between children on the horizontal axis. @defaultValue `"md"` */
  gap?: LayoutGap;
  /** Cross-axis alignment (vertical). @defaultValue `"center"` */
  align?: LayoutAlign;
  /** Main-axis distribution (horizontal). @defaultValue `"start"` */
  justify?: LayoutJustify;
  /** Allow children to wrap onto new lines. @defaultValue `false` */
  wrap?: boolean;
  /** Stretch to fill available width. @defaultValue `false` */
  fullWidth?: boolean;
  /** Additional NativeWind classes. */
  className?: string;
}

/**
 * Horizontal flex row with token-based gap and alignment presets.
 *
 * @example
 * ```tsx
 * <XContainer gap="sm" justify="between" align="center">
 *   <Text>Total</Text>
 *   <Heading level={3}>$103.00</Heading>
 * </XContainer>
 * ```
 */
export function XContainer({
  gap = "md",
  align = "center",
  justify = "start",
  wrap = false,
  fullWidth = false,
  className,
  children,
  ...props
}: XContainerProps) {
  return (
    <View
      className={cn(
        "flex flex-row",
        gapClasses[gap],
        alignClasses[align],
        justifyClasses[justify],
        wrap && "flex-wrap",
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {children}
    </View>
  );
}
