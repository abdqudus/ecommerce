import React from "react";

const Button = ({ cta }: { cta: string }) => {
  return (
    <button className="py-2 px-4 text-[.85rem] rounded-md bg-btn-color text-white font-bold uppercase">
      {cta}
    </button>
  );
};

export default Button;
