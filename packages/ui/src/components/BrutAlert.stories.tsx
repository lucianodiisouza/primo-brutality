import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View } from "react-native";
import { BrutAlert } from "./BrutAlert";

const meta = {
  title: "Primitives/Alert",
  component: BrutAlert,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Inline feedback banner with semantic color variants.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "error"],
    },
    title: { control: "text" },
    message: { control: "text" },
  },
  args: {
    title: "Payment received",
    message: "Your latest sale just landed.",
    variant: "success",
  },
} satisfies Meta<typeof BrutAlert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {};

export const AllVariants: Story = {
  args: meta.args,
  parameters: { controls: { disable: true } },
  render: () => (
    <View className="gap-3">
      <BrutAlert variant="info" title="Heads up" message="New feature available." />
      <BrutAlert variant="success" title="Saved" message="Profile updated." />
      <BrutAlert variant="warning" title="Action needed" message="Verify your email." />
      <BrutAlert variant="error" title="Failed" message="Could not process payment." />
    </View>
  ),
};
