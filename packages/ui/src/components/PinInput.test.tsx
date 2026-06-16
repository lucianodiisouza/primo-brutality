import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState, type ComponentProps } from "react";
import { describe, expect, it, vi } from "vitest";
import { PinInput } from "./PinInput";

function ControlledPinInput(
  props: Omit<ComponentProps<typeof PinInput>, "value" | "onChange"> & {
    initial?: string;
  },
) {
  const { initial = "", ...rest } = props;
  const [value, setValue] = useState(initial);
  return <PinInput value={value} onChange={setValue} {...rest} />;
}

describe("PinInput", () => {
  it("strips non-digit characters", async () => {
    const user = userEvent.setup();
    const changes: string[] = [];

    function TestPin() {
      const [value, setValue] = useState("");
      return (
        <PinInput
          length={6}
          value={value}
          onChange={(next) => {
            setValue(next);
            changes.push(next);
          }}
        />
      );
    }

    render(<TestPin />);

    await user.type(screen.getByLabelText("PIN input"), "12ab34");

    expect(changes).toContain("1234");
  });

  it("calls onComplete when length is reached", async () => {
    const user = userEvent.setup();
    const onComplete = vi.fn();

    render(
      <ControlledPinInput length={4} onComplete={onComplete} initial="12" />,
    );

    await user.type(screen.getByLabelText("PIN input"), "34");

    expect(onComplete).toHaveBeenCalledWith("1234");
  });

  it("masks digits when secure", () => {
    render(<PinInput value="1234" onChange={() => {}} secure length={4} />);

    expect(screen.getAllByText("•")).toHaveLength(4);
    expect(screen.queryByText("1")).toBeNull();
  });

  it("shows error message", () => {
    render(
      <PinInput
        value="123"
        onChange={() => {}}
        error="Invalid code"
        length={6}
      />,
    );

    expect(screen.getByText("Invalid code")).toBeTruthy();
  });
});
