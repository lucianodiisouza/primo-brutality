import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View } from "react-native";
import { BrutAlert } from "./BrutAlert";

const meta = {
  title: "Primitives/Alert",
  component: BrutAlert,
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
  render: () => (
    <View className="gap-3">
      <BrutAlert variant="info" title="Heads up" message="New feature available." />
      <BrutAlert variant="success" title="Saved" message="Profile updated." />
      <BrutAlert variant="warning" title="Action needed" message="Verify your email." />
      <BrutAlert variant="error" title="Failed" message="Could not process payment." />
    </View>
  ),
};
