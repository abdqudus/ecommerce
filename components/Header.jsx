import React from "react";
import { UilHeartAlt } from "@iconscout/react-unicons";
import { UilSearch } from "@iconscout/react-unicons";
import { UilShoppingBag } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
const Header = () => {
  return (
    <header className=" flex text-center border-b border-b-gray-200 flex-col gap-4 pt-4 sm:justify-between sm:flex-row w-full p-4">
      <h3 className="text-4xl text-black font-bold">Anon</h3>
      <form className="basis-3/5 border shadow-gray-200 px-3 md:px-4 py-2 rounded-xl">
        <label className="w-full flex justify-between items-center ">
          <input
            type="search"
            placeholder="Enter product name..."
            className="outline-0  w-4/5 sm:w-auto"
          />
          <UilSearch size="20" color="#9ca3af" />
        </label>
      </form>
      <div className="md:flex hidden gap-5 justify-between items-center">
        <UilUser size="25" color="#a2a2a2" />

        <UilHeartAlt size="25" color="#a2a2a2" />
        <UilShoppingBag size="25" color="#a2a2a2" />
      </div>
    </header>
  );
};

export default Header;
