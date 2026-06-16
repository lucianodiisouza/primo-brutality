import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import type { BrutCardProps } from "./BrutCard";
import { BrutCard } from "./BrutCard";
import { BrutHeading, BrutText } from "./BrutText";

const meta = {
  title: "Primitives/Card",
  component: BrutCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Bordered content surface with optional hard shadow and padding presets.",
      },
    },
  },
  argTypes: {
    shadow: { control: "select", options: ["none", "hard", "soft"] },
    padding: { control: "select", options: ["none", "sm", "md", "lg"] },
    variant: { control: "select", options: ["white", "cream"] },
  },
  args: {
    shadow: "hard",
    padding: "md",
    variant: "white",
  },
} satisfies Meta<typeof BrutCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: BrutCardProps) => (
    <BrutCard {...args}>
      <BrutHeading level={3}>Dashboard</BrutHeading>
      <BrutText className="mt-2" color="muted">
        Track metrics, items, and updates in one place.
      </BrutText>
    </BrutCard>
  ),
};

export const CreamVariant: Story = {
  args: {
    variant: "cream",
    shadow: "soft",
  },
  render: (args: BrutCardProps) => (
    <BrutCard {...args}>
      <BrutText weight="semibold">Soft shadow card</BrutText>
    </BrutCard>
  ),
};
