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
 * Props for {@link YContainer}.
 *
 * Extends React Native `ViewProps` with vertical flex layout presets.
 */
export interface YContainerProps extends ViewProps {
  /** Spacing between children on the vertical axis. @defaultValue `"md"` */
  gap?: LayoutGap;
  /** Cross-axis alignment (horizontal). @defaultValue `"stretch"` */
  align?: LayoutAlign;
  /** Main-axis distribution (vertical). @defaultValue `"start"` */
  justify?: LayoutJustify;
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
 * <YContainer gap="lg">
 *   <Heading level={2}>Settings</Heading>
 *   <Input label="Email" />
 *   <Button>Save</Button>
 * </YContainer>
 * ```
 */
export function YContainer({
  gap = "md",
  align = "stretch",
  justify = "start",
  wrap = false,
  fullWidth = false,
  className,
  children,
  ...props
}: YContainerProps) {
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
