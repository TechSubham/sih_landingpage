"use client";
import React from "react";

const page = () => {
  return (
    <div>
      <div class="duration-300 text-white group cursor-pointer relative overflow-hidden bg-[#DCDFE4] w-52 h-20 dark:bg-[#22272B] rounded-3xl p-3 hover:w-72 hover:h-60 hover:bg-white hover:dark:bg-white hover:dark:text-black">
        <h3 class="text-xl text-center">Efficient Data Extraction</h3>
        <div class="absolute duration-300 mt-5 group-hover:left-12 mr-10">
          <p class="text-sm">
            {" "}
            Efficient data extraction employs methods like throttling and IP
            rotation to gather data quickly while minimizing risks of website
            blocking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
