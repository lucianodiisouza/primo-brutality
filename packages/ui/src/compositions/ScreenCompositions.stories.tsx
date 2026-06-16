import { useState, type ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View } from "react-native";
import { BrutAlert } from "../components/BrutAlert";
import { BrutBadge } from "../components/BrutBadge";
import { BrutButton } from "../components/BrutButton";
import { BrutCard } from "../components/BrutCard";
import { BrutContainer } from "../components/BrutContainer";
import { BrutInput } from "../components/BrutInput";
import { BrutModal } from "../components/BrutModal";
import { BrutPinInput } from "../components/BrutPinInput";
import { BrutScrollView } from "../components/BrutScrollView";
import { BrutHeading, BrutText } from "../components/BrutText";
import { BrutToggle } from "../components/BrutToggle";
import { BrutXContainer } from "../components/BrutXContainer";
import { BrutYContainer } from "../components/BrutYContainer";
import { useToast } from "../providers/BrutToastProvider";

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
    <BrutContainer padding="none" className="min-h-screen items-center bg-brutal-gray py-8">
      <View className="w-full max-w-[390px] overflow-hidden rounded-brutal-lg border-brutal border-brutal-black bg-brutal-cream shadow-brutal">
        {children}
      </View>
    </BrutContainer>
  );
}

export const Login: Story = {
  parameters: compositionParameters,
  render: () => (
    <PhoneFrame>
      <BrutContainer maxWidth="full" padding="lg" className="min-h-[640px] justify-center">
        <BrutYContainer gap="lg" fullWidth>
          <BrutYContainer gap="sm">
            <BrutBadge label="Welcome back" variant="pink" />
            <BrutHeading level={1}>Sign in</BrutHeading>
            <BrutText color="muted">
              Enter your credentials to access your dashboard.
            </BrutText>
          </BrutYContainer>

          <BrutYContainer gap="md">
            <BrutInput
              label="Email"
              placeholder="you@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <BrutInput
              label="Password"
              placeholder="••••••••"
              secureTextEntry
            />
          </BrutYContainer>

          <BrutAlert
            variant="info"
            title="New login device?"
            message="We'll send a verification code if we don't recognize this browser."
          />

          <BrutYContainer gap="sm">
            <BrutButton size="lg">Sign in</BrutButton>
            <BrutButton variant="ghost">Forgot password?</BrutButton>
          </BrutYContainer>
        </BrutYContainer>
      </BrutContainer>
    </PhoneFrame>
  ),
};

export const Dashboard: Story = {
  parameters: compositionParameters,
  render: () => (
    <PhoneFrame>
      <BrutScrollView contentPadding="lg" className="min-h-[720px]">
        <BrutYContainer gap="lg" fullWidth>
          <BrutXContainer justify="between" align="start" fullWidth>
            <BrutYContainer gap="xs" className="flex-1">
              <BrutText size="sm" color="muted">
                Good morning
              </BrutText>
              <BrutHeading level={2}>Alex Rivera</BrutHeading>
            </BrutYContainer>
            <BrutBadge label="Pro" variant="yellow" />
          </BrutXContainer>

          <BrutAlert
            variant="success"
            title="Payment received"
            message="Your latest sale just landed — $248.00"
          />

          <BrutYContainer gap="sm">
            <BrutText weight="semibold">Overview</BrutText>
            <BrutXContainer gap="md" fullWidth>
              <BrutCard padding="md" className="flex-1">
                <BrutText size="sm" color="muted">
                  Revenue
                </BrutText>
                <BrutHeading level={3}>$12.4k</BrutHeading>
                <BrutBadge label="+18%" variant="green" className="mt-2" />
              </BrutCard>
              <BrutCard padding="md" className="flex-1" variant="cream">
                <BrutText size="sm" color="muted">
                  Orders
                </BrutText>
                <BrutHeading level={3}>86</BrutHeading>
                <BrutBadge label="12 pending" variant="outline" className="mt-2" />
              </BrutCard>
            </BrutXContainer>
          </BrutYContainer>

          <BrutYContainer gap="sm">
            <BrutXContainer justify="between" align="center" fullWidth>
              <BrutText weight="semibold">Recent activity</BrutText>
              <BrutButton variant="ghost" size="sm">
                View all
              </BrutButton>
            </BrutXContainer>

            <BrutCard padding="md">
              <BrutXContainer justify="between" align="center" fullWidth>
                <BrutYContainer gap="xs">
                  <BrutText weight="semibold">New order #4821</BrutText>
                  <BrutText size="sm" color="muted">
                    2 items · 5 min ago
                  </BrutText>
                </BrutYContainer>
                <BrutBadge label="New" variant="pink" />
              </BrutXContainer>
            </BrutCard>

            <BrutCard padding="md" variant="cream" shadow="soft">
              <BrutXContainer justify="between" align="center" fullWidth>
                <BrutYContainer gap="xs">
                  <BrutText weight="semibold">Shipment delivered</BrutText>
                  <BrutText size="sm" color="muted">
                    Order #4798 · yesterday
                  </BrutText>
                </BrutYContainer>
                <BrutBadge label="Done" variant="green" />
              </BrutXContainer>
            </BrutCard>
          </BrutYContainer>
        </BrutYContainer>
      </BrutScrollView>
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
        <BrutScrollView contentPadding="lg" className="min-h-[720px]">
          <BrutYContainer gap="lg" fullWidth>
            <BrutYContainer gap="sm">
              <BrutHeading level={2}>Settings</BrutHeading>
              <BrutText color="muted">
                Manage your profile and account preferences.
              </BrutText>
            </BrutYContainer>

            <BrutCard padding="lg">
              <BrutHeading level={4}>Profile</BrutHeading>
              <BrutYContainer gap="md" className="mt-4">
                <BrutInput label="Display name" defaultValue="Alex Rivera" />
                <BrutInput
                  label="Email"
                  defaultValue="alex@example.com"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <BrutInput
                  label="Bio"
                  placeholder="Tell us about yourself"
                  defaultValue="Designer & maker of brutal things."
                  multiline
                />
              </BrutYContainer>
            </BrutCard>

            <BrutCard padding="lg" variant="cream">
              <BrutHeading level={4}>Notifications</BrutHeading>
              <BrutYContainer gap="sm" className="mt-4">
                <BrutXContainer justify="between" align="center" fullWidth>
                  <BrutText>Order updates</BrutText>
                  <BrutToggle
                    value={orderUpdates}
                    onValueChange={setOrderUpdates}
                    accessibilityLabel="Order updates"
                  />
                </BrutXContainer>
                <BrutXContainer justify="between" align="center" fullWidth>
                  <BrutText>Marketing emails</BrutText>
                  <BrutToggle
                    value={marketing}
                    onValueChange={setMarketing}
                    accessibilityLabel="Marketing emails"
                  />
                </BrutXContainer>
              </BrutYContainer>
            </BrutCard>

            <BrutYContainer gap="sm">
              <BrutButton size="lg">Save changes</BrutButton>
              <BrutButton variant="destructive">Delete account</BrutButton>
            </BrutYContainer>
          </BrutYContainer>
        </BrutScrollView>
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
        <BrutContainer
          maxWidth="full"
          padding="lg"
          centered
          className="min-h-[640px]"
        >
          <BrutYContainer gap="lg" fullWidth>
            <BrutYContainer gap="sm" align="center">
              <BrutBadge label="Step 2 of 2" variant="outline" />
              <BrutHeading level={2}>Enter code</BrutHeading>
              <BrutText color="muted" className="text-center">
                We sent a 6-digit code to alex@example.com
              </BrutText>
            </BrutYContainer>

            <BrutPinInput
              length={6}
              value={code}
              onChange={setCode}
              onComplete={() => {}}
            />

            <BrutAlert
              variant="warning"
              title="Code expires soon"
              message="Request a new code if you don't receive it within 2 minutes."
            />

            <BrutYContainer gap="sm">
              <BrutButton size="lg" disabled={code.length < 6}>
                Verify
              </BrutButton>
              <BrutButton variant="secondary">Resend code</BrutButton>
            </BrutYContainer>
          </BrutYContainer>
        </BrutContainer>
      </PhoneFrame>
    );
  },
};

