import { createContext, useContext, useState, ReactNode } from "react";

export type PopupMode = "booking" | "guide";

interface ContactPopupContextType {
  isOpen: boolean;
  source: string;
  mode: PopupMode;
  openPopup: (source?: string, mode?: PopupMode) => void;
  closePopup: () => void;
}

const ContactPopupContext = createContext<ContactPopupContextType | undefined>(undefined);

export const ContactPopupProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("general");
  const [mode, setMode] = useState<PopupMode>("booking");

  const openPopup = (src = "general", m: PopupMode = "booking") => {
    setSource(src);
    setMode(m);
    setIsOpen(true);
  };
  const closePopup = () => setIsOpen(false);

  return (
    <ContactPopupContext.Provider value={{ isOpen, source, mode, openPopup, closePopup }}>
      {children}
    </ContactPopupContext.Provider>
  );
};

export const useContactPopup = () => {
  const context = useContext(ContactPopupContext);
  if (!context) throw new Error("useContactPopup must be used within a ContactPopupProvider");
  return context;
};
