import { useRef } from "react";
import {
  View,
  TextInput,
  Pressable,
  type NativeSyntheticEvent,
  type TextInputKeyPressEventData,
} from "react-native";
import { BrutText } from "./BrutText";
import { cn } from "../utils/cn";

export interface BrutPinInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  onComplete?: (value: string) => void;
  secure?: boolean;
  error?: string;
  disabled?: boolean;
  className?: string;
}

export function BrutPinInput({
  length = 6,
  value,
  onChange,
  onComplete,
  secure = false,
  error,
  disabled = false,
  className,
}: BrutPinInputProps) {
  const inputRef = useRef<TextInput>(null);
  const digits = value.split("").slice(0, length);
  const hasError = Boolean(error);

  const updateValue = (next: string) => {
    const sanitized = next.replace(/\D/g, "").slice(0, length);
    onChange(sanitized);
    if (sanitized.length === length) {
      onComplete?.(sanitized);
    }
  };

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => {
    if (event.nativeEvent.key === "Backspace" && value.length > 0) {
      updateValue(value.slice(0, -1));
    }
  };

  return (
    <View className={cn("gap-2", className)}>
      <Pressable
        onPress={() => inputRef.current?.focus()}
        className="flex-row justify-center gap-2"
        accessibilityRole="none"
      >
        {Array.from({ length }).map((_, index) => {
          const digit = digits[index] ?? "";
          const isActive = index === digits.length;

          return (
            <View
              key={index}
              className={cn(
                "h-14 w-11 items-center justify-center rounded-brutal-sm border-brutal bg-brutal-white",
                hasError
                  ? "border-brutal-red"
                  : isActive
                    ? "border-brutal-black shadow-brutal-sm"
                    : "border-brutal-black",
                disabled && "opacity-50",
              )}
            >
              <BrutText size="xl" weight="bold">
                {digit ? (secure ? "•" : digit) : ""}
              </BrutText>
            </View>
          );
        })}
      </Pressable>

      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={updateValue}
        onKeyPress={handleKeyPress}
        keyboardType="number-pad"
        maxLength={length}
        editable={!disabled}
        caretHidden
        className="absolute h-px w-px opacity-0"
        accessibilityLabel="PIN input"
      />

      {error ? (
        <BrutText size="sm" color="red" className="text-center">
          {error}
        </BrutText>
      ) : null}
    </View>
  );
}
