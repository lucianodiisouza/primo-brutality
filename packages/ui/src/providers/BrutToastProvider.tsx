import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { View, Pressable } from "react-native";
import { BrutText } from "../components/BrutText";
import { cn } from "../utils/cn";

export type BrutToastVariant = "default" | "success" | "error" | "info";
export type BrutToastPosition = "top" | "bottom";

export interface BrutToastOptions {
  message: string;
  variant?: BrutToastVariant;
  duration?: number;
}

interface ToastItem extends BrutToastOptions {
  id: string;
}

interface BrutToastContextValue {
  show: (options: BrutToastOptions) => string;
  dismiss: (id: string) => void;
}

const BrutToastContext = createContext<BrutToastContextValue | null>(null);

const variantClasses: Record<BrutToastVariant, string> = {
  default: "bg-brutal-black",
  success: "bg-brutal-green",
  error: "bg-brutal-red",
  info: "bg-brutal-yellow",
};

const textColorMap: Record<BrutToastVariant, "inverse" | "default"> = {
  default: "inverse",
  success: "inverse",
  error: "inverse",
  info: "default",
};

function BrutToastItem({
  toast,
  onDismiss,
}: {
  toast: ToastItem;
  onDismiss: (id: string) => void;
}) {
  const variant = toast.variant ?? "default";

  return (
    <Pressable
      onPress={() => onDismiss(toast.id)}
      className={cn(
        "mb-2 min-w-[280px] max-w-[420px] rounded-brutal-sm border-brutal border-brutal-black px-4 py-3 shadow-brutal",
        variantClasses[variant],
      )}
      accessibilityRole="alert"
    >
      <BrutText weight="semibold" color={textColorMap[variant]}>
        {toast.message}
      </BrutText>
    </Pressable>
  );
}

export interface BrutToastProviderProps {
  children: ReactNode;
  position?: BrutToastPosition;
}

export function BrutToastProvider({
  children,
  position = "bottom",
}: BrutToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(
    new Map(),
  );

  const dismiss = useCallback((id: string) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
    const timer = timersRef.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timersRef.current.delete(id);
    }
  }, []);

  const show = useCallback(
    (options: BrutToastOptions) => {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      const toast: ToastItem = {
        id,
        message: options.message,
        variant: options.variant ?? "default",
        duration: options.duration ?? 3000,
      };

      setToasts((current) => [...current, toast]);

      const timer = setTimeout(() => dismiss(id), toast.duration);
      timersRef.current.set(id, timer);

      return id;
    },
    [dismiss],
  );

  useEffect(() => {
    const timers = timersRef.current;
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      timers.clear();
    };
  }, []);

  const value = useMemo(() => ({ show, dismiss }), [show, dismiss]);

  return (
    <BrutToastContext.Provider value={value}>
      {children}
      <View
        pointerEvents="box-none"
        className={cn(
          "absolute left-0 right-0 z-50 items-center px-4",
          position === "top" ? "top-4" : "bottom-4",
        )}
      >
        {toasts.map((toast) => (
          <BrutToastItem key={toast.id} toast={toast} onDismiss={dismiss} />
        ))}
      </View>
    </BrutToastContext.Provider>
  );
}

export function useToast(): BrutToastContextValue {
  const context = useContext(BrutToastContext);
  if (!context) {
    throw new Error("useToast must be used within a BrutToastProvider");
  }
  return context;
}
