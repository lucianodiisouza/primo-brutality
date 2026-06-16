import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { BrutContainer } from "./BrutContainer";
import { BrutCard } from "./BrutCard";
import { BrutText } from "./BrutText";

const meta = {
  title: "Layout/Container",
  component: BrutContainer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Full-screen cream page wrapper with padding and optional max-width column.",
      },
    },
  },
  argTypes: {
    padding: { control: "select", options: ["none", "sm", "md", "lg"] },
    maxWidth: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
    centered: { control: "boolean" },
  },
  args: {
    padding: "lg",
    maxWidth: "md",
    centered: false,
  },
} satisfies Meta<typeof BrutContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CenteredColumn: Story = {
  args: {
    padding: "lg",
    maxWidth: "md",
  },
  render: (args) => (
    <BrutContainer {...args}>
      <BrutCard>
        <BrutText weight="semibold">Centered brutal column</BrutText>
        <BrutText className="mt-2" color="muted">
          Container handles cream background, padding, and max width.
        </BrutText>
      </BrutCard>
    </BrutContainer>
  ),
};
