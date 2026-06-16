import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View } from "react-native";
import { Alert } from "./Alert";

const meta = {
  title: "Primitives/Alert",
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: "Inline feedback banner with semantic color variants.",
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
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {};

export const AllVariants: Story = {
  args: meta.args,
  parameters: { controls: { disable: true } },
  render: () => (
    <View className="gap-3">
      <Alert variant="info" title="Heads up" message="New feature available." />
      <Alert variant="success" title="Saved" message="Profile updated." />
      <Alert
        variant="warning"
        title="Action needed"
        message="Verify your email."
      />
      <Alert
        variant="error"
        title="Failed"
        message="Could not process payment."
      />
    </View>
  ),
};
