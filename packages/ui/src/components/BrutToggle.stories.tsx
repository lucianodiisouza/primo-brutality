import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View } from "react-native";
import { BrutText } from "./BrutText";
import { BrutToggle } from "./BrutToggle";
import { BrutXContainer } from "./BrutXContainer";

const meta = {
  title: "Primitives/Toggle",
  component: BrutToggle,
  parameters: {
    docs: {
      description: {
        component:
          "On/off switch with brutal track, raised thumb, and green active fill. Pair with `BrutText` and layout containers for settings rows.",
      },
    },
  },
  argTypes: {
    value: { control: "boolean" },
    size: {
      control: "select",
      options: ["sm", "md"],
    },
    disabled: { control: "boolean" },
    onValueChange: { action: "value changed" },
  },
  args: {
    value: false,
    size: "md",
    disabled: false,
    accessibilityLabel: "Notifications",
  },
} satisfies Meta<typeof BrutToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Default off state. */
export const Off: Story = {};

/** Active on state. */
export const On: Story = {
  args: { value: true },
};

/** Non-interactive state. */
export const Disabled: Story = {
  args: { disabled: true },
};

/** Compact track for dense settings lists. */
export const Small: Story = {
  args: { size: "sm", value: true },
};

export const Interactive: Story = {
  args: meta.args,
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return (
      <BrutToggle
        {...args}
        value={value}
        onValueChange={(next) => {
          setValue(next);
          args.onValueChange?.(next);
        }}
      />
    );
  },
};

export const SettingsRow: Story = {
  args: meta.args,
  parameters: { controls: { disable: true } },
  render: () => {
    const [orderUpdates, setOrderUpdates] = useState(true);
    const [marketing, setMarketing] = useState(false);

    return (
      <View className="gap-4 rounded-brutal-sm border-brutal border-brutal-black bg-brutal-white p-4">
        <BrutXContainer justify="between" align="center" fullWidth>
          <BrutText>Order updates</BrutText>
          <BrutToggle
            value={orderUpdates}
            onValueChange={setOrderUpdates}
            accessibilityLabel="Order updates"
          />
        </BrutXContainer>
        <BrutXContainer justify="between" align="center" fullWidth>
          <BrutText>Marketing emails</BrutText>
          <BrutToggle
            value={marketing}
            onValueChange={setMarketing}
            accessibilityLabel="Marketing emails"
          />
        </BrutXContainer>
      </View>
    );
  },
};

export const Sizes: Story = {
  args: meta.args,
  parameters: { controls: { disable: true } },
  render: () => (
    <View className="gap-4">
      <BrutToggle value size="sm" accessibilityLabel="Small toggle" />
      <BrutToggle value size="md" accessibilityLabel="Medium toggle" />
    </View>
  ),
};
