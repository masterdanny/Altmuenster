"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface InquiryPrefill {
  accommodation?: string;
  tripType?: string;
  message?: string;
}

interface InquiryContextValue {
  isOpen: boolean;
  prefill: InquiryPrefill;
  openInquiry: (prefill?: InquiryPrefill) => void;
  closeInquiry: () => void;
}

const InquiryContext = createContext<InquiryContextValue | null>(null);

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefill, setPrefill] = useState<InquiryPrefill>({});

  const openInquiry = useCallback((data?: InquiryPrefill) => {
    setPrefill(data ?? {});
    setIsOpen(true);
  }, []);

  const closeInquiry = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => setPrefill({}), 300);
  }, []);

  return (
    <InquiryContext.Provider
      value={{ isOpen, prefill, openInquiry, closeInquiry }}
    >
      {children}
    </InquiryContext.Provider>
  );
}

export function useInquiry() {
  const context = useContext(InquiryContext);
  if (!context) {
    throw new Error("useInquiry must be used within InquiryProvider");
  }
  return context;
}