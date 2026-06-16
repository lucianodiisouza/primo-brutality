import { createElement, type ReactNode } from "react";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

type MockViewProps = {
  children?: ReactNode;
  testID?: string;
  className?: string;
  accessibilityRole?: string;
  pointerEvents?: string;
  onPress?: (event?: { stopPropagation?: () => void }) => void;
};

function View({
  children,
  testID,
  className,
  accessibilityRole,
  onPress,
  ...props
}: MockViewProps) {
  if (onPress) {
    return createElement(
      "button",
      {
        type: "button",
        "data-testid": testID,
        className,
        role: accessibilityRole,
        onClick: () => onPress(),
        ...props,
      },
      children,
    );
  }

  const role =
    accessibilityRole === "header"
      ? "heading"
      : accessibilityRole === "alert"
        ? "alert"
        : accessibilityRole;

  return createElement(
    "div",
    { "data-testid": testID, className, role, ...props },
    children,
  );
}

type MockPressableProps = {
  children?: ReactNode;
  disabled?: boolean;
  onPress?: (event?: { stopPropagation?: () => void }) => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  accessibilityLabel?: string;
  accessibilityRole?: string;
  accessibilityState?: { checked?: boolean; disabled?: boolean };
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
  accessibilityRole,
  accessibilityState,
  testID,
  className,
}: MockPressableProps) {
  const isButton =
    accessibilityRole === "none"
      ? false
      : accessibilityRole === "button" ||
        accessibilityRole === "switch" ||
        Boolean(accessibilityLabel) ||
        (Boolean(onPress) && accessibilityRole === undefined);

  return createElement(
    isButton ? "button" : "div",
    {
      type: isButton ? "button" : undefined,
      disabled: isButton ? disabled : undefined,
      "aria-label": accessibilityLabel,
      role: accessibilityRole === "none" ? undefined : accessibilityRole,
      "aria-checked":
        accessibilityRole === "switch"
          ? String(accessibilityState?.checked ?? false)
          : undefined,
      "data-testid": testID,
      className,
      onClick: (event: { stopPropagation: () => void }) => {
        if (disabled) return;
        onPressIn?.();
        onPress?.(event);
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
  accessibilityRole?: string;
};

function Text({ children, testID, className, accessibilityRole }: MockTextProps) {
  const role =
    accessibilityRole === "header"
      ? "heading"
      : accessibilityRole;

  return createElement(
    "span",
    { "data-testid": testID, className, role },
    children,
  );
}

type MockTextInputProps = {
  value?: string;
  onChangeText?: (value: string) => void;
  onKeyPress?: (event: {
    nativeEvent: { key: string };
  }) => void;
  editable?: boolean;
  testID?: string;
  accessibilityLabel?: string;
  placeholder?: string;
  className?: string;
};

function TextInput({
  value,
  onChangeText,
  onKeyPress,
  editable = true,
  testID,
  accessibilityLabel,
  placeholder,
  className,
}: MockTextInputProps) {
  return createElement("input", {
    value: value ?? "",
    disabled: editable === false,
    "data-testid": testID,
    "aria-label": accessibilityLabel,
    placeholder,
    className,
    onChange: (event: { target: { value: string } }) =>
      onChangeText?.(event.target.value),
    onKeyDown: (event: { key: string }) =>
      onKeyPress?.({ nativeEvent: { key: event.key } }),
  });
}

type MockScrollViewProps = {
  children?: ReactNode;
  className?: string;
  contentContainerClassName?: string;
  testID?: string;
};

function ScrollView({
  children,
  className,
  contentContainerClassName,
  testID,
}: MockScrollViewProps) {
  return createElement(
    "div",
    { "data-testid": testID ?? "scroll-view", className },
    createElement("div", { className: contentContainerClassName }, children),
  );
}

type MockModalProps = {
  children?: ReactNode;
  visible?: boolean;
  testID?: string;
};

function Modal({ children, visible, testID }: MockModalProps) {
  if (!visible) return null;
  return createElement(
    "div",
    { role: "dialog", "data-testid": testID ?? "modal", "aria-modal": true },
    children,
  );
}

vi.mock("react-native", () => ({
  View,
  Pressable,
  Text,
  TextInput,
  ScrollView,
  Modal,
}));

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});
