import React from "react";

const Card = () => {
  return (
    <div>
      <div class="relative w-[190px] h-[254px] bg-[#07182E] flex items-center justify-center overflow-hidden rounded-[20px]">
        <h2 class="z-10 text-white text-2xl"></h2>

        <div class="before-content absolute w-[100px] h-[130%] animate-rotBGimg"></div>
        <div class="after-content absolute inset-[5px] bg-[#07182E] rounded-[15px]"></div>
      </div>
    </div>
  );
};

export default Card;
