import { StaticImageData } from "next/image";
import Banner1 from "../public/images/banner-1.jpg";
import Banner2 from "../public/images/banner-2.jpg";
import Banner3 from "../public/images/banner-3.jpg";
export type Banners = {
  img: StaticImageData;
  par1: string;
  heading: string;
  startingPrice: number;
};
export const banners: Banners[] = [
  {
    img: Banner1,
    par1: "Trending Item",
    heading: "WOMENS LATEST FASHION SALE",
    startingPrice: 20,
  },
  {
    img: Banner2,
    par1: "Trending Accessories",
    heading: "MODERN SUNGLASSES",
    startingPrice: 15,
  },
  {
    img: Banner3,
    par1: "Sale Offer",
    heading: "NEW FASHION SUMMER SALE",
    startingPrice: 30,
  },
];
