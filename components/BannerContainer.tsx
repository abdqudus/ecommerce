import React from "react";
import { banners, navMenu } from "@/lib/data";
import Banner from "./Banner";
const BannerContainer = () => {
  return (
    <div className="m-auto max-w-full rounded-xl mt-4">
      <div className="md:flex hidden w-[100%] justify-between lg:w-[80%] m-auto items-center gap-4 mb-0">
        {navMenu.map((menu) => {
          if (menu.subCategory) {
            return (
              <div
                key={menu.title}
                className="relative group text-[.95rem] lg:px-4 lg:py-2 uppercase font-semibold cursor-pointer
                hover:text-btn-color transition 
                "
              >
                <h3>
                  {menu.title}
                  <span className="w-full h-[1.5px] scale-0 transition absolute left-0 bottom-0 bg-btn-color group-hover:scale-100"></span>
                </h3>
                <ul className="absolute text-black opacity-0 translate-y-7 transition rounded-lg shadow-slate-300 bg-white z-50 left-0 top-[110%] px-4 group-hover:translate-y-0 group-hover:opacity-100 w-[200px]">
                  {menu.subCategory.map((item) => (
                    <li
                      className="my-4 capitalize hover:text-btn-color transition"
                      key={item}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          }
          return (
            <div
              key={menu.title}
              className="relative overflow-x-hidden group text-[.95rem] lg:px-4 lg:py-2 uppercase font-bold cursor-pointer
              hover:text-btn-color transition 
              "
            >
              <span className="w-full h-[1.5px] translate-x-[-110%] transition absolute left-0 bottom-0 bg-btn-color group-hover:translate-x-0"></span>
              <h3>{menu.title}</h3>
            </div>
          );
        })}
      </div>
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
