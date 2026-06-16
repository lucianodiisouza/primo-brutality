import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { BrutBadge } from "./BrutBadge";
import { BrutButton } from "./BrutButton";
import { BrutCard } from "./BrutCard";
import { BrutText } from "./BrutText";
import { BrutXContainer } from "./BrutXContainer";
import { BrutYContainer } from "./BrutYContainer";

const meta = {
  title: "Layout/YContainer",
  component: BrutYContainer,
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
} satisfies Meta<typeof BrutYContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <BrutYContainer {...args}>
      <BrutCard padding="sm">
        <BrutText weight="semibold">First block</BrutText>
      </BrutCard>
      <BrutCard padding="sm" variant="cream">
        <BrutText weight="semibold">Second block</BrutText>
      </BrutCard>
      <BrutButton>Action</BrutButton>
    </BrutYContainer>
  ),
};

export const GapScale: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <BrutYContainer gap="lg" fullWidth>
      {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((gap) => (
        <BrutYContainer key={gap} gap={gap}>
          <BrutBadge label={`gap="${gap}"`} variant="outline" />
          <BrutCard padding="sm">
            <BrutText size="sm">Top item</BrutText>
          </BrutCard>
          <BrutCard padding="sm" variant="cream">
            <BrutText size="sm">Bottom item</BrutText>
          </BrutCard>
        </BrutYContainer>
      ))}
    </BrutYContainer>
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
    <BrutYContainer {...args}>
      <BrutBadge label="Centered" variant="pink" />
      <BrutText color="muted">Vertically and horizontally centered stack.</BrutText>
    </BrutYContainer>
  ),
};

export const WithXContainer: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <BrutYContainer gap="md" fullWidth>
      <BrutXContainer justify="between" align="start" fullWidth>
        <BrutYContainer gap="xs" className="flex-1">
          <BrutText size="sm" color="muted">
            Good morning
          </BrutText>
          <BrutText weight="bold" size="lg">
            Alex Rivera
          </BrutText>
        </BrutYContainer>
        <BrutBadge label="Pro" variant="yellow" />
      </BrutXContainer>
      <BrutCard padding="md">
        <BrutText>Nested X + Y containers compose full screens.</BrutText>
      </BrutCard>
    </BrutYContainer>
  ),
};
