import { useRef } from "react";
import {
  View,
  TextInput,
  Pressable,
  type NativeSyntheticEvent,
  type TextInputKeyPressEventData,
} from "react-native";
import { Text } from "./Text";
import { cn } from "../utils/cn";

/**
 * Props for {@link PinInput}.
 *
 * Controlled OTP/PIN field: a hidden `TextInput` drives value and focus while
 * styled cells show digit progress.
 */
export interface PinInputProps {
  /** Number of digits. @defaultValue `6` */
  length?: number;
  /** Current digit string (digits only, max `length`). */
  value: string;
  /** Called when the value changes. */
  onChange: (value: string) => void;
  /** Called once when `value.length === length`. */
  onComplete?: (value: string) => void;
  /** Mask entered digits as bullets. @defaultValue `false` */
  secure?: boolean;
  /** Error message — highlights cells with a red border. */
  error?: string;
  /** Prevents input when true. @defaultValue `false` */
  disabled?: boolean;
  /** NativeWind classes on the root wrapper. */
  className?: string;
}

/**
 * OTP / PIN entry with visible digit cells and a hidden numeric input.
 *
 * Non-digit characters are stripped. Tapping the cell row focuses the input.
 *
 * @example
 * ```tsx
 * const [code, setCode] = useState("");
 *
 * <PinInput
 *   length={6}
 *   value={code}
 *   onChange={setCode}
 *   onComplete={(pin) => verify(pin)}
 * />
 * ```
 */
export function PinInput({
  length = 6,
  value,
  onChange,
  onComplete,
  secure = false,
  error,
  disabled = false,
  className,
}: PinInputProps) {
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
              <Text size="xl" weight="bold">
                {digit ? (secure ? "•" : digit) : ""}
              </Text>
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
        <Text size="sm" color="red" className="text-center">
          {error}
        </Text>
      ) : null}
    </View>
  );
}
