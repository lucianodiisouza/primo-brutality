import { View, type ViewProps } from "react-native";
import { cn } from "../utils/cn";

/** Outer padding preset for {@link Container}. */
export type ContainerPadding = "none" | "sm" | "md" | "lg";

/** Max-width preset for {@link Container}. */
export type ContainerMaxWidth = "none" | "sm" | "md" | "lg" | "full";

const paddingClasses: Record<ContainerPadding, string> = {
  none: "px-0 py-0",
  sm: "px-3 py-3",
  md: "px-4 py-4",
  lg: "px-6 py-6",
};

const maxWidthClasses: Record<ContainerMaxWidth, string> = {
  none: "",
  sm: "max-w-brutal-sm w-full self-center",
  md: "max-w-brutal-md w-full self-center",
  lg: "max-w-brutal-lg w-full self-center",
  full: "w-full",
};

/**
 * Props for {@link Container}.
 *
 * Extends React Native `ViewProps` with page-level layout presets.
 */
export interface ContainerProps extends ViewProps {
  /** Horizontal and vertical padding. @defaultValue `"md"` */
  padding?: ContainerPadding;
  /** Content max width. @defaultValue `"full"` */
  maxWidth?: ContainerMaxWidth;
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
 * <Container maxWidth="md" padding="lg">
 *   <Card>...</Card>
 * </Container>
 * ```
 */
export function Container({
  padding = "md",
  maxWidth = "full",
  centered = false,
  className,
  children,
  ...props
}: ContainerProps) {
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
