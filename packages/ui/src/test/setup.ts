import { createElement, type ReactNode } from "react";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

type MockPressableProps = {
  children?: ReactNode;
  disabled?: boolean;
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  accessibilityLabel?: string;
  testID?: string;
  className?: string;
};

function Pressable({
  children,
  disabled,
  onPress,
  onPressIn,
  onPressOut,
  accessibilityLabel,
  testID,
  className,
}: MockPressableProps) {
  return createElement(
    "button",
    {
      type: "button",
      disabled,
      "aria-label": accessibilityLabel,
      "data-testid": testID,
      className,
      onClick: () => {
        if (disabled) return;
        onPressIn?.();
        onPress?.();
        onPressOut?.();
      },
    },
    children,
  );
}

type MockTextProps = {
  children?: ReactNode;
  testID?: string;
  className?: string;
};

function Text({ children, testID, className }: MockTextProps) {
  return createElement("span", { "data-testid": testID, className }, children);
}

vi.mock("react-native", () => ({
  Pressable,
  Text,
}));

afterEach(() => {
  cleanup();
});
