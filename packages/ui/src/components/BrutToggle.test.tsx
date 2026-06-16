import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { BrutToggle } from "./BrutToggle";

describe("BrutToggle", () => {
  it("renders as a switch with checked state", () => {
    render(
      <BrutToggle value accessibilityLabel="Notifications" />,
    );

    expect(
      screen.getByRole("switch", { name: "Notifications" }),
    ).toBeTruthy();
  });

  it("calls onValueChange with the toggled value", async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();

    render(
      <BrutToggle
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
      <BrutToggle
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
