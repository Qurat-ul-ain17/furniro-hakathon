import React from "react";
import Image from "next/image";

const Range = () => {
  return (
    <div className="w-full mt-14 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-8 px-4">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-[32px]">
            Browse The Range
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-[#666666] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <Image
              src="/assets/dining.png"
              alt="Dining"
              width={300}
              height={350}
              className="rounded-lg w-full h-auto object-cover"
            />
            <p className="text-center font-semibold text-xl sm:text-2xl text-myblack mt-4">
              Dining
            </p>
          </div>
          <div>
            <Image
              src="/assets/dining.png"
              alt="Living"
              width={300}
              height={350}
              className="rounded-lg w-full h-auto object-cover"
            />
            <p className="text-center font-semibold text-xl sm:text-2xl text-myblack mt-4">
              Living
            </p>
          </div>
          <div>
            <Image
              src="/assets/dining.png"
              alt="Dining"
              width={300}
              height={350}
              className="rounded-lg w-full h-auto object-cover"
            />
            <p className="text-center font-semibold text-xl sm:text-2xl text-myblack mt-4">
              Bedroom
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Range;
