import { View, type ViewProps } from "react-native";
import { BrutText } from "./BrutText";
import { cn } from "../utils/cn";

/** Semantic variant for {@link BrutAlert}. */
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

/**
 * Props for {@link BrutAlert}.
 *
 * Extends React Native `ViewProps` with title and optional message.
 */
export interface BrutAlertProps extends ViewProps {
  /** Semantic color preset. @defaultValue `"info"` */
  variant?: BrutAlertVariant;
  /** Alert headline. */
  title: string;
  /** Optional supporting copy. */
  message?: string;
  /** Additional NativeWind classes. */
  className?: string;
}

/**
 * Inline feedback banner with semantic color variants and `accessibilityRole="alert"`.
 *
 * @example
 * ```tsx
 * <BrutAlert
 *   variant="success"
 *   title="Saved"
 *   message="Your profile was updated."
 * />
 * ```
 */
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
