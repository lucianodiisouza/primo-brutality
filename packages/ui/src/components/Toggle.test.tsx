import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Toggle } from "./Toggle";

describe("Toggle", () => {
  it("renders as a switch with checked state", () => {
    render(
      <Toggle value accessibilityLabel="Notifications" />,
    );

    expect(
      screen.getByRole("switch", { name: "Notifications" }),
    ).toBeTruthy();
  });

  it("calls onValueChange with the toggled value", async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();

    render(
      <Toggle
        value={false}
        onValueChange={onValueChange}
        accessibilityLabel="Notifications"
      />,
    );

    await user.click(screen.getByRole("switch", { name: "Notifications" }));

    expect(onValueChange).toHaveBeenCalledWith(true);
  });

  it("does not call onValueChange when disabled", async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();

    render(
      <Toggle
        value={false}
        disabled
        onValueChange={onValueChange}
        accessibilityLabel="Notifications"
      />,
    );

    await user.click(screen.getByRole("switch", { name: "Notifications" }));

    expect(onValueChange).not.toHaveBeenCalled();
  });
});
