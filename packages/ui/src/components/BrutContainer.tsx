import { View, type ViewProps } from "react-native";
import { cn } from "../utils/cn";

/** Outer padding preset for {@link BrutContainer}. */
export type BrutContainerPadding = "none" | "sm" | "md" | "lg";

/** Max-width preset for {@link BrutContainer}. */
export type BrutContainerMaxWidth = "none" | "sm" | "md" | "lg" | "full";

const paddingClasses: Record<BrutContainerPadding, string> = {
  none: "px-0 py-0",
  sm: "px-3 py-3",
  md: "px-4 py-4",
  lg: "px-6 py-6",
};

const maxWidthClasses: Record<BrutContainerMaxWidth, string> = {
  none: "",
  sm: "max-w-brutal-sm w-full self-center",
  md: "max-w-brutal-md w-full self-center",
  lg: "max-w-brutal-lg w-full self-center",
  full: "w-full",
};

/**
 * Props for {@link BrutContainer}.
 *
 * Extends React Native `ViewProps` with page-level layout presets.
 */
export interface BrutContainerProps extends ViewProps {
  /** Horizontal and vertical padding. @defaultValue `"md"` */
  padding?: BrutContainerPadding;
  /** Content max width. @defaultValue `"full"` */
  maxWidth?: BrutContainerMaxWidth;
  /** Center children on both axes. @defaultValue `false` */
  centered?: boolean;
  /** Additional NativeWind classes. */
  className?: string;
}

/**
 * Full-screen cream page wrapper with padding and optional max-width column.
 *
 * @example
 * ```tsx
 * <BrutContainer maxWidth="md" padding="lg">
 *   <BrutCard>...</BrutCard>
 * </BrutContainer>
 * ```
 */
export function BrutContainer({
  padding = "md",
  maxWidth = "full",
  centered = false,
  className,
  children,
  ...props
}: BrutContainerProps) {
  return (
    <View
      className={cn(
        "min-h-full flex-1 bg-brutal-cream",
        paddingClasses[padding],
        maxWidthClasses[maxWidth],
        centered && "items-center justify-center",
        className,
      )}
      {...props}
    >
      {children}
    </View>
  );
}
