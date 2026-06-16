import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { BrutContainer } from "./BrutContainer";
import { BrutCard } from "./BrutCard";
import { BrutText } from "./BrutText";

const meta = {
  title: "Layout/Container",
  component: BrutContainer,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof BrutContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CenteredColumn: Story = {
  render: () => (
    <BrutContainer maxWidth="md" padding="lg">
      <BrutCard>
        <BrutText weight="semibold">Centered brutal column</BrutText>
        <BrutText className="mt-2" color="muted">
          Container handles cream background, padding, and max width.
        </BrutText>
      </BrutCard>
    </BrutContainer>
  ),
};
