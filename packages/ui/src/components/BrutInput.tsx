import { View, TextInput, type TextInputProps } from "react-native";
import { BrutText } from "./BrutText";
import { cn } from "../utils/cn";

export interface BrutInputProps extends TextInputProps {
  label?: string;
  error?: string;
  hint?: string;
  containerClassName?: string;
  inputClassName?: string;
}

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
