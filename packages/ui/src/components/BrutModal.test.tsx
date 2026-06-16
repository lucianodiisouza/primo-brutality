import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { BrutModal } from "./BrutModal";
import { BrutText } from "./BrutText";

describe("BrutModal", () => {
  it("does not render when visible is false", () => {
    render(
      <BrutModal visible={false} onClose={() => {}}>
        <BrutText>Hidden</BrutText>
      </BrutModal>,
    );

    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("renders title and children when visible", () => {
    render(
      <BrutModal visible onClose={() => {}} title="Confirm action">
        <BrutText>Are you sure?</BrutText>
      </BrutModal>,
    );

    expect(screen.getByRole("dialog")).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Confirm action" })).toBeTruthy();
    expect(screen.getByText("Are you sure?")).toBeTruthy();
  });

  it("calls onClose when backdrop is pressed", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(
      <BrutModal visible onClose={onClose} title="Confirm">
        <BrutText>Body</BrutText>
      </BrutModal>,
    );

    await user.click(screen.getByLabelText("Close modal"));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
