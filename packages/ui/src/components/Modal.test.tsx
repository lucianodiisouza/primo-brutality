import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Modal } from "./Modal";
import { Text } from "./Text";

describe("Modal", () => {
  it("does not render when visible is false", () => {
    render(
      <Modal visible={false} onClose={() => {}}>
        <Text>Hidden</Text>
      </Modal>,
    );

    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("renders title and children when visible", () => {
    render(
      <Modal visible onClose={() => {}} title="Confirm action">
        <Text>Are you sure?</Text>
      </Modal>,
    );

    expect(screen.getByRole("dialog")).toBeTruthy();
    expect(
      screen.getByRole("heading", { name: "Confirm action" }),
    ).toBeTruthy();
    expect(screen.getByText("Are you sure?")).toBeTruthy();
  });

  it("calls onClose when backdrop is pressed", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(
      <Modal visible onClose={onClose} title="Confirm">
        <Text>Body</Text>
      </Modal>,
    );

    await user.click(screen.getByLabelText("Close modal"));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
