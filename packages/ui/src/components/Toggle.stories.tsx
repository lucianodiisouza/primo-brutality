import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View } from "react-native";
import { Text } from "./Text";
import { Toggle } from "./Toggle";
import { XContainer } from "./XContainer";

const meta = {
  title: "Primitives/Toggle",
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component:
          "On/off switch with brutal track, raised thumb, and green active fill. Pair with `Text` and layout containers for settings rows.",
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
} satisfies Meta<typeof Toggle>;

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
      <Toggle
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
        <XContainer justify="between" align="center" fullWidth>
          <Text>Order updates</Text>
          <Toggle
            value={orderUpdates}
            onValueChange={setOrderUpdates}
            accessibilityLabel="Order updates"
          />
        </XContainer>
        <XContainer justify="between" align="center" fullWidth>
          <Text>Marketing emails</Text>
          <Toggle
            value={marketing}
            onValueChange={setMarketing}
            accessibilityLabel="Marketing emails"
          />
        </XContainer>
      </View>
    );
  },
};

export const Sizes: Story = {
  args: meta.args,
  parameters: { controls: { disable: true } },
  render: () => (
    <View className="gap-4">
      <Toggle value size="sm" accessibilityLabel="Small toggle" />
      <Toggle value size="md" accessibilityLabel="Medium toggle" />
    </View>
  ),
};
