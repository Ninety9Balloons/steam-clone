import Carousel from "./Carousel";
import Button from "./Button";
import SectionHeading from "../Shared/SectionHeading";
import { useState } from "react";

export default function Under10() {
  const [amount, setAmount] = useState(1000);

  return (
    <div className="px-2">
      {/* Heading */}
      <SectionHeading>
        Under ${`${amount === 1000 ? "10" : "5"}`}
      </SectionHeading>

      {/* Carousel */}
      <div className="w-full overflow-x-auto">
        <Carousel amount={amount} />
      </div>

      {/* Buttons */}
      <div className="flex w-full justify-center gap-2 mt-3">
        <Button amount={1000} setAmount={setAmount}>
          Under $10
        </Button>
        <Button amount={500} setAmount={setAmount}>
          Under $5
        </Button>
      </div>
    </div>
  );
}
