import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Text } from "./Text";
import { XContainer } from "./XContainer";
import { YContainer } from "./YContainer";

const meta = {
  title: "Layout/XContainer",
  component: XContainer,
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
} satisfies Meta<typeof XContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <XContainer {...args}>
      <Button variant="secondary">Cancel</Button>
      <Button>Confirm</Button>
    </XContainer>
  ),
};

export const SpaceBetween: Story = {
  args: {
    justify: "between",
    align: "center",
    fullWidth: true,
  },
  render: (args) => (
    <XContainer {...args}>
      <Text weight="semibold">Total</Text>
      <Text weight="bold" size="lg">
        $103.00
      </Text>
    </XContainer>
  ),
};

export const GapScale: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <YContainer gap="lg" fullWidth>
      {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((gap) => (
        <YContainer key={gap} gap="xs">
          <Badge label={`gap="${gap}"`} variant="outline" />
          <XContainer gap={gap}>
            <Button size="sm" variant="secondary">
              One
            </Button>
            <Button size="sm" variant="secondary">
              Two
            </Button>
            <Button size="sm" variant="secondary">
              Three
            </Button>
          </XContainer>
        </YContainer>
      ))}
    </YContainer>
  ),
};

export const Wrapped: Story = {
  args: {
    gap: "sm",
    wrap: true,
    fullWidth: true,
  },
  render: (args) => (
    <XContainer {...args}>
      <Badge label="Default" />
      <Badge label="Pink" variant="pink" />
      <Badge label="Yellow" variant="yellow" />
      <Badge label="Green" variant="green" />
      <Badge label="Red" variant="red" />
      <Badge label="Outline" variant="outline" />
    </XContainer>
  ),
};
