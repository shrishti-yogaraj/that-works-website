import { createContext, useContext, useState, ReactNode } from "react";

interface ContactPopupContextType {
  isOpen: boolean;
  source: string;
  openPopup: (source?: string) => void;
  closePopup: () => void;
}

const ContactPopupContext = createContext<ContactPopupContextType | undefined>(undefined);

export const ContactPopupProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("general");

  const openPopup = (src = "general") => { setSource(src); setIsOpen(true); };
  const closePopup = () => setIsOpen(false);

  return (
    <ContactPopupContext.Provider value={{ isOpen, source, openPopup, closePopup }}>
      {children}
    </ContactPopupContext.Provider>
  );
};

export const useContactPopup = () => {
  const context = useContext(ContactPopupContext);
  if (!context) throw new Error("useContactPopup must be used within a ContactPopupProvider");
  return context;
};
