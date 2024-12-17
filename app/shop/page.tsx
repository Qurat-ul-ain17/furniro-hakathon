import React from "react";
import Image from "next/image";
import ShopProducts from "@/components/shop-products";


const Shop = () => {
  return (
    <>
      <section className="w-full min-h-full flex flex-col items-center">
        <div className="h-full md:h-[416px] w-full max-w-screen mx-auto flex flex-col items-center justify-center">
          <div className="relative w-full">
            <Image
              src="/assets/Rectangle 1.png"
              alt="backgrpound Image"
              layout="responsive"
              width={1440}
              height={316}
              className="w-full"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-2">
              <div className="font-medium text-3xl md:text-5xl">Shop</div>
              <div className="flex items-center space-x-2 text-sm md:text-base">
                <span>Home</span>
                <Image
                  src="/assets/Vector.png"
                  alt="Arrow"
                  width={10}
                  height={2}
                />
                <span>Shop</span>
              </div>
            </div>
          </div>
          {/* Filter and Sorting Section */}
          <div className="w-full bg-mypink">
            <div className="max-w-screen-lg mx-auto px-4 md:px-8 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between">
              {/* left Section */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Image
                    src={"/assets/Vector02.png"}
                    alt="filter"
                    width={19}
                    height={16}
                  />
                  <p className="text-base md:text-xl">Filter</p>
                </div>
                <div>
                  <Image
                    src={"/assets/Vector03.png"}
                    alt="Grid View"
                    width={28}
                    height={28}
                  />
                </div>
                <div>
                  <Image
                    src={"/assets/Vector04.png"}
                    alt="Image"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="hidden md:flex items-center pl-4 border-l border-mygray">
                  <p className="text-sm md:text-base">
                    Showing 1-16 of 32 results
                  </p>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex items-center space-x-5 mt-4 md:mt-0">
                <div className="flex items-center space-x-2">
                  <p className="text-sm md:text-xl">Show</p>
                  <span className="text-sm md:text-xl text-mygray bg-white px-3 py-2">
                    16
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-sm md:text-xl">Sort by</p>
                  <span className="text-sm md:text-xl bg-white flex items-center px-4 py-2 text-mygray">
                    Default
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Frame 79 */}
        <ShopProducts />
      </section>
    </>
  );
};

export default Shop;
