import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { Container } from "./Container";
import { Card } from "./Card";
import { Text } from "./Text";

const meta = {
  title: "Layout/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Full-screen cream page wrapper with padding and optional max-width column.",
      },
    },
  },
  argTypes: {
    padding: { control: "select", options: ["none", "sm", "md", "lg"] },
    maxWidth: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
    centered: { control: "boolean" },
  },
  args: {
    padding: "lg",
    maxWidth: "md",
    centered: false,
  },
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CenteredColumn: Story = {
  args: {
    padding: "lg",
    maxWidth: "md",
  },
  render: (args) => (
    <Container {...args}>
      <Card>
        <Text weight="semibold">Centered brutal column</Text>
        <Text className="mt-2" color="muted">
          Container handles cream background, padding, and max width.
        </Text>
      </Card>
    </Container>
  ),
};
