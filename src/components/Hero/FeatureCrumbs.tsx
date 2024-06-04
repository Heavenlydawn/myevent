import React from "react";
import Image from "next/image";

interface FeatureProps {
  key: number;
  image: any;
  title: string;
  text: string;
}
const FeatureCrumbs: React.FC<FeatureProps> = ({ image, title, text }) => {
  return (
    <div className="w-80">
      <Image src={image} alt="title" />
      <h3 className="text-[#005A9B] font-bold text-xl my-4">{title}</h3>
      <p className="text-base font-bold leading-10">{text}</p>
    </div>
  );
};

export default FeatureCrumbs;
