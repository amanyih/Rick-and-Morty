import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
const Filter = () => {
  return (
    <span className=" text-white text-5xl align-middle h-16 mt-48 w-full">
      <Accordion className="border-4 border-black-600 w-4/5">
        <AccordionItem className="border-2 border-emerald-400">
          <AccordionItemHeading>
            <AccordionItemButton className="bg-blue-600 ">
              Status
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <form action="">
              <label htmlFor="active">
                <p>Active</p>
              </label>
              <label htmlFor="dead">
                <p>dead</p>
              </label>
              <label htmlFor="unknownS">
                <p>unknown</p>
              </label>
              <input type="radio" name="box1" id="active" />
              <input type="radio" name="box1" id="dead" />
              <input type="radio" name="box1" id="unknownS" />
            </form>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className="bg-blue-600">
              Gender
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <form action="">
              <label htmlFor="male">
                <p>Male</p>
              </label>
              <label htmlFor="female">
                <p>Female</p>
              </label>
              <label htmlFor="genderless">
                <p>Genderless</p>
              </label>
              <label htmlFor="unknownG">
                <p>unknown</p>
              </label>
              <input type="radio" name="box2" id="male" />
              <input type="radio" name="box2" id="female" />
              <input type="radio" name="box2" id="genderless" />
              <input type="radio" name="box2" id="unknownG" />
            </form>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className="bg-blue-600 ">
              Species
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <form action="">
              <label htmlFor="male">
                <p>Male</p>
              </label>
              <label htmlFor="female">
                <p>Female</p>
              </label>
              <label htmlFor="genderless">
                <p>Genderless</p>
              </label>
              <label htmlFor="unknownZ">
                <p>unknown</p>
              </label>
              <input type="radio" name="box2" id="male" />
              <input type="radio" name="box2" id="female" />
              <input type="radio" name="box2" id="genderless" />
              <input type="radio" name="box2" id="unknownZ" />
            </form>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </span>
  );
};

export default Filter;
