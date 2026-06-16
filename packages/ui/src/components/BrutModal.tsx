import {
  Modal,
  Pressable,
  View,
  type ModalProps,
} from "react-native";
import { BrutHeading } from "./BrutText";
import { cn } from "../utils/cn";

export type BrutModalSize = "sm" | "md" | "full";

const sizeClasses: Record<BrutModalSize, string> = {
  sm: "max-w-brutal-sm w-[90%]",
  md: "max-w-brutal-md w-[92%]",
  full: "w-[96%] max-h-[90%]",
};

export interface BrutModalProps extends Omit<ModalProps, "children"> {
  visible: boolean;
  onClose: () => void;
  title?: string;
  size?: BrutModalSize;
  footer?: React.ReactNode;
  children: React.ReactNode;
  contentClassName?: string;
}

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
