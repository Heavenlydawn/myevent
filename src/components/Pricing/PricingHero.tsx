import React from "react";
import PricingCrumbs from "./PricingCrumbs";
import Pricing1 from "../../../public/images/pricing1.svg";
import Pricing2 from "../../../public/images/pricing2.svg";
import Pricing3 from "../../../public/images/pricing3.svg";
import Pricing4 from "../../../public/images/pricing4.svg";
import RightArrow from "../../../public/images/rightarrowicon.svg";

const PricingHero = () => {
  const pricings = [
    {
      key: 1,
      eventDesc: "Halls",
      image: Pricing1,
      title: "Gold Star hall",
      detail: "Here is a description of this event category",
      status: "STATUS",
      statusInfo: "Available ",
      payment: "PAYMENT",
      paymentInfo: "30% Advance ",
      capacity: "CAPACITY ",
      capacityInfo: "300 seats ",
      buttonText: "Book Now",
      rightArrow: RightArrow,
    },
    {
      key: 2,
      eventDesc: "Decorations",
      image: Pricing2,
      title: "Gold Star Decorations",
      detail: "Here is a description of this event category",
      status: "STATUS",
      statusInfo: "Available ",
      payment: "PAYMENT",
      paymentInfo: "30% Advance ",
      capacity: "CAPACITY ",
      capacityInfo: "300 seats ",
      buttonText: "Book Now",
      rightArrow: RightArrow,
    },
    {
      key: 3,
      eventDesc: "Queen colby tables and chairs",
      image: Pricing3,
      title: "Gold Star hall",
      detail: "Here is a description of this event category",
      status: "STATUS",
      statusInfo: "Available ",
      payment: "PAYMENT",
      paymentInfo: "30% Advance ",
      capacity: "CAPACITY ",
      capacityInfo: "300 seats ",
      buttonText: "Book Now",
      rightArrow: RightArrow,
    },
    {
      key: 4,
      eventDesc: "Tents",
      image: Pricing4,
      title: "Averino Tent",
      detail: "Here is a description of this event category",
      status: "STATUS",
      statusInfo: "Available ",
      payment: "PAYMENT",
      paymentInfo: "30% Advance ",
      capacity: "CAPACITY ",
      capacityInfo: "300 seats ",
      buttonText: "Book Now",
      rightArrow: RightArrow,
    },
  ];
  return (
    <div>
        <h1 className="text-[#005a9b] text-5xl mb-24 mt-12 ml-24 font-bold">Pricing</h1>
      {pricings.map((pricing) => (
        <PricingCrumbs
          key={pricing.key}
          eventDesc={pricing.eventDesc}
          image={pricing.image}
          title={pricing.title}
          detail={pricing.detail}
          status={pricing.status}
          statusInfo={pricing.statusInfo}
          payment={pricing.payment}
          paymentInfo={pricing.paymentInfo}
          capacity={pricing.capacity}
          capacityInfo={pricing.capacityInfo}
          buttonText={pricing.buttonText}
          rightArrow={pricing.rightArrow}
        />
      ))}
    </div>
  );
};

export default PricingHero;