function CheckoutScreen() {
  const { show } = useToast();
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <PhoneFrame>
      <BrutScrollView contentPadding="lg" className="min-h-[720px]">
        <BrutYContainer gap="lg" fullWidth>
          <BrutYContainer gap="sm">
            <BrutHeading level={2}>Checkout</BrutHeading>
            <BrutText color="muted">Review your order before paying.</BrutText>
          </BrutYContainer>

          <BrutCard padding="md">
            <BrutXContainer justify="between" align="start" gap="md" fullWidth>
              <BrutYContainer gap="xs" className="flex-1">
                <BrutText weight="semibold">Brutal Hoodie</BrutText>
                <BrutText size="sm" color="muted">
                  Size M · Black
                </BrutText>
              </BrutYContainer>
              <BrutText weight="bold">$89.00</BrutText>
            </BrutXContainer>
          </BrutCard>

          <BrutCard padding="md" variant="cream">
            <BrutXContainer justify="between" align="start" gap="md" fullWidth>
              <BrutYContainer gap="xs" className="flex-1">
                <BrutText weight="semibold">Sticker Pack</BrutText>
                <BrutText size="sm" color="muted">
                  12 neo-brutalist stickers
                </BrutText>
              </BrutYContainer>
              <BrutText weight="bold">$14.00</BrutText>
            </BrutXContainer>
          </BrutCard>

          <BrutInput
            label="Promo code"
            placeholder="BRUTAL10"
            hint="Save 10% on your first order."
          />

          <BrutCard padding="md" shadow="soft">
            <BrutXContainer justify="between" align="center" fullWidth>
              <BrutText weight="semibold">Total</BrutText>
              <BrutHeading level={3}>$103.00</BrutHeading>
            </BrutXContainer>
          </BrutCard>

          <BrutButton
            size="lg"
            onPress={() => setConfirmOpen(true)}
          >
            Place order
          </BrutButton>
        </BrutYContainer>
      </BrutScrollView>

      <BrutModal
        visible={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        title="Confirm order"
        footer={
          <BrutXContainer gap="md">
            <BrutButton
              variant="secondary"
              onPress={() => setConfirmOpen(false)}
            >
              Cancel
            </BrutButton>
            <BrutButton
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
            </BrutButton>
          </BrutXContainer>
        }
      >
        <BrutText color="muted">
          Your card ending in 4242 will be charged. This action cannot be undone.
        </BrutText>
      </BrutModal>
    </PhoneFrame>
  );
}

export const Checkout: Story = {
  parameters: compositionParameters,
  render: () => <CheckoutScreen />,
};
