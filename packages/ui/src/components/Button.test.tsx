import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Text, View } from "react-native";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

function MockIcon() {
  return <View testID="mock-icon" />;
}

describe("Button", () => {
  it("renders string children as label text", () => {
    render(<Button>Continue</Button>);
    expect(screen.getByText("Continue")).toBeTruthy();
  });

  it("calls onPress when pressed", async () => {
    const user = userEvent.setup();
    const onPress = vi.fn();
    render(<Button onPress={onPress}>Tap me</Button>);

    await user.click(screen.getByRole("button", { name: "Tap me" }));

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("does not call onPress when disabled", async () => {
    const user = userEvent.setup();
    const onPress = vi.fn();
    render(
      <Button disabled onPress={onPress}>
        Tap me
      </Button>,
    );

    await user.click(screen.getByRole("button", { name: "Tap me" }));

    expect(onPress).not.toHaveBeenCalled();
  });

  it("renders custom children without wrapping in Text", () => {
    render(
      <Button>
        <Text testID="custom-child">Custom</Text>
      </Button>,
    );

    expect(screen.getByTestId("custom-child")).toBeTruthy();
  });

  it("forwards accessibility props to Pressable", () => {
    render(<Button accessibilityLabel="Submit form">Submit</Button>);

    expect(screen.getByLabelText("Submit form")).toBeTruthy();
  });

  it("renders icon on the left of the label by default", () => {
    render(<Button icon={<MockIcon />}>Add item</Button>);

    expect(screen.getByTestId("mock-icon")).toBeTruthy();
    expect(screen.getByText("Add item")).toBeTruthy();
  });

  it("renders icon on the right when iconPosition is right", () => {
    render(
      <Button icon={<MockIcon />} iconPosition="right">
        Next
      </Button>,
    );

    expect(screen.getByTestId("mock-icon")).toBeTruthy();
    expect(screen.getByText("Next")).toBeTruthy();
  });

  it("renders icon only when iconPosition is middle", () => {
    render(
      <Button
        icon={<MockIcon />}
        iconPosition="middle"
        accessibilityLabel="Settings"
      />,
    );

    expect(screen.getByTestId("mock-icon")).toBeTruthy();
    expect(screen.getByLabelText("Settings")).toBeTruthy();
  });
});
