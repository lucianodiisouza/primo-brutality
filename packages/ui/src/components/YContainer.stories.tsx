import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Card } from "./Card";
import { Text } from "./Text";
import { XContainer } from "./XContainer";
import { YContainer } from "./YContainer";

const meta = {
  title: "Layout/YContainer",
  component: YContainer,
  parameters: {
    docs: {
      description: {
        component:
          "Vertical flex column with token-based gap, alignment, and distribution presets.",
      },
    },
  },
  argTypes: {
    gap: {
      control: "select",
      options: ["none", "xs", "sm", "md", "lg", "xl", "2xl"],
    },
    align: {
      control: "select",
      options: ["start", "center", "end", "stretch"],
    },
    justify: {
      control: "select",
      options: ["start", "center", "end", "between", "around", "evenly"],
    },
    wrap: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
  args: {
    gap: "md",
    align: "stretch",
    justify: "start",
    wrap: false,
    fullWidth: true,
  },
} satisfies Meta<typeof YContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <YContainer {...args}>
      <Card padding="sm">
        <Text weight="semibold">First block</Text>
      </Card>
      <Card padding="sm" variant="cream">
        <Text weight="semibold">Second block</Text>
      </Card>
      <Button>Action</Button>
    </YContainer>
  ),
};

export const GapScale: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <YContainer gap="lg" fullWidth>
      {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((gap) => (
        <YContainer key={gap} gap={gap}>
          <Badge label={`gap="${gap}"`} variant="outline" />
          <Card padding="sm">
            <Text size="sm">Top item</Text>
          </Card>
          <Card padding="sm" variant="cream">
            <Text size="sm">Bottom item</Text>
          </Card>
        </YContainer>
      ))}
    </YContainer>
  ),
};

export const Centered: Story = {
  args: {
    gap: "sm",
    align: "center",
    justify: "center",
    fullWidth: true,
    className: "min-h-48",
  },
  render: (args) => (
    <YContainer {...args}>
      <Badge label="Centered" variant="pink" />
      <Text color="muted">Vertically and horizontally centered stack.</Text>
    </YContainer>
  ),
};

export const WithXContainer: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <YContainer gap="md" fullWidth>
      <XContainer justify="between" align="start" fullWidth>
        <YContainer gap="xs" className="flex-1">
          <Text size="sm" color="muted">
            Good morning
          </Text>
          <Text weight="bold" size="lg">
            Alex Rivera
          </Text>
        </YContainer>
        <Badge label="Pro" variant="yellow" />
      </XContainer>
      <Card padding="md">
        <Text>Nested X + Y containers compose full screens.</Text>
      </Card>
    </YContainer>
  ),
};
