import type { Preview } from "@storybook/react-native-web-vite";
import { View } from "react-native";
import { Container, ToastProvider } from "@primo-brutality/ui";
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
    (Story, { parameters }) => {
      const content = <Story />;

      if (parameters.disableContainerDecorator) {
        return <ToastProvider>{content}</ToastProvider>;
      }

      return (
        <ToastProvider>
          <Container padding="lg" className="min-h-screen">
            <View className="w-full py-6">{content}</View>
          </Container>
        </ToastProvider>
      );
    },
  ],
};

export default preview;
