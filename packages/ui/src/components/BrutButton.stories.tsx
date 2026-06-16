import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View } from "react-native";
import { BrutButton } from "./BrutButton";

const meta = {
  title: "Primitives/Button",
  component: BrutButton,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "destructive"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    shadow: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    children: "Continue",
    variant: "primary",
    size: "md",
    shadow: true,
    disabled: false,
  },
} satisfies Meta<typeof BrutButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const AllVariants: Story = {
  render: () => (
    <View className="gap-3">
      <BrutButton variant="primary">Primary</BrutButton>
      <BrutButton variant="secondary">Secondary</BrutButton>
      <BrutButton variant="ghost">Ghost</BrutButton>
      <BrutButton variant="destructive">Destructive</BrutButton>
    </View>
  ),
};

export const Sizes: Story = {
  render: () => (
    <View className="gap-3">
      <BrutButton size="sm">Small</BrutButton>
      <BrutButton size="md">Medium</BrutButton>
      <BrutButton size="lg">Large</BrutButton>
    </View>
  ),
};
