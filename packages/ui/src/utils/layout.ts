/** Gap preset aligned with design token spacing scale. */
export type LayoutGap = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

/** Cross-axis alignment for flex layouts. */
export type LayoutAlign = "start" | "center" | "end" | "stretch";

/** Main-axis distribution for flex layouts. */
export type LayoutJustify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly";

export const gapClasses: Record<LayoutGap, string> = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
  "2xl": "gap-12",
};

export const alignClasses: Record<LayoutAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

export const justifyClasses: Record<LayoutJustify, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};
