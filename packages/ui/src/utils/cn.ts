import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export type VariantProps<T extends Record<string, Record<string, string>>> = {
  [K in keyof T]?: keyof T[K];
};

export function variantClass<T extends Record<string, Record<string, string>>>(
  variants: T,
  selected: { [K in keyof T]?: keyof T[K] | undefined },
  defaults: { [K in keyof T]: keyof T[K] },
): string {
  return Object.entries(defaults)
    .map(([key, defaultValue]) => {
      const value = selected[key as keyof T] ?? defaultValue;
      return variants[key as keyof T][value as keyof T[keyof T]];
    })
    .join(" ");
}
