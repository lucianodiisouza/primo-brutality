import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { Input } from "./Input";

const meta = {
  title: "Primitives/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          "Text field with brutal border, optional label, hint, and error message.",
      },
    },
  },
  argTypes: {
    label: { control: "text" },
    error: { control: "text" },
    hint: { control: "text" },
    editable: { control: "boolean" },
  },
  args: {
    label: "Email",
    placeholder: "you@example.com",
    hint: "We never share your email.",
  },
} satisfies Meta<typeof Input>;

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
