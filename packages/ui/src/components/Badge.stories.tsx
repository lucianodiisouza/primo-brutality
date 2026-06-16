import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View } from "react-native";
import { Badge } from "./Badge";

const meta = {
  title: "Primitives/Badge",
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: "Compact status pill with brutal border and accent colors.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "pink", "yellow", "green", "red", "outline"],
    },
    label: { control: "text" },
  },
  args: {
    label: "New",
    variant: "default",
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllVariants: Story = {
  args: meta.args,
  parameters: { controls: { disable: true } },
  render: () => (
    <View className="flex-row flex-wrap gap-2">
      <Badge label="Default" variant="default" />
      <Badge label="Pink" variant="pink" />
      <Badge label="Yellow" variant="yellow" />
      <Badge label="Green" variant="green" />
      <Badge label="Red" variant="red" />
      <Badge label="Outline" variant="outline" />
    </View>
  ),
};
