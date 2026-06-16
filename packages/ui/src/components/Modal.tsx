import {
  Modal as RNModal,
  Pressable,
  View,
  type ModalProps as RNModalProps,
} from "react-native";
import { Heading } from "./Text";
import { cn } from "../utils/cn";

/** Width preset for {@link Modal} content panel. */
export type ModalSize = "sm" | "md" | "full";

const sizeClasses: Record<ModalSize, string> = {
  sm: "max-w-brutal-sm w-[90%]",
  md: "max-w-brutal-md w-[92%]",
  full: "w-[96%] max-h-[90%]",
};

/**
 * Props for {@link Modal}.
 *
 * Extends React Native `ModalProps` (except `children`) with title, footer,
 * and size presets. Tapping the backdrop calls `onClose`.
 */
export interface ModalProps extends Omit<RNModalProps, "children"> {
  /** Whether the modal is shown. */
  visible: boolean;
  /** Called when the user dismisses via backdrop or hardware back. */
  onClose: () => void;
  /** Optional heading rendered at the top of the panel. */
  title?: string;
  /** Panel width preset. @defaultValue `"md"` */
  size?: ModalSize;
  /** Optional footer slot (e.g. action buttons). */
  footer?: React.ReactNode;
  /** Modal body content. */
  children: React.ReactNode;
  /** NativeWind classes on the inner panel. */
  contentClassName?: string;
}

/**
 * Centered overlay dialog with brutal panel styling.
 *
 * Backdrop press dismisses; inner panel stops propagation so body taps do not
 * close the modal.
 *
 * @example
 * ```tsx
 * <Modal visible={open} onClose={() => setOpen(false)} title="Confirm">
 *   <Text>Are you sure?</Text>
 * </Modal>
 * ```
 */
export function Modal({
  visible,
  onClose,
  title,
  size = "md",
  footer,
  children,
  contentClassName,
  animationType = "fade",
  transparent = true,
  ...props
}: ModalProps) {
  return (
    <RNModal
      visible={visible}
      transparent={transparent}
      animationType={animationType}
      onRequestClose={onClose}
      {...props}
    >
      <Pressable
        className="flex-1 items-center justify-center bg-black/50 p-4"
        onPress={onClose}
        accessibilityRole="button"
        accessibilityLabel="Close modal"
      >
        <Pressable
          className={cn(
            "rounded-brutal-lg border-brutal border-brutal-black bg-brutal-white p-6 shadow-brutal",
            sizeClasses[size],
            contentClassName,
          )}
          accessibilityRole="none"
          onPress={(event) => event.stopPropagation()}
        >
          {title ? (
            <Heading level={3} className="mb-4">
              {title}
            </Heading>
          ) : null}

          <View>{children}</View>

          {footer ? <View className="mt-6">{footer}</View> : null}
        </Pressable>
      </Pressable>
    </RNModal>
  );
}
