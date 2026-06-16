import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View } from "react-native";
import { BrutModal } from "./BrutModal";
import { BrutButton } from "./BrutButton";
import { BrutText } from "./BrutText";

const meta = {
  title: "Overlays/Modal",
  component: BrutModal,
  args: {
    visible: false,
    onClose: () => {},
    children: null,
  },
} satisfies Meta<typeof BrutModal>;

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
        <BrutButton onPress={() => setOpen(true)}>Open modal</BrutButton>
        <BrutModal
          visible={open}
          onClose={() => setOpen(false)}
          title="Confirm action"
          footer={
            <View className="flex-row gap-3">
              <BrutButton variant="secondary" onPress={() => setOpen(false)}>
                Cancel
              </BrutButton>
              <BrutButton onPress={() => setOpen(false)}>Confirm</BrutButton>
            </View>
          }
        >
          <BrutText color="muted">
            Are you sure you want to continue?
          </BrutText>
        </BrutModal>
      </View>
    );
  },
};
