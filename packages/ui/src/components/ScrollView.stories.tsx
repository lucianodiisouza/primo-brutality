import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { ScrollView } from "./ScrollView";
import { Card } from "./Card";
import { Text } from "./Text";

const meta = {
  title: "Layout/ScrollView",
  component: ScrollView,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Scrollable region with content padding and keyboard-friendly defaults.",
      },
    },
  },
  argTypes: {
    contentPadding: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
  },
  args: {
    contentPadding: "md",
  },
} satisfies Meta<typeof ScrollView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ScrollableList: Story = {
  args: meta.args,
  render: (args) => (
    <ScrollView {...args} className="h-[420px]">
      {Array.from({ length: 8 }).map((_, index) => (
        <Card key={index} className="mb-3">
          <Text weight="semibold">Item {index + 1}</Text>
          <Text className="mt-1" color="muted">
            Scrollable brutal content block.
          </Text>
        </Card>
      ))}
    </ScrollView>
  ),
};
