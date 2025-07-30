import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const AccordionTitle = ({ children, className }) => {
  const { openItemId, toggleItem } = useAccordionContext();
  const id = useAccordionItemContext();
  const isOpen = openItemId === id;

  return (
    <h3
      className={`${className} flex justify-between items-center cursor-pointer`}
      onClick={() => toggleItem(id)}
    >
      <p>{children}</p>
      <FontAwesomeIcon
        icon={isOpen ? faMinus : faPlus}
        className="transition-transform duration-300"
      />
    </h3>
  );
};

export default AccordionTitle;
