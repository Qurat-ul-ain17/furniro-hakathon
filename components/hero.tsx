import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      <div className="absolute inset-0">
        <Image
          src="/assets/wall-bg.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      <div className="absolute inset-0"></div>
      <div className="relative flex items-center justify-center md:justify-end h-full px-6 md:px-12">
        <div className="bg-mypink p-6 md:p-8 rounded-lg shadow-lg max-w-[90%] md:max-w-lg text-center md:text-left">
          <h3 className="text-sm md:text-base font-semibold text-myblack mb-2">
            New Arrival
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold text-mymusturd mb-4">
            Discover Our New Collection
          </h1>
          <p className="text-myblack text-sm md:text-lg mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Button className="w-full md:w-[222px] px-6 py-3 bg-mymusturd text-white">
            Buy Now
          </Button>
        </div>
      </div>
    </section>
  )
}

export default 



Hero