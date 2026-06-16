import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { Button } from "./Button";
import { useToast } from "../providers/ToastProvider";

const meta = {
  title: "Overlays/Toast",
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "Transient feedback via `ToastProvider` and the `useToast()` hook.",
      },
    },
  },
  args: {
    children: "Show toast",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

function ToastDemo({
  variant,
  message,
}: {
  variant?: "default" | "success" | "error" | "info";
  message: string;
}) {
  const { show } = useToast();

  return (
    <Button
      variant="secondary"
      onPress={() => show({ message, variant, duration: 3000 })}
    >
      Show toast
    </Button>
  );
}

export const Default: Story = {
  args: { children: "Show toast" },
  render: () => <ToastDemo message="Something happened." />,
};

export const Success: Story = {
  args: { children: "Show toast" },
  render: () => <ToastDemo variant="success" message="Payment successful!" />,
};

export const ErrorToast: Story = {
  args: { children: "Show toast" },
  render: () => <ToastDemo variant="error" message="Something went wrong." />,
};

export const Info: Story = {
  args: { children: "Show toast" },
  render: () => <ToastDemo variant="info" message="New update available." />,
};
