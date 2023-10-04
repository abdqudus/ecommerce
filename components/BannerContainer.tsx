import React from "react";
import Image from "next/image";
import Banner1 from "../public/images/banner-1.jpg";
import Banner2 from "../public/images/banner-2.jpg";
import Banner3 from "../public/images/banner-3.jpg";
import Button from "./Button";
import { banners } from "@/lib/data";
import Banner from "./Banner";
const BannerContainer = () => {
  return (
    <div className="m-auto max-w-full rounded-xl mt-4">
      <div
        className="flex items-center rounded-xl m-auto overflow-y-hidden 
                      overflow-x-scroll snap-x snap-mandatory 
                      scrollbar-track-[hsl(0, 100%, 100%)] scrollbar-thumb-rounded-2xl scrollbar-thumb-slate-300 scrollbar-thin overscroll-contain
                      w-full aspect-square md:max-h-[350px]
                      
                      "
      >
        {banners.map((banner) => (
          <Banner
            key={banner.par1}
            img={banner.img}
            heading={banner.heading}
            par1={banner.par1}
            startingPrice={banner.startingPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerContainer;

// removed styles

// className="flex items-center rounded-xl m-auto overflow-y-hidden
// overflow-x-scroll snap-x snap-mandatory
// scrollbar-track-[hsl(0, 100%, 100%)] scrollbar-thumb-rounded-2xl scrollbar-thumb-slate-300 scrollbar-thin overscroll-contain
// w-full sm:max-h-[350px] aspect-square md:aspect-auto"
// >

// removed style
//  sm:max-h-[350px] aspect-square md:aspect-auto
