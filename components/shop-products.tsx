import React from 'react'
import Image from 'next/image'

const Items = [
  {
    name: "Sytherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    image: "/assets/sytherine.png",
    discount: "-30%",
  },
  {
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    image: "/assets/leviosa.png",
    cart:"Add to cart"
  },
  {
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    image: "/assets/lolito.png",
    discount: "-50%",
  },
  {
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    oldPrice: null,
    image: "/assets/respiro.png",
    label: "New",
  },
];

const ShopProducts = () => {
  return (
    <>
    <div className="py-16">
          <div className="container mx-auto text-center">
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {Items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md overflow-hidden group"
                >
                  {/* Product Image */}
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={300}
                      className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Cart */}
                    {item.cart && (
                      <div className="absolute bottom-5 right-3">
                      <button className="bg-white text-mymusturd text-sm px-10 py-2">
                        {item.cart}
                      </button>
                      <div className="flex space-x-4 mt-4">
                        <div className="flex space-x-1">
                          <Image
                          src={"/assets/share-logo.png"}
                          alt="share logo"
                          height={8}
                          width={8}
                          />
                          <span className="font-semibold text-white">Share</span>
                        </div>
                        <div className="flex space-x-1">
                        <Image
                          src={"/assets/compare-logo.png"}
                          alt="compare logo"
                          height={10}
                          width={10}
                          />
                          <span className="font-semibold text-white">Compare</span>
                        </div>
                        <div className="flex space-x-1">
                        <Image
                          src={"/assets/heart-logo.png"}
                          alt="heart logo"
                          height={8}
                          width={8}
                          />
                          <span className="font-semibold text-white">Like</span>
                        </div>
                        </div>
                      </div>
                    )}

                    {/* Discount */}
                    {item.discount && (
                      <span className="absolute top-2 right-2 bg-[#E97171] text-white text-sm py-1 rounded-full">
                        {item.discount}
                      </span>
                    )}
                      {/* Label */}
                    {item.label && (
                      <span className="absolute top-2 right-2 bg-[#2EC1AC] text-white text-sm py-2 px-1 rounded-full">
                        {item.label}
                      </span>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="p-4 bg-mylightgray">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-[#898989] mb-2">{item.description}</p>
                    <div className="text-lg font-bold text-gray-800">
                      {item.price}
                      {item.oldPrice && (
                        <span className="text-sm text-[#B0B0B0] line-through ml-2">
                          {item.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row */}
            <div className="hidden lg:grid grid-cols-4 gap-8 mt-8">
              {Items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md overflow-hidden group"
                >
                  {/* Product Image */}
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={300}
                      className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Discount */}
                    {item.discount && (
                      <span className="absolute top-2 right-2 bg-[#E97171] text-white text-sm py-1 rounded-full">
                        {item.discount}
                      </span>
                    )}
                      {/* Label */}
                    {item.label && (
                      <span className="absolute top-2 right-2 bg-[#2EC1AC] text-white text-sm py-2 px-1 rounded-full">
                        {item.label}
                      </span>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="p-4 bg-mylightgray">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-[#898989] mb-2">{item.description}</p>
                    <div className="text-lg font-bold text-gray-800">
                      {item.price}
                      {item.oldPrice && (
                        <span className="text-sm text-[#B0B0B0] line-through ml-2">
                          {item.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Third Row */}
            <div className="hidden lg:grid grid-cols-4 gap-8 mt-8">
              {Items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md overflow-hidden group"
                >
                  {/* Product Image */}
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={300}
                      className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Discount */}
                    {item.discount && (
                      <span className="absolute top-2 right-2 bg-[#E97171] text-white text-sm py-1 rounded-full">
                        {item.discount}
                      </span>
                    )}
                      {/* Label */}
                    {item.label && (
                      <span className="absolute top-2 right-2 bg-[#2EC1AC] text-white text-sm py-2 px-1 rounded-full">
                        {item.label}
                      </span>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="p-4 bg-mylightgray">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-[#898989] mb-2">{item.description}</p>
                    <div className="text-lg font-bold text-gray-800">
                      {item.price}
                      {item.oldPrice && (
                        <span className="text-sm text-[#B0B0B0] line-through ml-2">
                          {item.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Fourth Row */}
            <div className="hidden lg:grid grid-cols-4 gap-8 mt-8">
              {Items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md overflow-hidden group"
                >
                  {/* Product Image */}
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={300}
                      className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Discount */}
                    {item.discount && (
                      <span className="absolute top-2 right-2 bg-[#E97171] text-white text-sm py-1 rounded-full">
                        {item.discount}
                      </span>
                    )}
                      {/* Label */}
                    {item.label && (
                      <span className="absolute top-2 right-2 bg-[#2EC1AC] text-white text-sm py-2 px-1 rounded-full">
                        {item.label}
                      </span>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="p-4 bg-mylightgray">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-[#898989] mb-2">{item.description}</p>
                    <div className="text-lg font-bold text-gray-800">
                      {item.price}
                      {item.oldPrice && (
                        <span className="text-sm text-[#B0B0B0] line-through ml-2">
                          {item.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More Button */}
            <div className='flex items-center justify-center mt-16'>
                <div className='flex space-x-4'>
                    <div className='px-6 py-4 bg-mymusturd rounded-lg flex items-center justify-center'>1</div>
                    <div className='px-6 py-4 bg-mypink rounded-lg flex items-center justify-center'>2</div>
                    <div className='px-6 py-4 bg-mypink rounded-lg flex items-center justify-center'>3</div>
                    <div className='px-8 py-4 bg-mypink rounded-lg flex items-center justify-center '>Next</div>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ShopProducts;