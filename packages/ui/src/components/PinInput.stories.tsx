import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { PinInput } from "./PinInput";
import { Text } from "./Text";

const meta = {
  title: "Overlays/PinInput",
  component: PinInput,
  parameters: {
    docs: {
      description: {
        component:
          "OTP / PIN entry with visible digit cells and a hidden numeric input.",
      },
    },
  },
  argTypes: {
    length: { control: { type: "number", min: 4, max: 8 } },
    secure: { control: "boolean" },
    disabled: { control: "boolean" },
    error: { control: "text" },
  },
  args: {
    value: "",
    onChange: () => {},
  },
} satisfies Meta<typeof PinInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SixDigit: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
  render: () => {
    const [value, setValue] = useState("");

    return (
      <PinInput
        length={6}
        value={value}
        onChange={setValue}
        onComplete={(code) => console.log("onComplete", code)}
      />
    );
  },
};

export const FourDigitSecure: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
  render: () => {
    const [value, setValue] = useState("");

    return (
      <PinInput
        length={4}
        secure
        value={value}
        onChange={setValue}
        onComplete={(code) => console.log("onComplete", code)}
      />
    );
  },
};

export const WithError: Story = {
  args: {
    value: "123",
    onChange: () => {},
  },
  render: () => {
    const [value, setValue] = useState("123");

    return (
      <>
        <PinInput
          length={6}
          value={value}
          onChange={setValue}
          error="Invalid code. Try again."
        />
        <Text className="mt-4" size="sm" color="muted">
          Current value: {value || "empty"}
        </Text>
      </>
    );
  },
};
