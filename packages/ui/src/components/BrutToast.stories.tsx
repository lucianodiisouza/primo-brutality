import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { BrutButton } from "./BrutButton";
import { useToast } from "../providers/BrutToastProvider";

const meta = {
  title: "Overlays/Toast",
  component: BrutButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Transient feedback via `BrutToastProvider` and the `useToast()` hook.",
      },
    },
  },
  args: {
    children: "Show toast",
  },
} satisfies Meta<typeof BrutButton>;

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
    <BrutButton
      variant="secondary"
      onPress={() => show({ message, variant, duration: 3000 })}
    >
      Show toast
    </BrutButton>
  );
}

export const Default: Story = {
  args: { children: "Show toast" },
  render: () => <ToastDemo message="Something happened." />,
};

export const Success: Story = {
  args: { children: "Show toast" },
  render: () => (
    <ToastDemo variant="success" message="Payment successful!" />
  ),
};

export const ErrorToast: Story = {
  args: { children: "Show toast" },
  render: () => <ToastDemo variant="error" message="Something went wrong." />,
};

export const Info: Story = {
  args: { children: "Show toast" },
  render: () => <ToastDemo variant="info" message="New update available." />,
};
