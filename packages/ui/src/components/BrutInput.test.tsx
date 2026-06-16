import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { BrutInput } from "./BrutInput";

describe("BrutInput", () => {
  it("renders label and hint", () => {
    render(
      <BrutInput label="Email" hint="Required field" placeholder="you@example.com" />,
    );

    expect(screen.getByText("Email")).toBeTruthy();
    expect(screen.getByText("Required field")).toBeTruthy();
    expect(screen.getByPlaceholderText("you@example.com")).toBeTruthy();
  });

  it("shows error instead of hint", () => {
    render(
      <BrutInput
        label="Email"
        hint="Optional hint"
        error="Invalid email"
        defaultValue="bad"
      />,
    );

    expect(screen.getByText("Invalid email")).toBeTruthy();
    expect(screen.queryByText("Optional hint")).toBeNull();
  });

  it("calls onChangeText when typing", async () => {
    const user = userEvent.setup();
    const onChangeText = vi.fn();

    render(<BrutInput onChangeText={onChangeText} accessibilityLabel="Name" />);

    await user.type(screen.getByLabelText("Name"), "Ada");

    expect(onChangeText).toHaveBeenCalled();
  });
});
