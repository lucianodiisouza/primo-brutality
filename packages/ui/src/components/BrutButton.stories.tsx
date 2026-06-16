import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View } from "react-native";
import { BrutButton } from "./BrutButton";

const meta = {
  title: "Primitives/Button",
  component: BrutButton,
  parameters: {
    docs: {
      description: {
        component:
          "Primary action control with neo-brutalist borders, hard shadow, and press feedback. String labels are auto-wrapped in `BrutText`.",
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
    onPress: { action: "pressed" },
  },
  args: {
    children: "Continue",
    variant: "primary",
    size: "md",
    shadow: true,
    disabled: false,
  },
} satisfies Meta<typeof BrutButton>;

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
      <BrutButton variant="primary">Primary</BrutButton>
      <BrutButton variant="secondary">Secondary</BrutButton>
      <BrutButton variant="ghost">Ghost</BrutButton>
      <BrutButton variant="destructive">Destructive</BrutButton>
    </View>
  ),
};

export const Sizes: Story = {
  args: meta.args,
  parameters: { controls: { disable: true } },
  render: () => (
    <View className="gap-3">
      <BrutButton size="sm">Small</BrutButton>
      <BrutButton size="md">Medium</BrutButton>
      <BrutButton size="lg">Large</BrutButton>
    </View>
  ),
};
