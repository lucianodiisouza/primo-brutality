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
 * Props for {@link BrutYContainer}.
 *
 * Extends React Native `ViewProps` with vertical flex layout presets.
 */
export interface BrutYContainerProps extends ViewProps {
  /** Spacing between children on the vertical axis. @defaultValue `"md"` */
  gap?: BrutLayoutGap;
  /** Cross-axis alignment (horizontal). @defaultValue `"stretch"` */
  align?: BrutLayoutAlign;
  /** Main-axis distribution (vertical). @defaultValue `"start"` */
  justify?: BrutLayoutJustify;
  /** Allow children to wrap onto new rows. @defaultValue `false` */
  wrap?: boolean;
  /** Stretch to fill available width. @defaultValue `false` */
  fullWidth?: boolean;
  /** Additional NativeWind classes. */
  className?: string;
}

/**
 * Vertical flex column with token-based gap and alignment presets.
 *
 * @example
 * ```tsx
 * <BrutYContainer gap="lg">
 *   <BrutHeading level={2}>Settings</BrutHeading>
 *   <BrutInput label="Email" />
 *   <BrutButton>Save</BrutButton>
 * </BrutYContainer>
 * ```
 */
export function BrutYContainer({
  gap = "md",
  align = "stretch",
  justify = "start",
  wrap = false,
  fullWidth = false,
  className,
  children,
  ...props
}: BrutYContainerProps) {
  return (
    <View
      className={cn(
        "flex flex-col",
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
