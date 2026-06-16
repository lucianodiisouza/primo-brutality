import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ScrollView } from "./ScrollView";

describe("ScrollView", () => {
  it("renders scrollable children", () => {
    render(
      <ScrollView>
        <span>Scroll item</span>
      </ScrollView>,
    );

    expect(screen.getByTestId("scroll-view")).toBeTruthy();
    expect(screen.getByText("Scroll item")).toBeTruthy();
  });
});
