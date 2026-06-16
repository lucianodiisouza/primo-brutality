import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import {
  BrutToastProvider,
  useToast,
} from "../providers/BrutToastProvider";

function ToastTrigger({ message }: { message: string }) {
  const { show } = useToast();
  return (
    <button type="button" onClick={() => show({ message })}>
      Show toast
    </button>
  );
}

describe("BrutToastProvider", () => {
  it("throws when useToast is used outside the provider", () => {
    expect(() => render(<ToastTrigger message="Oops" />)).toThrow(
      /BrutToastProvider/,
    );
  });

  it("shows a toast message when show is called", async () => {
    const user = userEvent.setup();

    render(
      <BrutToastProvider>
        <ToastTrigger message="Hello toast" />
      </BrutToastProvider>,
    );

    await user.click(screen.getByRole("button", { name: "Show toast" }));

    expect(screen.getByText("Hello toast")).toBeTruthy();
  });

  it("dismisses a toast when it is pressed", async () => {
    const user = userEvent.setup();

    render(
      <BrutToastProvider>
        <ToastTrigger message="Dismiss me" />
      </BrutToastProvider>,
    );

    await user.click(screen.getByRole("button", { name: "Show toast" }));
    await user.click(screen.getByRole("alert"));

    expect(screen.queryByText("Dismiss me")).toBeNull();
  });
});
