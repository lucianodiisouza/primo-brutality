import { useState, type ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { ScrollView, View } from "react-native";
import { Alert } from "../components/Alert";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { Input } from "../components/Input";
import { Modal } from "../components/Modal";
import { PinInput } from "../components/PinInput";
import { Heading, Text } from "../components/Text";
import { Toggle } from "../components/Toggle";
import { XContainer } from "../components/XContainer";
import { YContainer } from "../components/YContainer";
import { useToast } from "../providers/ToastProvider";

const compositionParameters = {
  disableContainerDecorator: true,
  controls: { disable: true },
  docs: {
    description: {
      story:
        "Example screen built from multiple Primo Brutality components — use as a reference for layout and composition patterns.",
    },
  },
};

const meta = {
  title: "Compositions/Screens",
  parameters: {
    layout: "fullscreen",
    disableContainerDecorator: true,
    docs: {
      description: {
        component:
          "Full-screen examples that combine primitives and overlays into realistic app flows.",
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <Container
      padding="none"
      className="min-h-screen items-center bg-brutal-gray py-8"
    >
      <View className="w-full max-w-[390px] overflow-hidden rounded-brutal-lg border-brutal border-brutal-black bg-brutal-cream shadow-brutal">
        {children}
      </View>
    </Container>
  );
}

export const Login: Story = {
  parameters: compositionParameters,
  render: () => (
    <PhoneFrame>
      <Container
        maxWidth="full"
        padding="lg"
        className="min-h-[640px] justify-center"
      >
        <YContainer gap="lg" fullWidth>
          <YContainer gap="sm">
            <Badge label="Welcome back" variant="pink" />
            <Heading level={1}>Sign in</Heading>
            <Text color="muted">
              Enter your credentials to access your dashboard.
            </Text>
          </YContainer>

          <YContainer gap="md">
            <Input
              label="Email"
              placeholder="you@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input label="Password" placeholder="••••••••" secureTextEntry />
          </YContainer>

          <Alert
            variant="info"
            title="New login device?"
            message="We'll send a verification code if we don't recognize this browser."
          />

          <YContainer gap="sm">
            <Button size="lg">Sign in</Button>
            <Button variant="ghost">Forgot password?</Button>
          </YContainer>
        </YContainer>
      </Container>
    </PhoneFrame>
  ),
};

export const Dashboard: Story = {
  parameters: compositionParameters,
  render: () => (
    <PhoneFrame>
      <ScrollView
        className="min-h-[720px] flex-1"
        contentContainerClassName="grow p-6"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <YContainer gap="lg" fullWidth>
          <XContainer justify="between" align="start" fullWidth>
            <YContainer gap="xs" className="flex-1">
              <Text size="sm" color="muted">
                Good morning
              </Text>
              <Heading level={2}>Alex Rivera</Heading>
            </YContainer>
            <Badge label="Pro" variant="yellow" />
          </XContainer>

          <Alert
            variant="success"
            title="Payment received"
            message="Your latest sale just landed — $248.00"
          />

          <YContainer gap="sm">
            <Text weight="semibold">Overview</Text>
            <XContainer gap="md" fullWidth>
              <Card padding="md" className="flex-1">
                <Text size="sm" color="muted">
                  Revenue
                </Text>
                <Heading level={3}>$12.4k</Heading>
                <Badge label="+18%" variant="green" className="mt-2" />
              </Card>
              <Card padding="md" className="flex-1" variant="cream">
                <Text size="sm" color="muted">
                  Orders
                </Text>
                <Heading level={3}>86</Heading>
                <Badge label="12 pending" variant="outline" className="mt-2" />
              </Card>
            </XContainer>
          </YContainer>

          <YContainer gap="sm">
            <XContainer justify="between" align="center" fullWidth>
              <Text weight="semibold">Recent activity</Text>
              <Button variant="ghost" size="sm">
                View all
              </Button>
            </XContainer>

            <Card padding="md">
              <XContainer justify="between" align="center" fullWidth>
                <YContainer gap="xs">
                  <Text weight="semibold">New order #4821</Text>
                  <Text size="sm" color="muted">
                    2 items · 5 min ago
                  </Text>
                </YContainer>
                <Badge label="New" variant="pink" />
              </XContainer>
            </Card>

            <Card padding="md" variant="cream" shadow="soft">
              <XContainer justify="between" align="center" fullWidth>
                <YContainer gap="xs">
                  <Text weight="semibold">Shipment delivered</Text>
                  <Text size="sm" color="muted">
                    Order #4798 · yesterday
                  </Text>
                </YContainer>
                <Badge label="Done" variant="green" />
              </XContainer>
            </Card>
          </YContainer>
        </YContainer>
      </ScrollView>
    </PhoneFrame>
  ),
};

export const Settings: Story = {
  parameters: compositionParameters,
  render: () => {
    const [orderUpdates, setOrderUpdates] = useState(true);
    const [marketing, setMarketing] = useState(false);

    return (
      <PhoneFrame>
        <ScrollView
          className="min-h-[720px] flex-1"
          contentContainerClassName="grow p-6"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <YContainer gap="lg" fullWidth>
            <YContainer gap="sm">
              <Heading level={2}>Settings</Heading>
              <Text color="muted">
                Manage your profile and account preferences.
              </Text>
            </YContainer>

            <Card padding="lg">
              <Heading level={4}>Profile</Heading>
              <YContainer gap="md" className="mt-4">
                <Input label="Display name" defaultValue="Alex Rivera" />
                <Input
                  label="Email"
                  defaultValue="alex@example.com"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <Input
                  label="Bio"
                  placeholder="Tell us about yourself"
                  defaultValue="Designer & maker of brutal things."
                  multiline
                />
              </YContainer>
            </Card>

            <Card padding="lg" variant="cream">
              <Heading level={4}>Notifications</Heading>
              <YContainer gap="sm" className="mt-4">
                <XContainer justify="between" align="center" fullWidth>
                  <Text>Order updates</Text>
                  <Toggle
                    value={orderUpdates}
                    onValueChange={setOrderUpdates}
                    accessibilityLabel="Order updates"
                  />
                </XContainer>
                <XContainer justify="between" align="center" fullWidth>
                  <Text>Marketing emails</Text>
                  <Toggle
                    value={marketing}
                    onValueChange={setMarketing}
                    accessibilityLabel="Marketing emails"
                  />
                </XContainer>
              </YContainer>
            </Card>

            <YContainer gap="sm">
              <Button size="lg">Save changes</Button>
              <Button variant="destructive">Delete account</Button>
            </YContainer>
          </YContainer>
        </ScrollView>
      </PhoneFrame>
    );
  },
};

export const OtpVerification: Story = {
  parameters: compositionParameters,
  render: () => {
    const [code, setCode] = useState("");

    return (
      <PhoneFrame>
        <Container
          maxWidth="full"
          padding="lg"
          centered
          className="min-h-[640px]"
        >
          <YContainer gap="lg" fullWidth>
            <YContainer gap="sm" align="center">
              <Badge label="Step 2 of 2" variant="outline" />
              <Heading level={2}>Enter code</Heading>
              <Text color="muted" className="text-center">
                We sent a 6-digit code to alex@example.com
              </Text>
            </YContainer>

            <PinInput
              length={6}
              value={code}
              onChange={setCode}
              onComplete={() => {}}
            />

            <Alert
              variant="warning"
              title="Code expires soon"
              message="Request a new code if you don't receive it within 2 minutes."
            />

            <YContainer gap="sm">
              <Button size="lg" disabled={code.length < 6}>
                Verify
              </Button>
              <Button variant="secondary">Resend code</Button>
            </YContainer>
          </YContainer>
        </Container>
      </PhoneFrame>
    );
  },
};

function CheckoutScreen() {
  const { show } = useToast();
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <PhoneFrame>
      <ScrollView
        className="min-h-[720px] flex-1"
        contentContainerClassName="grow p-6"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <YContainer gap="lg" fullWidth>
          <YContainer gap="sm">
            <Heading level={2}>Checkout</Heading>
            <Text color="muted">Review your order before paying.</Text>
          </YContainer>

          <Card padding="md">
            <XContainer justify="between" align="start" gap="md" fullWidth>
              <YContainer gap="xs" className="flex-1">
                <Text weight="semibold">Brutal Hoodie</Text>
                <Text size="sm" color="muted">
                  Size M · Black
                </Text>
              </YContainer>
              <Text weight="bold">$89.00</Text>
            </XContainer>
          </Card>

          <Card padding="md" variant="cream">
            <XContainer justify="between" align="start" gap="md" fullWidth>
              <YContainer gap="xs" className="flex-1">
                <Text weight="semibold">Sticker Pack</Text>
                <Text size="sm" color="muted">
                  12 neo-brutalist stickers
                </Text>
              </YContainer>
              <Text weight="bold">$14.00</Text>
            </XContainer>
          </Card>

          <Input
            label="Promo code"
            placeholder="BRUTAL10"
            hint="Save 10% on your first order."
          />

          <Card padding="md" shadow="soft">
            <XContainer justify="between" align="center" fullWidth>
              <Text weight="semibold">Total</Text>
              <Heading level={3}>$103.00</Heading>
            </XContainer>
          </Card>

          <Button size="lg" onPress={() => setConfirmOpen(true)}>
            Place order
          </Button>
        </YContainer>
      </ScrollView>

      <Modal
        visible={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        title="Confirm order"
        footer={
          <XContainer gap="md">
            <Button variant="secondary" onPress={() => setConfirmOpen(false)}>
              Cancel
            </Button>
            <Button
              onPress={() => {
                setConfirmOpen(false);
                show({
                  message: "Order placed successfully!",
                  variant: "success",
                  duration: 3000,
                });
              }}
            >
              Pay $103.00
            </Button>
          </XContainer>
        }
      >
        <Text color="muted">
          Your card ending in 4242 will be charged. This action cannot be
          undone.
        </Text>
      </Modal>
    </PhoneFrame>
  );
}

export const Checkout: Story = {
  parameters: compositionParameters,
  render: () => <CheckoutScreen />,
};
