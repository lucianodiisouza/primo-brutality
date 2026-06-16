import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { BrutPinInput } from "./BrutPinInput";
import { BrutText } from "./BrutText";

const meta = {
  title: "Overlays/PinInput",
  component: BrutPinInput,
} satisfies Meta<typeof BrutPinInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SixDigit: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <BrutPinInput
        length={6}
        value={value}
        onChange={setValue}
        onComplete={(code) => console.log("onComplete", code)}
      />
    );
  },
};

export const FourDigitSecure: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <BrutPinInput
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
  render: () => {
    const [value, setValue] = useState("123");

    return (
      <>
        <BrutPinInput
          length={6}
          value={value}
          onChange={setValue}
          error="Invalid code. Try again."
        />
        <BrutText className="mt-4" size="sm" color="muted">
          Current value: {value || "empty"}
        </BrutText>
      </>
    );
  },
};
