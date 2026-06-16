import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import type { CardProps } from "./Card";
import { Card } from "./Card";
import { Heading, Text } from "./Text";

const meta = {
  title: "Primitives/Card",
  component: Card,
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
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: CardProps) => (
    <Card {...args}>
      <Heading level={3}>Dashboard</Heading>
      <Text className="mt-2" color="muted">
        Track metrics, items, and updates in one place.
      </Text>
    </Card>
  ),
};

export const CreamVariant: Story = {
  args: {
    variant: "cream",
    shadow: "soft",
  },
  render: (args: CardProps) => (
    <Card {...args}>
      <Text weight="semibold">Soft shadow card</Text>
    </Card>
  ),
};
