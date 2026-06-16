import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { BrutScrollView } from "./BrutScrollView";
import { BrutCard } from "./BrutCard";
import { BrutText } from "./BrutText";

const meta = {
  title: "Layout/ScrollView",
  component: BrutScrollView,
  tags: ["autodocs"],
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
} satisfies Meta<typeof BrutScrollView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ScrollableList: Story = {
  args: meta.args,
  render: (args) => (
    <BrutScrollView {...args} className="h-[420px]">
      {Array.from({ length: 8 }).map((_, index) => (
        <BrutCard key={index} className="mb-3">
          <BrutText weight="semibold">Item {index + 1}</BrutText>
          <BrutText className="mt-1" color="muted">
            Scrollable brutal content block.
          </BrutText>
        </BrutCard>
      ))}
    </BrutScrollView>
  ),
};
