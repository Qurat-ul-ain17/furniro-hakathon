import React from "react";
import Image from "next/image";

const Range = () => {
  return (
    <div className="h-screen w-full mt-14">
      <div className="w-[80%] h-screen flex flex-col mx-auto">
        <div className="flex flex-col w-[559px] mx-auto  text-center">
          <div>
            <h1 className="font-bold text-[32px]">Browse The Range</h1>
            <p className="text-xl text-[#666666]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between">
            <div>
              <Image src="/assets/dining.png"
              alt="Dining"
              width={300}
              height={350}
              />
              <p className="text-center font-semibold text-2xl text-[#333333]">Dining</p>
            </div>
            <div>
              <Image src="/assets/dining.png"
              alt="Dining"
              width={300}
              height={350}
              />
              <p className="text-center font-semibold text-2xl text-[#333333]">Living</p>
            </div>
            <div>
              <Image src="/assets/dining.png"
              alt="Dining"
              width={300}
              height={350}
              />
              <p className="text-center font-semibold text-2xl text-[#333333]">Bedroom</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Range;
