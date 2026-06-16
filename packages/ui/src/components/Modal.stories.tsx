import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View } from "react-native";
import { Modal } from "./Modal";
import { Button } from "./Button";
import { Text } from "./Text";

const meta = {
  title: "Overlays/Modal",
  component: Modal,
  parameters: {
    docs: {
      description: {
        component:
          "Centered overlay dialog. Backdrop press dismisses; inner panel stops propagation.",
      },
    },
  },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "full"] },
    title: { control: "text" },
  },
  args: {
    visible: false,
    onClose: () => {},
    children: null,
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  args: {
    visible: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <View>
        <Button onPress={() => setOpen(true)}>Open modal</Button>
        <Modal
          visible={open}
          onClose={() => setOpen(false)}
          title="Confirm action"
          footer={
            <View className="flex-row gap-3">
              <Button variant="secondary" onPress={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onPress={() => setOpen(false)}>Confirm</Button>
            </View>
          }
        >
          <Text color="muted">Are you sure you want to continue?</Text>
        </Modal>
      </View>
    );
  },
};
