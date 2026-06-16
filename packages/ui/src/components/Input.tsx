import { View, TextInput, type TextInputProps } from "react-native";
import { Text } from "./Text";
import { cn } from "../utils/cn";

/**
 * Props for {@link Input}.
 *
 * Extends React Native `TextInputProps` with label, hint, and error slots.
 */
export interface InputProps extends TextInputProps {
  /** Optional label rendered above the field. */
  label?: string;
  /** Validation message — turns the border red when set. */
  error?: string;
  /** Helper copy shown below the field when there is no error. */
  hint?: string;
  /** NativeWind classes on the outer wrapper. */
  containerClassName?: string;
  /** NativeWind classes on the `TextInput`. */
  inputClassName?: string;
}

/**
 * Text field with brutal border, optional label, hint, and error message.
 *
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   placeholder="you@example.com"
 *   hint="We never share your email."
 * />
 * ```
 */
export function Input({
  label,
  error,
  hint,
  containerClassName,
  inputClassName,
  editable = true,
  ...props
}: InputProps) {
  const hasError = Boolean(error);

  return (
    <View className={cn("gap-1.5", containerClassName)}>
      {label ? (
        <Text size="sm" weight="semibold">
          {label}
        </Text>
      ) : null}

      <TextInput
        editable={editable}
        placeholderTextColor="#737373"
        className={cn(
          "rounded-brutal-sm border-brutal bg-brutal-white px-3 py-2.5 font-brutal text-base text-brutal-black",
          hasError ? "border-brutal-red" : "border-brutal-black",
          !editable && "opacity-60",
          inputClassName,
        )}
        {...props}
      />

      {error ? (
        <Text size="sm" color="red">
          {error}
        </Text>
      ) : hint ? (
        <Text size="sm" color="muted">
          {hint}
        </Text>
      ) : null}
    </View>
  );
}
