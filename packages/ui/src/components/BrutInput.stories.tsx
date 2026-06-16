import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { BrutInput } from "./BrutInput";

const meta = {
  title: "Primitives/Input",
  component: BrutInput,
  args: {
    label: "Email",
    placeholder: "you@example.com",
    hint: "We never share your email.",
  },
} satisfies Meta<typeof BrutInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    error: "Please enter a valid email address.",
    defaultValue: "not-an-email",
  },
};

export const Disabled: Story = {
  args: {
    editable: false,
    defaultValue: "locked@example.com",
  },
};
