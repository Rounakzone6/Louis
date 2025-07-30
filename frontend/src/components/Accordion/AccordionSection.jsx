import Accordion from "./Accordion";

const AccordionSection = ({ handleShow }) => {
  return (
    <section>
      <Accordion className="accordion">
        <Accordion.Item id="help" className="accordion-item">
          <Accordion.Title className="accordion-item-title">
            Help
          </Accordion.Title>
          <Accordion.Content className="accordion-item-content">
            <ul className="flex flex-col gap-2">
              <li>
                A Client Advisor is available at{" "}
                <span className="underline cursor-pointer">1800 103 9988</span>.
                You can also{" "}
                <span className="underline cursor-pointer">chat</span> or
                <span className="underline cursor-pointer">email us</span>.
              </li>
              <li>FAQ</li>
              <li>Product Care</li>
              <li>Stores</li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item id="services" className="accordion-item">
          <Accordion.Title className="accordion-item-title">
            Services
          </Accordion.Title>
          <Accordion.Content className="accordion-item-content">
            <ul className="flex flex-col gap-2">
              <li>Repairs</li>
              <li>Personalisation</li>
              <li>Art of Gifting</li>
              <li>Download our Apps</li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item id="about" className="accordion-item">
          <Accordion.Title className="accordion-item-title">
            About Louis Vuitton
          </Accordion.Title>
          <Accordion.Content className="accordion-item-content">
            <ul className="flex flex-col gap-2">
              <li>Fashion Shows</li>
              <li>Arts & Culture</li>
              <li>La Maison</li>
              <li>Sustainability</li>
              <li>Latest News</li>
              <li>Careers</li>
              <li>Foundation Louis Vuitton</li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item id="connect" className="accordion-item">
          <Accordion.Title className="accordion-item-title">
            Connect
          </Accordion.Title>
          <Accordion.Content className="accordion-item-content">
            <ul className="flex flex-col gap-2">
              <li>
                <span className="underline cursor-pointer">Sign up</span> for
                Louis Vuitton emails and receive the latest news from the
                Maison, including exclusive online pre-launches and new
                collections.
              </li>
              <li
                className="cursor-pointer hover:underline"
                onClick={handleShow}
              >
                Follow Us
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default AccordionSection;
