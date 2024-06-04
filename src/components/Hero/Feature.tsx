import React from "react";
import FeatureCrumbs from "./FeatureCrumbs";
import Schedule from "../../../public/images/schedule.svg";
import Reservations from "../../../public/images/reservation.svg";
import Event from "../../../public/images/event.svg";
import Payment from "../../../public/images/payment.svg";
import Location from "../../../public/images/location.svg";
import Reminder from "../../../public/images/reminder.svg";

const Feature = () => {
  const features = [
    {
      key: 1,
      image: Schedule,
      title: "Easy Scheduling",
      text: "Schedule your events with just a few clicks, and set up recurring events to save time.",
    },
    {
      key: 2,
      image: Reservations,
      title: "Make Reservations",
      text: "Schedule your events with just a few clicks, and set up recurring events to save time.",
    },
    {
      key: 3,
      image: Event,
      title: "Event listings",
      text: "Schedule your events with just a few clicks, and set up recurring events to save time.",
    },
    {
      key: 4,
      image: Payment,
      title: "Payment Processing",
      text: "Schedule your events with just a few clicks, and set up recurring events to save time.",
    },
    {
      key: 5,
      image: Location,
      title: "Venue Management",
      text: "Schedule your events with just a few clicks, and set up recurring events to save time.",
    },
    {
      key: 6,
      image: Reminder,
      title: "Event Reminder",
      text: "Schedule your events with just a few clicks, and set up recurring events to save time.",
    },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-12">FEATURES</h1>
      <div className="grid grid-cols-1 items-center justify-items-center  md:grid-cols-2 xl:grid-cols-3 gap-8 mx-24">
        {features.map((feature) => (
          <FeatureCrumbs
            key={feature.key}
            image={feature.image}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Feature;
