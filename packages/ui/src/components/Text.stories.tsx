import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View } from "react-native";
import { Text, Heading } from "./Text";

const meta = {
  title: "Primitives/Text",
  component: Text,
  parameters: {
    docs: {
      description: {
        component:
          "Typography primitives: `Text` for body copy and `Heading` for display headings.",
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
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Body: Story = {};

export const HeadingScale: Story = {
  args: meta.args,
  parameters: { controls: { disable: true } },
  render: () => (
    <View className="gap-3">
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
    </View>
  ),
};

export const Colors: Story = {
  args: meta.args,
  parameters: { controls: { disable: true } },
  render: () => (
    <View className="gap-2">
      <Text color="default">Default black</Text>
      <Text color="muted">Muted text</Text>
      <Text color="pink">Pink accent</Text>
      <Text color="yellow">Yellow accent</Text>
      <Text color="green">Green accent</Text>
      <Text color="red">Red accent</Text>
    </View>
  ),
};
