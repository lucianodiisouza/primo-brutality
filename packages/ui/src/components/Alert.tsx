import { View, type ViewProps } from "react-native";
import { Text } from "./Text";
import { cn } from "../utils/cn";

/** Semantic variant for {@link Alert}. */
export type AlertVariant = "info" | "success" | "warning" | "error";

const variantClasses: Record<AlertVariant, string> = {
  info: "bg-brutal-white border-brutal-black",
  success: "bg-brutal-green border-brutal-black",
  warning: "bg-brutal-yellow border-brutal-black",
  error: "bg-brutal-red border-brutal-black",
};

const titleColorMap: Record<AlertVariant, "default" | "inverse"> = {
  info: "default",
  success: "inverse",
  warning: "default",
  error: "inverse",
};

const messageColorMap: Record<AlertVariant, "default" | "inverse" | "muted"> = {
  info: "muted",
  success: "inverse",
  warning: "default",
  error: "inverse",
};

/**
 * Props for {@link Alert}.
 *
 * Extends React Native `ViewProps` with title and optional message.
 */
export interface AlertProps extends ViewProps {
  /** Semantic color preset. @defaultValue `"info"` */
  variant?: AlertVariant;
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
 * <Alert
 *   variant="success"
 *   title="Saved"
 *   message="Your profile was updated."
 * />
 * ```
 */
export function Alert({
  variant = "info",
  title,
  message,
  className,
  ...props
}: AlertProps) {
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
      <Text weight="semibold" color={titleColorMap[variant]}>
        {title}
      </Text>
      {message ? (
        <Text size="sm" color={messageColorMap[variant]} className="mt-1">
          {message}
        </Text>
      ) : null}
    </View>
  );
}
