import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { BrutButton } from "./BrutButton";
import { useToast } from "../providers/BrutToastProvider";

const meta = {
  title: "Overlays/Toast",
  component: BrutButton,
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
  render: () => <ToastDemo message="Something happened." />,
};

export const Success: Story = {
  render: () => (
    <ToastDemo variant="success" message="Payment successful!" />
  ),
};

export const ErrorToast: Story = {
  render: () => <ToastDemo variant="error" message="Something went wrong." />,
};

export const Info: Story = {
  render: () => <ToastDemo variant="info" message="New update available." />,
};
