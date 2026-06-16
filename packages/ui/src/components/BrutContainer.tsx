import { View, type ViewProps } from "react-native";
import { cn } from "../utils/cn";

export type BrutContainerPadding = "none" | "sm" | "md" | "lg";
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

export interface BrutContainerProps extends ViewProps {
  padding?: BrutContainerPadding;
  maxWidth?: BrutContainerMaxWidth;
  centered?: boolean;
  className?: string;
}

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
