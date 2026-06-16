import { View, type ViewProps } from "react-native";
import { BrutText } from "./BrutText";
import { cn } from "../utils/cn";

export type BrutAlertVariant = "info" | "success" | "warning" | "error";

const variantClasses: Record<BrutAlertVariant, string> = {
  info: "bg-brutal-white border-brutal-black",
  success: "bg-brutal-green border-brutal-black",
  warning: "bg-brutal-yellow border-brutal-black",
  error: "bg-brutal-red border-brutal-black",
};

const titleColorMap: Record<BrutAlertVariant, "default" | "inverse"> = {
  info: "default",
  success: "inverse",
  warning: "default",
  error: "inverse",
};

const messageColorMap: Record<BrutAlertVariant, "default" | "inverse" | "muted"> =
  {
    info: "muted",
    success: "inverse",
    warning: "default",
    error: "inverse",
  };

export interface BrutAlertProps extends ViewProps {
  variant?: BrutAlertVariant;
  title: string;
  message?: string;
  className?: string;
}

export function BrutAlert({
  variant = "info",
  title,
  message,
  className,
  ...props
}: BrutAlertProps) {
  return (
    <View
      className={cn(
        "rounded-brutal-sm border-brutal p-4 shadow-brutal-sm",
        variantClasses[variant],
        className,
      )}
      accessibilityRole="alert"
      {...props}
    >
      <BrutText weight="semibold" color={titleColorMap[variant]}>
        {title}
      </BrutText>
      {message ? (
        <BrutText
          size="sm"
          color={messageColorMap[variant]}
          className="mt-1"
        >
          {message}
        </BrutText>
      ) : null}
    </View>
  );
}
