import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { BrutScrollView } from "./BrutScrollView";
import { BrutCard } from "./BrutCard";
import { BrutText } from "./BrutText";

const meta = {
  title: "Layout/ScrollView",
  component: BrutScrollView,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof BrutScrollView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ScrollableList: Story = {
  render: () => (
    <BrutScrollView contentPadding="md" className="h-[420px]">
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
