import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
interface PricingProps {
  key: number;
  eventDesc: string;
  image: any;
  title: string;
  detail: string;
  status: string;
  statusInfo: string;
  payment: string;
  paymentInfo: string;
  capacity: string;
  capacityInfo: string;
  buttonText: string;
  rightArrow: any;
}

const PricingCrumbs: React.FC<PricingProps> = ({
  eventDesc,
  image,
  title,
  detail,
  status,
  statusInfo,
  payment,
  paymentInfo,
  capacity,
  capacityInfo,
  buttonText,
  rightArrow,
}) => {
  return (
    <section className="text-[#005a9b] max-w-[1280px] mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-black">{eventDesc}</h1>
      <div className="flex items-center justify-between my-8">
        <div>
          <Image src={image} alt={title} width={500} height={500} />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg mb-8">{detail}</p>

          <div>
            <div className="flex items-center gap-8 mb-4">
              <h3>{status}</h3>
              <p>{statusInfo}</p>
            </div>

            <div className="flex items-center gap-8 mb-4">
              <h3>{payment}</h3>
              <p>{paymentInfo}</p>
            </div>

            <div className="flex items-center gap-8 mb-4">
              <h3>{capacity}</h3>
              <p>{capacityInfo}</p>
            </div>
          </div>

          <Button variant="myeventblue">{buttonText}</Button>
        </div>

        <div>
          <Link href="">
            {" "}
            <Image src={rightArrow} alt={rightArrow} />{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingCrumbs;
