import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View } from "react-native";
import { BrutBadge } from "./BrutBadge";

const meta = {
  title: "Primitives/Badge",
  component: BrutBadge,
  args: {
    label: "New",
    variant: "default",
  },
} satisfies Meta<typeof BrutBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <View className="flex-row flex-wrap gap-2">
      <BrutBadge label="Default" variant="default" />
      <BrutBadge label="Pink" variant="pink" />
      <BrutBadge label="Yellow" variant="yellow" />
      <BrutBadge label="Green" variant="green" />
      <BrutBadge label="Red" variant="red" />
      <BrutBadge label="Outline" variant="outline" />
    </View>
  ),
};
