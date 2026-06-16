import { View, type ViewProps } from "react-native";
import { BrutText } from "./BrutText";
import { cn } from "../utils/cn";

export type BrutBadgeVariant =
  | "default"
  | "pink"
  | "yellow"
  | "green"
  | "red"
  | "outline";

const variantClasses: Record<BrutBadgeVariant, string> = {
  default: "bg-brutal-black",
  pink: "bg-brutal-pink",
  yellow: "bg-brutal-yellow",
  green: "bg-brutal-green",
  red: "bg-brutal-red",
  outline: "bg-brutal-white",
};

const textColorMap: Record<
  BrutBadgeVariant,
  "inverse" | "default"
> = {
  default: "inverse",
  pink: "default",
  yellow: "default",
  green: "inverse",
  red: "inverse",
  outline: "default",
};

export interface BrutBadgeProps extends ViewProps {
  variant?: BrutBadgeVariant;
  label: string;
  className?: string;
}

export function BrutBadge({
  variant = "default",
  label,
  className,
  ...props
}: BrutBadgeProps) {
  return (
    <View
      className={cn(
        "self-start rounded-brutal-sm border-brutal border-brutal-black px-2.5 py-1",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      <BrutText size="sm" weight="semibold" color={textColorMap[variant]}>
        {label}
      </BrutText>
    </View>
  );
}
