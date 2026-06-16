import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View } from "react-native";
import { Button } from "./Button";

function StoryIcon({ color = "#ffffff" }: { color?: string }) {
  return (
    <View
      className="h-4 w-4 rounded-full border border-brutal-black"
      style={{ backgroundColor: color }}
    />
  );
}

const meta = {
  title: "Primitives/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "Primary action control with neo-brutalist borders, hard shadow, and press feedback. String labels are auto-wrapped in `Text`.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "destructive"],
      description: "Visual style preset.",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Padding and minimum touch height.",
    },
    shadow: {
      control: "boolean",
      description: "Hard offset shadow while idle.",
    },
    disabled: {
      control: "boolean",
      description: "Prevents interaction and lowers opacity.",
    },
    iconPosition: {
      control: "select",
      options: ["left", "middle", "right"],
      description: "Icon placement relative to the label.",
    },
    onPress: { action: "pressed" },
  },
  args: {
    children: "Continue",
    variant: "primary",
    size: "md",
    shadow: true,
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Default primary button — use for the main call to action. */
export const Primary: Story = {};

/** Secondary surface for cancel or alternate actions. */
export const Secondary: Story = {
  args: { variant: "secondary", children: "Cancel" },
};

/** Minimal ghost style for tertiary actions. */
export const Ghost: Story = {
  args: { variant: "ghost", children: "Learn more" },
};

/** Destructive actions such as delete or remove. */
export const Destructive: Story = {
  args: { variant: "destructive", children: "Delete" },
};

/** Non-interactive state. */
export const Disabled: Story = {
  args: { disabled: true, children: "Unavailable" },
};

/** Flat style without the hard drop shadow. */
export const WithoutShadow: Story = {
  args: { shadow: false, children: "Flat button" },
};

export const AllVariants: Story = {
  args: meta.args,
  parameters: { controls: { disable: true } },
  render: () => (
    <View className="gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </View>
  ),
};

export const Sizes: Story = {
  args: meta.args,
  parameters: { controls: { disable: true } },
  render: () => (
    <View className="gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </View>
  ),
};

/** Icon before the label — default `iconPosition`. */
export const IconLeft: Story = {
  args: {
    children: "Add item",
    icon: <StoryIcon />,
    iconPosition: "left",
  },
};

/** Icon after the label. */
export const IconRight: Story = {
  args: {
    children: "Next",
    variant: "secondary",
    icon: <StoryIcon color="#000000" />,
    iconPosition: "right",
  },
};

/** Icon-only button — provide `accessibilityLabel` for screen readers. */
export const IconOnly: Story = {
  args: {
    icon: <StoryIcon />,
    iconPosition: "middle",
    accessibilityLabel: "Settings",
  },
};

export const IconPositions: Story = {
  args: meta.args,
  parameters: { controls: { disable: true } },
  render: () => (
    <View className="gap-3">
      <Button icon={<StoryIcon />} iconPosition="left">
        Add item
      </Button>
      <Button
        variant="secondary"
        icon={<StoryIcon color="#000000" />}
        iconPosition="right"
      >
        Next
      </Button>
      <Button
        icon={<StoryIcon />}
        iconPosition="middle"
        accessibilityLabel="Settings"
      />
    </View>
  ),
};
