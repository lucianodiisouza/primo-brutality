import { View, type ViewProps } from "react-native";
import { cn } from "../utils/cn";
import {
  alignClasses,
  gapClasses,
  justifyClasses,
  type BrutLayoutAlign,
  type BrutLayoutGap,
  type BrutLayoutJustify,
} from "../utils/layout";

/**
 * Props for {@link BrutXContainer}.
 *
 * Extends React Native `ViewProps` with horizontal flex layout presets.
 */
export interface BrutXContainerProps extends ViewProps {
  /** Spacing between children on the horizontal axis. @defaultValue `"md"` */
  gap?: BrutLayoutGap;
  /** Cross-axis alignment (vertical). @defaultValue `"center"` */
  align?: BrutLayoutAlign;
  /** Main-axis distribution (horizontal). @defaultValue `"start"` */
  justify?: BrutLayoutJustify;
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
 * <BrutXContainer gap="sm" justify="between" align="center">
 *   <BrutText>Total</BrutText>
 *   <BrutHeading level={3}>$103.00</BrutHeading>
 * </BrutXContainer>
 * ```
 */
export function BrutXContainer({
  gap = "md",
  align = "center",
  justify = "start",
  wrap = false,
  fullWidth = false,
  className,
  children,
  ...props
}: BrutXContainerProps) {
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
