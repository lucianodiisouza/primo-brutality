import {
  ScrollView,
  type ScrollViewProps,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import { cn } from "../utils/cn";

export type BrutScrollViewPadding = "none" | "sm" | "md" | "lg";

const paddingClasses: Record<BrutScrollViewPadding, string> = {
  none: "p-0",
  sm: "p-3",
  md: "p-4",
  lg: "p-6",
};

export interface BrutScrollViewProps extends ScrollViewProps {
  contentPadding?: BrutScrollViewPadding;
  className?: string;
  contentContainerClassName?: string;
}

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
