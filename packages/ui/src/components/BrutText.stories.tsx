import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View } from "react-native";
import { BrutText, BrutHeading } from "./BrutText";

const meta = {
  title: "Primitives/Text",
  component: BrutText,
  parameters: {
    docs: {
      description: {
        component:
          "Typography primitives: `BrutText` for body copy and `BrutHeading` for display headings.",
      },
    },
  },
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "base", "lg", "xl"] },
    weight: {
      control: "select",
      options: ["normal", "medium", "semibold", "bold"],
    },
    color: {
      control: "select",
      options: ["default", "muted", "inverse", "pink", "yellow", "green", "red"],
    },
  },
  args: {
    children: "Bold typography with hard edges and clear hierarchy.",
    size: "base",
    weight: "normal",
    color: "default",
  },
} satisfies Meta<typeof BrutText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Body: Story = {};

export const HeadingScale: Story = {
  args: meta.args,
  parameters: { controls: { disable: true } },
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
  args: meta.args,
  parameters: { controls: { disable: true } },
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
