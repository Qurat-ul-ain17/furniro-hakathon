import React from "react";
import Image from "next/image";
const Shop = () => {
  return (
    <section className="relative w-full h-screen">
      <div className="absolute flex justify-center items-center">
        <Image
          src="/assets/Rectangle 1.png"
          alt="backgrpound Image"
          width={1440}
          height={316}
        />
        <div className="absolute flex flex-col">
          <div className="text-5xl">Shop</div>
          <div className="flex space-x-2">
            <span className="font-medium text-base">Home</span>
            <Image
            src="/assets/Vector.png"
            alt="Arrow"
            width={10}
            height={2}
            />
            <span className="w-10 h-6 text-base">Shop</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
