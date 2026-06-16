import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Text, View } from "react-native";
import { describe, expect, it, vi } from "vitest";
import { BrutButton } from "./BrutButton";

function MockIcon() {
  return <View testID="mock-icon" />;
}

describe("BrutButton", () => {
  it("renders string children as label text", () => {
    render(<BrutButton>Continue</BrutButton>);
    expect(screen.getByText("Continue")).toBeTruthy();
  });

  it("calls onPress when pressed", async () => {
    const user = userEvent.setup();
    const onPress = vi.fn();
    render(<BrutButton onPress={onPress}>Tap me</BrutButton>);

    await user.click(screen.getByRole("button", { name: "Tap me" }));

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("does not call onPress when disabled", async () => {
    const user = userEvent.setup();
    const onPress = vi.fn();
    render(
      <BrutButton disabled onPress={onPress}>
        Tap me
      </BrutButton>,
    );

    await user.click(screen.getByRole("button", { name: "Tap me" }));

    expect(onPress).not.toHaveBeenCalled();
  });

  it("renders custom children without wrapping in BrutText", () => {
    render(
      <BrutButton>
        <Text testID="custom-child">Custom</Text>
      </BrutButton>,
    );

    expect(screen.getByTestId("custom-child")).toBeTruthy();
  });

  it("forwards accessibility props to Pressable", () => {
    render(
      <BrutButton accessibilityLabel="Submit form">Submit</BrutButton>,
    );

    expect(screen.getByLabelText("Submit form")).toBeTruthy();
  });

  it("renders icon on the left of the label by default", () => {
    render(
      <BrutButton icon={<MockIcon />}>Add item</BrutButton>,
    );

    expect(screen.getByTestId("mock-icon")).toBeTruthy();
    expect(screen.getByText("Add item")).toBeTruthy();
  });

  it("renders icon on the right when iconPosition is right", () => {
    render(
      <BrutButton icon={<MockIcon />} iconPosition="right">
        Next
      </BrutButton>,
    );

    expect(screen.getByTestId("mock-icon")).toBeTruthy();
    expect(screen.getByText("Next")).toBeTruthy();
  });

  it("renders icon only when iconPosition is middle", () => {
    render(
      <BrutButton
        icon={<MockIcon />}
        iconPosition="middle"
        accessibilityLabel="Settings"
      />,
    );

    expect(screen.getByTestId("mock-icon")).toBeTruthy();
    expect(screen.getByLabelText("Settings")).toBeTruthy();
  });
});
