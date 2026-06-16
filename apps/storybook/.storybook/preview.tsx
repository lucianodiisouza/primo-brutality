import type { Preview } from "@storybook/react-native-web-vite";
import { View } from "react-native";
import {
  BrutContainer,
  BrutToastProvider,
} from "@primo-brutality/ui";
import "../../../packages/ui/global.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <BrutToastProvider>
        <BrutContainer padding="lg" className="min-h-screen">
          <View className="w-full py-6">
            <Story />
          </View>
        </BrutContainer>
      </BrutToastProvider>
    ),
  ],
};

export default preview;
