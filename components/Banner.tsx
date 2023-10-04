import React from "react";
import { Banners } from "@/lib/data";
import Image from "next/image";
import Button from "./Button";
const Banner = ({ img, par1, heading, startingPrice }: Banners) => {
  return (
    <div className="min-w-full relative snap-start rounded-xl border-4 aspect-square md:aspect-auto ">
      <div
        className="bg-white p-4 rounded-md 
        absolute opacity-70 left-4 bottom-5 max-w-[80%] max-h-[300px]
        smallest:bottom-15
        md:bottom-8 md:max-w-[300px] md:bg-transparent md:left-8
        lg:bottom-[5rem]
      "
      >
        <p className="text-[1.1rem] text-btn-color">{par1}</p>
        <h3 className="text-xl md:text-[2rem]  text-black sm:font-extrabold !leading-none sm:text-4xl font-semibold my-3">
          {heading}
        </h3>
        <p className="hidden sm:block mb-4">
          starting at $ <span>{startingPrice}</span>.00
        </p>
        <Button cta="buy now" />
      </div>
      <Image
        src={img}
        alt="product banner"
        className="fill object-cover min-h-full object-right "
      />
    </div>
  );
};

// <div className="min-w-full relative snap-start rounded-xl border-4 aspect-square md:aspect-auto ">
//   <div className="bg-white w-[85%] left-[5%] bottom-[3.5%] smallest:aspect-rectangle smallest:bottom-[10%] sm:top-[3.5%] md:bg-transparent sm:max-w-[450px] !opacity-60 p-4 rounded-lg absolute">
//     <p className="text-[1.4rem] font-[500] text-btn-color">{par1}</p>
//     <h3 className="text-xl text-black sm:font-extrabold !leading-none sm:text-4xl font-semibold my-3">
//       {heading}
//     </h3>
//     <p className="hidden sm:block mb-4">
//       starting at $ <span>{startingPrice}</span>.00
//     </p>
//     <Button cta="buy now" />
//   </div>
//   <Image
//     src={img}
//     alt="product banner"
//     className="fill object-cover min-h-full object-right "
//   />
// </div>
export default Banner;
{
  /* <div className="min-w-full  snap-start rounded-xl aspect-square md:aspect-auto ">
<div className="bg-white w-[85%] left-[5%] bottom-[3.5%] smallest:aspect-rectangle smallest:bottom-[10%] sm:top-[3.5%] md:bg-transparent sm:max-w-[450px] !opacity-60 p-4 rounded-lg absolute">
  <p className="text-[1.4rem] font-[500] text-btn-color">
    Trending Item
  </p>
  <h3 className="text-xl text-black sm:font-extrabold !leading-none sm:text-4xl font-semibold my-3">
    WOMEN'S LATEST FASHION SALE
  </h3>
  <p className="hidden sm:block mb-4">
    starting at $ <span>20</span>.00
  </p>
  <Button cta='buy now' />
</div>
<Image
  src={Banner1}
  alt="product banner"
  className="fill object-cover min-h-full object-right "
/>
</div> */
}
