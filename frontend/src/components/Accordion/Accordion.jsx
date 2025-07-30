import { createContext, useContext, useState } from "react";
import AccordionItem from "./AccordionItem";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";

const AccrodionContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AccrodionContext);
  if (!ctx) {
    throw new Error(
      "Accordion-related components must be wrapped by <Accrodian>"
    );
  }
  return ctx;
}

const Accordion = ({ children, className }) => {
  const [openItemId, setOpenItemId] = useState();
  function toggleItem(id) {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  }
  const contextValue = {
    openItemId,
    toggleItem,
  };
  return (
    <AccrodionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccrodionContext.Provider>
  );
};

export default Accordion;

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
