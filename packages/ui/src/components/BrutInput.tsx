import { View, TextInput, type TextInputProps } from "react-native";
import { BrutText } from "./BrutText";
import { cn } from "../utils/cn";

/**
 * Props for {@link BrutInput}.
 *
 * Extends React Native `TextInputProps` with label, hint, and error slots.
 */
export interface BrutInputProps extends TextInputProps {
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
 * <BrutInput
 *   label="Email"
 *   placeholder="you@example.com"
 *   hint="We never share your email."
 * />
 * ```
 */
export function BrutInput({
  label,
  error,
  hint,
  containerClassName,
  inputClassName,
  editable = true,
  ...props
}: BrutInputProps) {
  const hasError = Boolean(error);

  return (
    <View className={cn("gap-1.5", containerClassName)}>
      {label ? (
        <BrutText size="sm" weight="semibold">
          {label}
        </BrutText>
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
        <BrutText size="sm" color="red">
          {error}
        </BrutText>
      ) : hint ? (
        <BrutText size="sm" color="muted">
          {hint}
        </BrutText>
      ) : null}
    </View>
  );
}
