import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View } from "react-native";
import { BrutText, BrutHeading } from "./BrutText";

const meta = {
  title: "Primitives/Text",
  component: BrutText,
} satisfies Meta<typeof BrutText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Body: Story = {
  args: {
    children: "Bold typography with hard edges and clear hierarchy.",
    size: "base",
    weight: "normal",
  },
};

export const HeadingScale: Story = {
  render: () => (
    <View className="gap-3">
      <BrutHeading level={1}>Heading 1</BrutHeading>
      <BrutHeading level={2}>Heading 2</BrutHeading>
      <BrutHeading level={3}>Heading 3</BrutHeading>
      <BrutHeading level={4}>Heading 4</BrutHeading>
    </View>
  ),
};

export const Colors: Story = {
  render: () => (
    <View className="gap-2">
      <BrutText color="default">Default black</BrutText>
      <BrutText color="muted">Muted text</BrutText>
      <BrutText color="pink">Pink accent</BrutText>
      <BrutText color="yellow">Yellow accent</BrutText>
      <BrutText color="green">Green accent</BrutText>
      <BrutText color="red">Red accent</BrutText>
    </View>
  ),
};
