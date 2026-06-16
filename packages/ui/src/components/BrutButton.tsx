import { useState } from "react";
import { Pressable, type PressableProps } from "react-native";
import { BrutText } from "./BrutText";
import { cn } from "../utils/cn";

export type BrutButtonVariant = "primary" | "secondary" | "ghost" | "destructive";
export type BrutButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<BrutButtonVariant, string> = {
  primary: "bg-brutal-black border-brutal border-brutal-black active:shadow-brutal-pressed",
  secondary:
    "bg-brutal-white border-brutal border-brutal-black active:shadow-brutal-pressed",
  ghost: "bg-transparent border-brutal border-transparent active:bg-brutal-gray",
  destructive:
    "bg-brutal-red border-brutal border-brutal-black active:shadow-brutal-pressed",
};

const sizeClasses: Record<BrutButtonSize, string> = {
  sm: "px-3 py-1.5 min-h-[32px]",
  md: "px-4 py-2.5 min-h-[44px]",
  lg: "px-6 py-3 min-h-[52px]",
};

const textSizeMap: Record<BrutButtonSize, "sm" | "base" | "lg"> = {
  sm: "sm",
  md: "base",
  lg: "lg",
};

const textColorMap: Record<
  BrutButtonVariant,
  "inverse" | "default" | "red"
> = {
  primary: "inverse",
  secondary: "default",
  ghost: "default",
  destructive: "inverse",
};

export interface BrutButtonProps extends Omit<PressableProps, "children"> {
  variant?: BrutButtonVariant;
  size?: BrutButtonSize;
  shadow?: boolean;
  className?: string;
  textClassName?: string;
  children: React.ReactNode;
}

export function BrutButton({
  variant = "primary",
  size = "md",
  shadow = true,
  disabled,
  className,
  textClassName,
  children,
  ...props
}: BrutButtonProps) {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      disabled={disabled}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      className={cn(
        "items-center justify-center rounded-brutal-sm border-brutal",
        variantClasses[variant],
        sizeClasses[size],
        shadow && !pressed && !disabled && "shadow-brutal",
        disabled && "opacity-50",
        className,
      )}
      {...props}
    >
      {typeof children === "string" ? (
        <BrutText
          size={textSizeMap[size]}
          weight="semibold"
          color={textColorMap[variant]}
          className={textClassName}
        >
          {children}
        </BrutText>
      ) : (
        children
      )}
    </Pressable>
  );
}
