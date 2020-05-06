import React from "react";

import PersonalCard from "./PersonalCard";
import Delivery from "./DeliveryPage";
import Payment from "./Payment";
import Return from "./ReturnPage";

const HelpPage = () => {
  return (
    <div>
      <PersonalCard />
      <Payment />
      <Return />
      <Delivery />
    </div>
  );
};

export default HelpPage;
