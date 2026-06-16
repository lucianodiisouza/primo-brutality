import {
  Modal,
  Pressable,
  View,
  type ModalProps,
} from "react-native";
import { BrutHeading } from "./BrutText";
import { cn } from "../utils/cn";

/** Width preset for {@link BrutModal} content panel. */
export type BrutModalSize = "sm" | "md" | "full";

const sizeClasses: Record<BrutModalSize, string> = {
  sm: "max-w-brutal-sm w-[90%]",
  md: "max-w-brutal-md w-[92%]",
  full: "w-[96%] max-h-[90%]",
};

/**
 * Props for {@link BrutModal}.
 *
 * Extends React Native `ModalProps` (except `children`) with title, footer,
 * and size presets. Tapping the backdrop calls `onClose`.
 */
export interface BrutModalProps extends Omit<ModalProps, "children"> {
  /** Whether the modal is shown. */
  visible: boolean;
  /** Called when the user dismisses via backdrop or hardware back. */
  onClose: () => void;
  /** Optional heading rendered at the top of the panel. */
  title?: string;
  /** Panel width preset. @defaultValue `"md"` */
  size?: BrutModalSize;
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
 * <BrutModal visible={open} onClose={() => setOpen(false)} title="Confirm">
 *   <BrutText>Are you sure?</BrutText>
 * </BrutModal>
 * ```
 */
export function BrutModal({
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
}: BrutModalProps) {
  return (
    <Modal
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
            <BrutHeading level={3} className="mb-4">
              {title}
            </BrutHeading>
          ) : null}

          <View>{children}</View>

          {footer ? <View className="mt-6">{footer}</View> : null}
        </Pressable>
      </Pressable>
    </Modal>
  );
}
