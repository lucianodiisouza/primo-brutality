import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { BrutBadge } from "./BrutBadge";
import { BrutButton } from "./BrutButton";
import { BrutText } from "./BrutText";
import { BrutXContainer } from "./BrutXContainer";
import { BrutYContainer } from "./BrutYContainer";

const meta = {
  title: "Layout/XContainer",
  component: BrutXContainer,
  parameters: {
    docs: {
      description: {
        component:
          "Horizontal flex row with token-based gap, alignment, and distribution presets.",
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
    align: "center",
    justify: "start",
    wrap: false,
    fullWidth: true,
  },
} satisfies Meta<typeof BrutXContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <BrutXContainer {...args}>
      <BrutButton variant="secondary">Cancel</BrutButton>
      <BrutButton>Confirm</BrutButton>
    </BrutXContainer>
  ),
};

export const SpaceBetween: Story = {
  args: {
    justify: "between",
    align: "center",
    fullWidth: true,
  },
  render: (args) => (
    <BrutXContainer {...args}>
      <BrutText weight="semibold">Total</BrutText>
      <BrutText weight="bold" size="lg">
        $103.00
      </BrutText>
    </BrutXContainer>
  ),
};

export const GapScale: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <BrutYContainer gap="lg" fullWidth>
      {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((gap) => (
        <BrutYContainer key={gap} gap="xs">
          <BrutBadge label={`gap="${gap}"`} variant="outline" />
          <BrutXContainer gap={gap}>
            <BrutButton size="sm" variant="secondary">
              One
            </BrutButton>
            <BrutButton size="sm" variant="secondary">
              Two
            </BrutButton>
            <BrutButton size="sm" variant="secondary">
              Three
            </BrutButton>
          </BrutXContainer>
        </BrutYContainer>
      ))}
    </BrutYContainer>
  ),
};

export const Wrapped: Story = {
  args: {
    gap: "sm",
    wrap: true,
    fullWidth: true,
  },
  render: (args) => (
    <BrutXContainer {...args}>
      <BrutBadge label="Default" />
      <BrutBadge label="Pink" variant="pink" />
      <BrutBadge label="Yellow" variant="yellow" />
      <BrutBadge label="Green" variant="green" />
      <BrutBadge label="Red" variant="red" />
      <BrutBadge label="Outline" variant="outline" />
    </BrutXContainer>
  ),
};
